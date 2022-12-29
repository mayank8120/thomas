import React, { useState } from 'react'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
// import SideFormavail from './CheckAvailibilityForm'

import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import PropertiesNearby from '../Index/PropertiesNearby';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts';
import { ManagementCompanyAccordion } from './ManagementCompanyAccordion';
import { IncomeLimitsAccordion } from './IncomeLimitsAccordion';
import Starratingstatic from '../../containers/Starratingstatic';
import Footer from '../../containers/Footer';

const GeneralProperty = () => {
    document.title = "General Property - Rental Housing Deals"

    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const [formData, setformData] = useState({ name: '', emailid: '', phone: '', add: '', city: '', state: '', zip: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(formData);
        // toggleModal();
        setformData({ name: '', emailid: '', phone: '', add: '', city: '', state: '', zip: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    }

    return (

        <>

            <section className="detailPage secPad24 generalproperty-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">CA</a></li>
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">Anaheim</a></li>
                                    <li className="breadcrumb-item fontSize14 active" aria-current="page">Name of Property</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex detailHeadSec">
                                <h3 className="font-weight400 itemWebsite">2882 Tyler St El Monte, CA 91157 Rental Deals 1 Nr. 1 Ba
                                    $1,200 (626) 357-1855</h3>
                                <h3 className="font-weight400 itemMobile d-flex align-ites-center"><a href=""
                                    className="itemMobile closeBtnn secondaryColor"><i className="fas fa-times"></i></a>2882 Tyler
                                    St El Monte, CA 91157 Rental Deals 1 Nr. 1 Ba $1,200 (626) 357-1855</h3>
                                <div className="ml-auto responsiveMarLeft">
                                    <ul className="noMarginPad listStyleNone sideActionIcon">
                                        <li className="brdrRadius4 itemWebsite">


                                            {/* {require('../../assets/img/searchHome3.png').default} */}
                                            <img src={require('../../assets/img/like.png').default} />
                                        </li>
                                        <li className="brdrRadius4 itemWebsite">
                                            <img src={require('../../assets/img/share.svg').default} />
                                        </li>
                                        <li className="brdrRadius4 arrowBlock d-flex align-items-center">
                                            <img src={require('../../assets/img/leftArrow.png').default} />
                                            <img className="ml-auto" src={require('../../assets/img/rightArrow.png').default} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 responsive0">
                            <div className="detailLeftSec">
                                {/* <div className="imageSec owl-carousel owl-theme">
                                <div className="item posRel">
                                    <img className="borderImage" src={require('../../assets/img/generalproperty.png').default} />

                                </div>
                            </div> */}
                                <div className="detailTextSec itemWebsite">
                                    <div className="d-flex align-items-center topHeadSec topHeadSec2">
                                        <div className="d-flex align-items-center">
                                            <h2 className="font-weight700 colorBlue mt-0 mb-0">Blessed Rock Apartments</h2>
                                            {/* <ul className="noMarginPad listStyleNone">
                                            <li><img src={require('../../assets/img/starRate2.png').default} /></li>
                                            <li><img src={require('../../assets/img/starRate2.png').default} /></li>
                                            <li><img src={require('../../assets/img/starRate2.png').default} /></li>
                                            <li><img src={require('../../assets/img/starRate2.png').default} /></li>
                                            <li><img src={require('../../assets/img/starRate2.png').default} /></li>
                                        </ul> */}
                                            <Starratingstatic />
                                        </div>
                                        <div className="ml-auto priceTagDet">
                                            <h2 className="font-weight700 colorBlue">Income Based</h2>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="leftTopParaSec">
                                            <p className="mb-0 secondaryColor">2882 Tyler St El Monte, CA 91157</p>
                                            <div className="d-flex flex-wrap align-items-center detailTags detailTagList">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                        <span className="brownTag">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                <p className="mb-0">Pets OK</p>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                        <span className="blueTag">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                <p className="mb-0">Handicap Accessible</p>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                        <span className="orangeTag">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                <p className="mb-0">Seniors 62+</p>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                        <span className="greenTag">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                <p className="mb-0">Section 8</p>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                        <span className="greenTag">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/detailImage5.svg').default} />
                                                                <p className="mb-0">Seniors 55+</p>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-auto rightOtherDetail">
                                            <ul className="noMarginPad listStyleNone">
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">Studio-3</span> Beds
                                                    </p>
                                                </li>
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">1-2</span> Baths
                                                    </p>
                                                </li>
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/area.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">N/A</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center btnSection btnSection2">
                                        <a href="" className="brdrRadius4 w-50 text-center">
                                            <img src={require('../../assets/img/phoneIcon.svg').default} />(626) 448-2699
                                        </a>
                                        <span className="brdrRadius4 w-50 text-center" data-toggle="modal"
                                            data-target="#exampleModal">
                                            <button className="w-100 brdrRadius4" onClick={() => {
                                                toggleModal();
                                            }}>Apply Now</button>
                                        </span>
                                        {/* <!-- Modal --> */}


                                        {/* <div className="modal fade rentalModal" id="exampleModal" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title w-100 text-center font-weight700"
                                                        id="exampleModalLabel">Pre-Rental Qualify</h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Full Name <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control"
                                                                        id="exampleInputEmail1" aria-describedby="emailHelp"
                                                                        placeholder="Email Address" value="Jonath" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Email Address <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address"
                                                                        value="Jonathan@gmail.com" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Phone Number <span
                                                                        className="labelMark">*</span></label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address" value="6261234123" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="">Address</label>
                                                                    <input type="email" className="form-control" id=""
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Email Address"
                                                                        value="4353  Norman Street" />
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
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Move-In Date</label>
                                                                    <div className="posRel calnderIcon">
                                                                        <input type="email" className="form-control"
                                                                            id="exampleInputEmail1"
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
                                                                                <input type="email" className="form-control"
                                                                                    id="" aria-describedby="emailHelp"
                                                                                    placeholder="" value="1" />
                                                                                <span><img
                                                                                    src={require('../../assets/img/twoArrow.png').default} /></span>
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
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                                    </div> */}

                                    </div>
                                </div>
                                <div className="detailTextSec itemMobile responsive15">
                                    <div className="topHeadSec leftTopParaSec">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h2 className="font-weight700 colorBlue mt-0 mb-0">Blessed Rock Apartments</h2>
                                                <p className="mb-0 secondaryColor">2882 Tyler St El Monte, CA 91157</p>
                                            </div>
                                            <div className="ml-auto">
                                                <ul className="noMarginPad listStyleNone sideActionIcon">
                                                    <li className="brdrRadius4">
                                                        <img src={require('../../assets/img/like.png').default} />
                                                    </li>
                                                    <li className="brdrRadius4 mr-0">
                                                        <img src={require('../../assets/img/share.svg').default} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <ul className="noMarginPad listStyleNone clearfix">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center rightOtherDetail">
                                            <ul className="noMarginPad listStyleNone resRightList20">
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">Studio-3</span>
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">1-2</span> Baths
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/area.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">800-1,200</span> Sq.Ft
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center callSec">
                                            <ul className="noMarginPad listStyleNone mt-0">
                                                <li>
                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                </li>
                                            </ul>
                                            <div className="ml-auto">
                                                <a href="" className="lineBtn brdrRadius4 font-weight700 purpleText">
                                                    <img src={require('../../assets/img/phoneColored.svg').default} />Call
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue">About</h3>
                                    <p>This 25-story apartment community is a visual extension of Piedmont Park in Midtown.
                                        Designed by internationally-acclaimed YOO Design Studio, YOO on the Park sits at the
                                        intersection of fashion, function and design. Whimsical exper... <a href=""
                                            className="purpleText">Read More</a></p>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue">Floorplans</h3>
                                    <ul className="noMarginPad listStyleNone floorplanList">
                                        <li className="d-flex align-items-center justify-content-between floorPlanListing">
                                            <div className="imageLeft floorplanHead d-flex align-items-center">
                                                <img src={require('../../assets/img/floorplan2.png').default} />
                                                <div className="headingList">
                                                    <h4 className="font-weight500 colorBlue mb-0">Studio</h4>
                                                    <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue">1</span> Bd
                                                        </li>
                                                        <li className="secondaryColor ml-16">
                                                            <span className="colorBlue">1</span> Ba
                                                        </li>
                                                        <li className="secondaryColor ml-24">
                                                            <span className="colorBlue">880</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="itemWebsite w-100">
                                                <div className="d-flex justify-content-center flex1">
                                                    <ul className="noMarginPad listStyleNone floatLeftList">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue">N/A</span> Bedroom
                                                        </li>
                                                        <li className="secondaryColor ml-35">
                                                            <span className="colorBlue">N/A</span> Bathroom
                                                        </li>
                                                        <li className="secondaryColor ml-40">
                                                            <span className="colorBlue">N/A</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ml-auto formHead itemWebsite">
                                                <a href="" className="checkAvailBlockBtn fontSize16 font-weight700">Check
                                                    Availability</a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between floorPlanListing">
                                            <div className="imageLeft floorplanHead d-flex align-items-center">
                                                <img src={require('../../assets/img/floorplan2.png').default} />
                                                <div className="headingList">
                                                    <h4 className="font-weight500 colorBlue mb-0">One Beds</h4>
                                                    <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue">1</span> Bd
                                                        </li>
                                                        <li className="secondaryColor ml-16">
                                                            <span className="colorBlue">1</span> Ba
                                                        </li>
                                                        <li className="secondaryColor ml-24">
                                                            <span className="colorBlue">880</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="itemWebsite w-100">
                                                <div className="d-flex justify-content-center flex1">
                                                    <ul className="noMarginPad listStyleNone floatLeftList">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue">1</span> Bedroom
                                                        </li>
                                                        <li className="secondaryColor ml-35">
                                                            <span className="colorBlue">N/A</span> Bathroom
                                                        </li>
                                                        <li className="secondaryColor ml-40">
                                                            <span className="colorBlue">N/A</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ml-auto formHead itemWebsite">
                                                <a href="" className="checkAvailBlockBtn fontSize16 font-weight700">Check
                                                    Availability</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="itemMobile">
                                    <div className="d-flex align-items-center availSec checkFloorPlan responsive15 flex-wrap">
                                        <div className="ml-auto Resnoauto">
                                            <a href="" className="brdrRadius4 transition">Check Availability</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="titleHeading marginTop24 responsive15">
                                    <h3 className="fontSize18 font-weight700">Fair Market Rents</h3>
                                    <p className="fontSize16 font-weight400 mb-0 colorBlue lineFixedNumber4">Fair Market Rents are
                                        HUD's determination of the average rents in a particular area for each bedroom size. The
                                        FMRs are set each year based on the rental rates of unsubsidized units so that
                                        participants in HUD programs have equal access for affordable housing. Here are the Fair
                                        Market Rents for Orange County, CA:</p>
                                </div>
                                <div className="bedroomBox itemWebsite">
                                    <div className="bedroomBoxFlex">
                                        <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                        <h4 className="mb-0 colorBlue font-weight700 fontSize16">$1257</h4>
                                    </div>
                                    <div className="bedroomBoxFlex">
                                        <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                        <h4 className="mb-0 colorBlue font-weight700 fontSize16">$1257</h4>
                                    </div>
                                    <div className="bedroomBoxFlex">
                                        <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                        <h4 className="mb-0 colorBlue font-weight700 fontSize16">$1257</h4>
                                    </div>
                                    <div className="bedroomBoxFlex">
                                        <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                        <h4 className="mb-0 colorBlue font-weight700 fontSize16">$1257</h4>
                                    </div>
                                    <div className="bedroomBoxFlex">
                                        <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                        <h4 className="mb-0 colorBlue font-weight700 fontSize16">$1257</h4>
                                    </div>
                                </div>
                                <div className="itemMobile responsive15">
                                    <div className="bedroomBox2">
                                        <div className="d-flex align-items-top w-100">
                                            <div className="w-50 brdrRight">
                                                <ul className="noMarginPad listStyleNone">
                                                    <li>
                                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency</p>
                                                        <h5 className="mb-0 colorBlue font-weight700">$200</h5>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom</p>
                                                        <h5 className="mb-0 colorBlue font-weight700">$600</h5>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom</p>
                                                        <h5 className="mb-0 colorBlue font-weight700">$700</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-50 padLeft16">
                                                <ul className="noMarginPad listStyleNone">
                                                    <li>
                                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor">Three-Bedroom
                                                        </p>
                                                        <h5 className="mb-0 colorBlue font-weight700">$900</h5>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 fontSize14 font-weight400 secondaryColor">Four-Bedroom
                                                        </p>
                                                        <h5 className="mb-0 colorBlue font-weight700">$1,200</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="titleHeading res24Top marginTop24 responsive15">
                                    <h3 className="fontSize18 font-weight700">Housing Authorities near Anaheim</h3>
                                </div>
                                <div className="itemWebsite responsive15">
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
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden
                                                                Grove, CA - 3.66 Miles</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>2,337</td>
                                                <td>N/A</td>
                                                <td>
                                                    <span className="statusTag fontSize14 font-weight500 closed">
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
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden
                                                                Grove, CA - 6.55 Miles</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>147</td>
                                                <td>279</td>
                                                <td>
                                                    <span className="statusTag fontSize14 font-weight500 closed">
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
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden
                                                                Grove, CA - 9.89 Miles</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>220</td>
                                                <td>153</td>
                                                <td>
                                                    <span className="statusTag fontSize14 font-weight500 open">
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
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden
                                                                Grove, CA - 11.32 Miles</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>447</td>
                                                <td>N/A</td>
                                                <td>
                                                    <span className="statusTag fontSize14 font-weight500 open">
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
                                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">Garden
                                                                Grove, CA - 12.55 Miles</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>N/A</td>
                                                <td>N/A</td>
                                                <td>
                                                    <span className="statusTag fontSize14 font-weight500 open">
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
                                <div className="itemMobile responsive15">
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
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15 neighborhoodSec">
                                    <h3 className="font-weight700 colorBlue">Neighborhoods Nearby</h3>
                                    <ul className="noMarginPad listStyleNone">
                                        <li>
                                            <div className="media d-flex align-items-center">
                                                <div>
                                                    <div className="progress" data-percentage="74">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div style={{ "line-height": "17px" }}>
                                                                <span className="purpleText font-weight700"
                                                                    style={{ "font-size": "16px" }}>75</span><br />
                                                                <span style={{ "text-transform": "lowercase" }}>of 100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/walkScore.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Walk Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize14">Blessed Rock Apartment is very walkable and
                                                        have good walk score. Most errands can be accomplished on foot.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media d-flex align-items-center">
                                                <div>
                                                    <div className="progress" data-percentage="74">
                                                        <span className="progress-left">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <span className="progress-right">
                                                            <span className="progress-bar"></span>
                                                        </span>
                                                        <div className="progress-value">
                                                            <div style={{ "line-height": "17px" }}>
                                                                <span className="purpleText font-weight700"
                                                                    style={{ "font-size": "16px" }}>87</span><br />
                                                                <span style={{ "text-transform": "lowercase" }}>of 100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/transit.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Transit Score</h6>
                                                        <div className="posRel infoBox">
                                                            <i className="fas fa-info-circle"></i>
                                                            <div className="onHoverBlock">
                                                                Transit Score is a patented measure of how well a location is
                                                                served by public transit. <a href="">Learn More Here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 para fontSize14">Blessed Rock Apartment has good transit
                                                        score meaning many nearby public transportation options are available.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mapSection posRel">
                                    <img src={require('../../assets/img/mapImage.png').default} />
                                    <span>
                                        <img src={require('../../assets/img/marker.png').default} />
                                    </span>
                                </div>
                                <div className="titleHeading res24Top marginTop24 responsive15">
                                    <h3 className="fontSize18 font-weight700">Schools Nearby</h3>
                                </div>
                                <div className="itemWebsite responsive15">
                                    <table className="table agencyDetailtable">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Grades</th>
                                                <th scope="col">Urban Center</th>
                                                <th scope="col">City, State</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista
                                                        Elementary</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">(323) 721-4335</p>
                                                </th>
                                                <td className="colorBlue fontSize16 font-weight500">KG-5</td>
                                                <td className="colorBlue fontSize16 font-weight500">N/A</td>
                                                <td>
                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                    <p className="mb-0 fontSize14 font-weight400 secondaryColor">14 miles</p>
                                                </td>
                                                <td>
                                                    <div className="accordionMoreInfo brdrRadius4 pull-right">
                                                        <a href="" className="colorWhite font-weight700">More Info</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="skyBlueLineBtn mt-0">
                                        <a href="" className="w-100 transition font-weight500">Load More</a>
                                    </div>
                                </div>
                                <div className="itemMobile responsive15">
                                    <ul className="noMarginPad listStyleNone agendtailList">
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <li>
                                            <div>
                                                <h5 className="mb-0 font-weight500 fontSize16 skyBlueColor">Bella Vista Elementary
                                                </h5>
                                                <p
                                                    className="mb-0 fontSize14 font-weight400 secondaryColor d-flex align-items-center">
                                                    (323) 721-4335 <span className="marginLeft15">15 Miles</span></p>
                                            </div>
                                            <div className="d-flex align-items-center marginTop12">
                                                <div>
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Grades</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">KG-5</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">Urban Center</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">N/A</h5>
                                                </div>
                                                <div className="marginLeft24">
                                                    <p className="mb-0 fontSize12 font-weight400 secondaryColor">City, State</p>
                                                    <h5 className="fontSize14 font-weight500 colorBlue">Monterey Park, CA</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="brdrLinee"></li>
                                        <div className="accordionMoreInfo brdrRadius4 w-100 text-center marginResponsive24">
                                            <a href="" className="colorWhite font-weight700 w-100">More Info</a>
                                        </div>
                                    </ul>
                                </div>



                                <div className="SectionBlock responsive15 availabilitySection marginTop24">
                                    <div className="d-flex align-items-center">
                                        <h2 className="colorBlue font-weight700">Check Availability</h2>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700"><img src={require('../../assets/img/phoneColored.svg').default} />(626)
                                                448-2699</p>
                                        </div>
                                    </div>

                                    <CheckAvailibilityForm />

                                    {/* <form className="rentalForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <div className="form-group">
                                                <label for="">Full Name</label>
                                                <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                                    placeholder="Email Address" value="Jonath" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <div className="form-group">
                                                <label for="">Phone Number</label>
                                                <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                                    placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">Email Address</label>
                                                <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                                     placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">Move In Date</label>
                                                <div className="posRel calnderIcon">
                                                    <input type="email" className="form-control" id=""
                                                        aria-describedby="emailHelp" placeholder="Choose Move In Date" />
                                                    <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">Message</label>
                                                <textarea className="form-control" id="" rows="2"
                                                    placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}



                                </div>
                                {/* <div className="d-flex align-items-center responsive15">
                                <div className="ml-auto Resnoauto availSec mt-0 pt-0">
                                    <a href="" className="brdrRadius4 transition">Check Availability</a>
                                </div>
                            </div> */}
                            </div>

                            <div className="contnet-check">

                                {/* <SideFormavail /> */}
                            </div>
                        </div>





                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 itemWebsite">
                            <div className="detailRightSec">
                                <div className="checkAvailability">
                                    {/* <!-- <div className="d-flex align-items-center">
                                    <div className="dealTag font-weight700 brdrRadius4">
                                        <img src={require('../../assets/img/goodDeal.svg').default} />Good Deal
                                    </div>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 font-weight700">$1,200</h2>
                                    </div>
                                </div> --> */}
                                    {/* <!-- <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
                                    <li className="secondaryColor">
                                        <span className="colorBlue">1</span> Bd
                                    </li>
                                    <li className="secondaryColor">
                                        <span className="colorBlue">1</span> Ba
                                    </li>
                                    <li className="secondaryColor ml-16">
                                        <span className="colorBlue">980</span> Sq.ft
                                    </li>
                                    <li className="secondaryColo ml-16">
                                        <span className="colorBlue">Affordable Housing</span>
                                    </li>
                                </ul>
                                <div className="brdrLine mar-15"></div> --> */}
                                    <div className="affordableTag brdrRadius4">
                                        Affordable Housing
                                    </div>



                                    <div className="sideFormBlock">
                                        <div className="SectionBlock responsive15 availabilitySection">
                                            <div className="d-flex align-items-center">
                                                <h2 className="colorBlue font-weight700 fontSize18">Check Availability</h2>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="purpleText font-weight700 fontSize18"><img
                                                    src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                            </div>

                                            <CheckAvailibilityForm />

                                            {/* <form className="rentalForm">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="">Full Name</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Email Address"
                                                            value="Jonath" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <div className="form-group">
                                                        <label for="">Phone Number</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="">Email Address</label>
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp"
                                                             placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label for="">Move In Date</label>
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
                                                        <label for="">Message</label>
                                                        <textarea className="form-control" id="" rows="3"
                                                            placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div
                                                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                        <div className="Resnoauto w-100">
                                                            <a href="" className="brdrRadius4 transition w-100">Check Availability</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form> */}



                                        </div>
                                    </div>




                                </div>


                                <IncomeLimitsAccordion />

                                {/* <div className="accordionBoxInfo">
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Income limits
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="fontSize12 colorBlue">Your income must be below these income
                                                    levels for this property</p>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li className="d-flex align-items-center fontSize12">
                                                                1 person<span
                                                                    className="ml-auto colorBlue font-weight700">$53,750</span>
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize12">
                                                                2 persons<span
                                                                    className="ml-auto colorBlue font-weight700">$61,450</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li className="d-flex align-items-center fontSize12">
                                                                3 persons<span
                                                                    className="ml-auto colorBlue font-weight700">$69,100</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="fontSize12 secondaryColor mb-0 mt-1">Please contact this property
                                                    to verify income requirements</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                {/* 
                            <div className="accordionBoxInfo managementComp">
                                <div id="accordion2">
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="true"
                                                    aria-controls="collapseTwo">
                                                    Management Company
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseTwo"
                                                    aria-expanded="true" aria-controls="collapseTwo">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                                            data-parent="#accordion2">
                                            <div className="card-body p-0">
                                                <div className="media d-flex align-items-center p-15">
                                                    <span className="imageCircle">
                                                        <img src={require('../../assets/img/AWI.png').default} />
                                                    </span>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 font-weight400 colorBlue mb-0 fontSize16">AWI
                                                            Management Corp.</h5>
                                                        <p className="mb-0 fontSize12 secondaryColor">120 Center SL Auburn, CA,
                                                            95603</p>
                                                        <a href="" className="purpleText">www.awimanagement.com</a>
                                                    </div>
                                                </div>
                                                <div className="brdrLine mar-15"></div>
                                                <div className="scrollManagement boxscroll4">
                                                    <div className="wrapperScroll">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management1.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200 - $1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management2.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management3.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management2.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management1.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management1.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200 - $1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management2.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management3.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management2.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img className="brdrRadius4"
                                                                        src={require('../../assets/img/management1.png').default}
                                                                        alt="Generic placeholder image" />
                                                                    <div className="media-body">
                                                                        <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                            Arcadia Apartment</h5>
                                                                        <p className="mt-0 mb-0 fontSize12 secondaryColor">2882
                                                                            Tyler St El Monte, CA 91157</p>
                                                                        <ul
                                                                            className="noMarginPad listStyleNone floatLeftList d-flex align-items-center">
                                                                            <li className="secondaryColor">
                                                                                <span className="colorBlue">1-2</span> Bd
                                                                            </li>
                                                                            <li className="secondaryColor ml-16">
                                                                                <span className="colorBlue">1-3</span> Ba
                                                                            </li>
                                                                            <li
                                                                                className="ml-auto priceTagg font-weight700 fontSize16">
                                                                                $1,200-1,800
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                <ManagementCompanyAccordion />





                                {/* <div className="accordionBoxInfo calculatorForm">
                                <div id="accordion3">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="true"
                                                    aria-controls="collapseThree">
                                                    Affordability Calculator
                                                </button>
                                                <span className="ml-auto" data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="true" aria-controls="collapseThree">
                                                    <img src={require('../../assets/img/upArrow.png').default} />
                                                </span>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree"
                                            data-parent="#accordion3">
                                            <div className="card-body">
                                                <p className="fontSize12 colorBlue">Please enter your MONTHLY gross income
                                                    (income before taxes, number only)</p>
                                                <div className="d-flex align-items-center rentalForm">
                                                    <div className="form-group mb-0">
                                                        <input type="email" className="form-control" id=""
                                                            aria-describedby="emailHelp" placeholder="$" />
                                                    </div>
                                                    <a href="" className="calculteBtn brdrRadius4 colorWhite">Calculate</a>
                                                </div>
                                                <p className="fontSize16 secondaryColor mb-0 mt-1">You should not be paying more
                                                    than <b>$1650</b> on your rent morgage each month.</p>
                                                <a href="" className="purpleText font-weight700">Why?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             */}
                                <AffordabilityCal />

                                <CityCountyQuickFacts />

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
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="brdrLine"></div>
                            {/* <!--section 8 housing nearby--> */}
                            <section className="secPad24 housingNearby resPonsivePad">
                                <div className="container">

                                    <div className="row marginTop">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            {/* <div className="owl-carousel owl-theme housing_Nearby sliderNav">
                                            <div className="item">
                                                <div className="sliderItem">
                                                    <img src={require('../../assets/img/housingNearby1.png').default} />
                                                    <a href="" className="likeTag transition"><i className="far fa-heart"></i></a>
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                        Affordable Housing</div>
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
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                        Affordable Housing</div>
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
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                        Affordable Housing</div>
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
                                                    <div className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                        Affordable Housing</div>
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

                                            <PropertiesNearby />

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="pupleLineBtn mt-0 p-15 mtt-20 itemWebsite">
                                <a href="" className="w-100 transition font-weight500">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>




                <Modal isOpen={isOpen}
                    onRequestClose={toggleModal} className="prerental">


                    {/* <div className="modal-content"> */}
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">Pre-Rental Qualify</h5>
                        <button type="button" className="close" onClick={toggleModal}
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">


                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name <span
                                            className="labelMark">*</span></label>
                                        <input type="text" className="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Enter name" value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">Email Address <span
                                            className="labelMark">*</span></label>
                                        <input type="email" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Email Address"
                                            value={formData.emailid} onChange={(e) => setformData({ ...formData, emailid: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">Phone Number <span
                                            className="labelMark">*</span></label>
                                        <input type="number" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Email Address"
                                            value={formData.phone} onChange={(e) => setformData({ ...formData, phone: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">Address</label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter address"
                                            value={formData.add} onChange={(e) => setformData({ ...formData, add: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">City</label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="City"
                                            value={formData.city} onChange={(e) => setformData({ ...formData, city: e.target.value })} required />
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
                                                <input type="number" className="form-control" id=""
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter zip"
                                                    value={formData.zip} onChange={(e) => setformData({ ...formData, zip: e.target.value })} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Move-In Date</label>
                                        <div className="posRel calnderIcon">
                                            <input type="text" className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Move-In Date"
                                                value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value })} required />
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
                                                    <input type="number" className="form-control"
                                                        id="" aria-describedby="emailHelp"
                                                        placeholder=""
                                                        value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required />
                                                    <span><img
                                                        src={require('../../assets/img/twoArrow.png').default} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">Monthly Income</label>
                                                <input type="number" className="form-control" id=""
                                                    aria-describedby="emailHelp" placeholder=""

                                                    value={formData.monthlyIncome} onChange={(e) => setformData({ ...formData, monthlyIncome: e.target.value })} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                            <div className="brdrLine marLftRgt"></div>
                            <div>
                                <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                    Conditions:</h5>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."
                                        value={formData.disclaimer} onChange={(e) => setformData({ ...formData, disclaimer: e.target.value })} required></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit"
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                            </div>
                        </form>


                    </div>

                    {/* </div> */}

                </Modal>

            </section>
            <Footer />
        </>
    )
}
export default GeneralProperty