import React, { useState, useEffect } from 'react'
import Emailsubs2 from '../../containers/Emailsubs2'
import AffordabilityCal from './AffordabilityCal'
import CheckAvailabilityAgencyDetail from './CheckAvailabilityAgencyDetail'
// import swal from 'sweetalert';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
// import '../../assets'
import img from '../../assets/img/marker.png';
import axios from 'axios';

import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import PropertiesNearby from '../Index/PropertiesNearby';
import { CityCountyQuickFacts } from './CityCountyQuickFacts';
// import { PropertiesNearby3 } from '../../containers/PropertiesNearby3';
import PropertiesNearby3 from './propertynearby3';
// import SweetAlert from '../../containers/SweetAlert';
// import e from 'cors';
import Footer from '../../containers/Footer';
import HousingAuthorityforGeneral from '../PropertyDetail/HousingAuthorityforGeneral';
import SinglePointMap from '../../containers/SinglePointMap';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useParams } from 'react-router-dom';
import { addDash, addOrRemoveHA, getAllHA, isItNull, prerenderApiCall, replaceSpace, toggleHeartHA } from '../../containers/functions';
import GoogleADS from '../../containers/GoogleADS'
import { Helmet } from 'react-helmet'
import { captchaSecretKey, captchaSiteKey } from '../../constants/constants'
import { numberofoccupants } from '../../constants/arraysLists'

const AgencyDetail = () => {





    useEffect(() => {
        prerenderApiCall();
    }, [])





    const [newModalFormDataQualifyNow, setnewModalFormDataQualifyNow] = useState(
        {
            email_address: "",
            first_name: "",
            last_name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            occupants: '',
            monthlyIncome: "",
            voucher: "",
            move_date: "",
            phone: "",
            property_id: ""
        }
    )


    const [isOpenQualify, setIsOpenQualify] = useState(false);
    function toggleModalQualify() {
        setIsOpenQualify(!isOpenQualify);
    }

    const [colorCHangeheart, setcolorCHangeheart] = useState();

    function colorChange(item) {


        if (toggleHeartHA(item) == true) {
            setcolorCHangeheart(true);
        } else {
            setcolorCHangeheart(false);
        }

    }

    useEffect(() => {
    }, [colorCHangeheart]);









    const [formDataagency, setformDataagency] = useState({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: 'This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions.' })



    // document.title = "Anaheim Housing Authority - Rental Housing Deals"
    const markerIcoon = new L.Icon(
        {
            iconUrl: img,
            iconSize: [40, 50]
        }
    )

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenpublic, setIsOpenpublic] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [readmore, setreadmore] = useState();

    const [aboutreadmore, setaboutreadmore] = useState(false);


    const [captchaValue, setcaptchaValue] = useState();


    let statelisturl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/selectallState`


    const [statelist, setstatelist] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(statelisturl)
                .then(res => {
                    // //console.log(res);
                    setstatelist(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });

        };
        fetchData();
    }, [statelisturl]);








    const [formdata, setformdata] = useState({
        property_id: "",
        first_name: "",
        last_name: "",
        phone: "",
        email_address: "",
        move_date: "",
        message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
    });

    // let dataid = 766;

    const [formdatamodal, setformdatamodal] = useState({
        property_id: "",
        first_name: "",
        last_name: "",
        phone: "",
        email_address: "",
        move_date: "",
        message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
    });

    const [checkAvailability, setcheckAvailability] = useState({ name: '', phone: '', emailid: '', date: '', messagetxt: '' });

    const [agencyid, setagencyid] = useState();



    const [agencydata, setagencydata] = useState([]);


    const [isOpenThankYou, setIsOpenThankYou] = useState(false);


    let agendetail;
    let agendatedetail;
    let agenphoto;
    let agenquickfacts;
    let agenfmr;
    let agenlocalinfo;
    let agenhas;
    let agenincomelimit;
    let agenprogsummary;

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    function toggleModalpublic() {
        setIsOpenpublic(!isOpenpublic);
    }
    function toggleModalContact() {
        setIsOpenContact(!isOpenContact);
    }
    // function swalopen(texttoshow) {
    //     swal({
    //         title: texttoshow,
    //         // text: "You clicked the button!",
    //         // icon: "success",
    //         showCloseButton: true,
    //         showCancelButton: true,
    //     });
    // }


    // let options = { year: 'numeric', month: 'long', day: 'numeric' };
    // if (date == undefined || date == null) {

    // } else {
    //     date1 = new Date(date);
    // }



    // function dateConvert(date) {

    //     let date1;
    //     if (date == undefined || date == null) {

    //     } else {
    //         date1 = new Date(date);
    //     }

    //     return date1;
    // }


    const handleSubmitNewModalQualifyNow = (e) => {
        e.preventDefault();
        startCaptchaProcessForNewModal();
        // console.log(newModalFormDataQualifyNow, "HII");
    }

    let dateconvert = (date) => {
        return new Date(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(checkAvailability);
        // toggleModal();
        setcheckAvailability({ name: '', phone: '', emailid: '', date: '', messagetxt: '' })
    }

    var data = {
        "status": "success",
        "error": false,
        "data": {
            "id": 1,
            "ha_code": "AK001",
            "ha_name": "AHFC - MTW PH",
            "ha_city": "ANCHORAGE",
            "program_type": "Low-Rent",
            "low_rent_units": 1263,
            "ha_program_type": "Low-Rent",
            "activity_status": "Active",
            "ha_fiscal_year_end": "Jun-30",
            "last_update": "2014-04-12",
            "in_management_dev": "",
            "in_management_units": "",
            "in_development_dev": "",
            "in_development_units": "",
            "total_dev": "",
            "total_units": "",
            "section_increments": "",
            "section_units": "",
            "additional_information": ""
        }
    }

    // console.log(data.data);

    //const lineS = 'HousingHousingHousingHousingHousingHousingHousingHousing';
    //const abcd = 'WA003';



    let parameters = useParams();

    useEffect(() => {
        const agencyName = parameters.agencyNameParam;
        const agencyHAID = parameters.agencyHAID;

        setagencyid(agencyHAID);
        startCaptchaProcess();
    }, [parameters]);

    // useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // const idp = params.get('haid');
    //     setagencyid(idp);
    //     startCaptchaProcess();
    // }, []);





    let agencyDetailUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/housing-authority-details/${agencyid}`;
    useEffect(() => {
        const fetchData = async () => {
            if (!(agencyid == undefined)) {
                const result = await axios.post(agencyDetailUrl)
                    .then(res => {
                        setagencydata(res.data.data);
                        colorChange(res.data.data.details[0].id);
                        document.title = `${agendetail.name} - Rental Housing Deals`;
                    }).catch(error => {
                        console.log('error', error);
                    });
            }
        };
        fetchData();
    }, [agencyDetailUrl]);

    // console.log(agencydata.details.county);
    let checkAvailabilityId;

    let descriptionWithoutTags = '';

    if (agencydata == [] || agencydata == undefined || agencydata == null || agencydata == '') {

    } else {
        // agendetail = agencydata.details[0];
        if (agencydata.details == [] || agencydata.details == null || agencydata.details == '' || agencydata.details.length == 0) {
        }
        else {
            agendetail = agencydata.details[0];
            // setformdata({ property_id: `${checkAvailabilityId}` });
            // checkAvailabilityId = agencydata.details[0].id;
        }
        // agendatedetail = agencydata.datedetail[0];
        if (agencydata.datedetail == [] || agencydata.datedetail == null || agencydata.datedetail == '') {
        }
        else {
            agendatedetail = agencydata.datedetail[0];
            descriptionWithoutTags = agendatedetail.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');
        }


        // agenquickfacts = agencydata.quickFacts;
        if (agencydata.quickFacts == [] || agencydata.quickFacts == null || agencydata.quickFacts == '') {
        }
        else {
            agenquickfacts = agencydata.quickFacts;
        }


        if (agencydata.HAPhotoDetail == [] || agencydata.HAPhotoDetail == null || agencydata.HAPhotoDetail == '') {
        }
        else {
            agenphoto = agencydata.HAPhotoDetail[0];
        }


        if (agencydata.fairMarketData == [] || agencydata.fairMarketData == null || agencydata.fairMarketData == '') {
        }
        else {
            agenfmr = agencydata.fairMarketData[0];
        }

        if (agencydata.localinfo == [] || agencydata.localinfo == null || agencydata.localinfo == '') {
        }
        else {
            agenlocalinfo = agencydata.localinfo[0];
        }


        if (agencydata.nearHAS == [] || agencydata.nearHAS == null || agencydata.nearHAS == '') {
        }
        else {
            agenhas = agencydata.nearHAS;
        }


        if (agencydata.incomelimit == [] || agencydata.incomelimit == null || agencydata.incomelimit == '') {
        }
        else {
            agenincomelimit = agencydata.incomelimit[0];
        }

        if (agencydata.program_summary == [] || agencydata.program_summary == null || agencydata.program_summary == '') {
        }
        else {
            agenprogsummary = agencydata.program_summary[0];
        }


        // agenphoto=agencydata.HAPhotoDetail[0];
    }










    // function captchaHandle(value) {
    //     // console.log('Captcha value:', value);
    //     setcaptchaValue(true);
    // }

    // function captchacheck() {
    //     if (captchaValue == undefined || captchaValue !== true) { setcaptchaValue(false) }
    // }

    // useEffect(() => {
    //     setformdata({ property_id: `${checkAvailabilityId}` });
    // }, [checkAvailabilityId])

    // if (checkAvailabilityId == undefined) { }
    // else {
    //     setformdata({ property_id: `${checkAvailabilityId}` });
    // }


    function toggleModalThankYou() {
        setIsOpenThankYou(!isOpenThankYou);
    }


    let handleSubmitformmodal = (e) => {
        e.preventDefault();

        // console.log(captchaValue, "OUTSIDE MODAL FORM");
        // console.log(formdatamodal);

        startCaptchaProcessModal();
        // if (captchaValue == true) {
        //     console.log("INSIDE MODAL FORM");
        //     submitAllDataModal();
        //     toggleModalContact();
        //     toggleModalThankYou();
        //     // fetchAfterCheckPropList();
        //     setformdatamodal({ property_id: "", first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: `${formdatamodal.message}` });
        // }
    };

    function submitAllDataModal() {


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
                "property_id": agendetail.id,
                "first_name": formdatamodal.first_name,
                "last_name": formdatamodal.last_name,
                "email_address": formdatamodal.email_address,
                "phone": formdatamodal.phone,
                "message": formdatamodal.message,
                "move_date": formatDate(formdatamodal.move_date)
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


        // DONT CHANGE THIS ONE 

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/Checkavailabilityha", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == "Success") {
                    // console.log(result, "RSULT 2");
                    setformdatamodal(
                        {
                            property_id: "",
                            first_name: '',
                            last_name: '',
                            phone: '',
                            email_address: '',
                            move_date: '',
                            message: `${formdatamodal.message}`
                        }
                    );

                    toggleModalContact();
                    toggleModalThankYou();
                }
            }
            )
            .catch(error => console.log('error', error));

    }


    function submitAllDataNewModal() {


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
                email_address: newModalFormDataQualifyNow.email_address,
                first_name: newModalFormDataQualifyNow.first_name,
                last_name: newModalFormDataQualifyNow.last_name,
                address: newModalFormDataQualifyNow.address,
                city: newModalFormDataQualifyNow.city,
                state: newModalFormDataQualifyNow.state,
                zip: newModalFormDataQualifyNow.zip,
                occupants: newModalFormDataQualifyNow.occupants,
                monthlyIncome: newModalFormDataQualifyNow.monthlyIncome,
                voucher: newModalFormDataQualifyNow.voucher,
                move_date: formatDate(newModalFormDataQualifyNow.move_date),
                phone: newModalFormDataQualifyNow.phone,
                property_id: agendetail.id
            }



            // {
            //     "property_id": agendetail.id,
            //     "first_name": formdatamodal.first_name,
            //     "last_name": formdatamodal.last_name,
            //     "email_address": formdatamodal.email_address,
            //     "phone": formdatamodal.phone,
            //     "message": formdatamodal.message,
            //     "move_date": formatDate(formdatamodal.move_date)
            // }
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


        // DONT CHANGE THIS ONE 

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/Checkavailabilityhanew", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == "Success") {
                    // console.log(result, "RSULT 2");
                    setnewModalFormDataQualifyNow(
                        {
                            email_address: "",
                            first_name: "",
                            last_name: "",
                            address: "",
                            city: "",
                            state: "",
                            zip: "",
                            occupants: '',
                            monthlyIncome: "",
                            voucher: "",
                            move_date: "",
                            phone: "",
                            property_id: ""
                        }
                    );

                    toggleModalQualify();
                    toggleModalThankYou();
                }
            }
            )
            .catch(error => console.log('error', error));

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


    const startCaptchaProcessForNewModal = () => {
        if (!isItNull(newModalFormDataQualifyNow.move_date)) {
            // console.log("token startcaptchaprocess");
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
            script.addEventListener('load', loadCaptchaNewModal);
            document.body.appendChild(script);
        }

        // submitAllDataNewModal();
        // loadCaptchaNewModal();
    }



    const startCaptchaProcessModal = () => {
        if (!isItNull(formdatamodal.move_date)) {
            // console.log("token startcaptchaprocess");
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
            script.addEventListener('load', loadCaptchaNewModal);
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


                                    // toggleModalThankYou();
                                    submitAllData();
                                    window.grecaptcha.reset();
                                    // submitAllData();
                                    setformdata({
                                        first_name: "",
                                        last_name: "",
                                        phone: "",
                                        email_address: "",
                                        move_date: "",
                                        message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
                                    });


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


    const loadCaptchaModal = () => {
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


                                    submitAllDataModal();
                                    // toggleModalContact();
                                    // toggleModalThankYou();
                                    // fetchAfterCheckPropList();



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



    const loadCaptchaNewModal = () => {
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


                                    submitAllDataNewModal();
                                    // toggleModalContact();
                                    // toggleModalThankYou();
                                    // fetchAfterCheckPropList();



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





    const handleSubmitform = (e) => {
        e.preventDefault();

        // console.log(captchaValue, "outside FORM");


        startCaptchaProcess();

        // if (captchaValue == true) {
        //     // console.log(checkAvailabilityId);

        //     console.log("INSIDE  FORM");
        //     console.log(formdata);
        //     toggleModalThankYou();
        //     submitAllData();
        //     window.grecaptcha.reset();
        //     // submitAllData();
        //     setformdata({
        //         first_name: "",
        //         last_name: "",
        //         phone: "",
        //         email_address: "",
        //         move_date: "",
        //         message: "Hi, I would like to inquire about receiving rental assistance. Please let me know what programs are available at this time. Thanks.",
        //     });
        // }
    }














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
                "property_id": agendetail.id,
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

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/Checkavailabilityfromhadetail", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == "Success") {
                    toggleModalThankYou();
                }
            }
            )
            .catch(error => console.log('error', error));

    }



    let handleSubmitContact = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // toggleModal();
        setformDataagency({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    }

    let onValChange = (e) => {
        setformDataagency({ ...formDataagency, voucher: e.target.value })
    }


    // if (agencydata == [] || agencydata == undefined || agencydata == null || agencydata == '' ) {

    // } else {
    //     agendatedetail = agencydata.closedate[0];
    //     agenphoto=agencydata.HAPhotoDetail[0];
    // }

    // console.log(agencydata);





    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618, 145,632,149);
    ezstandalone.enable();
    ezstandalone.display();
    });`






    let onradioChange = (e) => {
        setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, voucher: e.target.value });
    };




    return (
        <>
            {/* <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet> */}
            {
                agencydata == [] || agencydata == undefined || agencydata == null || agencydata == ''
                    ?
                    null
                    :
                    <section className="detailPage secPad24 pb-0 apgencydetail-page agencyMarginTop">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 itemWebsite">
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                    <div className="itemWebsite">
                                        <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                            <ol className="breadcrumb font-weight500 mb-0">
                                                <li className="breadcrumb-item fontSize14"><a href="/" className="purpleText">Home</a></li>
                                                <li className="breadcrumb-item fontSize14"><Link to={`/housing-authority-waitlists`} className="purpleText">Housing Authority</Link></li>
                                                <li className="breadcrumb-item fontSize14"><Link to={`/housing-authority-waiting-lists/${agendetail.state}`} className="purpleText">{agendetail.state}</Link></li>
                                                <li className="breadcrumb-item fontSize14"><Link to={`/housing-authority-waiting-lists/${addDash(agendetail.city)}-${agendetail.state}`} className="purpleText">{agendetail.city}</Link></li>
                                                <li className="breadcrumb-item fontSize14 active" aria-current="page">{agendetail.name.slice(0, 30)} {agendetail.name.length > 30 ? '...' : null}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="detailRightSec">

                                        <div className="agencyDetailTop itemWebsite">
                                            <div className="media">

                                                {/* {require('../../assets/img/searchHome3.png').default} */}

                                                {
                                                    agenphoto == undefined || agenphoto == null ?
                                                        <img className="mr-3 agencylogo" src={'https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} />
                                                        :
                                                        <img className="mr-3 agencylogo" src={`https://managers.rentalhousingdeals.com/${agenphoto.path}/${agenphoto.filename}`} />
                                                }

                                                {/* <img className="mr-3" src={require('../../assets/img/agencyDetail.png').default} /> */}
                                                <div className="media-body">
                                                    <h5 className="mt-0 font-weight700 colorBlue">{agendetail.name}</h5>
                                                    <p className="mb-0 fontSize16 secondaryColor font-weight400">{agendetail.county} County -
                                                        {agendetail.address}, {agendetail.city}, {agendetail.state}, {agendetail.zip} </p>
                                                    <div className="d-flex align-items-center exportLink">
                                                        {
                                                            agendetail.url == '' || agendetail.url == null ? null :
                                                                <>
                                                                    <img src={require('../../assets/img/export.svg').default} />
                                                                    <a href={`${agendetail.url == '' || agendetail.url == null ? null : agendetail.url}`} className="purpleText fontSize16 font-weight500">{agendetail.url == '' || agendetail.url == null ? null : agendetail.url}</a>
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="itemMobile mobileTopHeading">
                                            <div className="media">

                                                {
                                                    agenphoto == undefined || agenphoto == null ?


                                                        <img className="mr-3" src={'https://www.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} alt="Generic placeholder image" />

                                                        :
                                                        <img className="mr-3" src={`https://www.rentalhousingdeals.com/${agenphoto.path}/${agenphoto.filename}`} alt="Generic placeholder image" />

                                                }

                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 font-weight700 colorBlue mb-0">{agendetail.name}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 fontSize16 secondaryColor font-weight400 topa">{agendetail.county} County -
                                                    {agendetail.address}, {agendetail.city}, {agendetail.state}, {agendetail.zip} </p>
                                                <div className="ml-auto">
                                                    <ul className="noMarginPad listStyleNone actionBtn d-flex align-items-center">
                                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center exportLink">
                                                <img src={require('../../assets/img/export.svg').default} />


                                                {
                                                    agendetail.url == '' || agendetail.url == null ? null :
                                                        <>
                                                            <img src={require('../../assets/img/export.svg').default} />
                                                            <Link to={`${agendetail.url == '' || agendetail.url == null ? null : agendetail.url}`} className="purpleText fontSize16 font-weight700">Visit Site</Link>
                                                        </>
                                                }
                                            </div>
                                        </div> */}


                                        <div className="itemMobile mobileTopHeading">
                                            <div className="media">


                                                {
                                                    agenphoto == undefined || agenphoto == null ?
                                                        <img className="mr-3 agencylogo" src={'https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} />
                                                        :
                                                        <img className="mr-3 agencylogo" src={`https://managers.rentalhousingdeals.com/${agenphoto.path}/${agenphoto.filename}`} />
                                                }


                                                {/* <img className="mr-3" src={require('../../assets/img/agencyDetail.png').default} /> */}
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 font-weight700 colorBlue mb-0">{agendetail.name}
                                                        </h5>
                                                        {/* <div className="ml-auto">
                                                            <span className="statusTag fontSize14 font-weight500 open">
                                                                Active
                                                            </span>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 fontSize16 secondaryColor font-weight400 topa">{agendetail.county} County -
                                                    {agendetail.address}, {agendetail.city}, {agendetail.state}, {agendetail.zip}</p>
                                                <div className="ml-auto">
                                                    <ul className="noMarginPad listStyleNone actionBtn d-flex align-items-center">
                                                        <li><span
                                                            onClick={
                                                                () => {

                                                                    addOrRemoveHA(agendetail.id, new Date());
                                                                    getAllHA();
                                                                    // console.log(toggleHeart(propdata.id_property));
                                                                    colorChange(agendetail.id);
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

                                                        </span></li>
                                                        <li><a href=""><i className="fas fa-share-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center exportLink">
                                                <img src={require('../../assets/img/export.svg').default} />
                                                {/* <a href="" className="purpleText fontSize16 font-weight700">Visit Site</a> */}

                                                {
                                                    agendetail.url == '' || agendetail.url == null ? null :
                                                        <>
                                                            <a href={`${agendetail.url == '' || agendetail.url == null ? null : agendetail.url}`} className="purpleText fontSize16 font-weight700">Visit Site</a>
                                                        </>
                                                }
                                            </div>

                                            <div className="itemMobile mt-3">
                                                <div className="d-flex align-items-center">
                                                    <a href={`tel:${agendetail.phone}`}
                                                        className="skyBlueResponisveBtn d-flex align-items-center brdrRadius4 skybtn whiteColor"><i
                                                            className="fas fa-phone-alt"></i>{agendetail.phone}</a>
                                                    <span onClick={() => {
                                                        toggleModalContact();
                                                    }} s
                                                        className="skyBlueResponisveBtn d-flex align-items-center brdrRadius4 whiteColor"
                                                        data-toggle="modal" data-target="#exampleModal">Contact</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brdrLine5"></div>



                                        {/* <div className="fontSize16 font-weight400 colorBlue detailPara2">
                                            <p className="lineRespnsiveIndent mb-0">Anaheim Housing Authority is a public housing agency
                                                that helps provide decent and safe rental housing for eligible low-income families, the
                                                elderly, and persons with disabilities. Anah ... </p>
                                            <a href=""
                                                className="purpleText font-weight700" onClick={() => {
                                                    setreadmore(true);
                                                }}>Read More</a>
                                            {readmore == true ? <SweetAlert /> : <></>}
                                        </div> */}
                                        <div className="fontSize16 font-weight400 colorBlue detailPara2">
                                            {
                                                agendetail.about_us == '' || agendetail.about_us == null || agendetail.about_us == undefined ?

                                                    <p className="lineRespnsiveIndent mb-0" >
                                                        {agendetail.name} is a public housing agency that helps provide decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities.
                                                    </p>
                                                    :
                                                    <>
                                                        <p className="lineRespnsiveIndent mb-0">
                                                            {
                                                                !descriptionWithoutTags.length > 0
                                                                    ?
                                                                    null
                                                                    :
                                                                    aboutreadmore == false ?
                                                                        `${descriptionWithoutTags.slice(0, 185)}...`
                                                                        :
                                                                        descriptionWithoutTags
                                                            }
                                                        </p>

                                                        {
                                                            descriptionWithoutTags == '' || descriptionWithoutTags == null || descriptionWithoutTags == undefined
                                                                ?
                                                                null
                                                                :
                                                                <span href=""
                                                                    className="purpleText font-weight700"
                                                                    onClick={() => {
                                                                        setaboutreadmore(!aboutreadmore);
                                                                    }}>
                                                                    {
                                                                        aboutreadmore == false ?
                                                                            'Read More'
                                                                            :
                                                                            'Read less'
                                                                    }
                                                                </span>

                                                        }


                                                    </>

                                            }

                                            {/* <p dangerouslySetInnerHTML={{ __html: agendetail.about_us }} className="lineRespnsiveIndent mb-0" /> */}
                                            {/* Anaheim Housing Authority is a public housing agency
                                                that helps provide decent and safe rental housing for eligible low-income families, the
                                                elderly, and persons with disabilities. Anah ... 
                                                
                                                </p> */}
                                            {/* <span href=""
                                                className="purpleText font-weight700" onClick={() => {
                                                    setreadmore(true);
                                                }}> ... Read More</span> */}
                                            {/* {readmore == true ? <SweetAlert /> : <></>} */}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="agencyDetailBlock">
                                                    <div className="d-flex align-items-center">
                                                        <h3 className="fontSize18 font-weight500 colorBlue mb-0">Section 8 Wait List in {agendetail.city}, {agendetail.state}</h3>
                                                        <div className="ml-auto">

                                                            {
                                                                agendetail.is_section_8_wating_list == 0 ?
                                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                                        Closed
                                                                    </span>
                                                                    :
                                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                            }
                                                            {/* <span className="statusTag fontSize14 font-weight500 open">
                                                                Open
                                                            </span> */}
                                                        </div>
                                                    </div>
                                                    <div className="dateCalender">
                                                        <div className="media">
                                                            <span>
                                                                <img src={require('../../assets/img/calendarBlue.svg').default} />
                                                            </span>
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize14 colorBlue">
                                                                    {
                                                                        (agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '') && (agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '') ?
                                                                            'N/A'
                                                                            :
                                                                            <>
                                                                                {agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '' ? 'N/A' : `${dateconvert(agendatedetail.open_date).toLocaleDateString("en-US", options)}`} - {agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '' ? 'N/A' : `${dateconvert(agendatedetail.close_date).toLocaleDateString("en-US", options)}`}
                                                                            </>
                                                                    }
                                                                    {/* {agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '' ? 'N/A' : `${dateconvert(agendatedetail.open_date).toLocaleDateString("en-US", options)}`} - {agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '' ? 'N/A' : `${dateconvert(agendatedetail.close_date).toLocaleDateString("en-US", options)}`} */}
                                                                    {/* Oct 31st - Nov 31st */}

                                                                </h5>
                                                                <p className="mb-0 secondaryColor fontSize14">
                                                                    {agendatedetail.open_time == '' ? 'N/A' : agendatedetail.open_time} - {agendatedetail.close_time == '' ? 'N/A' : agendatedetail.close_time}

                                                                    {/* 08:00 PM */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14 datecalnderPara">
                                                            {
                                                                agendatedetail.description == '' ?
                                                                    'According to recently updated public information sources, this agency appears to have open waiting list. Please contact them directly to confirm the current status of their waiting lists for public housing.'
                                                                    :
                                                                    agendatedetail.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').slice(0, 84)
                                                            }...
                                                            <strong className="purpleText font-weight700"
                                                                onClick={
                                                                    () => { toggleModal() }}>Read More</strong>
                                                        </p>
                                                        {/* <a href=""
                                                className="purpleText font-weight700" >Read More</a> */}
                                                        {/* {readmore == true ? <SweetAlert /> : <></>} */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="agencyDetailBlock">
                                                    <div className="d-flex align-items-center">
                                                        <h3 className="fontSize18 font-weight500 colorBlue mb-0">Public Housing Wait List in {agendetail.city}, {agendetail.state}</h3>
                                                        <div className="ml-auto">
                                                            {
                                                                agendetail.is_wating_closed == 1
                                                                    ?
                                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                                        Closed
                                                                    </span>
                                                                    :
                                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                            }
                                                            {/* <span className="statusTag fontSize14 font-weight500 closed">
                                                                Closed
                                                            </span> */}
                                                        </div>
                                                    </div>
                                                    <div className="dateCalender">
                                                        <div className="media">
                                                            <span>
                                                                <img src={require('../../assets/img/calendarBlue.svg').default} />
                                                            </span>
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize14 colorBlue">
                                                                    {/* {agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '' ? 'N/A' : agendatedetail.open_date_ha} - {agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '' ? 'N/A' : agendatedetail.close_date_ha} */}

                                                                    {
                                                                        (agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '') && (agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '') ?
                                                                            'N/A'
                                                                            :
                                                                            <>
                                                                                {agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '' ? 'N/A' : `${dateconvert(agendatedetail.open_date_ha).toLocaleDateString("en-US", options)}`} - {agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '' ? 'N/A' : `${dateconvert(agendatedetail.close_date_ha).toLocaleDateString("en-US", options)}`}
                                                                            </>
                                                                    }
                                                                    {/* Oct 31st - Nov 31st */}
                                                                </h5>
                                                                <p className="mb-0 secondaryColor fontSize14">
                                                                    {agendatedetail.open_time_ha == '' ? 'N/A' : agendatedetail.open_time_ha} - {agendatedetail.close_time_ha == '' ? 'N/A' : agendatedetail.close_time_ha}

                                                                    {/* 08:00 PM */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14 datecalnderPara">


                                                            {
                                                                agendatedetail.description == '' ?
                                                                    'According to recently updated public information sources, this agency appears to have open waiting list. Please contact them directly to confirm the current status of their waiting lists for public housing.'
                                                                    :
                                                                    agendatedetail.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').slice(0, 84)
                                                            }...
                                                            <strong className="purpleText font-weight700"
                                                                onClick={
                                                                    () => { toggleModalpublic() }}>Read More</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Modal --> */}
                                            {/* <div className="modal fade rentalModal" id="exampleModall" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabell" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog2" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title w-100 text-center font-weight700"
                                                    id="exampleModalLabell">Anaheim Housing Authority</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="modalLanding">
                                                    <h5 className="fontSize18 fontSize500">Section 8 Wait List</h5>
                                                    <div className="d-flex align-items-bottom">
                                                        <span className="statusTag fontSize14 font-weight500 open">
                                                            Open
                                                        </span>
                                                        <p className="mb-0 fontSize16 font-weight400 colorBlue dateTime"
                                                            data-toggle="modal" data-target="#exampleModal"
                                                            style={{ cursor: "pointer" }}>October 31st 2021, 8:00 PM</p>
                                                    </div>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor landingModalPara">
                                                        According to recently updated public information sources, this
                                                        agency appears to have. According to recently updated public
                                                        information sources, this agency appears to have. According to
                                                        recently updated public information sources, this agency appears to
                                                        have. According to recently updated public information sources, this
                                                        agency appears to have. According to recently updated public
                                                        information sources, this agency appears to have. According to
                                                        recently updated public information sources, this agency appears to
                                                        have.</p>
                                                    <div className="twoButtonsModal">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <a href="" className="bluebtnModal">
                                                                    (626) 448-2699
                                                                </a>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <a href="" className="bluebtnModal">
                                                                    Contact
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}



                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 itemWebsite">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="btnSection mar26 mb-0 itemWebsite">
                                                            <a href={`tel:${agendetail.phone}`} className="brdrRadius4 w-100 text-center">
                                                                <img src={require('../../assets/img/phoneIcon.svg').default} />{agendetail.phone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="btnSection mar26 mb-0 itemWebsite">
                                                            <button className="brdrRadius4 w-100 text-center d-flex align-items-center justify-content-center" onClick={() => {
                                                                // toggleModalContact();
                                                                toggleModalQualify();
                                                            }}> <img src={require('../../assets/img/qualifyIcon.png').default} />Qualify Now</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="agencyDetailBlock">
                                        <div className="d-flex align-items-center">
                                            <h3 className="fontSize18 font-weight500 colorBlue">Public Housing Wait List</h3>
                                            <div className="ml-auto">
                                                <span className="statusTag fontSize14 font-weight500 closed">
                                                    Closed
                                                </span>
                                            </div>
                                        </div>
                                        <div className="dateCalender">
                                            <div className="media">
                                                <span>
                                                    <img src={require('../../assets/img/calendarBlue.svg').default} />
                                                </span>
                                                <div className="media-body">
                                                    <h5 className="mt-0 mb-0 fontSize14 colorBlue">Oct 31st - Nov 31st</h5>
                                                    <p className="mb-0 secondaryColor fontSize14">08:00 PM</p>
                                                </div>
                                            </div>
                                            <p className="mb-0 secondaryColor fontSize14 datecalnderPara">According to recently updated public information sources, this agency appears to have ... <a href="" className="purpleText">Read More</a></p>
                                        </div>
                                    </div>

                                </div> --> */}



                                            {/* <!-- Modal --> */}
                                            {/* <div className="modal fade rentalModal preRentalModal" id="exampleModal" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog boxscroll4" role="document">
                                        <div className="wrapperScroll">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title w-100 text-center font-weight700"
                                                        id="exampleModalLabel">Contact Anaheim Housing Agency</h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Full Name <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address" value="Jonath" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Address </label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp" placeholder=""
                                                                        value="4353 Norman Street" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">City</label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address" value="Los Angeles" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label
                                                                                for="exampleFormControlSelect1">State</label>
                                                                            <select className="form-control"
                                                                                id="exampleFormControlSelect1">
                                                                                <option>CA</option>
                                                                                <option>CA</option>
                                                                                <option>CA</option>
                                                                                <option>CA</option>
                                                                                <option>CA</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">ZIP</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address" value="90022" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Email Address <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address"
                                                                        value="Jonathan@gmail.com" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Phone Number <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address" value="6261234123" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Move-In Date</label>
                                                                    <div className="posRel calnderIcon">
                                                                        <input type="email" className="form-control" id=""
                                                                            aria-describedby="emailHelp"
                                                                            placeholder="Move-In Date" value="" />
                                                                        <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Occupants</label>
                                                                            <div className="posRel calnderIcon">
                                                                                <input type="number" min="1" max="5"
                                                                                    className="form-control" id=""
                                                                                    aria-describedby="emailHelp"
                                                                                    placeholder="" value="1" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Monthly Income</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp" placeholder=""
                                                                                value="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="radioSec">
                                                                    <div className="form-group mb-0">
                                                                        <label>Do you have a voucher?</label>
                                                                        <div className="d-flex align-items-center">
                                                                            <div>
                                                                                <input type="radio" id="test1"
                                                                                    name="radio-group" checked />
                                                                                <label for="test1">Yes</label>
                                                                            </div>
                                                                            <div>
                                                                                <input type="radio" id="test2"
                                                                                    name="radio-group" checked />
                                                                                <label for="test2">No</label>
                                                                            </div>
                                                                            <div>
                                                                                <input type="radio" id="test3"
                                                                                    name="radio-group" checked />
                                                                                <label for="test3">On Waiting List</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="brdrLine marLftRgt"></div>
                                                    <div>
                                                        <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                                            Conditions:</h5>
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                                rows="3"
                                                                placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"
                                                        className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                        </div>

                                        <div className="container">
                                            <GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
                                        </div>

                                        <div style={{ background: 'cyan', width: '100%', maxWidth: '100%', padding: 0, marginTop: '24px' }}>
                                            <a style={{ height: '100%', width: '100%', maxWidth: '100%' }} href='https://secure.rspcdn.com/xprr/red/PID/12463/SID/sid_here'>
                                                <img style={{ height: '100%', width: '100%', maxWidth: '100%' }} src={require('../../assets/img/housing_auth_ad.png').default} alt="Image" />
                                            </a>
                                        </div>

                                        {/* EMAIL IS REPLACED WITH AD  */}
                                        {/* <Emailsubs2 /> */}

                                        {/* <div className="alertBox mar24 mb-0 alertBoxx2">
                                <div className="alertWidth">
                                    <div className="media">
                                        <img className="align-self-start mr-3" src={require('../../assets/img/bell.svg').default} alt="Image" />
                                        <div className="media-body">
                                            <h2 className="mt-0 mb-0 font-weight400">Sign up for waitlist alerts.<b>No spam</b>
                                            </h2>
                                            <div className="d-flex align-items-center inputField posRel">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                         placeholder="Email Address" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                </div>
                                                <a className="getAlerted brdrRadius4">Get Alerted</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */}

                                        <div className="brdrLine"></div>
                                        <div className="titleHeading">
                                            <h3 className="fontSize18 font-weight700">Program Types</h3>
                                            <p className="fontSize16 font-weight500 mb-0 secondaryColor">

                                                {agenprogsummary.program_type == 'Combined' ? 'Section 8 Voucher, Low Rent Units'
                                                    :
                                                    (agenprogsummary.program_type == 'Section 8' ? 'Section 8 Voucher' :
                                                        (agenprogsummary.program_type == 'Low-Rent' ? 'Low Rent Units' : 'N/A'))}
                                            </p>
                                        </div>
                                        <div className="brdrLine"></div>


                                        <div className="titleHeading">
                                            <h3 className="fontSize18 font-weight700">{agendetail.name} Program Summary
                                                {/* , {agendetail.state} */}
                                            </h3>


                                            <div className="fontSize16 font-weight400 colorBlue detailPara2">
                                                <p className="lineRespnsiveIndent mb-0">
                                                    {agendetail.name} is a public housing agency that helps provide decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities. {agendetail.name} manages several funded programs and has a total of {agenprogsummary.total_units == '' || agenprogsummary.total_units == null ? '60' : agenprogsummary.total_units} subsidized affordable housing units for rental assistance. {agendetail.name} administered a total of {agenprogsummary.section_units == '' || agenprogsummary.section_units == null ? '50' : agenprogsummary.section_units} Section 8 Vouchers. {agendetail.name} currently has {agenprogsummary.program_type == 'Combined' ? 'low rent units and Section 8 Voucher' : agenprogsummary.program_type} as its program type. {agendetail.name} is located at {agendetail.address}, {agendetail.city}, {agendetail.state}, {agendetail.zip}  and serves the city of {agendetail.city}.
                                                    Income limits, fair market rents and rent rates vary with each agency. Please contact {agendetail.name} at, {agendetail.phone} for more information about coverage area and program availability.
                                                </p>
                                                {/* <a href="" className="purpleText font-weight700">Read More</a> */}
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="summaryBlock">
                                                    <div className="media">
                                                        <span>
                                                            <img className='twentyfourbytwentyfour' src={require('../../assets/img/summary1.svg').default} />
                                                        </span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 purpleText font-weight700">
                                                                {agenprogsummary.total_dev == '' || agenprogsummary.total_dev == null || agenprogsummary.total_dev == 0 ? 'N/A' : (agenprogsummary.total_dev).toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                                            </h5>
                                                            <p className="mb-0 secondaryColor fontSize14">Total Number of Communities</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="summaryBlock">
                                                    <div className="media">
                                                        <span>
                                                            <img className='twentyfourbytwentyfour' src={require('../../assets/img/summary2.svg').default} />
                                                        </span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 purpleText font-weight700">
                                                                {agenprogsummary.section_units == '' || agenprogsummary.section_units == null || agenprogsummary.section_units == 0 ? 'N/A' : (agenprogsummary.section_units).toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                                            </h5>


                                                            <p className="mb-0 secondaryColor fontSize14">Total Number of Administered
                                                                Section 8 Vouchers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="summaryBlock">
                                                    <div className="media">
                                                        <span>
                                                            <img className='twentyfourbytwentyfour' src={require('../../assets/img/summary3.svg').default} />
                                                        </span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 purpleText font-weight700">
                                                                {agendetail.num_units == '' || agendetail.num_units == null || agendetail.num_units == 0 ? 'N/A' : agendetail.num_units}
                                                            </h5>
                                                            <p className="mb-0 secondaryColor fontSize14">Total subsidized units for Rental
                                                                Assistance Availability</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="summaryBlock">
                                                    <div className="media">
                                                        <span>
                                                            <img className='twentyfourbytwentyfour' src={require('../../assets/img/summary4.svg').default} />
                                                        </span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 purpleText font-weight700">
                                                                {agenprogsummary.total_units == '' || agenprogsummary.total_units == null || agenprogsummary.total_units == 0 ? 'N/A' : agenprogsummary.total_units}
                                                            </h5>
                                                            <p className="mb-0 secondaryColor fontSize14">Total Number of Administered
                                                                Public Housing Units</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brdrLine itemWebsite"></div>


                                        <div className="propertNearbySlider res24Top">

                                            <div className="posRel rightGradient">
                                                {/* <!-- <div className="gradientRight itemWebsite">
                                        <img src={require('../../assets/img/rightGradient.png').default} />
                                    </div> --> */}
                                                <PropertiesNearby3 titletext={`Properties Nearby ${agendetail.city}, ${agendetail.state}`} />
                                                {/* <PropertiesNearby3 /> */}
                                                {/* <div className="owl-carousel owl-theme housing_Nearby2 sliderNav">
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby1.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable
                                                    Housing</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a href=""><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1</b>Bd</li>
                                                            <li><b>1</b>Ba</li>
                                                            <li><b>880</b>Sq.Ft</li>
                                                            <li className="ml-auto boldTag greenText">$1,200</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby2.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1-2</b>Bd</li>
                                                            <li><b>1-3</b>Ba</li>
                                                            <li className="ml-auto">$1,200-1,800</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby3.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable
                                                    Housing</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a href=""><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1</b>Bd</li>
                                                            <li><b>1</b>Ba</li>
                                                            <li><b>880</b>Sq.Ft</li>
                                                            <li className="ml-auto boldTag greenText">$1,200</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby4.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1-2</b>Bd</li>
                                                            <li><b>1-3</b>Ba</li>
                                                            <li className="ml-auto">$1,200-1,800</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby1.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable
                                                    Housing</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a href=""><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1</b>Bd</li>
                                                            <li><b>1</b>Ba</li>
                                                            <li><b>880</b>Sq.Ft</li>
                                                            <li className="ml-auto boldTag greenText">$1,200</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby2.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1-2</b>Bd</li>
                                                            <li><b>1-3</b>Ba</li>
                                                            <li className="ml-auto">$1,200-1,800</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby3.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable
                                                    Housing</div>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a href=""><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1</b>Bd</li>
                                                            <li><b>1</b>Ba</li>
                                                            <li><b>880</b>Sq.Ft</li>
                                                            <li className="ml-auto boldTag greenText">$1,200</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="sliderItem">
                                                <img src={require('../../assets/img/housingNearby4.png').default} />
                                                <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                <div className="sliderTextArea">
                                                    <div className="d-flex align-items-top">
                                                        <div>
                                                            <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                            <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                        </div>
                                                    </div>
                                                    <div className="sliderListing">
                                                        <ul className="clearfix d-flex align-items-center">
                                                            <li><b>1-2</b>Bd</li>
                                                            <li><b>1-3</b>Ba</li>
                                                            <li className="ml-auto">$1,200-1,800</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                            </div>
                                        </div>
                                        <div className="brdrLine itemWebsite"></div>

                                        {agenincomelimit == undefined ?
                                            null
                                            :
                                            <>
                                                <div className="titleHeading itemWebsite">
                                                    <h3 className="fontSize18 font-weight700">Income Limits for {agendetail.county}, {agendetail.state}</h3>
                                                    <p className="fontSize16 font-weight400 mb-0 colorBlue">

                                                        HUD sets Income Limits for each area based
                                                        on the median family income in that area. Each Public Housing Agency (PHA)
                                                        will use the Income Limit set for the jurisdiction that the PHA covers. Therefore, a family
                                                        may be eligible for one PHA but not another. The number of people in a household determines the Income
                                                        Limit that is set for determining the family's eligibility for the program that they are applying for.
                                                        Below are the Income Limits for {agenincomelimit.County_Name}, {agenincomelimit.State_Alpha}:
                                                    </p>
                                                </div>
                                                <h3 className="priceGreenText colorGreen font-weight700 itemWebsite marginTop16 fontSize24">${agenincomelimit.median2020 == 0 || agenincomelimit.median2020 == '' || agenincomelimit.median2020 == null ? 'N/A' : (agenincomelimit.median2020).toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                                </h3>
                                                <p className="mb-0 para secondaryColor itemWebsite">Median Income Limits of {agenincomelimit.County_Name}, {agenincomelimit.State_Alpha}</p>




                                                <div className="itemMobile mobileIncomeLimit">
                                                    <div className="brdrLine3 responsive-15"></div>
                                                    <h3 className="colorBlue font-weight700 incomeLimtMobileText">Income Limits for {agendetail.county}, {agendetail.state}</h3>
                                                    <p className="mb-0 para colorBlue mt-0">
                                                        HUD sets Income Limits for each area based
                                                        on the median family income in that area. Each Public Housing Agency (PHA)
                                                        will use the Income Limit set for the jurisdiction that the PHA covers. Therefore, a family
                                                        may be eligible for one PHA but not another. The number of people in a household determines the Income
                                                        Limit that is set for determining the family's eligibility for the program that they are applying for.
                                                        Below are the Income Limits for {agenincomelimit.County_Name}, {agenincomelimit.State_Alpha}:
                                                        {/* HUD sets Income Limits for each area based on the median
                                                        family income in that area. Each Public Housing Agency (PHA) will use... <a
                                                            href="">Read More</a> */}

                                                    </p>
                                                    <h3 className="priceGreenText colorGreen font-weight700">${agenincomelimit.median2020 == 0 || agenincomelimit.median2020 == '' || agenincomelimit.median2020 == null ? 'N/A' : (agenincomelimit.median2020).toLocaleString(undefined, { minimumFractionDigits: 0 })}</h3>
                                                    <p className="mb-0 para secondaryColor">Median Income Limits of {agenincomelimit.County_Name}, {agenincomelimit.State_Alpha}</p>
                                                </div>
                                                <div className="brdrLine3 itemWebsite"></div>






                                                <div className="itemWebsite">
                                                    <div className="tablePad">
                                                        <table className="table basicInfoTable">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" className="secondaryColor font-weight500 fontSize14">Persons
                                                                        in<br /> Family</th>
                                                                    <th scope="col">
                                                                        <h5 className="mb-0 skyBlueColor font-weight700">80%</h5>
                                                                        <div
                                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                                            Low Income Limit<span><a href="/income-limits" className="infoIcon"><img
                                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <h5 className="mb-0 skyBlueColor font-weight700">50%</h5>
                                                                        <div
                                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                                            Low Income Limit<span><a href="/income-limits" className="infoIcon"><img
                                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <h5 className="mb-0 skyBlueColor font-weight700">30%</h5>
                                                                        <div
                                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                                            Low Income Limit<span><a href="/income-limits" className="infoIcon"><img
                                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1 Person</th>
                                                                    <td>{agenincomelimit.l80_1 == '' || agenincomelimit.l80_1 == null || agenincomelimit.l80_1 == 0 ? 'N/A' : `$${(agenincomelimit.l80_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.l50_1 == '' || agenincomelimit.l50_1 == null || agenincomelimit.l50_1 == 0 ? 'N/A' : `$${(agenincomelimit.l50_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.ELI_1 == '' || agenincomelimit.ELI_1 == null || agenincomelimit.ELI_1 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2 Person</th>
                                                                    <td>{agenincomelimit.l80_2 == '' || agenincomelimit.l80_2 == null || agenincomelimit.l80_2 == 0 ? 'N/A' : `$${(agenincomelimit.l80_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.l50_2 == '' || agenincomelimit.l50_2 == null || agenincomelimit.l50_2 == 0 ? 'N/A' : `$${(agenincomelimit.l50_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.ELI_2 == '' || agenincomelimit.ELI_2 == null || agenincomelimit.ELI_2 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                </tr>
                                                                <tr className="backColorGround">
                                                                    <th scope="row">3 Person</th>
                                                                    <td>{agenincomelimit.l80_3 == '' || agenincomelimit.l80_3 == null || agenincomelimit.l80_3 == 0 ? 'N/A' : `$${(agenincomelimit.l80_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.l50_3 == '' || agenincomelimit.l50_3 == null || agenincomelimit.l50_3 == 0 ? 'N/A' : `$${(agenincomelimit.l50_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.ELI_3 == '' || agenincomelimit.ELI_3 == null || agenincomelimit.ELI_3 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4 Person</th>
                                                                    <td>{agenincomelimit.l80_4 == '' || agenincomelimit.l80_4 == null || agenincomelimit.l80_4 == 0 ? 'N/A' : `$${(agenincomelimit.l80_4).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.l50_4 == '' || agenincomelimit.l50_4 == null || agenincomelimit.l50_4 == 0 ? 'N/A' : `$${(agenincomelimit.l50_4).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.ELI_4 == '' || agenincomelimit.ELI_4 == null || agenincomelimit.ELI_4 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_4).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5 Person</th>
                                                                    <td>{agenincomelimit.l80_5 == '' || agenincomelimit.l80_5 == null || agenincomelimit.l80_5 == 0 ? 'N/A' : `$${(agenincomelimit.l80_5).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.l50_5 == '' || agenincomelimit.l50_5 == null || agenincomelimit.l50_5 == 0 ? 'N/A' : `$${(agenincomelimit.l50_5).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                    <td>{agenincomelimit.ELI_5 == '' || agenincomelimit.ELI_5 == null || agenincomelimit.ELI_5 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_5).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>




                                                <div className="itemMobile">
                                                    <div className="owl-carousel owl-theme tableSlider">
                                                        <div className="item">
                                                            <div className="tableBox">
                                                                <div className="tableHeader">
                                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">1 Person</h4>
                                                                </div>
                                                                <div className="tableBody">
                                                                    <ul className="noMarginPad">
                                                                        <li className="d-flex align-items-center tableRow">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                Low Income Limit
                                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                                Amount</p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                                <span
                                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l80_1 == '' || agenincomelimit.l80_1 == null || agenincomelimit.l80_1 == 0 ? 'N/A' : `$${(agenincomelimit.l80_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l50_1 == '' || agenincomelimit.l50_1 == null || agenincomelimit.l50_1 == 0 ? 'N/A' : `$${(agenincomelimit.l50_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.ELI_1 == '' || agenincomelimit.ELI_1 == null || agenincomelimit.ELI_1 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="tableBox">
                                                                <div className="tableHeader">
                                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">2 Person</h4>
                                                                </div>
                                                                <div className="tableBody">
                                                                    <ul className="noMarginPad">
                                                                        <li className="d-flex align-items-center tableRow">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                Low Income Limit
                                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                                Amount</p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                                <span
                                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l80_2 == '' || agenincomelimit.l80_2 == null || agenincomelimit.l80_2 == 0 ? 'N/A' : `$${(agenincomelimit.l80_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l50_2 == '' || agenincomelimit.l50_2 == null || agenincomelimit.l50_2 == 0 ? 'N/A' : `$${(agenincomelimit.l50_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.ELI_2 == '' || agenincomelimit.ELI_2 == null || agenincomelimit.ELI_2 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="tableBox">
                                                                <div className="tableHeader">
                                                                    <h4 className="mb-0 secondaryColor fontSize16 font-weight700">3 Person</h4>
                                                                </div>
                                                                <div className="tableBody">
                                                                    <ul className="noMarginPad">
                                                                        <li className="d-flex align-items-center tableRow">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                Low Income Limit
                                                                                <span><a href=""><i className="fas fa-info-circle"></i></a></span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize12 secondaryColor">
                                                                                Amount</p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">80%</h5>
                                                                                <span
                                                                                    className="font-weight500 fontSize12 secondaryColor">Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l80_3 == '' || agenincomelimit.l80_3 == null || agenincomelimit.l80_3 == 0 ? 'N/A' : `$${(agenincomelimit.l80_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.l50_3 == '' || agenincomelimit.l50_3 == null || agenincomelimit.l50_3 == 0 ? 'N/A' : `$${(agenincomelimit.l50_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                                            <div
                                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                                    Low</span>
                                                                            </div>
                                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                                {agenincomelimit.ELI_3 == '' || agenincomelimit.ELI_3 == null || agenincomelimit.ELI_3 == 0 ? 'N/A' : `$${(agenincomelimit.ELI_3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }

                                        <div className="brdrLine responsive-15"></div>


                                        <div className="titleHeading">
                                            <h3 className="fontSize18 font-weight700">Know More About The Fair Market Rents in {agendetail.city}, {agendetail.state}</h3>
                                            <p className="fontSize16 font-weight400 mb-0 colorBlue lineFixedNumber4">Fair Market Rents are
                                                HUD's determination of the average rents in a particular area for each bedroom size. The
                                                FMRs are set each year based on the rental rates of unsubsidized units so that
                                                participants in HUD programs have equal access for affordable housing. Here are the Fair
                                                Market Rents for {agendetail.county} County, {agendetail.state}:</p>
                                        </div>

                                        {
                                            agenfmr == undefined || agenfmr == null || agenfmr == '' ?
                                                <>
                                                    <div className="bedroomBox itemWebsite">
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">N/A</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">N/A</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">N/A</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">N/A</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">N/A</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemMobile">
                                                        <div className="bedroomBox2">
                                                            <div className="d-flex align-items-top w-100">
                                                                <div className="w-50 brdrRight">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">N/A</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">N/A</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">N/A</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50 padLeft16">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Three-Bedroom
                                                                            </p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">N/A</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Four-Bedroom
                                                                            </p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">N/A</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="brdrLine responsive-15"></div>
                                                </>
                                                :
                                                <>
                                                    <div className="bedroomBox itemWebsite">
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">{agenfmr.fmr0 == 0 || agenfmr.fmr0 == '' ? 'N/A' : `$${(agenfmr.fmr0).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">{agenfmr.fmr1 == 0 || agenfmr.fmr1 == '' ? 'N/A' : `$${(agenfmr.fmr1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">{agenfmr.fmr2 == 0 || agenfmr.fmr2 == '' ? 'N/A' : `$${(agenfmr.fmr2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">{agenfmr.fmr3 == 0 || agenfmr.fmr3 == '' ? 'N/A' : `$${(agenfmr.fmr3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h4>
                                                        </div>
                                                        <div className="bedroomBoxFlex">
                                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">{agenfmr.fmr4 == 0 || agenfmr.fmr4 == '' ? 'N/A' : `$${(agenfmr.fmr4).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="itemMobile">
                                                        <div className="bedroomBox2">
                                                            <div className="d-flex align-items-top w-100">
                                                                <div className="w-50 brdrRight">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">{agenfmr.fmr0 == 0 || agenfmr.fmr0 == '' ? 'N/A' : `$${(agenfmr.fmr0).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">{agenfmr.fmr1 == 0 || agenfmr.fmr1 == '' ? 'N/A' : `$${(agenfmr.fmr1).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom</p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">{agenfmr.fmr2 == 0 || agenfmr.fmr2 == '' ? 'N/A' : `$${(agenfmr.fmr2).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50 padLeft16">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Three-Bedroom
                                                                            </p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">{agenfmr.fmr3 == 0 || agenfmr.fmr3 == '' ? 'N/A' : `$${(agenfmr.fmr3).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Four-Bedroom
                                                                            </p>
                                                                            <h5 className="mb-0 colorBlue font-weight700">{agenfmr.fmr4 == 0 || agenfmr.fmr4 == '' ? 'N/A' : `$${(agenfmr.fmr4).toLocaleString(undefined, { minimumFractionDigits: 0 })}`}</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="brdrLine responsive-15"></div>

                                                </>
                                        }




                                        {
                                            agendetail.lat == null || agendetail.lng == null || agendetail.lat == '' || agendetail.lng == '' ?
                                                null
                                                :
                                                <>
                                                    <div className="titleHeading">
                                                        <div className="d-flex align-items-center">
                                                            <h3 className="fontSize18 font-weight700">{agendetail.name} Location in {agendetail.state}</h3>
                                                            <div className="ml-auto itemMobile">
                                                                <a href="" className="ml-auto fontSize16 font-weight700 skyBlueColor">Get
                                                                    Directions</a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <p className="fontSize16 font-weight400 mb-0 colorBlue">
                                                                {agendetail.county} County -
                                                                {agendetail.address}, {agendetail.city}, {agendetail.state}, {agendetail.zip}
                                                            </p>
                                                            <a href="" className="ml-auto fontSize16 font-weight700 skyBlueColor itemWebsite">Get
                                                                Directions</a>
                                                        </div>
                                                        <div className="mapImage posRel">
                                                            <SinglePointMap propdata={agendetail} />
                                                        </div>
                                                    </div>
                                                    <div className="brdrLine itemWebsite"></div>
                                                </>
                                        }
                                        {
                                            agenhas == undefined || agenhas == [] || agenhas == '' || agenhas == null
                                                ?
                                                null
                                                :
                                                <>
                                                    <div className="titleHeading res24Top">
                                                        <h3 className="fontSize18 font-weight700">Housing Authorities near {agendetail.city}, {agendetail.state}</h3>
                                                    </div>
                                                    <HousingAuthorityforGeneral prophousingAuthority={agenhas} />
                                                    <div className="brdrLine responsive-15"></div>
                                                </>
                                        }


                                        <div>
                                            <GoogleADS placeholderId='145' width='970px' height='250px' slotno='1279625173' />
                                        </div>


                                        {/* <div className="titleHeading res24Top">
                                            <h3 className="fontSize18 font-weight700">Hosdfusing Authorities near Anaheim</h3>
                                        </div>
                                        <div className="itemWebsite">
                                            <table className="table agencyDetailtable HousingAutho">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Agency</th>
                                                        <th scope="col">Section 8<br /> Vouchers</th>
                                                        <th scope="col">Housing<br /> Units</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="media">
                                                                <img className="mr-3" src={require('../../assets/img/author1.png').default} alt="" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Garden
                                                                        Grove Housing<br /> Authority</h5>
                                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-1">Garden
                                                                        Grove, CA - 3.66 Miles</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>2,337</td>
                                                        <td>N/A</td>
                                                        <td>
                                                            <span className="statusTag fontSize14 font-weight500 closed mr-2">
                                                                Closed
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="" className="closeBttn">Contact</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="media">
                                                                <img className="mr-3" src={require('../../assets/img/author2.png').default} alt="" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Orange
                                                                        Housing<br /> Authority</h5>
                                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-1">Garden
                                                                        Grove, CA - 6.55 Miles</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>147</td>
                                                        <td>279</td>
                                                        <td>
                                                            <span className="statusTag fontSize14 font-weight500 closed mr-2">
                                                                Closed
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="" className="closeBttn">Contact</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="media">
                                                                <img className="mr-3" src={require('../../assets/img/author3.png').default} alt="" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Santa Ana
                                                                        Housing<br />Authority</h5>
                                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-1">Garden
                                                                        Grove, CA - 9.89 Miles</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>220</td>
                                                        <td>153</td>
                                                        <td>
                                                            <span className="statusTag fontSize14 font-weight500 open mr-2">
                                                                Open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="" className="closeBttn">Contact</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="media">
                                                                <img className="mr-3" src={require('../../assets/img/author4.png').default} alt="" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Norwalk
                                                                        Housing<br />Authority</h5>
                                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-1">Garden
                                                                        Grove, CA - 11.32 Miles</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>447</td>
                                                        <td>N/A</td>
                                                        <td>
                                                            <span className="statusTag fontSize14 font-weight500 open mr-2">
                                                                Open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="" className="closeBttn">Contact</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="media">
                                                                <img className="mr-3" src={require('../../assets/img/author5.png').default} alt="" />
                                                                <div className="media-body">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Lawndale
                                                                        Housing<br />Authority</h5>
                                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-1">Garden
                                                                        Grove, CA - 12.55 Miles</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>N/A</td>
                                                        <td>N/A</td>
                                                        <td>
                                                            <span className="statusTag fontSize14 font-weight500 open mr-2">
                                                                Open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="" className="closeBttn">Contact</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="itemMobile ">
                                            <ul className="noMarginPad listStyleNone agendtailList">
                                                <li>
                                                    <div className="media">
                                                        <img className="mr-3" src={require('../../assets/img/author1.png').default} alt="" />
                                                        <div className="media-body">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Garden Grove
                                                                    Housing<br /> Authority</h5>
                                                                <div className="ml-auto">
                                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                                        Closed
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden Grove, CA
                                                            </p>
                                                            <div className="d-flex align-items-center w-100 listTop12">
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">2,337
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Section 8 Vouchers</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Housing Units</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="brdrLinee"></li>
                                                <li>
                                                    <div className="media">
                                                        <img className="mr-3" src={require('../../assets/img/author2.png').default} alt="" />
                                                        <div className="media-body">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Orange
                                                                    Housing<br /> Authority</h5>
                                                                <div className="ml-auto">
                                                                    <span className="statusTag fontSize12 font-weight500 openingSoon">
                                                                        Opening Soon
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden Grove, CA
                                                            </p>
                                                            <div className="d-flex align-items-center w-100 listTop12">
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">2,337
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Section 8 Vouchers</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Housing Units</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="brdrLinee"></li>
                                                <li>
                                                    <div className="media">
                                                        <img className="mr-3" src={require('../../assets/img/author3.png').default} alt="" />
                                                        <div className="media-body">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Santa Ana
                                                                    Housing<br /> Authority</h5>
                                                                <div className="ml-auto">
                                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden Grove, CA
                                                            </p>
                                                            <div className="d-flex align-items-center w-100 listTop12">
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">2,337
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Section 8 Vouchers</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Housing Units</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="brdrLinee"></li>
                                                <li>
                                                    <div className="media">
                                                        <img className="mr-3" src={require('../../assets/img/author4.png').default} alt="" />
                                                        <div className="media-body">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Norwalk
                                                                    Housing<br /> Authority</h5>
                                                                <div className="ml-auto">
                                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden Grove, CA
                                                            </p>
                                                            <div className="d-flex align-items-center w-100 listTop12">
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">2,337
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Section 8 Vouchers</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Housing Units</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="brdrLinee"></li>
                                                <li>
                                                    <div className="media">
                                                        <img className="mr-3" src={require('../../assets/img/author5.png').default} alt="" />
                                                        <div className="media-body">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Lawndale
                                                                    Housing<br /> Authority</h5>
                                                                <div className="ml-auto">
                                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden Grove, CA
                                                            </p>
                                                            <div className="d-flex align-items-center w-100 listTop12">
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">2,337
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Section 8 Vouchers</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="w-50">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li>
                                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                            </h5>
                                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                Housing Units</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="brdrLine responsive-15"></div> */}


                                        <div className="titleHeading botttomDetailSec">
                                            <h3 className="fontSize24 font-weight700">Local Information for&nbsp;
                                                {agenlocalinfo.hasOwnProperty('name')
                                                    ?
                                                    agenlocalinfo.name
                                                    :
                                                    (
                                                        agenlocalinfo.hasOwnProperty('city_name')
                                                            ?
                                                            agenlocalinfo.city_name
                                                            :
                                                            agendetail.city
                                                    )
                                                }</h3>

                                            {
                                                agenlocalinfo.info == '' || agenlocalinfo.info == null ?
                                                    <p className="fontSize16 font-weight400 colorBlue">No record found.</p>
                                                    :
                                                    <p className="fontSize16 font-weight400 colorBlue" dangerouslySetInnerHTML={{ __html: replaceSpace(agenlocalinfo.info) }} />
                                            }

                                            {/* <p className="fontSize16 font-weight400 colorBlue">Anaheim is a city inhabited by over 300
                                                thousand individuals, making it the most populous in Orange County, California. When it
                                                comes to the land area, however, Anaheim comes in second in the county, next to Irvine.
                                            </p>
                                            <p className="fontSize16 font-weight400 colorBlue">The city of Anaheim is quite famous for its
                                                theme parks, convention center, sports teams, and other various tourist attractions. To
                                                most of the locals and tourists though, the vibrancy of the city and its many diverse
                                                cultures and traditions is what made them fall in love with Anaheim.</p>
                                            <p className="fontSize16 font-weight400 colorBlue">On the other hand, the housing condition in
                                                this rather beautiful city is really not as difficult as it may seem. Granted that the
                                                state of California was one of those that were hit quite hard during the housing crisis
                                                and the recession, the housing opportunities in the city of Anaheim has actually gotten
                                                better since then.</p>
                                            <h3 className="fontSize18 font-weight700">Affordable Housing in Anaheim, CA</h3>
                                            <p className="fontSize16 font-weight400 colorBlue">In this city, the Anaheim Housing Authority
                                                (AHA) is the agency responsible for the proper administration of public housing
                                                programs, rental assistance, and other community development projects aimed at the
                                                revitalization of the city’s neighborhoods.</p>
                                            <p className="fontSize16 font-weight400 colorBlue">There are many housing programs managed by
                                                the housing authority and administered to the low income families, senior citizens, and
                                                the physically and mentally challenged individuals of the city. There are affordable
                                                apartment deals for people looking to rent and the downpayment assistance program for
                                                families looking to buy their first home.</p>
                                            <p className="fontSize16 font-weight400 colorBlue">There are different ways to receive housing
                                                assistance in the city of Anaheim. You just have to know what they are, and whether or
                                                not you are eligible for the low income housing tax credit and other housing programs
                                                they might have available.</p>
                                            <h3 className="fontSize18 font-weight700">Rental Assistance in Anaheim, CA</h3>
                                            <p className="fontSize16 font-weight400 colorBlue">The Section 8 Voucher Program, or Housing
                                                Choice Voucher (HCV), is the main rental assistance program provided by the housing
                                                authority to the residents of Anaheim. Funded by the US Department of Housing and Urban
                                                Development (HUD), the HCV promotes equal housing opportunities to the
                                                economically-challenged families who participate in the program.</p>
                                            <p className="fontSize16 font-weight400 colorBlue mb-0">If you qualify for the HCV program, you
                                                can opt for decent rental housing deals in the private sector. This means that if you
                                                receive rental assistance from the agency through the Section 8 Voucher program, you
                                                won’t have to stay in public housing. Your family deserves better, so find your place
                                                now and get your loved ones a good place to live in.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 itemWebsite">
                                    <div className="detailRightSec detailRightSecleft">


                                        <div className="checkAvailability">
                                            <div className="sideFormBlock">
                                                <div className="SectionBlock responsive15 availabilitySection">
                                                    <div className="d-flex align-items-center">
                                                        <h3 className="colorBlue font-weight700 fontSize18">Check Availability in {agendetail.name} in {agendetail.city}, {agendetail.state} </h3>
                                                    </div>


                                                    {/* <form className="rentalForm">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Full Name</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Email Address"
                                                            value="Jonath" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Phone Number</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email Address</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp"
                                                             placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Move In Date</label>
                                                        <div className="posRel calnderIcon">
                                                            <input type="email" className="form-control" id=""
                                                                aria-describedby="emailHelp"
                                                                placeholder="Choose Move In Date" />
                                                            <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Message</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div
                                                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                        <div className="Resnoauto w-100">
                                                            <a href="" className="brdrRadius4 transition w-100"
                                                                data-toggle="modal" data-target="#exampleModal3"><img
                                                                    src={require('../../assets/img/mail.svg').default} />Check Availability</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Modal-->
                                                <div className="modal fade rentalModal availabilityModal" id="exampleModal3"
                                                    tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered widthModal"
                                                        role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header d-flex align-items-center">
                                                                <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                                    id="exampleModalLongTitle" style={{ color: "#fff" }}>Title
                                                                </h5>
                                                            </div>
                                                            <div className="modal-body rentalForm availBodyBlock">
                                                                <div className="thankyouBlock text-center">
                                                                    <img src={require('../../assets/img/thankYou.png').default} />
                                                                    <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                                    <p className="fontSize18 font-weight400 secondaryColor">
                                                                        Thanks for submitting your inquiry!<br />
                                                                        Your message has been sent</p>
                                                                    <a href="" className="doneBtn brdrRadius4">Done</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form> */}

                                                    {/* <CheckAvailibilityForm /> */}
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
                                                                        placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"
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
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                    <div className="Resnoauto">
                                                                        <button
                                                                            // onClick={captchacheck}
                                                                            className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center"
                                                                            type="submit">
                                                                            <img src={require("../../assets/img/mail.svg").default} />
                                                                            Check Availability
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <CheckAvailabilityAgencyDetail /> */}


                                        {/* <div className="checkAvailability">
                                <div className="sideFormBlock">
                                    <div className="SectionBlock responsive15 availabilitySection">
                                        <div className="d-flex align-items-center">
                                            <h2 className="colorBlue font-weight700 fontSize18">Check Availability</h2>
                                        </div>
                                        <form className="rentalForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Full Name</label>
                                                        <input type="text" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Enter name"
                                                            value={checkAvailability.name} onChange={(e) => setcheckAvailability({ ...checkAvailability, name: e.target.value })} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Phone Number</label>
                                                        <input type="number" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Phone Number"
                                                            value={checkAvailability.phone} onChange={(e) => setcheckAvailability({ ...checkAvailability, phone: e.target.value })} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email Address</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp"
                                                             placeholder="Email Address"
                                                            value={checkAvailability.emailid} onChange={(e) => setcheckAvailability({ ...checkAvailability, emailid: e.target.value })} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Move In Date</label>
                                                        <div className="posRel calnderIcon">
                                                            <input type="email" className="form-control" id=""
                                                                aria-describedby="emailHelp"
                                                                placeholder="Choose Move In Date"
                                                                value={checkAvailability.date} onChange={(e) => setcheckAvailability({ ...checkAvailability, date: e.target.value })} required />
                                                            <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Message</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            value={checkAvailability.messagetxt} onChange={(e) => setcheckAvailability({ ...checkAvailability, messagetxt: e.target.value })} required
                                                            placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                    </div>
                                                </div>


                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div
                                                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                        <div className="Resnoauto w-100">
                                                            <a href="" className="brdrRadius4 transition w-100"
                                                                data-toggle="modal" data-target="#exampleModal3"><img
                                                                    src={require('../../assets/img/mail.svg').default} /><button onClick={() => {
                                                                        toggleModal();
                                                                    }}>Check Availability</button></a>
                                                        </div>
                                                    </div>
                                                </div>













                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            */}


                                        <AffordabilityCal />

                                        {/* <div className="accordionBoxInfo losAngeles">
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseFour" aria-expanded="true"
                                                    aria-controls="collapseFour">
                                                    Los Angeles County Quick Facts
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseFour"
                                                    aria-expanded="true" aria-controls="collapseFour">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                                            data-parent="#accordion4">
                                            <div className="card-body">
                                                <ul className="noMarginPad listStyleNone">
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Population<span className="ml-auto colorBlue">10,116,705</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Persons per household<span className="ml-auto colorBlue">3.01</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Housing units in multi-units<br />structure<span
                                                                className="ml-auto colorBlue">42.2%</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Homeownership Rate<span className="ml-auto colorBlue">46.9%</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Housing Units<span className="ml-auto colorBlue">3,462,202</span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Yearly Income per Person<span
                                                                className="ml-auto colorBlue">$27,749</span></p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                            Median Household Income<span
                                                                className="ml-auto colorBlue">$55,909</span></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                        <div >
                                            <GoogleADS placeholderId='632' width='300px' height='250px' slotno='4974014528' />
                                        </div>


                                        <CityCountyQuickFacts propincome={agenquickfacts} />


                                        <div >
                                            <GoogleADS placeholderId='149' width='300px' height='600px' slotno='2347851182' />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>












                        <Modal isOpen={isOpen}
                            onRequestClose={toggleModal} className="AnaheimHousingAuthorityModal">


                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title w-100 text-center font-weight700"
                                        id="exampleModalLabell">{agendetail.name}</h5>
                                    <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="modalLanding">
                                        <h5 className="fontSize18 fontSize500">Section 8 Wait List</h5>
                                        <div className="d-flex align-items-bottom">

                                            {
                                                agendetail.is_section_8_wating_list == 0 ?
                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                        Closed
                                                    </span>
                                                    :
                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                        Open
                                                    </span>
                                            }
                                            {/* <span className="statusTag fontSize14 font-weight500 open">
                                                Open
                                            </span> */}
                                            <p className="mb-0 fontSize16 font-weight400 colorBlue dateTime"
                                                data-toggle="modal" data-target="#exampleModal"
                                                style={{ cursor: "pointer" }}>

                                                {/* {agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '' ? 'N/A' : agendatedetail.open_date} - {agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '' ? 'N/A' : agendatedetail.close_date} */}
                                                {
                                                    (agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '') && (agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '') ?
                                                        'N/A'
                                                        :
                                                        <>
                                                            {agendatedetail.open_date == '0000-00-00' || agendatedetail.open_date == '' ? 'N/A' : `${dateconvert(agendatedetail.open_date).toLocaleDateString("en-US", options)}`} - {agendatedetail.close_date == '0000-00-00' || agendatedetail.close_date == '' ? 'N/A' : `${dateconvert(agendatedetail.close_date).toLocaleDateString("en-US", options)}`}
                                                        </>
                                                }

                                                , {agendatedetail.open_time == '' ? 'N/A' : agendatedetail.open_time} - {agendatedetail.close_time == '' ? 'N/A' : agendatedetail.close_time}
                                            </p>
                                        </div>
                                        <p
                                            className="mb-0 fontSize14 font-weight400 secondaryColor landingModalPara">
                                            {
                                                agendatedetail.description == '' ?
                                                    'According to recently updated public information sources, this agency appears to have open waiting list. Please contact them directly to confirm the current status of their waiting lists for public housing.'
                                                    :
                                                    agendatedetail.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
                                            }</p>
                                        <div className="twoButtonsModal">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <a href={`tel:${agendetail.phone}`} className="bluebtnModal">
                                                        {agendetail.phone}
                                                    </a>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <a href="" className="bluebtnModal">
                                                        Contact
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Modal>


                        <Modal isOpen={isOpenpublic}
                            onRequestClose={toggleModalpublic} className="AnaheimHousingAuthorityModal">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title w-100 text-center font-weight700"
                                        id="exampleModalLabell">{agendetail.name}</h5>
                                    <button type="button" className="close" onClick={toggleModalpublic} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="modalLanding">
                                        <h5 className="fontSize18 fontSize500">Public Housing Wait List</h5>
                                        <div className="d-flex align-items-bottom">
                                            {/* <span className="statusTag fontSize14 font-weight500 open">
                                                Open
                                            </span> */}
                                            {
                                                agendetail.is_wating_closed == 1
                                                    ?
                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                        Closed
                                                    </span>
                                                    :
                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                        Open
                                                    </span>
                                            }
                                            <p className="mb-0 fontSize16 font-weight400 colorBlue dateTime"
                                                data-toggle="modal" data-target="#exampleModal"
                                                style={{ cursor: "pointer" }}>
                                                {/* {agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '' ? 'N/A' : agendatedetail.open_date_ha} - {agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '' ? 'N/A' : agendatedetail.close_date_ha} */}
                                                {
                                                    (agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '') && (agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '') ?
                                                        'N/A'
                                                        :
                                                        <>
                                                            {agendatedetail.open_date_ha == '0000-00-00' || agendatedetail.open_date_ha == '' ? 'N/A' : `${dateconvert(agendatedetail.open_date_ha).toLocaleDateString("en-US", options)}`} - {agendatedetail.close_date_ha == '0000-00-00' || agendatedetail.close_date_ha == '' ? 'N/A' : `${dateconvert(agendatedetail.close_date_ha).toLocaleDateString("en-US", options)}`}
                                                        </>
                                                }
                                                , {agendatedetail.open_time_ha == '' ? 'N/A' : agendatedetail.open_time_ha} - {agendatedetail.close_time_ha == '' ? 'N/A' : agendatedetail.close_time_ha}
                                            </p>
                                        </div>
                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor landingModalPara">
                                            {
                                                agendatedetail.description == '' ?
                                                    'According to recently updated public information sources, this agency appears to have open waiting list. Please contact them directly to confirm the current status of their waiting lists for public housing.'
                                                    :
                                                    agendatedetail.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
                                            }
                                        </p>
                                        <div className="twoButtonsModal">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <a href={`tel:${agendetail.phone}`} className="bluebtnModal">
                                                        {agendetail.phone}
                                                    </a>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <a href="" className="bluebtnModal">
                                                        Contact
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Modal>



                        {/* 
                        <Modal className="agencydetail-modal" isOpen={isOpenContact}
                            onRequestClose={toggleModalContact}>


                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title w-100 text-center font-weight700"
                                        id="exampleModalLabel">Contact {agendetail.name}</h5>
                                    <button type="button" className="close" onClick={toggleModalContact}
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmitContact}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Full Name <span
                                                        className="labelMark">*</span></label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter name"
                                                        value={formDataagency.name} onChange={(e) => setformDataagency({ ...formDataagency, name: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Address </label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp" placeholder="Address"
                                                        value={formDataagency.address} onChange={(e) => setformDataagency({ ...formDataagency, address: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">City</label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="City"
                                                        value={formDataagency.city} onChange={(e) => setformDataagency({ ...formDataagency, city: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label
                                                                for="exampleFormControlSelect1">State</label>
                                                            <select className="form-control"
                                                                id="exampleFormControlSelect1"
                                                                value={formDataagency.state} onChange={(e) => setformDataagency({ ...formDataagency, state: e.target.value })} required >
                                                                {statelist.length == 0 ?
                                                                    <option>No states found</option>
                                                                    :
                                                                    statelist.map((val) => {
                                                                        return (
                                                                            <option>{val.state_abbreviation}</option>
                                                                        );
                                                                    })
                                                                }


                                                                
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">ZIP</label>
                                                            <input type="number" className="form-control"
                                                                id="" aria-describedby="emailHelp"
                                                                placeholder="Email Address"
                                                                value={formDataagency.zip} onChange={(e) => setformDataagency({ ...formDataagency, zip: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">Email Address <span
                                                        className="labelMark">*</span></label>
                                                    <input type="email" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email Address"
                                                        value={formDataagency.emailid} onChange={(e) => setformDataagency({ ...formDataagency, emailid: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">Phone Number <span
                                                        className="labelMark">*</span></label>
                                                    <input type="number" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Phone Number"
                                                        value={formDataagency.phone} onChange={(e) => setformDataagency({ ...formDataagency, phone: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">Move-In Date</label>
                                                    <div className="posRel calnderIcon">
                                                        <input type="date" className="form-control" id=""
                                                            aria-describedby="emailHelp"
                                                            placeholder="Move-In Date"
                                                            value={formDataagency.date} onChange={(e) => setformDataagency({ ...formDataagency, date: e.target.value })} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">Occupants</label>
                                                            <div className="posRel calnderIcon">
                                                                <input type="number"
                                                                    className="form-control" id=""
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Number of occupants"
                                                                    value={formDataagency.occupants} onChange={(e) => setformDataagency({ ...formDataagency, occupants: e.target.value })} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">Monthly Income</label>
                                                            <input type="number" className="form-control"
                                                                id="" aria-describedby="emailHelp"
                                                                placeholder="Monthly Income"
                                                                value={formDataagency.monthlyIncome} onChange={(e) => setformDataagency({ ...formDataagency, monthlyIncome: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="radioSec">
                                                    <div className="form-group mb-0">
                                                        <label>Do you have a voucher?</label>
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <input type="radio" id="test1"
                                                                    name="radio-group"
                                                                    value="Yes"
                                                                    checked={formDataagency.voucher == "Yes"}
                                                                    onChange={onValChange}
                                                                />
                                                                <label for="test1">Yes</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" id="test2"
                                                                    name="radio-group"
                                                                    value="No"
                                                                    checked={formDataagency.voucher == "No"}
                                                                    onChange={onValChange}
                                                                />
                                                                <label for="test2">No</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" id="test3"
                                                                    value="on waiting list"
                                                                    name="radio-group"
                                                                    checked={formDataagency.voucher = "on waiting list"}
                                                                    onChange={onValChange}
                                                                />
                                                                <label for="test3">On Waiting List</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brdrLine marLftRgt"></div>
                                        <div>
                                            <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                                Conditions:</h5>
                                            <div className="form-group">
                                                <textarea className="form-control"
                                                    id="exampleFormControlTextarea1" rows="3"
                                                    value={formDataagency.disclaimer}
                                                    //  onChange={(e) => setformDataagency({ ...formDataagency, disclaimer: e.target.value })} required
                                                    placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <div className="recaptcha_block">
                                                    <ReCAPTCHA
                                                        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                                        onChange={captchaHandle} />
                                                </div>
                                                {
                                                    captchaValue == false
                                                        ?
                                                        <span>Please Varify Captcha</span>
                                                        :
                                                        null

                                                }
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" onClick={captchacheck}
                                                className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </Modal> */}


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







                        <Modal isOpen={isOpenQualify}
                            onRequestClose={toggleModalQualify} className="prerental agencydetail-modal modalclassqualify">

                            <div className='modal-content'>


                                <div className="modal-header">
                                    <h5 className="modal-title w-100 text-center font-weight700"
                                        id="exampleModalLabel">Pre-Rental Qualify</h5>
                                    <button type="button" className="close"
                                        aria-label="Close" onClick={toggleModalQualify}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>


                                <div className="modal-body">
                                    <form onSubmit={handleSubmitNewModalQualifyNow}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">First Name <span
                                                        className="labelMark">*</span></label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="First Name"
                                                        value={newModalFormDataQualifyNow.first_name} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, first_name: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="">Last Name<span
                                                        className="labelMark">*</span></label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Last Name"
                                                        value={newModalFormDataQualifyNow.last_name} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, last_name: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">Email Address <span
                                                        className="labelMark">*</span></label>
                                                    <input type="email" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email Address"
                                                        value={newModalFormDataQualifyNow.email_address} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, email_address: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="">Phone Number <span
                                                        className="labelMark">*</span></label>
                                                    <input type="number" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="Phone Number"
                                                        value={newModalFormDataQualifyNow.phone} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, phone: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Address </label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp" placeholder="Address"
                                                        value={newModalFormDataQualifyNow.address} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, address: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="">City</label>
                                                    <input type="text" className="form-control" id=""
                                                        aria-describedby="emailHelp"
                                                        placeholder="City"
                                                        value={newModalFormDataQualifyNow.city} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, city: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label
                                                        for="exampleFormControlSelect1">State</label>
                                                    <select className="form-control"
                                                        id="exampleFormControlSelect1"
                                                        value={newModalFormDataQualifyNow.state} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, state: e.target.value })} required >
                                                        {statelist.length == 0 ?
                                                            <option>No states found</option>
                                                            :
                                                            statelist.map((val) => {
                                                                return (
                                                                    <option>{val.state_abbreviation}</option>
                                                                );
                                                            })
                                                        }

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">ZIP</label>
                                                    <input type="number" className="form-control"
                                                        id="" aria-describedby="emailHelp"
                                                        placeholder="ZIP"
                                                        value={newModalFormDataQualifyNow.zip} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, zip: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="">Move-In Date</label>
                                                    <div className="posRel calnderIcon">
                                                        <input type="date" className="form-control" id=""
                                                            aria-describedby="emailHelp"
                                                            placeholder="Move-In Date"
                                                            value={newModalFormDataQualifyNow.move_date} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, move_date: e.target.value })} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
                                                <div className="form-group">
                                                    <label for="">Occupants</label>
                                                    <select className="form-control"
                                                        id="exampleFormControlSelect1"
                                                        value={newModalFormDataQualifyNow.occupants} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, occupants: e.target.value })} required >
                                                        {
                                                            numberofoccupants.map((val) => {
                                                                return (
                                                                    <option>{val}</option>
                                                                );
                                                            })
                                                        }

                                                    </select>

                                                    {/* <div className="posRel calnderIcon">
                                                <input type="number"
                                                    className="form-control" id=""
                                                    aria-describedby="emailHelp"
                                                    placeholder="Number of occupants"
                                                    value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required />
                                            </div> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label for="">Monthly Income</label>
                                                    <input type="number" className="form-control"
                                                        id="" aria-describedby="emailHelp"
                                                        placeholder="Income"
                                                        value={newModalFormDataQualifyNow.monthlyIncome} onChange={(e) => setnewModalFormDataQualifyNow({ ...newModalFormDataQualifyNow, monthlyIncome: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label>Do you have a voucher?</label>
                                                <div className="d-flex radioMarginBlock">
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            value={"Yes"}
                                                            name="priority"
                                                            onChange={onradioChange}
                                                        />
                                                        <label className="form-check-label">Yes</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            value={"No"}
                                                            className="form-check-input"
                                                            name="priority"
                                                            onChange={onradioChange}
                                                        />
                                                        <label className="form-check-label">No</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            value={"On Waiting List"}
                                                            className="form-check-input"
                                                            name="priority"
                                                            onChange={onradioChange}
                                                        />
                                                        <label className="form-check-label">On waiting list</label>
                                                    </div>
                                                </div>

                                                {/* <button onClick={onClick}> Click Value </button> */}
                                            </div>
                                            {/* <p>{radiobutton}</p> */}
                                        </div>
                                        <div className="brdrLine"></div>
                                        <div className="condiBlock form-group">
                                            <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                                Conditions:</h5>

                                            <p className="secondaryColor fontSize14 mb-0 maxParaScroll">
                                                This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions.
                                            </p>
                                            {/* <textarea className="form-control"
                                            id="exampleFormControlTextarea1" rows="3"
                                            value={formData.disclaimer}
                                            placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea> */}

                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">
                                            <div className="form-group">
                                                {/* <ReCAPTCHA */}
                                                {/* <div className="recaptcha_block">
											<ReCAPTCHA
												sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
												onChange={captchaHandle} />
										</div>
										{
											captchaValue == false
												?
												<span>Please Varify Captcha</span>
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
                                        </div>
                                        <div className="modal-footer brdrNoneTop p-0">
                                            <button type="submit"
                                                // onClick={captchacheck}
                                                className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </Modal>



                        {/* <Modal
                            isOpen={isOpenContact}
                            onRequestClose={toggleModalContact}
                            className="propertysearch-modal bottomInfo">
                            <div className="modal-header     align-items-baseline ">
                                <div className="">
                                    <h5 className="modal-title fontSize22 font-weight400 ml-22"
                                        id="exampleModalLongTitle">
                                        {agendetail.name}
                                    </h5>
                                    <h5 className="modal-title fontSize22 font-weight400 ml-22"
                                        id="exampleModalLongTitle">
                                        {agendetail.address} {agendetail.city}, {agendetail.state} {agendetail.zip}
                                    </h5>
                                </div>

                                <button
                                    type="button"
                                    className="close"
                                    onClick={toggleModalContact}
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body rentalForm availBodyBlock">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="modalLeft">
                                            <div className="imageSecleftModal posRel">


                                                {
                                                    agenphoto == undefined || agenphoto == null ?
                                                        <img className="w-100" src={'https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} />

                                                        :
                                                        <img className="w-100" src={`https://managers.rentalhousingdeals.com/${agenphoto.path}/${agenphoto.filename}`} />
                                                }

                                            </div>


                                            <p className="para fontSize14 font-weight400 secondaryColor">
                                                {
                                                    agendetail.about_us == '' || agendetail.about_us == null || agendetail.about_us == undefined ?
                                                        <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                            {agendetail.name} is a public housing agency that helps provide decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities.
                                                        </p>
                                                        :
                                                        <>
                                                            <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara" >
                                                                {agendetail.about_us}
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
                                                        {agendetail.phone}
                                                    </p>
                                                </div>

                                                <>
                                                    <form className="rentalForm" onSubmit={handleSubmitformmodal}>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                <div className="form-group">
                                                                    <label for="">First Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="First Name"
                                                                        value={formdatamodal.first_name}
                                                                        onChange={(e) =>
                                                                            setformdatamodal({
                                                                                ...formdatamodal,
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
                                                                        value={formdatamodal.last_name}
                                                                        onChange={(e) =>
                                                                            setformdatamodal({
                                                                                ...formdatamodal,
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
                                                                        value={formdatamodal.phone}
                                                                        onChange={(e) =>
                                                                            setformdatamodal({
                                                                                ...formdatamodal,
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
                                                                        value={formdatamodal.email_address}
                                                                        onChange={(e) =>
                                                                            setformdatamodal({
                                                                                ...formdatamodal,
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
                                                                            value={formdatamodal.move_date}
                                                                            onChange={(e) =>
                                                                                setformdatamodal({
                                                                                    ...formdatamodal,
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
                                                                        value={formdatamodal.message}
                                                                        onChange={(e) =>
                                                                            setformdatamodal({
                                                                                ...formdatamodal,
                                                                                message: e.target.value,
                                                                            })
                                                                        }
                                                                        required
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    {/* <div className="recaptcha_block">
                                                                        <ReCAPTCHA
                                                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                                            onChange={captchaHandle}
                                                                        />
                                                                    </div>
                                                                 
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
                        </Modal> */}




                        <Helmet>
                            <script type="text/javascript">
                                {adsHeadScript}
                            </script>
                        </Helmet>





                    </section >
            }
            <Footer />
        </>
    )
}

export default AgencyDetail