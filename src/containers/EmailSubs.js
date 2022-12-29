import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import Modal from "react-modal";
// import { cityAndStateList } from './JSONS/cityAndState';
// import memo from 
import axios from 'axios';
import { InputGroup } from 'react-bootstrap';
import { isItNull } from './functions';
import { captchaSecretKey, captchaSiteKey } from '../constants/constants';

const cityAndStateList = [
    {
        state_name: "Alaska",
        state_abbreviation: "AK"
    },
    {
        state_name: "Alabama",
        state_abbreviation: "AL"
    },
    {
        state_name: "Arkansas",
        state_abbreviation: "AR"
    },
    {
        state_name: "Arizona",
        state_abbreviation: "AZ"
    },
    {
        state_name: "California",
        state_abbreviation: "CA"
    },
    {
        state_name: "Colorado",
        state_abbreviation: "CO"
    },
    {
        state_name: "Connecticut",
        state_abbreviation: "CT"
    },
    {
        state_name: "District of Columbia",
        state_abbreviation: "DC"
    },
    {
        state_name: "Delaware",
        state_abbreviation: "DE"
    },
    {
        state_name: "Florida",
        state_abbreviation: "FL"
    },
    {
        state_name: "Georgia",
        state_abbreviation: "GA"
    },
    {
        state_name: "Hawaii",
        state_abbreviation: "HI"
    },
    {
        state_name: "Iowa",
        state_abbreviation: "IA"
    },
    {
        state_name: "Idaho",
        state_abbreviation: "ID"
    },
    {
        state_name: "Illinois",
        state_abbreviation: "IL"
    },
    {
        state_name: "Indiana",
        state_abbreviation: "IN"
    },
    {
        state_name: "Kansas",
        state_abbreviation: "KS"
    },
    {
        state_name: "Kentucky",
        state_abbreviation: "KY"
    },
    {
        state_name: "Louisiana",
        state_abbreviation: "LA"
    },
    {
        state_name: "Massachusetts",
        state_abbreviation: "MA"
    },
    {
        state_name: "Maryland",
        state_abbreviation: "MD"
    },
    {
        state_name: "Maine",
        state_abbreviation: "ME"
    },
    {
        state_name: "Michigan",
        state_abbreviation: "MI"
    },
    {
        state_name: "Minnesota",
        state_abbreviation: "MN"
    },
    {
        state_name: "Missouri",
        state_abbreviation: "MO"
    },
    {
        state_name: "Mississippi",
        state_abbreviation: "MS"
    },
    {
        state_name: "Montana",
        state_abbreviation: "MT"
    },
    {
        state_name: "North Carolina",
        state_abbreviation: "NC"
    },
    {
        state_name: "North Dakota",
        state_abbreviation: "ND"
    },
    {
        state_name: "Nebraska",
        state_abbreviation: "NE"
    },
    {
        state_name: "New Hampshire",
        state_abbreviation: "NH"
    },
    {
        state_name: "New Jersey",
        state_abbreviation: "NJ"
    },
    {
        state_name: "New Mexico",
        state_abbreviation: "NM"
    },
    {
        state_name: "Nevada",
        state_abbreviation: "NV"
    },
    {
        state_name: "New York",
        state_abbreviation: "NY"
    },
    {
        state_name: "Ohio",
        state_abbreviation: "OH"
    },
    {
        state_name: "Oklahoma",
        state_abbreviation: "OK"
    },
    {
        state_name: "Oregon",
        state_abbreviation: "OR"
    },
    {
        state_name: "Pennsylvania",
        state_abbreviation: "PA"
    },
    {
        state_name: "Puerto Rico",
        state_abbreviation: "PR"
    },
    {
        state_name: "Rhode Island",
        state_abbreviation: "RI"
    },
    {
        state_name: "South Carolina",
        state_abbreviation: "SC"
    },
    {
        state_name: "South Dakota",
        state_abbreviation: "SD"
    },
    {
        state_name: "Tennessee",
        state_abbreviation: "TN"
    },
    {
        state_name: "Texas",
        state_abbreviation: "TX"
    },
    {
        state_name: "Utah",
        state_abbreviation: "UT"
    },
    {
        state_name: "Virginia",
        state_abbreviation: "VA"
    },
    {
        state_name: "US Virgin Islands",
        state_abbreviation: "VI"
    },
    {
        state_name: "Vermont",
        state_abbreviation: "VT"
    },
    {
        state_name: "Washington",
        state_abbreviation: "WA"
    },
    {
        state_name: "Wisconsin",
        state_abbreviation: "WI"
    },
    {
        state_name: "West Virginia",
        state_abbreviation: "WV"
    },
    {
        state_name: "Wyoming",
        state_abbreviation: "WY"
    }
]

export const EmailSubs = () => {

    const [inputEmail, setinputEmail] = useState({ emailid: '', firstname: '', lastname: '', zip: '' });


    // console.log(inputEmail.emailid);
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const [isOpenThankYou, setIsOpenThankYou] = useState(false);
    function toggleModalThankYou() {
        setIsOpenThankYou(!isOpenThankYou);
    }


    const [isOpenAlreadySubs, setIsOpenAlreadySubs] = useState(false);
    function toggleModalAlreadySubs() {
        setIsOpenAlreadySubs(!isOpenAlreadySubs);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        checkIfMailExist();
    }





    const [captchaValue, setcaptchaValue] = useState();

    function captchaHandle(value) {
        // console.log('Captcha value:', value);
        setcaptchaValue(true);
    }






    const db = {
        "first_name": "John",
        "last_name": "Doe",
        "email_address": "john@gmail.com",
        "phone": 8878456512,
        "move_in_date": "27/01/2022",
        "my_question": "this is test msg",
        "id": 27123
    }


    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    // };

    // useEffect(() => {


    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "first_name": "John",
    //         "last_name": "Doe",
    //         "email_address": "john@gmail.com",
    //         "phone": 8878456512,
    //         "move_in_date": "27/01/2022",
    //         "my_question": "this is test msg",
    //         "id": 27123
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker", requestOptions)
    //         .then(response => {
    //             response.text()
    //             console.log('heee')
    //         })
    //         .then(result => {
    //             console.log(result)
    //             console.log('seee')
    //         })
    //         .catch(error => {
    //             console.log('error', error)
    //             console.log('iii')
    //         });











    //     // let url = "https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker";

    //     // var x = {
    //     //     "id_property": 27123,
    //     //     "first_name": "John",
    //     //     "last_name": "Doe",
    //     //     "email_address": "john@gmail.com",
    //     //     "phone": 8878456512,
    //     //     "move_date": "27/01/2022",
    //     //     "message": "this is test msg"
    //     // }


    //     // fetch(url, {
    //     //     method: "POST",
    //     //     body: JSON.stringify(x),
    //     //     headers: {
    //     //         'Accept': 'application/json'
    //     //     },
    //     // }).then(function (response) {
    //     //     return response.text();
    //     // }).then(function (text) {
    //     //     console.log(text);
    //     // }).catch(function (error) {
    //     //     console.log(error);
    //     // })











    //     // axios.post(url, x, { 'Accept': 'application/json' })
    //     //     .then(res => {
    //     //         //console.log(res);
    //     //         console.log('hhhhhhhhhhh');
    //     //     }).catch(error => {
    //     //         console.log('errooorr');
    //     //         console.log('error', error);
    //     //     });


    //     // const abcd = axios({'post','https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker', db,
    //     //     headers: {
    //     //         "HTTP":200,
    //     //         "Access-Control-Allow-Origin": "*",
    //     //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     //     }
    //     // }).then(res => {
    //     //     //console.log(res);
    //     //     console.log('hhhhhhhhhhh');
    //     // }).catch(error => {
    //     //     console.log('error', error);
    //     //     console.log('noooooooooo');
    //     // });

    // }, []);


    // var axios = require('axios');
    // var data = JSON.stringify({
    //     "first_name": "John",
    //     "last_name": "Doe",
    //     "email_address": "john@gmail.com",
    //     "phone": 8878456512,
    //     "move_in_date": "27/01/2022",
    //     "my_question": "this is test msg",
    //     "id": 27123
    // });

    // let config = {
    //     method: 'post',
    //     url: 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
















    // this is the working code 

    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");

    // var raw = JSON.stringify({
    //     "first_name": "Johnny",
    //     "last_name": "Doe",
    //     "email_address": "john@gmail.com",
    //     "phone": 8878456512,
    //     "move_in_date": "27/01/2022",
    //     "my_question": "this is test msg",
    //     "id": ['tx', 'ak', 'ca']
    // });

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker", requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    const [doesemailexist, setdoesemailexist] = useState();

    let checkIfMailExist = () => {
        let emailcheckAPIUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/mailexistsChecker?email=${inputEmail.emailid}`;
        const fetchData = async () => {
            const result = await axios.get(emailcheckAPIUrl)
                .then(res => {
                    // //console.log(res);
                    setdoesemailexist(res.data.result);
                    if (res.data.result == true) {
                        toggleModalAlreadySubs();
                    } else if (res.data.result == false) {
                        startCaptchaProcess();
                        toggleModal();
                    }
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }












    const [checkedStatecityAndStates, setCheckedStatecityAndStates] = useState(
        new Array(cityAndStateList.length).fill(false)
    );

    const [cityAndStatesarray, setcityAndStatesarray] = useState([]);

    // console.log(cityAndStatesarray);
    const handleOnChangecityAndStates = (position) => {
        const updatedCheckedStatecityAndStates = checkedStatecityAndStates.map((item, index) =>
            index == position ? !item : item
        );

        setCheckedStatecityAndStates(updatedCheckedStatecityAndStates);


        const arrcityAndStates = [];

        const totalPrice = updatedCheckedStatecityAndStates.reduce(
            (sum, currentState, index) => {
                if (currentState == true) {
                    arrcityAndStates.push(cityAndStateList[index].state_abbreviation);
                    return sum + 1;
                }
                return sum;
            }
            ,
            0
        );
        setcityAndStatesarray(arrcityAndStates);
    };


    const [selectMinOne, setselectMinOne] = useState();



    let handleAllDataSubmit = (e) => {
        e.preventDefault();
        // startCaptchaProcess();



        if (cityAndStatesarray.length == 0) {
            setselectMinOne(true);
            // console.log('empty state list');
        } else if (cityAndStatesarray.length > 0 && inputEmail.firstname !== '' && inputEmail.lastname !== '' && inputEmail.zip !== '' && captchaValue == true) {
            setselectMinOne(false);
            submitMainForm();
        } else {
            setselectMinOne(false);
            console.log('some exception by pass condtion');
        }
    }


    const startCaptchaProcess = () => {
        // if (!isItNull(inputEmail.firstname)) {
        // console.log("token startcaptchaprocess");
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
        script.addEventListener('load', loadCaptcha);
        document.body.appendChild(script);
        // }
    }



    const loadCaptcha = () => {
        // console.log("token Enter loadcaptcha");
        window.grecaptcha.ready(_ => {
            window.grecaptcha
                .execute(captchaSiteKey, { action: 'verifyCaptchaStart' })
                .then(token => {
                    // console.log(token, "token");

                    if (!isItNull(token)) {
                        var axios = require('axios');
                        var data = '';

                        var config = {
                            method: 'post',
                            url: `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/verifyCaptcha?secret=${captchaSecretKey}&response1=${token}`,
                            headers: {},
                            data: data
                        };

                        axios(config)
                            .then(function (response) {
                                if (response.data.success === true) {
                                    setcaptchaValue(true);
                                    // toggleModalAvailability();
                                    // toggleModalSecondList();
                                    // submitAllData();

                                    // toggleModalThankYou();
                                    // setformdata({ property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message });

                                    // submitAllData();
                                } else {
                                    setcaptchaValue(false);
                                }
                                // console.log(response.data.success, "token11");
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                })
        });
    }


    var axios = require('axios');
    const [formSubmitResponse, setformSubmitResponse] = useState();

    let submitMainForm = () => {
        var data = JSON.stringify({
            "fname": inputEmail.firstname,
            "lname": inputEmail.lastname,
            "email": inputEmail.emailid,
            "zip": inputEmail.zip,
            "state": cityAndStatesarray
        });

        var config = {
            method: 'post',
            url: 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/signupMail',
            headers: {
                "Accept": "application/json"
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(response);
                // console.log(JSON.stringify(response.data));
                setformSubmitResponse(response.data.result);
                toggleModal();
                toggleModalThankYou();
                setcaptchaValue(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // let submitMainForm = () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Accept", "application/json");
    //     // myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "fname": inputEmail.firstname,
    //         "lname": inputEmail.lastname,
    //         "email": inputEmail.emailid,
    //         "zip": inputEmail.zip,
    //         "state": cityAndStatesarray
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw
    //         // redirect: 'follow'
    //     };

    //     // console.log(raw);


    //     // const mailSenderUrlAPI = "https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker";
    //     const mailSenderUrlAPI = "https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/signupMail";
    //     fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/signupMail", requestOptions)
    //         .then(response => {

    //             console.log(response);
    //             response.json();
    //             // if (response.result == "Email Sent. Check your inbox") {
    //             //     console.log("Email Sent");
    //             //     setformSubmitResponse(response.result);
    //             // }
    //             // else if (response.result == "Something Went Wrong, Email Not Sent.") {
    //             //     console.log("Email Not Sent.");
    //             //     setformSubmitResponse(response.result);
    //             // } else {
    //             //     console.log('SOme error');
    //             // }
    //             // console.log(response.json());
    //         })
    //         .then(result => {
    //             console.log(result);
    //         })
    //         .catch(error => console.log('error', error));
    // }

    // console.log(inputEmail.firstname, inputEmail.lastname, inputEmail.zip);



    // useEffect(() => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Accept", "application/json");

    //     var raw = JSON.stringify({
    //         "first_name": "Johnny",
    //         "last_name": "Doe",
    //         "email_address": "john@gmail.com",
    //         "phone": 8878456512,
    //         "move_in_date": "27/01/2022",
    //         "my_question": "this is test msg",
    //         "id": ['tx', 'ak', 'ca']
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/valueChecker", requestOptions)
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }, []);


    return (
        <>
            <section className="secPad alertBoxx modalBoxx">
                <div className="container mar15Res">
                    <div className="alertBox alertBox2">
                        <div className="alertWidth">
                            <div className="media">
                                <img className="align-self-start mr-3" src={require('../assets/img/bell.svg').default} />
                                <div className="media-body">
                                    <form onSubmit={handleSubmit}>
                                        <h2 className="mt-0 mb-0 font-weight400">Sign up for waitlist alerts. <b>No spam</b></h2>
                                        <div className="d-flex align-items-center inputField posRel">
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="Email"
                                                    aria-label="Username" aria-describedby="basic-addon1" value={inputEmail.emailid} onChange={(e) => setinputEmail({ emailid: e.target.value })} required />
                                            </div>
                                            <button type="submit"
                                                className="getAlerted getAlertedGreen brdrRadius4">Get Alerted</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Modal isOpen={isOpen}
                onRequestClose={toggleModal} className="testmodal modalVertCentr">
                {/* <div className="modal-content"> */}
                <div className="modal-header pr-4 newlatter modaladjust">
                    <div>

                        <h3 className="font-weight700 fontSize24 ">Join for Wait List Alerts!
                        </h3>
                        <p className="font-weight400 fontSize16 mb-0">We only use your information to alert you of public housing wait list openings. You may unsubscribe at any time</p>
                    </div>


                    <button type="button" className="close ml-auto" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="brdrLinee"></div>
                <div className="modal-body p-0">
                    <form onSubmit={handleAllDataSubmit}>
                        <div className="modal-body rentalForm topzeropadding">

                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label>First Name</label>
                                    <input type="text" className="form-control emailinputclass" placeholder="First Name"
                                        aria-label="Username" aria-describedby="basic-addon1" value={inputEmail.firstname} onChange={(e) => setinputEmail({ ...inputEmail, firstname: e.target.value })} required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control emailinputclass" placeholder="Last Name"
                                        aria-label="Username" aria-describedby="basic-addon1" value={inputEmail.lastname} onChange={(e) => setinputEmail({ ...inputEmail, lastname: e.target.value })} required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Zip</label>
                                    <input type="text" className="form-control emailinputclass" placeholder="Zip"
                                        aria-label="Username" aria-describedby="basic-addon1" value={inputEmail.zip} onChange={(e) => setinputEmail({ ...inputEmail, zip: e.target.value })} required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control emailinputclass" placeholder="Email"
                                        aria-label="Username" aria-describedby="basic-addon1" value={inputEmail.emailid}
                                        // onChange={(e) => setinputEmail({ emailid: e.target.value })} 
                                        required />
                                </div>
                            </div>
                            <div className="brdrLinee2"></div>
                            <p className="mt-3 mb-3 font-weight400 fontSize14">Please select the state(s) you want to alert for.
                                <br />
                                {
                                    selectMinOne == true ?
                                        <span style={{ color: 'red' }}>You must select at least one
                                        </span>
                                        :
                                        null
                                }

                            </p>
                            <div className="row">
                                {
                                    cityAndStateList.map(({ state_name, price }, index) => {
                                        return (
                                            <>
                                                <div key={index} className="checkboxItem col-sm-3">
                                                    <label className="checkboxBlock emailinputlabel" htmlFor={`custom-checkbox-${index}`}>
                                                        <input
                                                            className='emailInputclass'
                                                            type="checkbox"
                                                            id={`custom-checkbox-${index}`}
                                                            name={state_name}
                                                            value={state_name}
                                                            checked={checkedStatecityAndStates[index]}
                                                            onChange={() => handleOnChangecityAndStates(index)}
                                                        />
                                                        <span className="checkmark waitListCheckMark"></span>
                                                        {state_name}
                                                    </label>
                                                </div>

                                            </>
                                        );
                                    })
                                }
                            </div>
                            <div className="brdrLinee2"></div>
                            <div className="d-flex align-items-center pt-4 buttonadj" >

                                {/* <div className="recaptcha_block">
                                    <ReCAPTCHA className="captcha"
                                        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                        onChange={captchaHandle} />
                                </div> */}
                                <div
                                    className="g-recaptcha"
                                    data-sitekey={'6Ld3X8ggAAAAAAKaJ5gDXpXHyJPQsE83lvQrI9Uh'}
                                    data-size="invisible"
                                ></div>

                                <button
                                    // onClick={() => {
                                    //     // toggleModal()
                                    //     // toggleModalThankYou()
                                    // }}
                                    className=" brdrRadius4 ml-auto asd" type='submit'>Get Notifications</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal isOpen={isOpenThankYou}
                onRequestClose={toggleModalThankYou} className="testmodala modalVertCentr">
                {/* <div className="modal-content"> */}
                <div className="modal-header newlatter">
                    <button type="button" className="close ml-auto newlatter" onClick={toggleModalThankYou} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {
                    formSubmitResponse == "Email Sent. Check your inbox" ?

                        <div className="modal-body">

                            <div className="modal-body rentalForm availBodyBlock text-center">

                                <img src={require('../assets/img/logo-modal.png').default} />

                                <h3 className="font-weight700 fontSize24 mt-5 ">You've subscribed to the wait list
                                </h3>
                                <p className="font-weight400 fontSize16 ">Thank you for joining Rental Housing Deals wait list alerts!</p>
                                <button onClick={() => {
                                    toggleModalThankYou();
                                }} className=" brdrRadius4 ml-auto asd">You're welcome!</button>
                            </div>

                        </div>

                        :
                        <div className="modal-body">

                            <div className="modal-body rentalForm availBodyBlock text-center">

                                <img src={require('../assets/img/logo-modal.png').default} />

                                <h3 className="font-weight700 fontSize24 mt-5 ">Something went wrong.
                                </h3>
                                <p className="font-weight400 fontSize16 ">Thank you for reaching Rental Housing Deals wait list alerts!</p>
                                <button onClick={() => {
                                    toggleModalThankYou();
                                }} className=" brdrRadius4 ml-auto asd">You're welcome!</button>
                            </div>

                        </div>
                }
            </Modal>





            <Modal isOpen={isOpenAlreadySubs}
                onRequestClose={toggleModalAlreadySubs} className="testmodala modalVertCentr">
                <div className="modal-header newlatter">
                    <button type="button" className="close ml-auto newlatter" onClick={toggleModalAlreadySubs} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="modal-body rentalForm availBodyBlock text-center">

                        <img src={require('../assets/img/logo-modal.png').default} />
                        <p className="mt-3">  <img src={require('../assets/img/success.png').default} /></p>
                        <h3 className="font-weight700 fontSize24 mt-0 ">You already subscribed to our newsletter
                        </h3>
                        <p className="font-weight400 fontSize16 ">Thanks for keeping in touch with us!</p>
                        <button onClick={() => {
                            toggleModalAlreadySubs();
                        }} className=" brdrRadius4 ml-auto asd">You're welcome!</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default EmailSubs