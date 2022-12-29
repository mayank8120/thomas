import React, { useState, useEffect } from "react";
import { addDash, finddate, getDayOf, getMonthOf, toggleHeart } from '../../containers/functions';
import Starratingstatic from '../../containers/Starratingstatic'

import { addOrRemoveProp, decimalRoundOff, getAllProp } from "../../containers/functions";

import axios from "axios";
import { Link } from "react-router-dom";




export const SavedPropertyItem = ({ post }) => {



    // console.log(post);


    let dateS = new Date(finddate(post.property.id_property, 1));







    const prop = post.property;
    const propdetail = post.property_detail;
    const propfloorplan = post.property_floor_plan;
    const propphoto = post.property_photo;
    const proprating = post.property_rating;
    const deals = post.property_deals;
    const headervalue = deals.new_header_value;











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







    const linkurl = `/apartments-for-rent/${addDash(prop.property_title.toLowerCase())}-${addDash(prop.property_city.toLowerCase())}-${addDash(prop.property_state.toLowerCase())}-${prop.property_zip}/${prop.id_property}`;

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








    return (
        <div className="d-flex noMobileFlex">
            <div className="leftImage posRel">
                <a href="javascript:;">
                    {propphoto == null ||
                        propphoto == "" ||
                        propphoto.photo == null ||
                        propphoto.photo == "" ? (
                        <img
                            className="img-fluid"
                            src={
                                require("../../assets/img/Affordable Housing Logo.jpg")
                                    .default
                            }
                        />
                    ) : (
                        <img
                            src={`https://managers.rentalhousingdeals.com/${propphoto.photo}`}
                        />
                    )}


                </a>
                <div href="/savedProperties"

                    onClick={() => {

                        addOrRemoveProp(prop.id_property);
                        getAllProp();
                        // console.log(toggleHeart(propdata.id_property));
                        colorChange(prop.id_property);
                    }
                    }>
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
                </div>
            </div>
            <div className="rightText flex1 favouritesPlan">
                <div className="d-flex align-items-center propertyTitle">
                    <a href="javascript:;">

                        <a href={linkurl} className="d-flex w-100">
                            {" "}
                            <h5 className="colorBlue font-weight700 mb-0">
                                {prop.property_title}
                            </h5>
                        </a>
                        {/* <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                            Apartments</h5> */}
                    </a>
                    <div className="topHeadSec mt-0">
                        <Starratingstatic rating={proprating.vote_avg} />
                    </div>
                </div>
                <p className="mb-0 secondaryColor fontSize14">
                    {" "}
                    {prop.property_address} | {prop.property_city},{" "}
                    {prop.property_state}, {prop.property_zip}
                </p>
                {/* <div className="priceRangeMobile">
                    <div className="d-flex align-items-center">
                        <h4 className="fontSize16 font-weight700 mb-0">$1,200</h4>
                        <span className="font-weight700 d-flex align-items-center"><img
                            src={require('../../assets/img/priceTagg.svg').default} />Good Deal</span>
                    </div>
                </div> */}
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


                {
                    propdetail == null ||
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










                <div className="d-flex align-items-center listingBlockLine">
                    {
                        propdetail == null ||
                            propdetail == "" ? null : (propdetail.max_bed == null ||
                                propdetail.max_bed == "" ||
                                propdetail.min_bed == "" ||
                                propdetail.min_bed == null) &&
                                (propdetail.min_bath == null ||
                                    propdetail.min_bath == "" ||
                                    propdetail.max_bath == "" ||
                                    propdetail.max_bath == null) ? null : (
                            <ul className="noMarginPad listStyleNone">
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
                                )
                                }

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
                        <ul className="noMarginPad listStyleNone listIcon ml-40">
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
                {/* <div className="itemWebsite">
                    <p
                        className="descriptionProperty mb-0 fontSize14 secondaryColor d-flex align-items-center">
                        <img className="" src={require('../../assets/img/file.svg').default} />Special Pricing for
                        Seniors - 2882 Tyler St E Special Pricing for Seniors - 2882
                        Tyler St E</p>
                </div> */}
                {/* <p className="descriptionProperty mb-0 itemMobile fontSize12"><img
                    className="" src={require('../../assets/img/file.svg').default} />Special Pricing for
                    Seniors - 2882 Tyler St...<a href=""
                        className="purpleText">More</a></p> */}
                <p className="mb-0 fontSize14 savedPara itemWebsite">

                    Saved on {getDayOf(dateS)},
                    {getMonthOf(dateS.getMonth())} {dateS.getDate()}
                </p>
            </div>
            <div className="btnBlock itemWebsite">
                <div className="btnSectionList">
                    <div>
                        <a href={linkurl}
                            className="checkAvailableBtn colorWhite brdrRadius4 marginBtm12 whiteColor">
                            Check Availability
                        </a>
                    </div>
                    <div>
                        {prop.phone == null || prop.phone == "" || prop.phone == 0
                            ?

                            <a href="" className="lineBtnCalling purpleText brdrRadius4 d-flex align-items-center justify-content-center">
                                <img src={require('../../assets/img/phoneFilled.png').default} />
                                <span>N/A</span>
                            </a>

                            :

                            <a href={`tel:${prop.phone}`} className="lineBtnCalling purpleText brdrRadius4 d-flex align-items-center justify-content-center">
                                <img src={require('../../assets/img/phoneFilled.png').default} />
                                <span>{prop.phone}</span>
                            </a>
                        }


                    </div>
                </div>
            </div>
            <div className="itemMobile btnBlock">
                <div className="d-sm-flex align-items-center btnSectionList">
                    <a href="" className="lineBtnCalling purpleText brdrRadius4 d-flex align-items-center justify-content-center">
                        <img src={require('../../assets/img/phoneFilled.png').default} />
                        <span>(626) 448-2699</span>
                    </a>
                    <a href={linkurl} className="checkAvailableBtn colorWhite brdrRadius4">
                        Check Availability
                    </a>
                </div>
            </div>
        </div>
    )
}
