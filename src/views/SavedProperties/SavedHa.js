import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Starratingstatic from '../../containers/Starratingstatic';
import { addDash, addOrRemoveHA, finddate, getAllHA, getDayOf, getMonthOf, toggleHeart, toggleHeartHA } from '../../containers/functions';

const SavedHa = ({ data }) => {

    // console.log(data,"QQQ");


    let dateS = new Date(finddate(data.HADetail.id, 2));




    let authdetail;
    let authimg;
    let authdate;

    if (data.HADetail == [] || data.HADetail == '' || data.HADetail == undefined || data.HADetail == null) {

    } else {
        authdetail = data.HADetail;
    }



    if (data.HAPhotoDetail == [] || data.HAPhotoDetail == '' || data.HAPhotoDetail == undefined || data.HAPhotoDetail == null) {

    } else {
        authimg = data.HAPhotoDetail;
    }



    if (data.closedate == [] || data.closedate == '' || data.closedate == undefined || data.closedate == null) {

    } else {
        authdate = data.closedate;
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
    }, []);






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
        colorChange(data.HADetail.id);
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

                            <li className="listState">
                                <div className="d-flex align-items-center ResponsiveFlexDiv">
                                    <div className="agencyStateListLeft">
                                        <div className="agencyLeftHeadermedia">
                                            <div className="media">
                                                {
                                                    data.HAPhotoDetail == null || data.HAPhotoDetail == '' || data.HAPhotoDetail.length == 0
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
                                                                <h5
                                                                    className="mt-0 fontSize16 font-weight700 colorBlue">
                                                                    {authdetail.name}</h5>
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
                                                                        addOrRemoveHA(data.HADetail.id, new Date());
                                                                        getAllHA();
                                                                        // console.log(data.HADetail.id);
                                                                        colorChange(data.HADetail.id);
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
                                            {/* <p className="fontSize16 secondaryColor font-weight400 mb-0 detailPara">Anaheim Housing Authority (AHA) provides information about the Section 8 Housing Choice Voucher (HCV) Program and how to apply for the program. The... <a href="#" className="purpleText">More Info</a></p> */}



                                            <div className="bottomInfo d-flex align-items-center itemWebsite">
                                                <div className="callBtn purpleText font-weight700 fontSize14 d-flex align-items-center justify-content-center">
                                                    <a href={`tel:${authdetail.phone}`} className="purpleText">
                                                        <i className="fas fa-phone-alt"></i>
                                                        {authdetail.phone}</a>
                                                </div>
                                                {/* <p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">25 Miles</p> */}
                                            </div>
                                            <p className="mb-0 fontSize14 savedPara itemWebsite">
                                                Saved on {getDayOf(dateS)},
                                                {getMonthOf(dateS.getMonth())} {dateS.getDate()}
                                            </p>
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
                                                                        <h5 className="text-center fontSize14 colorBlue font-weight500 mb-0">
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


                                                {
                                                    authdetail.is_section_8_wating_list == 1 && authdate.close_date != '0000-00-00' ?
                                                        <>
                                                            {
                                                                headertext == 'SRent' ?
                                                                    <>
                                                                        <h5
                                                                            className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                            Section 8 Voucher Low-Rent
                                                                        </h5>
                                                                    </>
                                                                    :


                                                                    <h5
                                                                        className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                        {headertext}
                                                                    </h5>
                                                            }
                                                            <div className="text-center counterAgencyState ml-auto">
                                                                <h2 className="font-weight700 skyBlueColor mb-0">
                                                                    Section 8 Wait List</h2>
                                                                <h6 className="mb-0 secondaryColor font-weight400">OPEN</h6>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            {
                                                                headertext == 'SRent' ?
                                                                    <>
                                                                        <h5
                                                                            className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                            Section 8 Voucher
                                                                        </h5>
                                                                        <h5
                                                                            className="text-center fontSize14 colorBlue font-weight500 mb-0">
                                                                            Low-Rent
                                                                        </h5>
                                                                    </>
                                                                    :
                                                                    <h5
                                                                        className="text-center fontSize14 colorBlue font-weight500 mb-0"> {headertext}  </h5>
                                                            }
                                                            <div className="text-center counterAgencyState ml-auto">
                                                                {

                                                                    authdetail.num_units !== 0 && authdetail.num_units !== '' ?
                                                                        <>
                                                                            <h2 className="font-weight700 skyBlueColor mb-0">{authdetail.num_units} </h2>
                                                                            <h6 className="mb-0 secondaryColor font-weight400">Subsidized
                                                                                Units</h6>
                                                                        </>
                                                                        :

                                                                        <>
                                                                            <h2 className="font-weight700 skyBlueColor mb-0">
                                                                                CALL</h2>
                                                                            <h6 className="mb-0 secondaryColor font-weight400">Subsidized
                                                                                Units</h6>
                                                                        </>
                                                                }
                                                            </div>

                                                        </>
                                                }

                                            </div>





                                            {/* <div className="d-flex align-items-center">
                                                <h5 className="text-center fontSize14 colorBlue font-weight500 mb-0">Section 8 Voucher<br /> Low-Rent</h5>
                                                <div className="text-center counterAgencyState ml-auto">
                                                    <h2 className="font-weight700 skyBlueColor mb-0">355</h2>
                                                    <h6 className="mb-0 secondaryColor font-weight400">Subsidized Units</h6>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="text-center itemWebsite">
                                            <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`} className="checkAvailBtnSmall"> Check Availability</a>
                                        </div>
                                        <div className="bottomInfo d-flex align-items-center itemMobile justify-content-center w-100 savedBtnn">
                                            <div className="callBtn lineBtnMobile purpleText font-weight700 d-flex align-items-center justify-content-center w-50">
                                                <i className="fas fa-phone-alt"></i><span>Call</span>
                                            </div>
                                            <div className="availbity availbilityBtn fontSize16 font-weight700 w-50 justify-content-center text-center">
                                                Mail
                                            </div>
                                            <a href={`/housing-authority-waiting-lists/${addDash(authdetail.name).toLowerCase()}/${addDash(authdetail.city + " " + authdetail.state + " " + authdetail.zip)}/${authdetail.ha_id.toLowerCase()}`} className="ml-auto moreInfo brdrRadius4 fontSize16 transition itemWebsite">More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </li>




                        </>

                        :
                        null

            }

        </>
    )
}

export default SavedHa