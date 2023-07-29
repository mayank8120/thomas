import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import CheckAvailibilityForm from "../../containers/CheckAvailibilityForm";
import Starratingstatic from "../../containers/Starratingstatic";
import axios from "axios";

import { addDash, addOrRemoveProp, decimalRoundOff, getAllProp, isItNull, loadCaptcha, toggleHeart } from "../../containers/functions";
import { sendMUltipleRequestes, tokenScoreCheck } from "../../api/api";
import { captchaSecretKey, captchaSiteKey } from "../../constants/constants";

export const PropertySearchItem = ({ post }) => {

    // console.log(post);
    const prop = post.property;
    const propdetail = post.property_detail;
    const propfloorplan = post.property_floor_plan;
    const propphoto = post.property_photo;
    const proprating = post.property_rating;
    const deals = post.property_deals;
    const headervalue = post.header_value;


    const [colorCHangeheart, setcolorCHangeheart] = useState();

    function colorChange(item) {
        if (toggleHeart(item) == true) {
            setcolorCHangeheart(true);
        } else {
            setcolorCHangeheart(false);
        }
    }



    useEffect(() => {
        colorChange(prop.id_property);
    }, [])


    const bckurl =
        "https://i.picsum.photos/id/145/200/300.jpg?hmac=mIsOtHDzbaNzDdNRa6aQCd5CHCVewrkTO5B1D4aHMB8";

    let spurl = "";

    const imag = `${"url(" + spurl + ")"}`;

    const [isOpenThankYou, setIsOpenThankYou] = useState(false);
    function toggleModalThankYou() {
        setIsOpenThankYou(!isOpenThankYou);
    }

    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }

    const [isOpenSecondList, setIsOpenSecondList] = useState(false);
    function toggleModalSecondList() {
        let vari = isOpenSecondList;
        setIsOpenSecondList(!isOpenSecondList);
        if (vari == true) {
            setIsOpenThankYou(true);
        }
    }

    const linkurl = `/apartments-for-rent/${addDash(prop.property_title.toLowerCase())}-${addDash(prop.property_city.toLowerCase())}-${addDash(prop.property_state.toLowerCase())}-${prop.property_zip}/${prop.id_property}`;

    const fetchAfterCheckUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailabilityproplists?props_id=${prop.id_property}`;

    const [thirdval, setthirdval] = useState();
    const [headeredesc, setheaderedesc] = useState();



    const [minimumbed, setminimumbed] = useState();
    const [maximumbed, setmaximumbed] = useState()

    useEffect(() => {

        if (propdetail == null || propdetail == undefined || propdetail == '') {

        } else {
            if (propdetail.min_bed == null || propdetail.min_bed == '' || propdetail.min_bed == undefined || propdetail.min_bed == 0) {
                setminimumbed(0);
            } else {
                setminimumbed(propdetail.min_bed);
            }

            if (propdetail.max_bed == null || propdetail.max_bed == '' || propdetail.max_bed == undefined || propdetail.max_bed == 0) {
                setmaximumbed(0);
            } else {
                setmaximumbed(propdetail.max_bed);
            }

        }
    }, [post, propdetail])




    useEffect(() => {
        if (post == null && post == undefined && post.length == 0) {
        } else {
            if (prop.property_type !== "general") {
                if (
                    prop.property_type !== "general" &&
                    prop.property_type !== "classified"
                ) {
                    if (deals == null) {
                    } else {
                        if (
                            deals.header_description == 1 ||
                            deals.header_description == "1"
                        ) {
                            setthirdval("SPECIALS");
                            // console.log(1);
                        } else if (
                            deals.header_description == 2 ||
                            deals.header_description == "2"
                        ) {
                            setthirdval(
                                `$${headervalue[0].toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}`
                            );
                            // console.log(2);
                        } else if (
                            deals.header_description == 3 ||
                            deals.header_description == "3"
                        ) {
                            setthirdval(
                                `$${headervalue[2].toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}`
                            );
                            // console.log(3);
                        } else if (
                            deals.header_description == 4 ||
                            deals.header_description == "4"
                        ) {
                            setthirdval(
                                `$${headervalue[2].toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}`
                            );
                            // console.log(4);
                        } else if (
                            deals.header_description == 5 ||
                            deals.header_description == "5"
                        ) {
                            setthirdval("MOVE-IN SPECIALS");
                            // console.log(5);
                        } else if (
                            deals.header_description == 6 ||
                            deals.header_description == "6"
                        ) {
                            setthirdval(
                                `$${headervalue[0].toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}`
                            );
                            // console.log(6);
                        } else if (
                            deals.header_description == 7 ||
                            deals.header_description == "7"
                        ) {
                            setthirdval(headervalue[2]);
                            // console.log(7);
                        }
                    }
                } else if (
                    prop.property_type !== "general" &&
                    prop.property_type !== "premium"
                ) {
                    // setthirdval(propdetail.min_rent);
                    setthirdval("Classified");
                    // console.log(8);
                }
            }
            if (prop.property_type == "general") {
                setthirdval("CALL");
            }
        }
    }, [thirdval]);

    // console.log(deals, post, thirdval);
    // useEffect(() => {
    //     if (thirdval !== undefined) {
    //         (
    //             thirdval !== '' && thirdval !== 'MOVE-IN SPECIALS' && thirdval !== 'SPECIALS'
    //                 && (deals.header_description == null ? thirdval !== 'SPECIALS' : (deals.header_description !== 7 || deals.header_description !== '7'))
    //                 ?
    //                 setthirdval(thirdval)
    //                 :
    //                 (
    //                     thirdval == 'MOVE-IN SPECIALS' || thirdval == 'SPECIALS'
    //                         || ((deals.header_description == 7 || deals.header_description == '7'))
    //                         ?
    //                         setthirdval(thirdval)
    //                         :
    //                         setthirdval('CALL')
    //                 )
    //         )
    //     }
    // }, [thirdval]);

    // console.log(thirdval);

    const [aftercheckPropList, setaftercheckPropList] = useState([]);

    // let aftercheckPropList = [
    //     { name: 'Request for more info' },
    //     { name: 'Request for more info 1' },
    //     { name: 'Request for more info 2' },
    //     { name: 'Request for more info 3' },

    //     { name: 'Request for more info 3' },

    //     { name: 'Request for more info 3' }
    // ]

    const [checkedStatePropList, setcheckedStatePropList] = useState(
        new Array(aftercheckPropList.length).fill(false)
    );

    useEffect(() => {
        setcheckedStatePropList(new Array(aftercheckPropList.length).fill(false));
    }, [aftercheckPropList]);

    const [propListArray, setpropListArray] = useState([]);

    //   console.log(propListArray);

    const handleOnChangepets = (position) => {
        const updatedcheckedStatePropList = checkedStatePropList.map(
            (item, index) => (index == position ? !item : item)
        );

        setcheckedStatePropList(updatedcheckedStatePropList);

        const arrpets = [];
        const arrProp = [];

        const totalPrice = updatedcheckedStatePropList.reduce(
            (sum, currentState, index) => {
                if (currentState == true) {

                    let jsons = {
                        propid: aftercheckPropList[index].id_property,
                        propname: aftercheckPropList[index].property_details[0].property_title
                    }
                    arrProp.push(jsons);
                    arrpets.push(aftercheckPropList[index].id_property);
                    return sum + 1;
                }
                return sum;
            },
            0
        );
        // console.log(arrProp, "IIII");
        setpropListArray(arrProp);
    };

    const [captchaValue, setcaptchaValue] = useState();
    const [formdata, setformdata] = useState({
        property_id: prop.id_property,
        first_name: "",
        last_name: "",
        phone: "",
        email_address: "",
        move_date: "",
        message: "",
    });

    useEffect(() => {
        setformdata({ message: `Hi, I am interested in ${prop.property_title}. Please send me current availability and any additional information you may have. Thanks!` })
    }, [post])


    function captchaHandle(value) {
        // console.log('Captcha value:', value);
        setcaptchaValue(true);
    }

    function captchacheck() {
        if (captchaValue == undefined || captchaValue !== true) {
            setcaptchaValue(false);
        }
    }

    // useEffect(() => {

    // }, [fetchAfterCheckUrl])

    let fetchAfterCheckPropList = () => {
        const result = axios
            .get(fetchAfterCheckUrl)
            .then((res) => {
                // console.log(res.data.data);
                if (res.error == true) {
                } else {
                    setaftercheckPropList(res.data.data);
                    // console.log(res.data.data);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    };




    const handleSubmitform = (e) => {
        e.preventDefault();

        // console.log(formdata);
        // toggleModal();
        // try {
        //     axios({
        //         method: 'POST',
        //         url: 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/check',
        //         data: formdata
        //     })
        // } catch (error) {
        //     console.warn(error.stack + "mayank");
        // }

        // console.log(formdata);
        fetchAfterCheckPropList();

        // console.log("token submitformclicked");

        // if (captchaValue == true) {
        // toggleModalAvailability();
        // toggleModalSecondList();
















        startCaptchaProcess();


        // toggleModalSecondList();









        // submitAllData();
        // setformdata({ property_id: prop.id_property, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: '' });
        // }
    };



    const startCaptchaProcess = () => {
        if (!isItNull(formdata.move_date)) {
            // console.log("token startcaptchaprocess");
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
            script.addEventListener('load', loadCaptcha);



            // let isCaptchaGood = loadCaptcha();
            // if (isCaptchaGood == true) {
            //     setcaptchaValue(true);
            //     toggleModalAvailability();
            //     toggleModalSecondList();
            //     submitAllData();
            // } else {
            //     setcaptchaValue(false);
            // }
            document.body.appendChild(script);
        }
    }



    function submitAllData() {

        // console.log("token submit all data enter");

        // let formatDate = (date) => {

        //     let newdate = new Date(date);
        //     let day = newdate.getDate();
        //     let month = newdate.getMonth() + 1;
        //     let year = newdate.getFullYear();

        //     return `${day}/${month}/${year}`

        //     // return date.replace(/-/g, '/');
        // }


        let data = JSON.stringify(
            {
                "property_id": prop.id_property,
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

        // var raw = JSON.stringify({
        //     "property_id": "142",
        //     "first_name": "john",
        //     "last_name": "doe",
        //     "email_address": "vinaxeh500@zneep.com",
        //     "phone": "8874565211",
        //     "message": "test msg",
        //     "move_date": "27/02/2022"
        // });

        var requestOptions = {
            method: 'POST',
            body: data,
            redirect: 'follow',
        };

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/checkAvailability", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
            })
            .catch(error => console.log('error', error));

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
                (item) => {
                    let data = JSON.stringify(
                        {
                            "property_id": parseFloat(item.propid),
                            "first_name": formdata.first_name,
                            "last_name": formdata.last_name,
                            "email_address": formdata.email_address,
                            "phone": formdata.phone,
                            "message": `Hi, I am interested in ${item.propname}. Please send me current availability and any additional information you may have. Thanks!`,
                            "move_date": formatDate(formdata.move_date)
                        }
                    );
                    sendMUltipleRequestes(data);
                }
            )



            toggleModalSecondList();
            toggleModalThankYou();
        }

        setformdata({ property_id: prop.property_id, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: `${formdata.message}` });
    }



    // const secretKey = '6Ld0V8sgAAAAAJngehOac0eHt140tM5c51CTqFQH'
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
                                    toggleModalAvailability();
                                    toggleModalSecondList();
                                    submitAllData();
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








    // function decimalRoundOff(number) {
    //     return Math.floor(number) == Math.round(number) ? Math.floor(number) : number
    // }

    return (

        <>

            {
                post == null || post == undefined || post == '' ?

                    null
                    :


                    <>
                        <div className="margin-top-0 margin-bottom-0 propertysearchitems blogclass">
                            <div className="blog-post ">
                                <div className="utf-blog-post-thumbnail">
                                    <div className="utf-blog-post-thumbnail-inner">
                                        <a href={linkurl} className="d-flex w-100  abcd">
                                            <div className="listing-left">
                                                <div className="bg-image">
                                                    {propphoto == null ||
                                                        propphoto == "" ||
                                                        propphoto.photo == null ||
                                                        propphoto.photo == "" ? (
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
                                                            src={`https://managers.rentalhousingdeals.com/${propphoto.photo}`}
                                                        />
                                                    )}

                                                    {/* <img src={spurl} /> */}
                                                </div>
                                                <div className="postin">
                                                    <span href="/savedProperties"

                                                        onClick={() => {

                                                            addOrRemoveProp(prop.id_property, new Date());
                                                            getAllProp();
                                                            // console.log(toggleHeart(propdata.id_property));
                                                            colorChange(prop.id_property);
                                                        }
                                                        }

                                                    >


                                                        {
                                                            colorCHangeheart == true ?
                                                                <><span>
                                                                    <i className="fas fa-heart redcolor"></i>
                                                                </span>
                                                                </>
                                                                :
                                                                <><span>
                                                                    <i className="far fa-heart lightbluemodified"></i>
                                                                </span>
                                                                </>
                                                        }


                                                        {/* <i className="far fa-heart"></i> */}

                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="utf-blog-post-content">
                                    <div className="d-flex align-items-center propertyTitle">
                                        <a href={linkurl} className="d-flex w-100">
                                            {" "}
                                            <h2 className="colorBlue font-weight700 mb-0 fontSize18">
                                                {prop.property_title}
                                            </h2>
                                        </a>
                                    </div>
                                    <p className="mb-0 secondaryColor fontSize14">
                                        <a href={linkurl} className="d-flex w-100 secondaryColor ">
                                            {" "}
                                            {prop.property_address} | {prop.property_city},{" "}
                                            {prop.property_state}, {prop.property_zip}
                                        </a>
                                    </p>
                                    {proprating == null ||
                                        proprating == undefined ||
                                        proprating == "" ? null : proprating.vote_avg == null ? null : (
                                            <Starratingstatic rating={proprating.vote_avg} />
                                        )}

                                    {propdetail == null ||
                                        propdetail == "" ? null : propdetail.subsidized == "Yes" &&
                                            propdetail.section8 == "Yes" ?
                                        (
                                            <div className="itemWebsite priceRangeMobile">
                                                <div className="d-flex align-items-center">
                                                    <h4 className="fontSize22 font-weight800 mb-0">
                                                        {thirdval !== "" &&
                                                            thirdval !== "MOVE-IN SPECIALS" &&
                                                            thirdval !== "SPECIALS" &&
                                                            typeof thirdval !== undefined
                                                            ? thirdval
                                                            : thirdval == "MOVE-IN SPECIALS" || thirdval == "SPECIALS"
                                                                ? thirdval
                                                                : null}

                                                    </h4>
                                                    <span className="font-weight700 d-flex align-items-center">
                                                        <img
                                                            src={require("../../assets/img/priceTagg.svg").default}
                                                        />
                                                        <span>Good Deal</span>
                                                    </span>
                                                </div>
                                            </div>)
                                        :
                                        (<div className="priceRange itemWebsite">
                                            <h4 className="colorBlue mb-0 fontSize22 font-weight800 mt-0">

                                                {thirdval !== "" &&
                                                    thirdval !== "MOVE-IN SPECIALS" &&
                                                    thirdval !== "SPECIALS" &&
                                                    typeof thirdval !== undefined
                                                    ? thirdval
                                                    : thirdval == "MOVE-IN SPECIALS" || thirdval == "SPECIALS"
                                                        ? thirdval
                                                        : null}
                                            </h4>
                                        </div>
                                        )
                                    }

                                    {/* // <div className="itemWebsite priceRangeMobile">
                //     <div className="d-flex align-items-center">
                //         <h4 className="fontSize16 font-weight700 mb-0">$1,200</h4>
                //         <span className="font-weight700"><img src={require('../../assets/img/priceTagg.svg').default} />Good Deal</span>
                //     </div>
                // </div> */}

                                    {/* <div className="priceRange itemWebsite">
                    <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">
                        {thirdval}
                    </h4>
                </div> */}



                                    {propdetail == null ||
                                        propdetail == "" ? null : propdetail.subsidized == "Yes" &&
                                            propdetail.section8 == "Yes" ?

                                        <div className="itemMobile priceRangeMobile">
                                            <div className="d-flex align-items-center">


                                                <h4 className="fontSize16 font-weight700 mb-0">
                                                    {thirdval !== "" &&
                                                        thirdval !== "MOVE-IN SPECIALS" &&
                                                        thirdval !== "SPECIALS" &&
                                                        typeof thirdval !== undefined
                                                        ? thirdval
                                                        : thirdval == "MOVE-IN SPECIALS" || thirdval == "SPECIALS"
                                                            ? thirdval
                                                            : null}


                                                </h4>
                                                <span className="font-weight700 d-flex align-items-center">
                                                    <img
                                                        src={require("../../assets/img/priceTagg.svg").default}
                                                    />
                                                    <span>Good Deal</span>
                                                </span>
                                            </div>
                                        </div>

                                        :


                                        <div className="itemMobile priceRangeMobile">
                                            <div className="d-flex align-items-center">


                                                <h4 className="colorBlue fontSize16 font-weight700 mb-0">
                                                    {thirdval !== "" &&
                                                        thirdval !== "MOVE-IN SPECIALS" &&
                                                        thirdval !== "SPECIALS" &&
                                                        typeof thirdval !== undefined
                                                        ? thirdval
                                                        : thirdval == "MOVE-IN SPECIALS" || thirdval == "SPECIALS"
                                                            ? thirdval
                                                            : null}


                                                </h4>
                                            </div>
                                        </div>


                                    }

                                    <div className="d-flex align-items-center listingBlockLine blockclass">
                                        {propdetail == null ||
                                            propdetail == "" ? null : (propdetail.max_bed == null ||
                                                propdetail.max_bed == "" ||
                                                propdetail.min_bed == "" ||
                                                propdetail.min_bed == null) &&
                                                (propdetail.min_bath == null ||
                                                    propdetail.min_bath == "" ||
                                                    propdetail.max_bath == "" ||
                                                    propdetail.max_bath == null) ? null : (
                                            <ul className="noMarginPad listStyleNone mr-18">
                                                {propdetail.max_bed == null ||
                                                    (propdetail.max_bed == "" && propdetail.min_bed == "") ||
                                                    propdetail.min_bed == null ? null : propdetail.min_bed ==
                                                        "" || propdetail.min_bed == null ? (
                                                    <li className="d-flex align-items-center">
                                                        <img src={require("../../assets/img/beds.svg").default} />
                                                        <span className="colorBlue">
                                                            {propdetail.max_bed}
                                                        </span>{" "}
                                                        Beds
                                                    </li>
                                                ) : propdetail.min_bed == propdetail.max_bed ? (
                                                    <li className="d-flex align-items-center">
                                                        <img src={require("../../assets/img/beds.svg").default} />
                                                        <span className="colorBlue">
                                                            {propdetail.min_bed}
                                                        </span>{" "}
                                                        Beds
                                                    </li>
                                                ) : (
                                                    <li className="d-flex align-items-center">
                                                        <img src={require("../../assets/img/beds.svg").default} />
                                                        <span className="colorBlue">
                                                            {propdetail.min_bed}-{propdetail.max_bed}
                                                        </span>{" "}
                                                        Beds
                                                    </li>
                                                )}

                                                {propdetail.max_bath == null ||
                                                    (propdetail.max_bath == "" && propdetail.min_bath == "") ||
                                                    propdetail.min_bath == null ? null : propdetail.min_bath ==
                                                        "" || propdetail.min_bath == null ? (
                                                    <li className="d-flex align-items-center">
                                                        <img
                                                            src={require("../../assets/img/shower.svg").default}
                                                        />
                                                        <span className="colorBlue">{

                                                            // Math.floor(propdetail.max_bath) == Math.round(propdetail.max_bath) ? Math.floor(propdetail.max_bath) : propdetail.max_bath
                                                            decimalRoundOff(propdetail.max_bath)

                                                        }</span>{" "}
                                                        Baths
                                                    </li>
                                                ) : propdetail.min_bath == propdetail.max_bath ? (
                                                    <li className="d-flex align-items-center">
                                                        <img
                                                            src={require("../../assets/img/shower.svg").default}
                                                        />
                                                        <span className="colorBlue">{


                                                            // propdetail.min_bath
                                                            decimalRoundOff(propdetail.min_bath)

                                                            // Math.floor(propdetail.min_bath) == Math.round(propdetail.min_bath) ? Math.floor(propdetail.min_bath) : propdetail.min_bath
                                                        }</span>{" "}
                                                        Baths
                                                    </li>
                                                ) : (
                                                    <li className="d-flex align-items-center">
                                                        <img
                                                            src={require("../../assets/img/shower.svg").default}
                                                        />
                                                        <span className="colorBlue">
                                                            {decimalRoundOff(propdetail.min_bath)}-{decimalRoundOff(propdetail.max_bath)}
                                                        </span>{" "}
                                                        Baths
                                                    </li>
                                                )}

                                                {/* {propdetail.beds == null || propdetail.beds == '' ?
                                null :
                                <li className="d-flex align-items-center">
                                    <img src={require('../../assets/img/beds.svg').default} /><span
                                        className="colorBlue">{propdetail.beds}</span> Beds
                                </li>
                            }

                            {propdetail.baths == null || propdetail.baths == '' ?
                                null : <li className="d-flex align-items-center ml-12">
                                    <img src={require('../../assets/img/shower.svg').default} /><span
                                        className="colorBlue">{propdetail.baths}</span> Baths
                                </li>
                            } */}
                                            </ul>
                                        )}

                                        {propdetail == null || propdetail == "" ? null : (
                                            <ul className="listStyleNone listIcon pl-0">
                                                {propdetail.pet_allowed == null ||
                                                    propdetail.pet_allowed == "" ||
                                                    propdetail.pet_allowed.toLowerCase() == "no" ? null : (
                                                    <li>
                                                        <img
                                                            src={
                                                                require("../../assets/img/detailImage1.svg").default
                                                            }
                                                        />
                                                    </li>
                                                )}

                                                {propdetail.handicap == null ||
                                                    propdetail.handicap == "" ||
                                                    propdetail.handicap.toLowerCase() == "no" ? null : (
                                                    <li>
                                                        <img
                                                            src={
                                                                require("../../assets/img/detailImage2.svg").default
                                                            }
                                                        />
                                                    </li>
                                                )}
                                                {propdetail.section8 == null ||
                                                    propdetail.section8 == "" ||
                                                    propdetail.section8.toLowerCase() == "no" ? null : (
                                                    <li>
                                                        <img
                                                            src={
                                                                require("../../assets/img/detailImage4.svg").default
                                                            }
                                                        />
                                                    </li>
                                                )}

                                                {propdetail.seniorprop.toLowerCase() == "yes" &&
                                                    (propdetail.seniorpropval.toLowerCase() == "62" ||
                                                        propdetail.seniorpropval == 62) ? (
                                                    <li>
                                                        <img
                                                            src={
                                                                require("../../assets/img/detailImage3.svg").default
                                                            }
                                                        />
                                                    </li>
                                                ) : null}
                                                {propdetail.seniorprop.toLowerCase() == "yes" &&
                                                    (propdetail.seniorpropval.toLowerCase() == "55" ||
                                                        propdetail.seniorpropval == 55 ||
                                                        propdetail.seniorpropval == "" ||
                                                        propdetail.seniorpropval == null) ? (
                                                    <li>
                                                        <img
                                                            src={
                                                                require("../../assets/img/detailImage5.svg").default
                                                            }
                                                        />
                                                    </li>
                                                ) : null}
                                            </ul>
                                        )}
                                    </div>
                                    {/* <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center">
                    <Link to={linkurl} className="secondaryColor ">
                        {" "}
                        <img
                            className=""
                            src={require("../../assets/img/file.svg").default}
                        />
                        Special Pricing for Seniors - 2882 Tyler St...
                        <span className="purpleText">More</span>
                    </Link>
                </p> */}
                                    <div className="d-flex align-items-center padda responsiveBtnDesign">

                                        {prop.phone == null || prop.phone == "" || prop.phone == 0
                                            ?





                                            <a href="javascript:;"
                                                className="fontSize13 lineBtnCalling brdrRadius4 prplrFilledBtn w-50 d-flex align-items-center nonepointer">
                                                {/* <img
                                                    src={require("../../assets/img/phoneFilledWhite.png").default}
                                                /> */}
                                                No Phone Number
                                            </a>

                                            :
                                            <a href={`tel:${prop.phone}`}
                                                className="fontSize13 lineBtnCalling brdrRadius4 prplrFilledBtn w-50 ">

                                                <div className="d-flex align-items-center justify-content-center">

                                                    <img
                                                        src={require("../../assets/img/phoneFilledWhite.svg").default} className="twentybytwenty"
                                                    />
                                                    <span>{prop.phone}</span>

                                                </div>



                                            </a>

                                        }

                                        <button
                                            className="checkAvailableBtn colorWhite brdrRadius4 fontSize14  w-50 d-flex align-items-center"
                                            onClick={toggleModalAvailability}
                                        >
                                            <img src={require("../../assets/img/mail.svg").default} />
                                            Check Availability
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Modal
                            isOpen={isOpenAvailability}
                            onRequestClose={toggleModalAvailability}
                            className="propertysearch-modal">
                            <div className="modal-header d-flex align-items-center alignitemstart">
                                <h5 className="modal-title fontSize22 font-weight400 ml-22">
                                    {prop.property_address} {prop.property_city}, {prop.property_state}{" "}
                                    {prop.property_zip} Rental Deals &nbsp;
                                    {/* {propdetail.max_bed == null ||
                    (propdetail.max_bed == "" && propdetail.min_bed == "") ||
                    propdetail.min_bed == null ? null : propdetail.min_bed ==
                        "" || propdetail.min_bed == null ? (
                    `${propdetail.max_bed} Bd`

                ) : propdetail.min_bed == propdetail.max_bed ? (

                    `${propdetail.min_bed} Bd`


                ) : (
                    `${propdetail.min_bed}-${propdetail.max_bed} Bd`


                )} */}





                                    {minimumbed == 0 || minimumbed == undefined ? null : `${minimumbed}Bd`}
                                    {
                                        (minimumbed !== 0 && minimumbed !== undefined) && (maximumbed !== 0 && maximumbed !== undefined) ? `-` : null
                                    }

                                    {
                                        maximumbed == 0 || maximumbed == undefined ? null : `${maximumbed}Bd`
                                    }



                                    {" "} {thirdval + " "} {prop.phone}
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={toggleModalAvailability}
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body rentalForm availBodyBlock">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="modalLeft">
                                            <div className="imageSecleftModal posRel">

                                                {propphoto == null ||
                                                    propphoto == "" ||
                                                    propphoto.photo == null ||
                                                    propphoto.photo == "" ? (
                                                    // Affordable Housing Logo

                                                    //     spurl = "https://www.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg"
                                                    <>
                                                        <img
                                                            className="img-fluid"
                                                            src={
                                                                require("../../assets/img/Affordable Housing Logo.jpg")
                                                                    .default
                                                            }
                                                        />
                                                        {prop.prog_type.toLowerCase() == "affordablehousing" ? (
                                                            <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                Affordable Housing
                                                            </div>
                                                        ) : null}
                                                    </>
                                                ) : (
                                                    // spurl = "https://www.rentalhousingdeals.com/" + propphoto.photo
                                                    <>
                                                        <img className="w-100"
                                                            src={`https://managers.rentalhousingdeals.com/${propphoto.photo}`}
                                                        />
                                                        {prop.prog_type.toLowerCase() == "affordablehousing" ? (
                                                            <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                Affordable Housing
                                                            </div>
                                                        ) : null}
                                                    </>
                                                )}


                                                {/* {propphoto == null ||
                                propphoto == "" ||
                                propphoto.photo == null ||
                                propphoto.photo == "" ? null : (
                                <>
                                    <img
                                        className="w-100"
                                        src={`https://www.rentalhousingdeals.com/${propphoto.photo}`}
                                    />
                                    {prop.prog_type.toLowerCase() == "affordablehousing" ? (
                                        <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                            Affordable Housing
                                        </div>
                                    ) : null}
                                </>
                            )} */}
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="lefttitle">
                                                    <h5 className="mb-0 fontSize18 font-weight700 colorBlue">
                                                        {prop.property_title}
                                                    </h5>
                                                    <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                        {prop.property_address} {prop.property_city},{" "}
                                                        {prop.property_state} {prop.property_zip}
                                                    </p>
                                                </div>
                                                {/* <div className="ml-auto">
                                <img
                                    src={require("../../assets/img/goodDeal.svg").default}
                                />
                            </div> */}
                                            </div>
                                            <div className="sliderListing">
                                                {propdetail == null || propdetail == "" ? null : (
                                                    <ul className="clearfix d-flex align-items-center">
                                                        {/* {propdetail.beds == null ||
                                        propdetail.beds == "" ? null : (
                                        <li className="fontSize17">
                                            <b>{propdetail.beds}</b>Bd
                                        </li>
                                    )} */}

                                                        {/* {propdetail.max_bed == null ||
                                        (propdetail.max_bed == "" && propdetail.min_bed == "") ||
                                        propdetail.min_bed == null ? null : propdetail.min_bed ==
                                            "" || propdetail.min_bed == null ? (

                                        <li className="fontSize17">
                                            <b>{propdetail.max_bed}</b>Bd
                                        </li>

                                    ) : propdetail.min_bed == propdetail.max_bed ? (

                                        <li className="fontSize17">
                                            <b>{propdetail.min_bed}</b>Bd
                                        </li>



                                    ) : (
                                        < li className="fontSize17">
                                            <b>{propdetail.min_bed}-{propdetail.max_bed}</b>Bd
                                        </li>

                                    )} */}




                                                        {propdetail.min_bed == null || propdetail.min_bed == '' || propdetail.min_bed == undefined || propdetail.min_bed == 0 ? null :


                                                            // `${propdetail.min_bed} Bd`
                                                            < li className="fontSize17">
                                                                <b>{propdetail.min_bed}</b>Bd
                                                            </li>


                                                        }

                                                        {propdetail.min_bed == null || propdetail.min_bed == '' || propdetail.min_bed == undefined || propdetail.min_bed == 0 ? null :

                                                            < li className="fontSize17">
                                                                <b>-</b>Bd
                                                            </li>

                                                        }

                                                        {propdetail.max_bed == null || propdetail.max_bed == '' || propdetail.max_bed == undefined || propdetail.max_bed == 0 ? null :

                                                            < li className="fontSize17">
                                                                <b>{propdetail.max_bed}</b>Bd
                                                            </li>
                                                        } {" "}




                                                        {propdetail.max_bath == null ||
                                                            (propdetail.max_bath == "" && propdetail.min_bath == "") ||
                                                            propdetail.min_bath == null ? null : propdetail.min_bath ==
                                                                "" || propdetail.min_bath == null ? (
                                                            <li className="fontSize17">
                                                                <b>{propdetail.max_bath}</b>Ba
                                                            </li>



                                                        ) : propdetail.min_bath == propdetail.max_bath ? (

                                                            <li className="fontSize17">
                                                                <b>{propdetail.min_bath}</b>Ba
                                                            </li>
                                                        ) : (

                                                            <li className="fontSize17">
                                                                <b>{propdetail.min_bath}-{propdetail.max_bath}</b>Ba
                                                            </li>

                                                        )}



                                                        {/* {propdetail.baths == null ||
                                        propdetail.baths == "" ? null : (
                                       
                                    )} */}

                                                        {/* {propdetail.sq_ft == null ||
                                        propdetail.sq_ft == "" ? null : (
                                        <li className="fontSize17">
                                            <b>{propdetail.sq_ft}sdfds</b>Sq.Ft
                                        </li>
                                    )} */}

                                                        <li className="ml-auto boldTag greenText fontSize24">
                                                            {thirdval}
                                                        </li>
                                                    </ul>
                                                )}
                                            </div>
                                            <p className="para fontSize14 font-weight400 secondaryColor" dangerouslySetInnerHTML={{ __html: prop.description }} />
                                            {/* <p className="para fontSize14 font-weight400 secondaryColor">
                            {}
                        </p> */}
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
                                                {
                                                    prop.phone == '' || prop.phone == undefined || prop.phone == null
                                                        ?
                                                        null :
                                                        <div className="ml-auto">
                                                            <p className="purpleText font-weight700 fontSize18 d-flex align-items-center">
                                                                <img
                                                                    src={require("../../assets/img/phoneColored.svg").default}
                                                                />
                                                                {prop.phone}
                                                            </p>
                                                        </div>
                                                }


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
                                                                            onChange={(e) => {
                                                                                setformdata({
                                                                                    ...formdata,
                                                                                    move_date: e.target.value,
                                                                                });

                                                                            }

                                                                            }
                                                                            required
                                                                        />
                                                                        {/* <span><img src={require('../../assets/img/calander.png').default} /></span> */}
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
                                                                    <div className="recaptcha_block">

                                                                        {/* <ReCAPTCHA
                                                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                                            onChange={captchaHandle}
                                                                        /> */}

                                                                        <div
                                                                            className="g-recaptcha"
                                                                            data-sitekey={'6Ld3X8ggAAAAAAKaJ5gDXpXHyJPQsE83lvQrI9Uh'}
                                                                            data-size="invisible"
                                                                        ></div>





                                                                    </div>
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

                                                {/* <CheckAvailibilityForm propid={prop.id_property} page={"listPage"} setIsOpenAvailability={setIsOpenAvailability} setIsOpenSecondList={setIsOpenSecondList} /> */}
                                            </div>
                                        </div>
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

                        <Modal
                            isOpen={isOpenSecondList}
                            onRequestClose={toggleModalSecondList}
                            className="check-form checkFormTable modalVertCentr">
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

                            <div className="modal-body extraPadRes">
                                <span className="text-danger">{propListArray.length == 0 ? 'Plesae Select At least one Property' : null}</span>

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
                                                                                <img
                                                                                    className="img-fluid"
                                                                                    src={
                                                                                        require("../../assets/img/Affordable Housing Logo.jpg")
                                                                                            .default
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                <img
                                                                                    src={`https://managers.rentalhousingdeals.com/${property_photo[0].photo}`}
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    </div>
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



                                                                {/* <div className="priceRangeMobile">
                                                <div className="d-flex align-items-center">
                                                    <h4 className="fontSize16 font-weight800 mb-0">
                                                        $1,200
                                                    </h4>
                                                    <span className="font-weight700">
                                                        <img
                                                            src={
                                                                require("../../assets/img/priceTagg.svg")
                                                                    .default
                                                            }
                                                        />
                                                        Good Deal12
                                                    </span>
                                                </div>
                                            </div> */}

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
                                                                                        {

                                                                                            decimalRoundOff(property_details[0].max_bath)



                                                                                        }
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
                                                                                        {decimalRoundOff(property_details[0].min_bath)}
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
                                                                                        {decimalRoundOff(property_details[0].min_bath)}-
                                                                                        {decimalRoundOff(property_details[0].max_bath)}
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
                                                                                (propdetail.seniorpropval.toLowerCase() ==
                                                                                    "62" ||
                                                                                    propdetail.seniorpropval == 62) ? (
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
                                        <span onClick={sendMultipleProps} className="checkBtnModall" data-toggle="modal" data-target="#exampleModal3" data-dismiss="modal" aria-label="Close">Check Availability</span>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </>


            }


        </>



    );
};
