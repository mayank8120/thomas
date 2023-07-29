import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Starratingstatic from '../../containers/Starratingstatic';
import { addDash, addOrRemoveHA, getAllHA, isItNull, toggleHeart, toggleHeartHA } from '../../containers/functions';
import { sendMUltipleRequestes } from '../../api/api';
import { captchaSecretKey, captchaSiteKey } from '../../constants/constants';


export const AgencyStateListItem = ({ data }) => {

    // console.log(data);   

    // console.log(data);
    let authdetail;
    let authimg;
    let authdate;

    if (data.HADetail == [] || data.HADetail == '' || data.HADetail == undefined || data.HADetail == null) {

    } else {
        authdetail = data.HADetail[0];
    }



    if (data.HAPhotoDetail == [] || data.HAPhotoDetail == '' || data.HAPhotoDetail == undefined || data.HAPhotoDetail == null) {

    } else {
        authimg = data.HAPhotoDetail[0];
    }



    if (data.closedate == [] || data.closedate == '' || data.closedate == undefined || data.closedate == null) {

    } else {
        authdate = data.closedate[0];
    }


    const [headertext, setheadertext] = useState();


    useEffect(() => {
        // if (data == undefined || data == [] || data == null || data == '') {
        if (authdetail.service_type != '' && authdetail.service_type !== null) {
            if (authdetail.service_type == 'Low-Rent') {
                setheadertext('Low-Rent');
            }
            else if (authdetail.service_type == 'Section 8') {
                setheadertext('Section 8 Voucher');
            } else {
                setheadertext('SRent');
            }

            if (authdetail.is_section_8_wating_list == 1 && authdate.close_date !== '0000-00-00') {
                setheadertext(authdate.close_date + ' ' + authdate.close_time);
            }
        }


        // }
    }, [])





    // if (authdetail.service_type != '' || authdetail.service_type !== null) {
    //     if (authdetail.service_type == 'Low-Rent') {
    //         setheadertext('Low-Rent');
    //     }
    //     else if (authdetail.service_type == 'Section 8') {
    //         setheadertext('Section 8 Voucher');
    //     } else {
    //         setheadertext('Section 8 Voucher<br/>Low-Rent');
    //     }

    //     if (authdetail.is_section_8_wating_list == 1 && authdate.close_date !== '0000-00-00') {
    //         setheadertext(authdate.close_date + ' ' + authdate.close_time);
    //     }
    // }


    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
        // console.log('hhhhhhhhhhh');
    }

    const [captchaValue, setcaptchaValue] = useState();
    const [formdata, setformdata] = useState({
        property_id: data.id,
        first_name: "",
        last_name: "",
        phone: "",
        email_address: "",
        move_date: "",
        message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
    });

    function captchaHandle(value) {
        // console.log('Captcha value:', value);
        setcaptchaValue(true);
    }

    function captchacheck() {
        if (captchaValue == undefined || captchaValue !== true) {
            setcaptchaValue(false);
        }
    }


    let handleSubmitform = (e) => {
        e.preventDefault();
        fetchAfterCheckPropList();
        startCaptchaProcess();


        // console.log(formdata);
        // if (captchaValue == true) {


        //     // setformdata({ property_id: data.id, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: `${formdata.message}` });
        // }
    };


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
                                    // console.log("Captcha Success");
                                    setcaptchaValue(true);
                                    submitAllData();

                                    // // toggleModalThankYou();
                                    // submitAllData();
                                    // window.grecaptcha.reset();
                                    // // submitAllData();
                                    // setformdata({
                                    //     first_name: "",
                                    //     last_name: "",
                                    //     phone: "",
                                    //     email_address: "",
                                    //     move_date: "",
                                    //     message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
                                    // });


                                    // toggleModalAvailability();
                                    // toggleModalSecondList();
                                    // submitAllData();

                                    // toggleModalThankYou();
                                    // setformdata({ property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message });

                                    // submitAllData();
                                } else {
                                    console.log("Captcha failed");
                                    setcaptchaValue(false);
                                }
                                // console.log(response.data.success, "token11");
                            })
                            .catch(function (error) {
                                console.log("Captcha error");
                                console.log(error);
                            });
                    }
                })
        });
    }

    function submitAllData() {


        let formatDate = (date) => {

            let newdate = new Date(date);
            let day = newdate.getDate();
            let month = newdate.getMonth() + 1;
            let year = newdate.getFullYear();

            return `${day}/${month}/${year}`
        }


        let data = JSON.stringify(
            {
                "property_id": formdata.property_id,
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

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/Checkavailabilityha", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
            })
            .catch(error => console.log('error', error));

    }


    const [aftercheckPropList, setaftercheckPropList] = useState([]);
    const fetchAfterCheckUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailabilityproplists?props_id=${data.id}`;


    let fetchAfterCheckPropList = () => {
        const result = axios
            .get(fetchAfterCheckUrl)
            .then((res) => {
                //console.log(res);
                if (res.error == true) {
                    toggleModalAvailability();
                    toggleModalThankYou();
                } else {
                    if (res.data.data == null || res.data.data == '' || res.data.data == undefined || res.data.data.length == 0) {
                        toggleModalAvailability();
                        toggleModalThankYou();
                    }
                    else {

                        setaftercheckPropList(res.data.data);
                        toggleModalAvailability();
                        toggleModalSecondList();
                    }
                }
            })
            .catch((error) => {
                console.log("error", error);
            });


    };

    const [isOpenSecondList, setIsOpenSecondList] = useState(false);
    function toggleModalSecondList() {
        let vari = isOpenSecondList;
        setIsOpenSecondList(!isOpenSecondList);
        if (vari === true) {
            setIsOpenThankYou(true);
        }
    }






    const [checkedStatePropList, setcheckedStatePropList] = useState(
        new Array(aftercheckPropList.length).fill(false)
    );

    useEffect(() => {
        setcheckedStatePropList(new Array(aftercheckPropList.length).fill(false));
    }, [aftercheckPropList]);

    const [propListArray, setpropListArray] = useState([]);

    // console.log(propListArray);

    const handleOnChangepets = (position) => {
        const updatedcheckedStatePropList = checkedStatePropList.map(
            (item, index) => (index == position ? !item : item)
        );

        setcheckedStatePropList(updatedcheckedStatePropList);

        const arrpets = [];

        const totalPrice = updatedcheckedStatePropList.reduce(
            (sum, currentState, index) => {
                if (currentState == true) {
                    arrpets.push(aftercheckPropList[index].id_property);
                    return sum + 1;
                }
                return sum;
            },
            0
        );
        // console.log(arrpets);
        setpropListArray(arrpets);
    };

    const [isOpenThankYou, setIsOpenThankYou] = useState(false);
    function toggleModalThankYou() {
        setIsOpenThankYou(!isOpenThankYou);

    }

    let formatDate = (date) => {

        let newdate = new Date(date);
        let day = newdate.getDate();
        let month = newdate.getMonth() + 1;
        let year = newdate.getFullYear();

        return `${day}/${month}/${year}`
    }


    let sendMultipleProps = () => {
        if (propListArray.length !== 0) {


            propListArray.map(
                (number) => {
                    let data = JSON.stringify(
                        {
                            "property_id": parseFloat(number),
                            "first_name": formdata.first_name,
                            "last_name": formdata.last_name,
                            "email_address": formdata.email_address,
                            "phone": formdata.phone,
                            "message": formdata.message,
                            "move_date": formatDate(formdata.move_date)
                        }
                    );
                    sendMUltipleRequestes(data);
                }
            )

            toggleModalSecondList();
            toggleModalThankYou();
        }
        setformdata({ property_id: data.id, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: `${formdata.message}` });
    }


    // function sendMUltipleRequestes(data) {

    //     console.log(data);

    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/text");

    //     // var raw = JSON.stringify({
    //     //     "property_id": "142",
    //     //     "first_name": "john",
    //     //     "last_name": "doe",
    //     //     "email_address": "vinaxeh500@zneep.com",
    //     //     "phone": "8874565211",
    //     //     "message": "test msg",
    //     //     "move_date": "27/02/2022"
    //     // });

    //     var requestOptions = {
    //         method: 'POST',
    //         body: data,
    //         redirect: 'follow',
    //     };

    //     fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailability", requestOptions)
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));

    // }








    const [colorCHangeheart, setcolorCHangeheart] = useState();

    function colorChange(item) {

        if (toggleHeartHA
            (item) == true) {
            setcolorCHangeheart(true);
        } else {
            setcolorCHangeheart(false);
        }

    }


    useEffect(() => {
        colorChange(data.id);
    }, [colorCHangeheart]);

    return (
        <>
            {
                data == undefined || data.length == 0 || data == null || data == ''
                    // || authimg == '' || authimg == undefined || authimg.path == '' ||
                    // authimg.path == undefined || authimg.filename == '' || authimg.filename == undefined
                    ?
                    <>No Record Found</>
                    :

                    authdetail.service_type != '' || authdetail.service_type !== null
                        ?
                        <>



                            {/* 
                            <div className="d-flex align-items-center ResponsiveFlexDiv">
                                <div className="agencyStateListLeft">
                                    <div className="agencyLeftHeadermedia">
                                        <div className="media">
                                            <a href="agencyDetail.html">
                                                <span className="CircleImage">
                                                    <img src="assets/img/agencyState1.png" />
                                                </span>
                                            </a>
                                            <div className="media-body">
                                                <div className="d-flex align-items-top">
                                                    <div>
                                                        <a href="agencyDetail.html">
                                                            <h5
                                                                className="mt-0 fontSize16 font-weight700 colorBlue">
                                                                Anajhheim Housing Authority</h5>
                                                        </a>
                                                        <a href="agencyDetail.html">
                                                            <p
                                                                className="mb-0 mt-0 font-weight400 fontSize14 secondaryColor">
                                                                2882 Tyler St El Monte, CA 91157</p>
                                                        </a>
                                                    </div>
                                                    <div className="likeBttn ml-auto">
                                                        <span className="heartIcon transition">
                                                            <i className="fas fa-heart"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p
                                            className="fontSize16 secondaryColor font-weight400 mb-0 detailPara">
                                            Anaheim Housing Authority (AHA) provides information about
                                            the Section 8 Housing Choice Voucher (HCV) Program and how
                                            to apply for the program. The... <a href="#"
                                                className="purpleText">More Info</a></p>
                                        <div className="bottomInfo d-flex align-items-center itemWebsite">
                                            <div className="callBtn purpleText font-weight700 fontSize14">
                                                <i className="fas fa-phone-alt"></i>(626) 448-2699
                                            </div>
                                            <p
                                                className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">
                                                25 Miles</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="agencyStateListRight">
                                    <div className="itemWebsite">
                                        <h5
                                            className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                            Section 8 Voucher Low-Rent</h5>
                                        <div className="text-center counterAgencyState">
                                            <h2 className="font-weight700 skyBlueColor mb-0">355</h2>
                                            <h6 className="mb-0 secondaryColor font-weight400">Subsidized
                                                Units</h6>
                                        </div>
                                    </div>
                                    <div className="itemMobile mrginTop16">
                                        <div className="d-flex align-items-center">
                                            <h5
                                                className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                Section 8 Voucher<br /> Low-Rent</h5>
                                            <div className="text-center counterAgencyState ml-auto">
                                                <h2 className="font-weight700 skyBlueColor mb-0">355</h2>
                                                <h6 className="mb-0 secondaryColor font-weight400">
                                                    Subsidized Units</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center itemWebsite">
                                        <a className="checkAvailBtnSmall">Check Availability</a>
                                    </div>
                                    <div className="bottomInfo d-flex align-items-center itemMobile">
                                        <div className="callBtn lineBtnMobile purpleText font-weight700">
                                            <i className="fas fa-phone-alt"></i>(626) 448-26999
                                        </div>
                                        <div className="availbity availbilityBtn fontSize16 font-weight700">
                                            Check Availability
                                        </div>
                                        <a href="#"
                                            className="ml-auto moreInfo brdrRadius4 fontSize16 transition itemWebsite">More
                                            Info</a>
                                    </div>
                                </div>
                            </div> */}


                            <div className="d-flex align-items-center listState ResponsiveFlexDiv">
                                <div className="agencyStateListLeft">
                                    <div className="agencyLeftHeadermedia">
                                        <div className="media">
                                            {
                                                data.HAPhotoDetail.length == 0 || data.HAPhotoDetail == null || data.HAPhotoDetail == ''
                                                    ?
                                                    <a href="javascript:;">
                                                        <span className="CircleImage">
                                                            <img src={`https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`} />
                                                        </span>
                                                    </a>
                                                    :
                                                    <a href="javascript:;">
                                                        <span className="CircleImage">
                                                            <img src={`https://managers.rentalhousingdeals.com/${authimg.path}/${authimg.filename}`} />
                                                        </span>
                                                    </a>
                                            }
                                            <div className="media-body">
                                                <div className="d-flex align-items-top">
                                                    <div>
                                                        <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`}>
                                                            <h2
                                                                className="mt-0 fontSize16 font-weight700 colorBlue">
                                                                {authdetail.name}</h2>
                                                        </a>
                                                        <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`}>
                                                            <p
                                                                className="mb-0 mt-0 font-weight400 fontSize14 secondaryColor">
                                                                {authdetail.address} {authdetail.city}, {authdetail.state} {authdetail.zip}</p>
                                                        </a>
                                                    </div>
                                                    <div className="likeBttn ml-auto">
                                                        <span className="heartIcon transition"

                                                            onClick={
                                                                () => {
                                                                    addOrRemoveHA(data.id, new Date());
                                                                    getAllHA();
                                                                    // console.log(toggleHeart(propdata.id_property));
                                                                    colorChange(data.id);
                                                                }
                                                            }

                                                        >

                                                            {
                                                                colorCHangeheart == true ?
                                                                    <>
                                                                        <i className="fas fa-heart redcolor"></i>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <i className="far fa-heart lightbluemodified"></i>
                                                                    </>
                                                            }

                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            authdetail.about_us == '' || authdetail.about_us == null || authdetail.about_us == undefined ?
                                                <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                    {authdetail.name} is a public housing agency that helps provide decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities.

                                                    <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`} className='purpleText'>
                                                        &nbsp;.... More Info
                                                    </a>
                                                </p>
                                                :
                                                <>
                                                    <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                        {authdetail.about_us.slice(0, 150)} ....
                                                        <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`} className='purpleText'>
                                                            &nbsp;More Info
                                                        </a>
                                                    </p>
                                                </>
                                        }
                                        <div className="bottomInfo d-flex align-items-center itemWebsite">
                                            <div className="callBtn purpleText font-weight700 fontSize14">
                                                <a href={`tel:${authdetail.phone}`} className="purpleText">
                                                    <i className="fas fa-phone-alt"></i>
                                                    {authdetail.phone}</a>
                                            </div>
                                            {/* <p
                                                className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">
                                                25 Miles</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="agencyStateListRight">
                                    <div className="itemWebsite">
                                        {
                                            authdetail.is_section_8_wating_list == 1 && authdate.close_date != '0000-00-00' ?
                                                <>
                                                    {
                                                        headertext == 'SRent' ?
                                                            <>
                                                                <h5 className=" text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                    Section 8 Voucher Low-Rent
                                                                </h5>
                                                            </>
                                                            :


                                                            <h5 className=" text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                {headertext}
                                                            </h5>
                                                    }
                                                    <h5
                                                        className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                        Section 8 Wait List</h5>
                                                    <h2 className="font-weight700 skyBlueColor mb-0">OPEN</h2>
                                                </>
                                                :
                                                <>
                                                    {
                                                        headertext == 'SRent' ?
                                                            <>
                                                                <h5 className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                    Section 8 Voucher
                                                                </h5>
                                                                <h5 className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                    Low-Rent
                                                                </h5>
                                                            </>
                                                            :
                                                            <h5 className="text-center fontSize14 colorBlue font-weight500 mb-0"> {headertext}  </h5>
                                                    }
                                                    <div className="counterAgencyState text-center">
                                                        {

                                                            authdetail.num_units !== 0 && authdetail.num_units !== '' ?
                                                                <>
                                                                    <h2 className="font-weight700 skyBlueColor mb-0">{authdetail.num_units} </h2>
                                                                    <h6 className="mb-0 secondaryColor font-weight400">Subsidized
                                                                        Units</h6>
                                                                </>
                                                                :

                                                                <>
                                                                    <h5 className="text-center fontSize1 colorBlue font-weight500 mb-0">
                                                                        CALL</h5>
                                                                    <h6 className="mb-0 secondaryColor font-weight400">Subsidized
                                                                        Units</h6>
                                                                </>
                                                        }
                                                    </div>

                                                </>
                                        }


                                        <div className="text-center counterAgencyState">


                                        </div>
                                    </div>
                                    <div className="itemMobile mrginTop16">
                                        <div className="d-flex align-items-center">
                                            <h5
                                                className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                Section 8 Voucher<br /> Low-Rent</h5>
                                            <div className="text-center counterAgencyState ml-auto">
                                                <h2 className="font-weight700 skyBlueColor mb-0">355</h2>
                                                <h6 className="mb-0 secondaryColor font-weight400">
                                                    Subsidized Units</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center itemWebsite">
                                        <span onClick={() => toggleModalAvailability()} className="checkAvailBtnSmall">Check Availability</span>
                                    </div>
                                    <div className="bottomInfo d-flex align-items-center itemMobile responsiveJustifyCenter">
                                        <div className="callBtn lineBtnMobile purpleText font-weight700">
                                            <a href={`tel:${authdetail.phone}`} className="purpleText"> <i className="fas fa-phone-alt"></i>{authdetail.phone}</a>
                                        </div>
                                        <div className="availbity fontSize16 font-weight700 checkAvailFont14">
                                            <span onClick={() => toggleModalAvailability()} className="checkAvailBtnSmall">Check Availability</span>
                                        </div>
                                        <button
                                            className="ml-auto moreInfo brdrRadius4 fontSize16 transition itemWebsite">More
                                            Info</button>
                                    </div>
                                </div>
                            </div>

                            <Modal
                                isOpen={isOpenAvailability}
                                onRequestClose={toggleModalAvailability}
                                className="propertysearch-modal bottomInfo">
                                <div className="modal-header     align-items-baseline ">
                                    <div className="">
                                        <h5 className="modal-title fontSize22 font-weight400 ml-22"
                                            id="exampleModalLongTitle">
                                            {authdetail.name}
                                        </h5>
                                        <h5 className="modal-title fontSize22 font-weight400 ml-22"
                                            id="exampleModalLongTitle">{authdetail.address} {authdetail.city}, {authdetail.state} {authdetail.zip}
                                        </h5>
                                    </div>

                                    <button
                                        type="button"
                                        className="close"
                                        onClick={toggleModalAvailability}
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body rentalForm availBodyBlock">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="modalLeft">
                                                <div className="imageSecleftModal posRel">
                                                    {/* <img
                                                        className="w-100"

                                                        src={require('../../assets/img/Affordable Housing Logo.jpg').default}
                                                    /> */}


                                                    {
                                                        data.HAPhotoDetail.length == 0 || data.HAPhotoDetail == null || data.HAPhotoDetail == ''
                                                            ?
                                                            <img className="w-100" src={`https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`} />

                                                            :
                                                            <img className="w-100" src={`https://managers.rentalhousingdeals.com/${authimg.path}/${authimg.filename}`} />

                                                    }

                                                </div>


                                                <p className="para fontSize14 font-weight400 secondaryColor">
                                                    {
                                                        authdetail.about_us == '' || authdetail.about_us == null || authdetail.about_us == undefined ?
                                                            <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                                {authdetail.name} is a public housing agency that helps provide decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities.
                                                            </p>
                                                            :
                                                            <>
                                                                <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                                    {authdetail.about_us}
                                                                </p>
                                                            </>
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="sideFormBlock">
                                                <div className="SectionBlock responsive15 availabilitySection">
                                                    <div className="d-flex align-items-center">
                                                        <h2 className="colorBlue font-weight700 fontSize18">
                                                            Check Availability
                                                        </h2>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <p className="purpleText font-weight700 fontSize18 d-flex align-items-center">
                                                            <img
                                                                src={require("../../assets/img/phoneColored.svg").default}
                                                            />
                                                            {authdetail.phone}
                                                        </p>
                                                    </div>

                                                    <>
                                                        <form className="rentalForm" onSubmit={handleSubmitform}>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label for="">First Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="First Name"
                                                                            value={formdata.first_name}
                                                                            onChange={(e) =>
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    first_name: e.target.value,
                                                                                })
                                                                            }
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                    <div className="form-group">
                                                                        <label for="">Last Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Last Name"
                                                                            value={formdata.last_name}
                                                                            onChange={(e) =>
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    last_name: e.target.value,
                                                                                })
                                                                            }
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label for="">Phone Number</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            placeholder="Phone Number"
                                                                            value={formdata.phone}
                                                                            onChange={(e) =>
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    phone: e.target.value,
                                                                                })
                                                                            }
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label for="">Email Address</label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            placeholder="Email Address"
                                                                            value={formdata.email_address}
                                                                            onChange={(e) =>
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    email_address: e.target.value,
                                                                                })
                                                                            }
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label for="">Move In Date</label>
                                                                        <div className="posRel calnderIcon">
                                                                            <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                placeholder="Choose Move In Date"
                                                                                value={formdata.move_date}
                                                                                onChange={(e) =>
                                                                                    setformdata({
                                                                                        ...formdata,
                                                                                        move_date: e.target.value,
                                                                                    })
                                                                                }
                                                                                required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group">
                                                                        <label for="">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            rows="3"
                                                                            placeholder="Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks."
                                                                            value={formdata.message}
                                                                            onChange={(e) =>
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    message: e.target.value,
                                                                                })
                                                                            }
                                                                            required
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group">
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
                                                                        {/* <div className="recaptcha_block">
                                                                            <ReCAPTCHA
                                                                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                                                onChange={captchaHandle}
                                                                            />
                                                                        </div>
                                                                        {captchaValue == false ? (
                                                                            <span style={{ color: "red" }}>
                                                                                Please Verify Captcha
                                                                            </span>
                                                                        ) : null} */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                        <div className="Resnoauto">
                                                                            <button
                                                                                // onClick={captchacheck}
                                                                                className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center"
                                                                                type="submit"
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        require("../../assets/img/mail.svg").default
                                                                                    }
                                                                                />
                                                                                Check Availability
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Modal>

                            <Modal
                                isOpen={isOpenSecondList}
                                onRequestClose={toggleModalSecondList}
                                className="check-form checkFormTable">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title w-100 text-left fontSize16  font-weight400"
                                        id="exampleModalLabel"
                                    >
                                        Check Availability at These Popular Apartments Below
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={toggleModalSecondList}
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body responsiveApartment">
                                    {propListArray.length == 0 ? 'Please Select At least one Property' : null}
                                    <div className="rentalForm availBodyBlock">
                                        {aftercheckPropList.map(
                                            (
                                                {
                                                    id_property,
                                                    property_details,
                                                    property_photo,
                                                    property_rating,
                                                    property_type,
                                                },
                                                index
                                            ) => {
                                                return (
                                                    <>
                                                        {/* {id_property} */}

                                                        <div className="margin-top-0 mb-2">
                                                            <div className="blog-post align-items-center">
                                                                <div className="utf-blog-post-thumbnail">
                                                                    <div className="utf-blog-post-thumbnail-inner">
                                                                        {/* <Link to={linkurl} className="d-flex w-100  abcd"> */}
                                                                        <div className="listing-left">
                                                                            <div className="bg-image">
                                                                                {property_photo == null ||
                                                                                    property_photo == "" ||
                                                                                    property_photo.length == 0 ? (
                                                                                    // Affordable Housing Logo

                                                                                    //     spurl = "https://www.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg"
                                                                                    <img
                                                                                        className="img-fluid"
                                                                                        src={
                                                                                            require("../../assets/img/Affordable Housing Logo.jpg")
                                                                                                .default
                                                                                        }
                                                                                    />
                                                                                ) : (
                                                                                    // spurl = "https://www.rentalhousingdeals.com/" + propphoto.photo
                                                                                    <img
                                                                                        src={`https://managers.rentalhousingdeals.com/${property_photo[0].photo}`}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                            {/* <div className="postin">
                                {" "}
                                <a href="savedProperties">
                                  {" "}
                                  <span>
                                    <i className="far fa-heart"></i>
                                  </span>{" "}
                                </a>
                              </div> */}
                                                                        </div>
                                                                        {/* </Link> */}
                                                                    </div>
                                                                </div>

                                                                <div className="utf-blog-post-content">
                                                                    <div className="d-flex align-items-baseline  propertyTitle">
                                                                        <div className="">
                                                                            <span className="w-100">
                                                                                {" "}
                                                                                <h5 className="colorBlue font-weight700 mb-0">
                                                                                    {property_details[0].property_title}
                                                                                </h5>
                                                                            </span>
                                                                            <p className="mb-0 secondaryColor fontSize14">
                                                                                <span className="d-flex w-100 secondaryColor ">
                                                                                    {" "}
                                                                                    {property_details[0].property_address} |{" "}
                                                                                    {property_details[0].property_city},{" "}
                                                                                    {property_details[0].property_state},{" "}
                                                                                    {property_details[0].property_zip}
                                                                                </span>
                                                                            </p>
                                                                        </div>

                                                                        {property_rating == null ||
                                                                            property_rating == undefined ||
                                                                            property_rating ==
                                                                            "" ? null : property_rating.vote_avg ==
                                                                                null ? null : (
                                                                            <Starratingstatic
                                                                                rating={property_rating.vote_avg}
                                                                            />
                                                                        )}
                                                                    </div>






                                                                    {/* {
                                                        propdetail == null || propdetail == '' ?
                                                            null
                                                            :
                                                            propdetail.subsidized == "Yes" &&
                                                                propdetail.section8 == "Yes" ?
                                                                (
                                                                    <div className="itemWebsite priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize22 font-weight400 mb-0">
                                                                                {
                                                                                    thirdval !== '' && thirdval !== 'MOVE-IN SPECIALS' && thirdval !== 'SPECIALS' && typeof (thirdval) !== undefined

                                                                                        ?
                                                                                        thirdval
                                                                                        :
                                                                                        (
                                                                                            thirdval == 'MOVE-IN SPECIALS' || thirdval == 'SPECIALS'

                                                                                                ?
                                                                                                thirdval
                                                                                                :
                                                                                                null
                                                                                        )
                                                                                }

                                                                            </h4>
                                                                            <span className="font-weight700">
                                                                                <img src={require("../../assets/img/priceTagg.svg").default} />
                                                                                Good Deal
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )
                                                                :
                                                                (
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize22 font-weight400 mt-0">


                                                                            {
                                                                                thirdval !== '' && thirdval !== 'MOVE-IN SPECIALS' && thirdval !== 'SPECIALS' && typeof (thirdval) !== undefined

                                                                                    ?
                                                                                    thirdval
                                                                                    :
                                                                                    (
                                                                                        thirdval == 'MOVE-IN SPECIALS' || thirdval == 'SPECIALS'

                                                                                            ?
                                                                                            thirdval
                                                                                            :
                                                                                            null
                                                                                    )
                                                                            }
                                                                        </h4>
                                                                    </div>
                                                                )
                                                    } */}

                                                                    <div className="priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="black-color fontSize22 font-weight800 mb-0">
                                                                                {(property_details[0].min_rent == 0 && property_details[0].max_rent == 0) || (property_details[0].max_rent == '' && property_details[0].min_rent == '')
                                                                                    ?
                                                                                    null :

                                                                                    (property_details[0].min_rent == 0 || property_details[0].max_rent == 0) || (property_details[0].max_rent == '' || property_details[0].min_rent == '')
                                                                                        ?

                                                                                        `$${property_details[0].max_rent == 0 ? '' : property_details[0].max_rent}${property_details[0].min_rent == 0 ? '' : property_details[0].min_rent}`
                                                                                        :
                                                                                        `$${property_details[0].min_rent}-$${property_details[0].max_rent}`
                                                                                }
                                                                            </h4>
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex align-items-center listingBlockLine ">
                                                                        {property_details == null ||
                                                                            property_details == "" ||
                                                                            property_details.length ==
                                                                            0 ? null : (property_details[0].max_bed == null ||
                                                                                property_details[0].max_bed == "" ||
                                                                                property_details[0].min_bed == "" ||
                                                                                property_details[0].min_bed == null) &&
                                                                                (property_details[0].min_bath == null ||
                                                                                    property_details[0].min_bath == "" ||
                                                                                    property_details[0].max_bath == "" ||
                                                                                    property_details[0].max_bath == null) ? null : (
                                                                            <ul className="noMarginPad listStyleNone mr-18">
                                                                                {property_details[0].max_bed == null ||
                                                                                    (property_details[0].max_bed == "" &&
                                                                                        property_details[0].min_bed == "") ||
                                                                                    property_details[0].min_bed ==
                                                                                    null ? null : property_details[0].min_bed ==
                                                                                        "" ||
                                                                                        property_details[0].min_bed == null ? (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/beds.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].max_bed}
                                                                                        </span>{" "}
                                                                                        Beds
                                                                                    </li>
                                                                                ) : property_details[0].min_bed ==
                                                                                    property_details[0].max_bed ? (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/beds.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].min_bed}
                                                                                        </span>{" "}
                                                                                        Beds
                                                                                    </li>
                                                                                ) : (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/beds.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].min_bed}-
                                                                                            {property_details[0].max_bed}
                                                                                        </span>{" "}
                                                                                        Beds
                                                                                    </li>
                                                                                )}

                                                                                {property_details[0].max_bath == null ||
                                                                                    (property_details[0].max_bath == "" &&
                                                                                        property_details[0].min_bath == "") ||
                                                                                    property_details[0].min_bath ==
                                                                                    null ? null : property_details[0].min_bath ==
                                                                                        "" ||
                                                                                        property_details[0].min_bath == null ? (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/shower.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].max_bath}
                                                                                        </span>{" "}
                                                                                        Baths
                                                                                    </li>
                                                                                ) : property_details[0].min_bath ==
                                                                                    property_details[0].max_bath ? (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/shower.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].min_bath}
                                                                                        </span>{" "}
                                                                                        Baths
                                                                                    </li>
                                                                                ) : (
                                                                                    <li className="d-flex align-items-center">
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/shower.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                        <span className="colorBlue">
                                                                                            {property_details[0].min_bath}-
                                                                                            {property_details[0].max_bath}
                                                                                        </span>{" "}
                                                                                        Baths
                                                                                    </li>
                                                                                )}
                                                                            </ul>
                                                                        )}

                                                                        {property_details[0] == null ||
                                                                            property_details[0] == "" ? null : (
                                                                            <ul className="listStyleNone listIcon pl-0 mb-0">
                                                                                {property_details[0].pet_allowed == null ||
                                                                                    property_details[0].pet_allowed == "" ||
                                                                                    property_details[0].pet_allowed.toLowerCase() ==
                                                                                    "no" ? null : (
                                                                                    <li>
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/detailImage1.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                    </li>
                                                                                )}

                                                                                {property_details[0].handicap == null ||
                                                                                    property_details[0].handicap == "" ||
                                                                                    property_details[0].handicap.toLowerCase() ==
                                                                                    "no" ? null : (
                                                                                    <li>
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/detailImage2.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                    </li>
                                                                                )}

                                                                                {property_details[0].section8 == null ||
                                                                                    property_details[0].section8 == "" ||
                                                                                    property_details[0].section8.toLowerCase() ==
                                                                                    "no" ? null : (
                                                                                    <li>
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/detailImage4.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                    </li>
                                                                                )}

                                                                                {property_details[0].seniorprop.toLowerCase() ==
                                                                                    "yes" &&
                                                                                    (property_details[0].seniorpropval.toLowerCase() ==
                                                                                        "62" ||
                                                                                        property_details[0].seniorpropval == 62) ? (
                                                                                    <li>
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/detailImage3.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                    </li>
                                                                                ) : null}
                                                                                {property_details[0].seniorprop.toLowerCase() ==
                                                                                    "yes" &&
                                                                                    (property_details[0].seniorpropval.toLowerCase() ==
                                                                                        "55" ||
                                                                                        property_details[0].seniorpropval == 55 ||
                                                                                        property_details[0].seniorpropval == "" ||
                                                                                        property_details[0].seniorpropval == null) ? (
                                                                                    <li>
                                                                                        <img
                                                                                            src={
                                                                                                require("../../assets/img/detailImage5.svg")
                                                                                                    .default
                                                                                            }
                                                                                        />
                                                                                    </li>
                                                                                ) : null}
                                                                            </ul>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="checkboxItem widthRadio">
                                                                    <p className="fontSize14 font-weight700 text-center requestTag"> Request for more info</p>
                                                                    <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-prop-${index}`}>

                                                                        <input
                                                                            type="checkbox"
                                                                            id={`custom-checkbox-prop-${index}`}
                                                                            name={id_property}
                                                                            value={id_property}
                                                                            checked={checkedStatePropList[index]}
                                                                            onChange={() => handleOnChangepets(index)}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* multiple check box  */}
                                                    </>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="bg-white responsiveApartmentBottom">
                                    <div className="bottomFooter d-flex align-items-center">
                                        <h3>{propListArray.length} properties Selected</h3>
                                        <div className="ml-auto">
                                            <span onClick={sendMultipleProps} href="#" className="checkBtnModall" data-toggle="modal" data-target="#exampleModal3" data-dismiss="modal" aria-label="Close">Check Availability</span>
                                        </div>
                                    </div>
                                </div>

                            </Modal>


                            <Modal isOpen={isOpenThankYou}
                                onRequestClose={toggleModalThankYou} className="testmodala modalVertCentr mod">



                                <div className="modal-header newlatter text-center">

                                    <img src={require('../../assets/img/logo-modal.png').default} className="" />

                                    <button type="button" className="close ml-auto newlatter" onClick={toggleModalThankYou} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">

                                    <div className="modal-body rentalForm availBodyBlock text-center">


                                        <h3 className="font-weight700 fontSize24">Thanks for submitting your inquiry!</h3>
                                        <p className="font-weight400 fontSize16 ">
                                            Your message has been sent</p>
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

                        :
                        null
            }









        </>
    )
}
