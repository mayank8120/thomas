import React, { useState } from 'react'
// import '../assets'

import axios from 'axios'
import Modal from "react-modal";
import ReCAPTCHA from 'react-google-recaptcha';
import { isItNull } from './functions';
import { captchaSecretKey, captchaSiteKey } from '../constants/constants';



const CheckAvailibilityForm = ({ submitButtonFull, propid, message, controlThankYouModal, controlAvailabilityModal, controlImageModal, isitdoubleModal }) => {

    // console.log(page);

    const [isOpen, setIsOpen] = useState(false);

    const [captchaValue, setcaptchaValue] = useState();

    function toggleModal() {
        setIsOpen(!isOpen);
    }



    // {
    //     "id":4,   
    //     "first_name": "rayen",
    //     "last_name": "james",
    //     "email_address": "james@gmail.com",
    //     "phone": 99779456123,
    //     "move_date": "01/12/2021",
    //     "message": "this is test msg"
    // }

    const [formdata, setformdata] = useState(
        {
            property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message
        }
    );

    const [isOpenThankYou, setIsOpenThankYou] = useState(false);
    let toggleModalThankYou = () => {


        if (isitdoubleModal == true) {
            controlThankYouModal();
            controlAvailabilityModal();
        } else if (isitdoubleModal === 'Image') {
            controlThankYouModal();
            controlImageModal();
        } else {
            controlThankYouModal();
        }

        // controlThankYouModal();
        // controlAvailabilityModal();
        // setIsOpenThankYou(!isOpenThankYou);

        // toggler();

        window.grecaptcha.reset();
    }


    // const submiturl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/check'
    const handleSubmit = (e) => {
        e.preventDefault();



        // console.log(formdata);


        startCaptchaProcess();

        // if (captchaValue == true) {
        //     submitAllData();

        //     toggleModalThankYou();
        //     setformdata({ property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message });
        // }
    }



    const startCaptchaProcess = () => {
        if (!isItNull(formdata.move_date)) {
            // console.log("token startcaptchaprocess");
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
            script.addEventListener('load', loadCaptcha);
            document.body.appendChild(script);
        }
    }



    const loadCaptcha = () => {
        // console.log("token Enter loadcaptcha");
        window.grecaptcha.ready(_ => {
            window.grecaptcha
                .execute(captchaSiteKey, { action: 'sdrefs' })
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
                                    submitAllData();

                                    toggleModalThankYou();
                                    setformdata({ property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message });

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


    // let formatDate = (date) => {
    //     return date.replace(/-/g, '/');
    // }

    // let submitAllData = () => {
    //     let data = JSON.stringify(
    //         {
    //             "property_id": propid,
    //             "first_name": formdata.first_name,
    //             "last_name": formdata.last_name,
    //             "email_address": formdata.email_address,
    //             "phone": formdata.phone,
    //             "message": formdata.message,
    //             "move_date": formatDate(formdata.move_date)
    //         }
    //     );

    //     let config = {
    //         method: 'post',
    //         url: 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailability',
    //         headers: {
    //             "Accept": "application/json"
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             if (response.data.result == "Email Sent. Check your inbox" && page == "listPage") {
    //                 setIsOpenSecondList(true);
    //                 setIsOpenAvailability(false);
    //             } else {
    //                 toggleModal();
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }




    // Send a POST request
    // axios({
    //     method: 'post',
    //     url: submiturl,
    //     data: formdata
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (!(propid == undefined)) {
    //             const result = await axios.post(propertyDetailUrl)
    //                 .then(res => {
    //                     // let data = res.data;
    //                     // var datah = data.data;
    //                     // console.log(res.data[0]);
    //                     // console.log("helo from other side");
    //                     // console.log(propertyDetailUrl);
    //                     setpropertyDetailData(...propertyDetailData, res.data)
    //                     // console.log(res.data);
    //                 }).catch(error => {
    //                     console.log('error', error);
    //                 });
    //         }

    //     };
    //     fetchData();
    // }, [propertyDetailUrl]);


    // let captchaHandle = (value) => {
    //     console.log(value);
    // }


    function submitAllData() {


        let formatDate = (date) => {

            let newdate = new Date(date);
            let day = newdate.getDate();
            let month = newdate.getMonth() + 1;
            let year = newdate.getFullYear();

            return `${day}/${month}/${year}`

            // return date.replace(/-/g, '/');
        }


        let data = JSON.stringify(
            {
                "property_id": propid,
                "first_name": formdata.first_name,
                "last_name": formdata.last_name,
                "email_address": formdata.email_address,
                "phone": formdata.phone,
                "message": formdata.message,
                "move_date": formatDate(formdata.move_date)
            }
        );

        // console.log(data);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/text");

        var raw = JSON.stringify({
            "property_id": "142",
            "first_name": "john",
            "last_name": "doe",
            "email_address": "vinaxeh500@zneep.com",
            "phone": "8874565211",
            "message": "test msg",
            "move_date": "27/02/2022"
        });

        var requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow',
        };

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailability", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    function captchaHandle(value) {
        // console.log('Captcha value:', value);
        setcaptchaValue(true);
    }

    function captchacheck() {
        if (captchaValue == undefined || captchaValue !== true) {
            setcaptchaValue(false)
        }
    }


    return (

        <>

            <form className="rentalForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group">
                            <label for="">First Name</label>
                            <input type="text" className="form-control"
                                placeholder="First Name"
                                value={formdata.first_name}
                                onChange={(e) => setformdata({ ...formdata, first_name: e.target.value })} required
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group">
                            <label for="">Last Name</label>
                            <input type="text" className="form-control"
                                placeholder="Last Name"
                                value={formdata.last_name}
                                onChange={(e) => setformdata({ ...formdata, last_name: e.target.value })} required
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label for="">Phone Number</label>
                            <input type="number" className="form-control"
                                placeholder="Phone Number"
                                value={formdata.phone}
                                onChange={(e) => setformdata({ ...formdata, phone: e.target.value })} required
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label for="">Email Address</label>
                            <input type="email" className="form-control"

                                placeholder="Email Address"
                                value={formdata.email_address}
                                onChange={(e) => setformdata({ ...formdata, email_address: e.target.value })} required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label for="">Move In Date</label>
                            <div className="posRel calnderIcon">
                                <input type="date" className="form-control"
                                    placeholder="Choose Move In Date"
                                    value={formdata.move_date}
                                    onChange={(e) => setformdata({ ...formdata, move_date: e.target.value })} required />
                                {/* <span><img src={require('../../assets/img/calander.png').default} /></span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label for="">Message</label>
                            <textarea className="form-control" rows="3"
                                placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"
                                value={formdata.message}
                                onChange={(e) => setformdata({ ...formdata, message: e.target.value })} required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/* <div className='d-flex align-items-center'> */}
                        <div className="form-group ">

                            {/* <div className="recaptcha_block">
                                <ReCAPTCHA
                                    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                    onChange={captchaHandle} />

                            </div> */}
                            {/* {
                                captchaValue == false
                                    ?
                                    <span style={{ color: 'red' }}>Please Verify Captcha</span>
                                    :
                                    null

                            } */}
                            <div
                                className="g-recaptcha"
                                data-sitekey={'6Ld3X8ggAAAAAAKaJ5gDXpXHyJPQsE83lvQrI9Uh'}
                                data-size="invisible"
                            ></div>
                            {captchaValue === false ? (
                                <span style={{ color: "red" }}>
                                    Our System Found a bot on your browser
                                </span>
                            ) : null}
                        </div>

                        {/* <div className='ml-auto'> */}
                        {/* <div className={`d-flex align-items-center availSec responsive15 flex-wrap p-0`}></div> */}
                        <div className={submitButtonFull == 'true' ? 'availSec responsive15 p-0 widthAndDisplayBlock' : 'd-flex align-items-center availSec responsive15 flex-wrap p-0'}>
                            <div className="Resnoauto">
                                <button
                                    // onClick={captchacheck}
                                    className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center" type="submit"><img src={require('../assets/img/mail.svg').default} />Check Availability</button>
                            </div>
                        </div>
                        {/* </div> */}

                        {/* </div> */}

                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    </div> */}
                </div>
            </form>


            <Modal isOpen={isOpen}
                onRequestClose={toggleModal} className="testmodala modalVertCentr mod">
                {/* <div className="modal-content"> */}


                <div className="modal-header newlatter text-center">

                    <img src={require('../assets/img/logo-modal.png').default} className="" />

                    <button type="button" className="close ml-auto newlatter" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {/* <div className="modal-header">
                    <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> */}


                {/* <div className="modal-body">
                    <div className="modal-body rentalForm availBodyBlock">
                        <div className="thankyouBlock text-center">
                            <img src={require('../assets/img/thankYou.png').default} />
                            <h1 className="font-weight700 colorBlue">Thank You</h1>
                            <p className="fontSize18 font-weight400 secondaryColor">
                                Thanks for submitting your inquiry!<br />
                                Your message has been sent</p>
                            <a href="" className="doneBtn brdrRadius4">Done</a>
                        </div>
                    </div>
                </div> */}

                <div className="modal-body">

                    <div className="modal-body rentalForm availBodyBlock text-center">


                        <h3 className="font-weight700 fontSize24">Thanks for submitting your inquiry!</h3>
                        <p className="font-weight400 fontSize16 ">
                            Your message has been sent</p>
                    </div>

                    <a className="recommendsection" href="https://secure.rspcdn.com/xprr/red/PID/921/SID/thankyou,detailspg" target="_blank" onClick={toggleModal}>

                        <h3>Recommended Step:</h3>
                        <p className="fontSize16 font-weight400 para">Landlords oftern favour applicants with high score. Do you know your credit score? Click below to see yours for free!
                        </p>

                        <button className="transition">SEE SCORES NOW</button>

                    </a>

                </div>


            </Modal>


            <Modal isOpen={isOpenThankYou}
                onRequestClose={toggleModalThankYou} className="testmodala modalVertCentr mod">
                <div className="modal-header newlatter text-center">

                    <img src={require('../assets/img/logo-modal.png').default} className="" />

                    <button type="button" className="close ml-auto newlatter" onClick={toggleModalThankYou} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">

                    <div className="modal-body rentalForm availBodyBlock text-center">


                        <h3 className="font-weight700 fontSize24">Thanks for submitting your inquiry!</h3>
                        <p className="font-weight400 fontSize16 ">
                            Your message has been sent</p>
                        {/* <button onClick={() => {
                                        toggleModalThankYou();
                                    }} className=" brdrRadius4 ml-auto asd">Done</button> */}
                    </div>

                    <a className="recommendsection" href="https://secure.rspcdn.com/xprr/red/PID/921/SID/thankyou,detailspg" target="_blank" onClick={toggleModalThankYou}>

                        <h3>Recommended Step:</h3>
                        <p className="fontSize16 font-weight400 para">Landlords oftern favour applicants with high score. Do you know your credit score? Click below to see yours for free!
                        </p>

                        <button className="transition">SEE SCORES NOW</button>

                    </a>

                </div>

            </Modal>


        </>



    )
}

export default CheckAvailibilityForm