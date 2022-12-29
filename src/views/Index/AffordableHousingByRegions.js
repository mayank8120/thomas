import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import { addDash } from "../../containers/functions";
const AffordableHousingByRegions = ({ page }) => {
    // console.log(page, "PAGEN");
    const [key, setKey] = useState("home");

    // const [feat, setfeat] = useState("");

    function linkDirection(city, state) {
        if (page == 2) {
            localStorage.setItem("featureName", 'Senior Housing');
        } else if (page == 3) {
            localStorage.setItem("featureName", 'Section 8');
        } else if (page == 1) {
            localStorage.setItem("featureName", "");
        }
        window.location.href = `/propertySearch/${city}/${state}`;
    }


    return (
        <section className="secPad featureSection">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">
                        {
                            page == 2 ?
                                "Affordable Senior Housing by Regions"
                                :
                                "Affordable Housing by Regions"
                        }
                    </h2>
                </div>
                <div className="row marginTop2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="home"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3 sideWhiteGradient"  >
                                <Tab eventKey="home" title="East Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">

                                                    {/* /propertySearch?${page==2?'feature=senior':null}city=
                                                /propertySearch?${page==2?'feature=senior&':''}${page==3?'feature=section&':''}city= */}



                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Augusta", "ME")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Maine</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Concord", "NH")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Hampshire</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Montpelier", "VT")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Vermont</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Boston", "MA")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Massachusetts</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Albany", "NY")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New York</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Providence", "RI")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Rhode Island</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Hartford", "CT")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Connecticut</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Trenton", "NJ")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Jersey</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Dover", "DE")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Delaware</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Annapolis", "MD")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Maryland</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Olympia", "WA")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Washington DC</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div >
                                </Tab >
                                <Tab eventKey="Midwest Region" title="Midwest Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Bismarck", "ND")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">North Dakota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Pierre", "SD")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">South Dakota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Saint Paul", "MN")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Minnesota</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Des Moines", "IA")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Iowa</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Topeka", "KS")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Kansas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Jefferson City", "MO")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Missouri</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Madison", "WI")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Wisconsin</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Springfield", "IL")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Illinois</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Indianapolis", "IN")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Indiana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >

                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Columbus", "OH")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Ohio</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Lansing", "MI")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Michigan</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                </ul >
                                            </div >
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div >
                                    </div >
                                </Tab >

                                <Tab eventKey="South Region" title="South Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Little Rock", "AR")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Arkansas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Baton Rouge", "LA")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Louisiana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Jackson", "MS")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Mississippi</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >


                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Nashville", "TN")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Tennessee</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Frankfort", "KY")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Kentucky</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Montgomery", "AL")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Alabama</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Atlanta", "GA")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Georgia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Tallahassee", "FL")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Florida</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Columbia", "SC")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">South Carolina</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >

                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Raleigh", "NC")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">North Carolina</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Richmond", "VA")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Virginia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Charleston", "WV")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">West Virginia</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                </ul >
                                            </div >
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div >
                                    </div >
                                </Tab >
                                <Tab eventKey="Southwest Region" title="Southwest Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Phoenix", "AZ")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Arizona</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Santa Fe", "NM")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">New Mexico</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Austin", "TX")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Texas</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >


                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Oklahoma City", "OK")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Oklahoma</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>


                                                </ul>
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">

                                                </ul>
                                            </div>
                                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">
                                                    Load More
                                                </a>
                                            </div> */}
                                        </div >
                                    </div >
                                </Tab >
                                <Tab eventKey="West Region" title="West Region">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Olympia", "WA")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Washington</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Salem", "OR")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Oregon</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Carson City", "NV")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Nevada</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>


                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Juneau", "AK")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Alaska</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Boise", "ID")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Idaho</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Helena", "MT")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Montana</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Salt Lake City", "UT")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Utah</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Honolulu", "HI")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Hawaii</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Cheyenne", "WY")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Wyoming</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a >

                                                </ul >
                                            </div >
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Sacramento", "CA")} >
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">California</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={() => linkDirection("Denver", "CO")}>
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">Colorado</h3>
                                                            <p className="mb-0 secondaryColor"  >
                                                                Affordable Housing
                                                            </p  >
                                                        </li>
                                                    </a>

                                                </ul >
                                            </div >
                                        </div >
                                    </div >
                                </Tab >
                            </Tabs >
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
};
export default AffordableHousingByRegions;
