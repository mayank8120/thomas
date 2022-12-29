import React, { useState } from 'react'

import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import Footer from '../../containers/Footer';
import AffordabilityCal from '../AgencyDetail/AffordabilityCal';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts';
import { IncomeLimitsAccordion } from '../GeneralProperty/IncomeLimitsAccordion';
import { ManagementCompanyAccordion } from '../GeneralProperty/ManagementCompanyAccordion';
import PropertiesNearby from '../Index/PropertiesNearby';
import ImageSliderCarousel from '../PropertyDetail/ImageSliderCarousel';

const Listhub = () => {

    document.title = "Listhub - Rental Housing Deals"


    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }

    const [formData, setformData] = useState({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        console.log(formData);
        setformData({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
        // toggleModal();
    }

    let onValChange = (e) => {
        setformData({ ...formData, voucher: e.target.value })
    }



    const [isOpenQualify, setIsOpenQualify] = useState(false);
    function toggleModalQualify() {
        setIsOpenQualify(!isOpenQualify);
    }

    const [isOpenImage, setIsOpenImage] = useState(false);
    function toggleModalImage() {
        setIsOpenImage(!isOpenImage);
    }

    return (

        <>
            <section className="detailPage secPad24 lishub-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight400 mb-0">
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">MA</a></li>
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">El Acton</a></li>
                                    <li className="breadcrumb-item fontSize14 active" aria-current="page"><a href="">405 Great Rd
                                        #16, Acton, MA 01720</a></li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex detailHeadSec align-items-center">
                                <h2 className="font-weight700 fontSize20 mb-0">405 Great Rd #16, Acton, MA 01720 Rental Deals 1 Br.
                                    1 Ba $1,700 (617) 285-7496</h2>
                                <div className="ml-auto responsiveMarLeft">
                                    <ul className="noMarginPad listStyleNone sideActionIcon">
                                        <li className="brdrRadius4 itemWebsite">
                                            <img src={require('../../assets/img/redHeart.png').default} />
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
                                <ImageSliderCarousel />

                                {/* <!-- Modal --> */}
                                <div className="modal fade rentalModal availabilityModal" id="exampleModalPhoto" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModalProperty" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center posRel">
                                                <button type="button" className="close closeModl" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                                                    Nr. 1 Ba $1,200 (626) 357-1855</h5>
                                                <div className="ml-auto d-flex align-items-center mr-5">
                                                    <a href="" className="modalCheck colorWhite">Check Availability</a>
                                                    <ul className="noMarginPad listStyleNone sideActionIcon">
                                                        <li className="brdrRadius4 itemWebsite">
                                                            <img src={require('../../assets/img/redHeart.png').default} />
                                                        </li>
                                                        <li className="brdrRadius4 itemWebsite mr-0">
                                                            <img src={require('../../assets/img/share.svg').default} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock propertyDetlModal">
                                                <div className="">
                                                    <div className=" scrollBodyPopUp">
                                                        <div className="wrapperScroll">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="modalPop">
                                                                        <div className="modalListImage">
                                                                            <img
                                                                                src={require('../../assets/img/propertyDetailModalPhoto.png').default} />
                                                                        </div>
                                                                        <div className="modalListImage">
                                                                            <img
                                                                                src={require('../../assets/img/propertyDetailModalPhoto2.png').default} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="modalLeft">
                                                                        <img src={require('../../assets/img/modalSidePopup.png').default} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                    <div className="sideFormBlock">
                                                                        <div
                                                                            className="SectionBlock responsive15 availabilitySection">
                                                                            <div className="d-flex align-items-center">
                                                                                <h2 className="colorBlue font-weight700 fontSize18">
                                                                                    Check Availability</h2>
                                                                                <div className="ml-auto">
                                                                                    <p
                                                                                        className="purpleText font-weight700 fontSize18 itemWebsite">
                                                                                        <img
                                                                                            src={require('../../assets/img/phoneColored.svg').default} />(626)
                                                                                        448-2699</p>

                                                                                </div>
                                                                            </div>

                                                                            {/* 
                                                                        <form className="rentalForm">
                                                                            <div className="row">
                                                                                <div
                                                                                    className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                                    <div className="form-group">
                                                                                        <label for="">Full Name</label>
                                                                                        <input type="email"
                                                                                            className="form-control" id=""
                                                                                            aria-describedby="emailHelp"
                                                                                            placeholder="Email Address"
                                                                                            value="Jonath" />
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                                    <div className="form-group">
                                                                                        <label for="">Phone Number</label>
                                                                                        <input type="email"
                                                                                            className="form-control" id=""
                                                                                            aria-describedby="emailHelp"
                                                                                            placeholder="Phone Number" />
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <label for="">Email Address</label>
                                                                                        <input type="email"
                                                                                            className="form-control" id=""
                                                                                            aria-describedby="emailHelp"
                                                                                             placeholder="Email Address" />
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <label for="">Move In Date</label>
                                                                                        <div className="posRel calnderIcon">
                                                                                            <input type="email"
                                                                                                className="form-control" id=""
                                                                                                aria-describedby="emailHelp"
                                                                                                placeholder="Choose Move In Date" />
                                                                                            <span><img
                                                                                                src={require('../../assets/img/calander.png').default} /></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            for="exampleFormControlTextarea1">Message</label>
                                                                                        <textarea className="form-control"
                                                                                            id="exampleFormControlTextarea1"
                                                                                            rows="3"
                                                                                            placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                    <div
                                                                                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                                        <div className="Resnoauto w-100">
                                                                                            <a href=""
                                                                                                className="brdrRadius4 transition w-100"
                                                                                                data-toggle="modal"
                                                                                                data-target="#exampleModal3"
                                                                                                data-dismiss="modal"
                                                                                                aria-label="Close">Check
                                                                                                Availability</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                     */}

                                                                            <CheckAvailibilityForm />


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detailTextSec itemWebsite listhub">
                                    <div className="d-flex align-items-center topHeadSec">
                                        <div className="d-flex align-items-center">
                                            <h1 className="font-weight700 colorBlue fontSize24 mt-0 mb-0">405 Great Rd #16, Acton,
                                                MA 01720
                                            </h1>
                                            {/* <!-- <ul className="noMarginPad listStyleNone">
                                            <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                        </ul>--> */}
                                        </div>
                                        <div className="ml-auto priceTagDet">
                                            <h2 className="font-weight700 colorBlue">$1,700
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="leftTopParaSec">

                                            <div className="d-flex flex-wrap align-items-center detailTags detailTagList">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <span className="brownTag">
                                                            <div className="d-flex align-items-center">
                                                                <ul className="noMarginPad listStyleNone firstlist">
                                                                    <li>
                                                                        <p className="d-flex align-items-center"> <span
                                                                            className="lista font-weight700 fontSize14">Updated</span><span
                                                                                className="font-weight500  fontSize14 thirdColor">8
                                                                                August 2021</span></p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="d-flex align-items-center "><span
                                                                            className="lista font-weight700 fontSize14">Added</span><span
                                                                                className="font-weight500  fontSize14 thirdColor">2
                                                                                day(s) ago</span></p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="d-flex align-items-center mb-0"><span
                                                                            className="lista font-weight700 fontSize14">Offered
                                                                            by</span><span
                                                                                className="font-weight500 fontSize14 thirdColor">Conway
                                                                                - Brighton</span></p>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </span>
                                                        <span className="blueTag">
                                                            <div className="d-flex align-items-center">

                                                                <ul className="noMarginPad listStyleNone">
                                                                    <li>
                                                                        <p className="d-flex align-items-center"><span
                                                                            className="lista font-weight700 fontSize14 ">Type</span><span
                                                                                className="font-weight500 fontSize14 thirdColor">Condo</span>
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="d-flex align-items-center"><span
                                                                            className="lista font-weight700 fontSize14">Unit
                                                                            Floor</span><span
                                                                                className="font-weight500 fontSize14 thirdColor">
                                                                                2</span></p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="mb-0 d-flex align-items-center"><span
                                                                            className="lista font-weight700 fontSize14"> Pet
                                                                            Policy</span><span
                                                                                className="font-weight500 fontSize14	thirdColor">Not
                                                                                Allowed</span></p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-auto rightOtherDetail mt-16">
                                            <ul className="noMarginPad listStyleNone">
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Uniona.png').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">1</span> Beds
                                                    </p>
                                                </li>
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/showera.png').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">1</span> Baths
                                                    </p>
                                                </li>
                                                <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/areaa.png').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">818</span> Sq.Ft
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center btnSection">
                                        <a href=""
                                            className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
                                            <img src={require('../../assets/img/phoneIcon.svg').default} />(626) 448-2699
                                        </a>
                                        <button
                                            className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center"
                                            onClick={toggleModalQualify}>
                                            <img src={require('../../assets/img/qualifyIcon.png').default} />Qualify Now
                                        </button>
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade rentalModal preRentalModal" id="exampleModal" tabindex="-1"
                                            role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="wrapperScroll">
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
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
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
                                                                                        {/* <!-- <span><img src={require('../../assets/img/twoArrow.png').default} /></span> --> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                <div className="form-group">
                                                                                    <label for="">Monthly Income</label>
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
                                                                                        placeholder="" value="" />
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
                                                                                        <label for="test3">On Waiting
                                                                                            List</label>
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
                                                                    <textarea className="form-control"
                                                                        id="exampleFormControlTextarea1" rows="3"
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
                                        </div>
                                    </div>
                                </div>
                                <div className="detailTextSec itemMobile responsive15">
                                    <div className="topHeadSec leftTopParaSec">
                                        <div className="">
                                            <div>
                                                <h2 className="font-weight700 colorBlue mt-0 mb-0">405 Great Rd #16, Acton, MA 01720
                                                </h2>

                                            </div>
                                            <div className=" priceTagDet">
                                                <h2 className="font-weight700 colorBlue">$1,700
                                                </h2>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                        <div className="d-flex align-items-center rightOtherDetail">
                                            <ul className="noMarginPad listStyleNone resRightList20">
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">1 </span>Beds
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/shower.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">1 </span> Baths
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center mb-0">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/area.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue font-weight700">818</span> Sq.Ft
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center detailTags detailTagList">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <span className="brownTag">
                                                        <div className="d-flex align-items-center">
                                                            <ul className="noMarginPad listStyleNone firstlist">
                                                                <li>
                                                                    <p className="d-flex align-items-center"> <span
                                                                        className="lista font-weight700 fontSize14">Updated</span><span
                                                                            className="font-weight500  fontSize14 thirdColor">8
                                                                            August 2021</span></p>
                                                                </li>
                                                                <li>
                                                                    <p className="d-flex align-items-center "><span
                                                                        className="lista font-weight700 fontSize14">Added</span><span
                                                                            className="font-weight500  fontSize14 thirdColor">2
                                                                            day(s) ago</span></p>
                                                                </li>
                                                                <li>
                                                                    <p className="d-flex align-items-center mb-0"><span
                                                                        className="lista font-weight700 fontSize14">Offered
                                                                        by</span><span
                                                                            className="font-weight500 fontSize14 thirdColor">Conway
                                                                            - Brighton</span></p>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </span>
                                                    <span className="blueTag">
                                                        <div className="d-flex align-items-center">

                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <p className="d-flex align-items-center"><span
                                                                        className="mt-0  lista pbt font-weight700 fontSize14 mt-0">Type</span><span
                                                                            className="mt-0 pbt font-weight500 fontSize14 thirdColor">Condo</span>
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p className="d-flex align-items-center"><span
                                                                        className="mt-0  lista  font-weight700 fontSize14">Unit
                                                                        Floor</span><span
                                                                            className=" mt-0 font-weight500 fontSize14 thirdColor">
                                                                            2</span></p>
                                                                </li>
                                                                <li>
                                                                    <p className="mb-0 d-flex align-items-center"><span
                                                                        className="mt-0  lista font-weight700 fontSize14"> Pet
                                                                        Policy</span><span
                                                                            className=" mt-0  font-weight500 fontSize14	thirdColor">Not
                                                                            Allowed</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </span>
                                                </div>




                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="ml-auto Resnoauto listhub-button">
                                                <a href=""
                                                    className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
                                                    <img src={require('../../assets/img/phoneIcon.svg').default} />(626) 448-2699
                                                </a>
                                                <a href=""
                                                    className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center"
                                                    data-toggle="modal" data-target="#exampleModal">
                                                    <img src={require('../../assets/img/qualifyIcon.png').default} />Qualify Now
                                                </a>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue fontSize18">About Property <span
                                        className="font-weight700 fontSize18 ">of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="truncate">
                                        <p className="fontSize16">This 25-story apartment community is a visual extension of
                                            Piedmont Park in Midtown. Designed by internationally-acclaimed YOO Design Studio,
                                            YOO on the Park sits at the intersection of fashion, function and design. Whimsical
                                            exper... <a href="" className="purpleText font-weight700">Read More</a> </p>
                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="SectionBlock responsive15">
                                    <h3 className="font-weight700 colorBlue fontSize18">Floorplans <span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <ul className="noMarginPad listStyleNone floorplanList">
                                        <li className="d-flex align-items-center justify-content-between floorPlanListing">
                                            <div className="imageLeft floorplanHead d-flex align-items-center">
                                                <img src={require('../../assets/img/floorplan.svg').default} />
                                                <div className="headingList">
                                                    <h4 className="font-weight500 colorBlue mb-0">One Bed</h4>
                                                    <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue font-weight700">1</span> Bd
                                                        </li>
                                                        <li className="secondaryColor ml-16">
                                                            <span className="colorBlue font-weight700">1</span> Ba
                                                        </li>
                                                        <li className="secondaryColor ml-24">
                                                            <span className="colorBlue font-weight700">880</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="itemWebsite w-100">
                                                <div className="d-flex justify-content-center flex1">
                                                    <ul className="noMarginPad listStyleNone floatLeftList">
                                                        <li className="secondaryColor">
                                                            <span className="colorBlue font-weight700">1</span> Bedroom
                                                        </li>
                                                        <li className="secondaryColor ml-35">
                                                            <span className="colorBlue font-weight700">1</span> Bathroom
                                                        </li>
                                                        <li className="secondaryColor ml-40">
                                                            <span className="colorBlue font-weight700">880</span> Sq.ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ml-auto formHead">
                                                <h3 className="colorBlue font-weight700">$1,700</h3>
                                            </div>
                                        </li>



                                    </ul>
                                </div>
                                <div className="d-flex align-items-center availSec responsive15 flex-wrap">
                                    <div>
                                        <p className="mb-0">Last updated: <span className="colorBlue font-weight700">Wed, 28 August
                                            2020</span></p>
                                    </div>
                                    <div className="ml-auto Resnoauto">
                                        <button className="brdrRadius4 transition d-flex align-items-center" onClick={toggleModalAvailability}><span>Check Availability</span></button>
                                    </div>
                                </div>
                                {/* <!-- Modal --> */}
                                <div className="modal fade rentalModal availabilityModal" id="exampleModal1" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                                                    Nr. 1 Ba $1,200 (626) 357-1855</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="modalLeft">
                                                            <div className="imageSecleftModal posRel">
                                                                <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                                                <div
                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                    Affordable Housing</div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="lefttitle">
                                                                    <h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
                                                                        Rock Apartments</h5>
                                                                    <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <img src={require('../../assets/img/goodDeal.svg').default} />
                                                                </div>
                                                            </div>
                                                            <div className="sliderListing">
                                                                <ul className="clearfix d-flex align-items-center">
                                                                    <li className="fontSize17"><b>1</b>Bd</li>
                                                                    <li className="fontSize17"><b>1</b>Ba</li>
                                                                    <li className="fontSize17"><b>880</b>Sq.Ft</li>
                                                                    <li className="ml-auto boldTag greenText fontSize24">$1,200</li>
                                                                </ul>
                                                            </div>
                                                            <p className="para fontSize14 font-weight400 secondaryColor">Blessed
                                                                Rock Apartment is an affordable apartment community for 62 years
                                                                of age or older in El Monte, CA.We currently have a waiting
                                                                list. Please call today to find out how to get an application
                                                                for this community or to verify income requirements</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div className="sideFormBlock">
                                                            <div className="SectionBlock responsive15 availabilitySection">
                                                                <div className="d-flex align-items-center">
                                                                    <h2 className="colorBlue font-weight700 fontSize18">Check
                                                                        Availability</h2>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <p className="purpleText font-weight700 fontSize18"><img
                                                                        src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                                                </div>
                                                                {/* <form className="rentalForm">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label for="">Full Name</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address" value="Jonath" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label for="">Phone Number</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Phone Number" />
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
                                                                                <input type="email" className="form-control"
                                                                                    id="" aria-describedby="emailHelp"
                                                                                    placeholder="Choose Move In Date" />
                                                                                <span><img
                                                                                    src={require('../../assets/img/calander.png').default} /></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label
                                                                                for="exampleFormControlTextarea1">Message</label>
                                                                            <textarea className="form-control"
                                                                                id="exampleFormControlTextarea1" rows="3"
                                                                                placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div
                                                                            className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                            <div className="Resnoauto w-100">
                                                                                <a href=""
                                                                                    className="brdrRadius4 transition w-100"
                                                                                    data-toggle="modal"
                                                                                    data-target="#exampleModal2"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close">Check
                                                                                    Availability</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form> */}

                                                                <CheckAvailibilityForm />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Modal--> */}
                                <div className="modal fade rentalModal availabilityModal" id="exampleModal2" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle">Check Availability at These Popular Apartments
                                                    Below</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock scrollModalList">
                                                <div className="custom-radios">
                                                    <div className="labelRadio propertyList active">
                                                        <label for="color-1">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail.html">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
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
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center requestTag">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-1" name="color"
                                                                            value="color-1" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="labelRadio propertyList">
                                                        <label for="color-2">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail.html">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
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
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-2" name="color"
                                                                            value="color-2" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="labelRadio propertyList">
                                                        <label for="color-3">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                <div className="rightText flex1 borderRightBlock">
                                                                    <div className="d-flex align-items-center propertyTitle">
                                                                        <a href="propertyDetail.html">
                                                                            <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                                Rock Apartments</h5>
                                                                        </a>
                                                                        <div className="topHeadSec mt-0">
                                                                            <ul className="noMarginPad listStyleNone">
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                                <li><i className="fas fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                        Monte, CA 91157</p>
                                                                    <div className="priceRange itemWebsite">
                                                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                            $1,200-$1,800</h4>
                                                                    </div>
                                                                    <div className="itemMobile priceRangeMobile">
                                                                        <div className="d-flex align-items-center">
                                                                            <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                            </h4>
                                                                            <span className="font-weight700"><img
                                                                                src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                Deal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center listingBlockLine">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Beds
                                                                            </li>
                                                                            <li className="d-flex align-items-center ml-12">
                                                                                <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                    className="colorBlue">1-2</span> Baths
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="noMarginPad listStyleNone listIcon ml-18">
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
                                                                    </div>
                                                                    <p className="descriptionProperty mb-0 fontSize12"><img className=""
                                                                        src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                        Seniors - 2882 Tyler St...<a href=""
                                                                            className="purpleText">More</a></p>
                                                                </div>
                                                                <div className="widthRadio">
                                                                    <div className="text-center">
                                                                        <a href=""
                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                            for<br />
                                                                            more info</a>
                                                                        <input type="radio" id="color-3" name="color"
                                                                            value="color-3" checked />
                                                                        <span>
                                                                            <div>
                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                    alt="Checked Icon" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottomFooter d-flex align-items-center">
                                                <h3>2 properties Selected</h3>
                                                <div className="ml-auto">
                                                    <a href="" className="checkBtnModall" data-toggle="modal"
                                                        data-target="#exampleModal3" data-dismiss="modal"
                                                        aria-label="Close">Check Availability</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Modal--> */}
                                <div className="modal fade rentalModal availabilityModal" id="exampleModal3" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle" style={{ color: "#fff" }}>Title</h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock">
                                                <div className="thankyouBlock text-center">
                                                    <img src={require('../../assets/img/thankYou.png').default} />
                                                    <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                    <p className="fontSize18 font-weight400 secondaryColor">Your request has been
                                                        submitted successfully</p>
                                                    <a href="" className="doneBtn brdrRadius4">Done</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="amenitiesListing respo nsive15 itemWebsite ">
                                    <h3 className="font-weight700 colorBlue">Property Details<span
                                        className="font-weight700 fontSize18 "> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight700 fontSize14">Status</p>
                                                <p className="mb-10 font-weight700 fontSize14">MLS ID</p>
                                                <p className="mb-10 font-weight700 fontSize14">Year Built</p>
                                                <p className="mb-10 font-weight700 fontSize14">Property Type</p>
                                                <p className="mb-10 font-weight700 fontSize14">Waterfront</p>
                                                <p className="mb-0 font-weight700 fontSize14">Available Now</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Active</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">72878246</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">1969</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Residential Rental</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">No</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">No</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight700 fontSize14">Residences</p>
                                                <p className="mb-10 font-weight700 fontSize14">County</p>
                                                <p className="mb-10 font-weight700 fontSize14">Building/Complex</p>
                                                <p className="mb-10 font-weight700 fontSize14">Rental Type</p>
                                                <p className="mb-10 font-weight700 fontSize14">Tax ID</p>
                                                <p className="mb-0 font-weight700 fontSize14">Date Available</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">71</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Middlesex</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Woodvale</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Condominium</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">306811</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">08-09-2021</p>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                                <div className="amenitiesListing respo nsive15 itemMobile">
                                    <h3 className="font-weight700 colorBlue fontSize18">Property Details<span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center mb-10">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14">Status</p>
                                                <p className="mb-10 font-weight700 fontSize14">MLS ID</p>
                                                <p className="mb-10 font-weight700 fontSize14">Year Built</p>
                                                <p className="mb-10 font-weight700 fontSize14">Property Type</p>
                                                <p className="mb-10 font-weight700 fontSize14">Waterfront</p>
                                                <p className="mb-0 font-weight700 fontSize14">Available Now</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Active</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">72878246</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">1969</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Residential Rental</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">No</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">No</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14">Residences</p>
                                                <p className="mb-10 font-weight700 fontSize14">County</p>
                                                <p className="mb-10 font-weight700 fontSize14">Building/Complex</p>
                                                <p className="mb-10 font-weight700 fontSize14">Rental Type</p>
                                                <p className="mb-10 font-weight700 fontSize14">Tax ID</p>
                                                <p className="mb-0 font-weight700 fontSize14">Date Available</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">71</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Middlesex</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor ">Woodvale</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Condominium</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">306811</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">08-09-2021</p>
                                            </div>
                                        </div>



                                    </div>


                                </div>
                                <div className="brdrLine"></div>
                                <div className="amenitiesListing respo nsive15 itemWebsite">
                                    <h3 className="font-weight700 colorBlue fontSize18">Features<span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">INTERIOR FEATURES </p>
                                                <p className="mb-10 font-weight700 fontSize14">Num. of Full Baths</p>
                                                <p className="mb-10 font-weight700 fontSize14">Num. of Half Baths</p>
                                                <p className="mb-0 font-weight700 fontSize14">Fireplaces</p>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">1</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">0</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor"> 0</p>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">UTILITIES</p>
                                                <p className="mb-10 font-weight700 fontSize14">Air Conditioning</p>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Yes</p>

                                            </div>
                                        </div>


                                    </div>


                                </div>
                                <div className="amenitiesListing respo nsive15 itemMobile">
                                    <h3 className="font-weight700 colorBlue fontSize18">Features<span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">INTERIOR FEATURES </p>
                                                <p className="mb-10 font-weight700 fontSize14">Num. of Full Baths</p>
                                                <p className="mb-10 font-weight700 fontSize14">Num. of Half Baths</p>
                                                <p className="mb-10 font-weight700 fontSize14">Fireplaces</p>

                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor ">1</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">0</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor"> 0</p>

                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">UTILITIES</p>
                                                <p className="mb-10 font-weight700 fontSize14">Air Conditioning</p>

                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Yes</p>

                                            </div>
                                        </div>



                                    </div>


                                </div>




                                <div className="brdrLine"></div>

                                <div className="amenitiesListing respo nsive15 itemWebsite">
                                    <h3 className="font-weight700 colorBlue fontSize18">Room Informations <span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">MASTER BEDROOM</p>
                                                <p className="mb-10 font-weight700 fontSize14">Master Bedroom Level</p>
                                                <p className="mb-0 font-weight700 fontSize14">Master Bedroom Dimen</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">12x12</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">LIVING ROOM</p>
                                                <p className="mb-10 font-weight700 fontSize14">Living Rm Level</p>
                                                <p className="mb-0 font-weight700 fontSize14">Living Rm Dimen</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">12x16</p>

                                            </div>
                                        </div>


                                    </div>
                                    <div className="row mt-24">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">BATHROOM 1</p>
                                                <p className="mb-10 font-weight700 fontSize14">Bahtroom 1 Level</p>
                                                <p className="mb-0 font-weight700 fontSize14">Bathroom 1 Dimen</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">12x12</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">OTHER ROOM 1</p>
                                                <p className="mb-10 font-weight700 fontSize14">Other Room Name</p>
                                                <p className="mb-0 font-weight700 fontSize14">Other Rm 1 Dimen</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Loft</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">12x9</p>

                                            </div>
                                        </div>


                                    </div>

                                    <div className="row mt-24">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14 lightGrey">KITCHEN</p>
                                                <p className="mb-10 font-weight700 fontSize14">Kitchen Level</p>
                                                <p className="mb-0 font-weight700 fontSize14">Kitchen Dimen</p>


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-0 font-weight500 fontSize14 thirdColor">12x12</p>


                                            </div>
                                        </div>



                                    </div>


                                </div>

                                <div className="amenitiesListing respo nsive15 itemMobile">
                                    <h3 className="font-weight700 colorBlue fontSize18">Room Informations <span
                                        className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span></h3>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14 lightGrey">MASTER BEDROOM</p>
                                                <p className="mb-10 font-weight700 fontSize14">Master Bedroom Level</p>
                                                <p className="mb-10 font-weight700 fontSize14">Master Bedroom Dimen</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14">Second Floor</p>
                                                <p className="mb-10 font-weight500 fontSize14">12x12</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14 lightGrey">LIVING ROOM</p>
                                                <p className="mb-10 font-weight700 fontSize14">Living Rm Level</p>
                                                <p className="mb-10 font-weight700 fontSize14">Living Rm Dimen</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">12x16</p>

                                            </div>
                                        </div>



                                    </div>
                                    <div className="row mt-24">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14 lightGrey">BATHROOM 1</p>
                                                <p className="mb-10 font-weight700 fontSize14">Bahtroom 1 Level</p>
                                                <p className="mb-10 font-weight700 fontSize14">Bathroom 1 Dimen</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">12x12</p>


                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14 lightGrey">OTHER ROOM 1</p>
                                                <p className="mb-10 font-weight700 fontSize14">Other Room Name</p>
                                                <p className="mb-10 font-weight700 fontSize14">Other Rm 1 Dimen</p>


                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Loft</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">12x9</p>

                                            </div>
                                        </div>



                                    </div>

                                    <div className="row mt-24">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex align-items-center">
                                            <div className="w-50">
                                                <p className="mb-10 font-weight700 fontSize14 lightGrey">KITCHEN</p>
                                                <p className="mb-10 font-weight700 fontSize14">Kitchen Level</p>
                                                <p className="mb-10 font-weight700 fontSize14">Kitchen Dimen</p>
                                            </div>
                                            <div className="w-50">
                                                <p className="mb-10 font-weight500 fontSize14" style={{ visibility: "hidden" }}>df</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">Second Floor</p>
                                                <p className="mb-10 font-weight500 fontSize14 thirdColor">12x12</p>


                                            </div>
                                        </div>




                                    </div>


                                </div>


                                <div className="brdrLine"></div>



                                <div className="SectionBlock responsive15 leaseSec">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h3 className="font-weight700 colorBlue fontSize18">Lease Terms<span
                                                className="font-weight700 fontSize18"> for 405 Great Rd #16, Acton, MA
                                                01720</span></h3>
                                            <p className="font-weight400 colorBlue">12 Month Lease</p>
                                            <ul className="noMarginPad listStyleNone floatLeftList clearfix">
                                                <li>
                                                    <img src={require('../../assets/img/lease1.svg').default} />
                                                </li>
                                                <li>
                                                    <img src={require('../../assets/img/lease2.svg').default} />
                                                </li>
                                            </ul>
                                            <p className="font-weight400 fontSize12">This institution is an equal opportunity
                                                provider.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="brdrLine"></div>
                                <div className="fairmarketRent responsive15">
                                    <div className="d-flex align-items-center mobile-view">

                                        <h3 className="mb-0 font-weight700 colorBlue fontSize18">Fair Market Rents<span
                                            className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span>
                                        </h3>
                                        <p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">as of February 2021</p>
                                    </div>
                                    <p className="mb-0 secondaryColor fontSize16 font-weight400 mt-1">Fair Market Rents are HUD's
                                        determination of the average rents in a particular area for each bedroom size. The FMRs
                                        are set each year based on the rental rates of unsubsidized units so that participants
                                        in HUD programs have equal access for affordable housing. Here are the Fair Market Rents
                                        for El Monte, CA:</p>
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
                                    <div className="itemMobile">
                                        <div className="bedroomBox2">
                                            <div className="d-flex align-items-top w-100">
                                                <div className="w-50 brdrRight">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$200</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$600</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$700</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-50 padLeft16">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Three-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$900</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Four-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$1,200</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="brdrLine"></div>
                                </div>
                                <div className="SectionBlock responsive15 neighborhoodSec">
                                    <h3 className="font-weight700 colorBlue fontSize18">Neighborhoods Nearby<span
                                        className="font-weight700 fontSize18"> 405 Great Rd #16, Acton, MA 01720</span></h3>
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
                                                                <span className="purpleText font-weight700 fontSize16">75</span><br />
                                                                <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                                                    className="font-weight400">of 100</span>
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
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment is very walkable and
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
                                                                <span className="purpleText font-weight700 fontSize16">87</span><br />
                                                                <span style={{ "text-transform": "lowercase", "font-size": "400" }}>of
                                                                    100</span>
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
                                                    <p className="mb-0 para fontSize16">Blessed Rock Apartment has good transit
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
                                <div className="brdrLine"></div>
                                <div className="responsive15">
                                    <div className="titleHeading">
                                        <h3 className="font-weight700 colorBlue fontSize18">Schools Nearby <span
                                            className="font-weight700 fontSize18"> serving 405 Great Rd #16, Acton, MA
                                            01720</span></h3>
                                    </div>
                                    <div className="itemWebsite">
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
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">KG-5</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">N/A</h5>
                                                    </td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">KG-5</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">N/A</h5>
                                                    </td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right" >
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">KG-5</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">N/A</h5>
                                                    </td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">KG-5</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">N/A</h5>
                                                    </td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella
                                                                    Vista Elementary</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323)
                                                                    721-4335</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">KG-5</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">N/A</h5>
                                                    </td>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                                    Monterey Park, CA</h5>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">15
                                                                    Miles</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div
                                                            className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                                                            <a href="" className="colorWhite font-weight700" data-toggle="modal"
                                                                data-target="#exampleModalMoreInfo">More Info</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade rentalModal availabilityModal" id="exampleModalMoreInfo"
                                            tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header posRel moreInfoModalHeader">
                                                        <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <div>
                                                            <h5 className="modal-title fontSize24 font-weight700 d-block w-100"
                                                                id="exampleModalLongTitle">East Los Angeles Community Day</h5>
                                                            <p className="publicTag font-weight500 fontSize14 mb-0">
                                                                Public School
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-body rentalForm moreInfoBlock">
                                                        <div className="row">
                                                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                                <h3 className="mb-0 font-weight700 fontSize20">Information</h3>
                                                                <ul className="noMarginPad listStyleNone">
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Address</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">49th St
                                                                            Los Angeles, California, 90011</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            District</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">Los
                                                                            Angeles County Office of Education</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            County</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">Los
                                                                            Angeles County</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Phone</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">(323)
                                                                            262-2263</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Description</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">-</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Admission Office</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">N/A</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p
                                                                            className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                            Grade Level</p>
                                                                        <h5 className="fontSize16 font-weight500 colorBlue">7-12
                                                                        </h5>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                                <h3 className="mb-0 font-weight700 fontSize20">Characteristics</h3>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Certificate Offered</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    -</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Degree Offered</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    -</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Locale</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    CitySmall13</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Type</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    Other/alternative school</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Charter</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    No</h5>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Magnet</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    11.59</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Total Teachers (FTE)</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    22</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Total Students</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    255</h5>
                                                                            </li>
                                                                            <li>
                                                                                <p
                                                                                    className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                                    Student/Teacher Ratio</p>
                                                                                <h5 className="fontSize16 font-weight500 colorBlue">
                                                                                    N/A</h5>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pupleLineBtn responsive15 itemWebsite">
                                        <a href="" className="w-100 transition font-weight500">Load More</a>
                                    </div>
                                </div>
                                <div className="itemMobile responsive15">
                                    <ul className="noMarginPad listStyleNone agendtailList">
                                        <li>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
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
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
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
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
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
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
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
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                            Elementary</h5>
                                                    </div>
                                                    <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                    <div className="d-flex align-items-center w-100 listTop12">
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                    </h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        Urban Center</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="w-50">
                                                            <ul className="noMarginPad listStyleNone">
                                                                <li>
                                                                    <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                        Monterey Park, CA</h5>
                                                                    <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                        City,State</p>
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
                                <div className="SectionBlock responsive15 availabilitySection">
                                    <div className="d-flex align-items-center">
                                        <h3 className="font-weight700 colorBlue fontSize18">Check Availability<span
                                            className="font-weight700 fontSize18"> of 405 Great Rd #16, Acton, MA 01720</span>
                                        </h3>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700 fontSize18"><img
                                                src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                        </div>
                                    </div>

                                    {/*                                
                                <form className="rentalForm">
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
                                                <label for="exampleInputEmail1">Move In Date</label>
                                                <div className="posRel calnderIcon">
                                                    <input type="email" className="form-control" id=""
                                                        aria-describedby="emailHelp" placeholder="Choose Move In Date" />
                                                    <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                                    value="">Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                             */}

                                    <CheckAvailibilityForm />

                                </div>
                                {/* <div className="d-flex align-items-center responsive15">
                                <div className="ml-auto Resnoauto availSec mt-0 pt-0">
                                    <a href="" className="brdrRadius4 transition d-flex align-items-center" data-toggle="modal"
                                        data-target="#exampleModal3">Check Availability</a>
                                </div>
                            </div> */}
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 itemWebsite">
                            <div className="detailRightSec">
                                <div className="checkAvailability">
                                    <div className="d-flex align-items-center">
                                        <div className="dealTag font-weight700 brdrRadius4 pink">

                                            Rentals
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="mb-0 font-weight700">$1,700
                                            </h2>
                                        </div>
                                    </div>
                                    <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
                                        <li className="secondaryColor  mr5">
                                            <span className="colorBlue font-weight700">1</span> Bd
                                        </li>
                                        <li className="secondaryColor">
                                            <span className="colorBlue font-weight700">1</span> Ba
                                        </li>
                                        <li className="secondaryColor ml-16">
                                            <span className="colorBlue font-weight700">818</span> Sq.ft
                                        </li>
                                        <li className="secondaryColo ml-16">
                                            <span className="colorBlue">Affordable Housing</span>
                                        </li>
                                    </ul>
                                    <div className="brdrLine mar-15"></div>
                                    <div className="sideFormBlock">
                                        <div className="SectionBlock responsive15 availabilitySection">
                                            <div className="d-flex align-items-center checkavailablty">
                                                <h2 className="colorBlue font-weight700 fontSize18">Check Availability</h2>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="font-weight700 fontSize18 pink"><img
                                                    src={require('../../assets/img/callpink.png').default} />(626) 448-2699</p>
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
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
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
                                                        <label for="exampleFormControlTextarea1">Message</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                            rows="3">Hi, I am interested in 405 Great Rd #16, Acton, MA 01720. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!</textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div
                                                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                        <div className="Resnoauto w-100">
                                                            <a href=""
                                                                className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center"
                                                                data-toggle="modal" data-target="#exampleModal3"><img
                                                                    src={require('../../assets/img/mail.svg').default} />Check Availability</a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <!-- Modal -->


                                                <div className="modal fade rentalModal availabilityModal" id="exampleModal1"
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
                                                                    id="exampleModalLongTitle">2882 Tyler St El Monte, CA
                                                                    91157 Rental Deals 1 Nr. 1 Ba $1,200 (626) 357-1855</h5>
                                                            </div>
                                                            <div className="modal-body rentalForm availBodyBlock">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="modalLeft">
                                                                            <div className="imageSecleftModal posRel">
                                                                                <img className="w-100"
                                                                                    src={require('../../assets/img/modalLeft.png').default} />
                                                                                <div
                                                                                    className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                                    Affordable Housing</div>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="lefttitle">
                                                                                    <h5
                                                                                        className="mb-0 fontSize18 font-weight700 colorBlue">
                                                                                        Blessed Rock Apartments</h5>
                                                                                    <p
                                                                                        className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <img src={require('../../assets/img/goodDeal.svg').default} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sliderListing">
                                                                                <ul
                                                                                    className="clearfix d-flex align-items-center">
                                                                                    <li className="fontSize17"><b>1</b>Bd</li>
                                                                                    <li className="fontSize17"><b>1</b>Ba</li>
                                                                                    <li className="fontSize17"><b>880</b>Sq.Ft
                                                                                    </li>
                                                                                    <li
                                                                                        className="ml-auto boldTag greenText fontSize24">
                                                                                        $1,200</li>
                                                                                </ul>
                                                                            </div>
                                                                            <p
                                                                                className="para fontSize14 font-weight400 secondaryColor">
                                                                                Blessed Rock Apartment is an affordable
                                                                                apartment community for 62 years of age or
                                                                                older in El Monte, CA.We currently have a
                                                                                waiting list. Please call today to find out
                                                                                how to get an application for this community
                                                                                or to verify income requirements</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="sideFormBlock">
                                                                            <div
                                                                                className="SectionBlock responsive15 availabilitySection">
                                                                                <div className="d-flex align-items-center">
                                                                                    <h2
                                                                                        className="colorBlue font-weight700 fontSize18">
                                                                                        Check Availability</h2>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <p
                                                                                        className="purpleText font-weight700 fontSize18">
                                                                                        <img
                                                                                            src={require('../../assets/img/phoneColored.svg').default} />(626)
                                                                                        448-2699</p>
                                                                                </div>


                                                                                <form className="rentalForm">
                                                                                    <div className="row">
                                                                                        <div
                                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                                            <div className="form-group">
                                                                                                <label for="">Full
                                                                                                    Name</label>
                                                                                                <input type="email"
                                                                                                    className="form-control"
                                                                                                    id=""
                                                                                                    aria-describedby="emailHelp"
                                                                                                    placeholder="Email Address"
                                                                                                    value="Jonath" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                                            <div className="form-group">
                                                                                                <label for="">Phone
                                                                                                    Number</label>
                                                                                                <input type="email"
                                                                                                    className="form-control"
                                                                                                    id=""
                                                                                                    aria-describedby="emailHelp"
                                                                                                    placeholder="Phone Number" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                            <div className="form-group">
                                                                                                <label for="">Email
                                                                                                    Address</label>
                                                                                                <input type="email"
                                                                                                    className="form-control"
                                                                                                    id=""
                                                                                                    aria-describedby="emailHelp"
                                                                                                     placeholder="Email Address" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                            <div className="form-group">
                                                                                                <label for="">Move In
                                                                                                    Date</label>
                                                                                                <div
                                                                                                    className="posRel calnderIcon">
                                                                                                    <input type="email"
                                                                                                        className="form-control"
                                                                                                        id=""
                                                                                                        aria-describedby="emailHelp"
                                                                                                        placeholder="Choose Move In Date" />
                                                                                                    <span><img
                                                                                                        src={require('../../assets/img/calander.png').default} /></span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                            <div className="form-group">
                                                                                                <label
                                                                                                    for="exampleFormControlTextarea1">Message</label>
                                                                                                <textarea
                                                                                                    className="form-control"
                                                                                                    id="exampleFormControlTextarea1"
                                                                                                    rows="3"
                                                                                                    placeholder="Hi, I am interested in 405 Great Rd #16, Acton, MA 01720. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                            <div
                                                                                                className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                                                <div
                                                                                                    className="Resnoauto w-100">
                                                                                                    <a href=""
                                                                                                        className="brdrRadius4 transition w-100"
                                                                                                        data-toggle="modal"
                                                                                                        data-target="#exampleModal2"
                                                                                                        data-dismiss="modal"
                                                                                                        aria-label="Close">Check
                                                                                                        Availability</a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>

                                                                                <CheckAvailibilityForm />


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <!--Modal-->



                                                <div className="modal fade rentalModal availabilityModal" id="exampleModal2"
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
                                                                    id="exampleModalLongTitle">Check Availability at These
                                                                    Popular Apartments Below</h5>
                                                            </div>
                                                            <div
                                                                className="modal-body rentalForm availBodyBlock scrollModalList">
                                                                <div className="custom-radios">
                                                                    <div className="labelRadio propertyList active">
                                                                        <label for="color-1">
                                                                            <div className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                                <div
                                                                                    className="rightText flex1 borderRightBlock">
                                                                                    <div
                                                                                        className="d-flex align-items-center propertyTitle">
                                                                                        <a href="propertyDetail.html">
                                                                                            <h5
                                                                                                className="colorBlue font-weight700 mb-0">
                                                                                                Blessed Rock Apartments</h5>
                                                                                        </a>
                                                                                        <div className="topHeadSec mt-0">
                                                                                            <ul
                                                                                                className="noMarginPad listStyleNone">
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                                    <div className="priceRange itemWebsite">
                                                                                        <h4
                                                                                            className="colorBlue mb-0 fontSize16 font-weight700">
                                                                                            $1,200-$1,800</h4>
                                                                                    </div>
                                                                                    <div
                                                                                        className="itemMobile priceRangeMobile">
                                                                                        <div
                                                                                            className="d-flex align-items-center">
                                                                                            <h4
                                                                                                className="fontSize16 font-weight700 mb-0">
                                                                                                $1,200</h4>
                                                                                            <span
                                                                                                className="font-weight700"><img
                                                                                                    src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                                Deal</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center listingBlockLine">
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone">
                                                                                            <li
                                                                                                className="d-flex align-items-center">
                                                                                                <img
                                                                                                    src={require('../../assets/img/beds.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Beds
                                                                                            </li>
                                                                                            <li
                                                                                                className="d-flex align-items-center ml-12">
                                                                                                <img
                                                                                                    src={require('../../assets/img/shower.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Baths
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone listIcon ml-18">
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage1.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage2.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage3.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage4.svg').default} />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <p
                                                                                        className="descriptionProperty mb-0 fontSize12">
                                                                                        <img className=""
                                                                                            src={require('../../assets/img/file.svg').default} />Special
                                                                                        Pricing for Seniors - 2882 Tyler
                                                                                        St...<a href=""
                                                                                            className="purpleText">More</a></p>
                                                                                </div>
                                                                                <div className="widthRadio">
                                                                                    <div className="text-center">
                                                                                        <a href=""
                                                                                            className="fontSize16 font-weight700 text-center requestTag">Request
                                                                                            for<br />
                                                                                            more info</a>
                                                                                        <input type="radio" id="color-1"
                                                                                            name="color" value="color-1"
                                                                                            checked />
                                                                                        <span>
                                                                                            <div>
                                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                                    alt="Checked Icon" />
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div className="labelRadio propertyList">
                                                                        <label for="color-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                                <div
                                                                                    className="rightText flex1 borderRightBlock">
                                                                                    <div
                                                                                        className="d-flex align-items-center propertyTitle">
                                                                                        <a href="propertyDetail.html">
                                                                                            <h5
                                                                                                className="colorBlue font-weight700 mb-0">
                                                                                                Blessed Rock Apartments</h5>
                                                                                        </a>
                                                                                        <div className="topHeadSec mt-0">
                                                                                            <ul
                                                                                                className="noMarginPad listStyleNone">
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                                    <div className="priceRange itemWebsite">
                                                                                        <h4
                                                                                            className="colorBlue mb-0 fontSize16 font-weight700">
                                                                                            $1,200-$1,800</h4>
                                                                                    </div>
                                                                                    <div
                                                                                        className="itemMobile priceRangeMobile">
                                                                                        <div
                                                                                            className="d-flex align-items-center">
                                                                                            <h4
                                                                                                className="fontSize16 font-weight700 mb-0">
                                                                                                $1,200</h4>
                                                                                            <span
                                                                                                className="font-weight700"><img
                                                                                                    src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                                Deal</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center listingBlockLine">
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone">
                                                                                            <li
                                                                                                className="d-flex align-items-center">
                                                                                                <img
                                                                                                    src={require('../../assets/img/beds.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Beds
                                                                                            </li>
                                                                                            <li
                                                                                                className="d-flex align-items-center ml-12">
                                                                                                <img
                                                                                                    src={require('../../assets/img/shower.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Baths
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone listIcon ml-18">
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage1.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage2.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage3.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage4.svg').default} />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <p
                                                                                        className="descriptionProperty mb-0 fontSize12">
                                                                                        <img className=""
                                                                                            src={require('../../assets/img/file.svg').default} />Special
                                                                                        Pricing for Seniors - 2882 Tyler
                                                                                        St...<a href=""
                                                                                            className="purpleText">More</a></p>
                                                                                </div>
                                                                                <div className="widthRadio">
                                                                                    <div className="text-center">
                                                                                        <a href=""
                                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                                            for<br />
                                                                                            more info</a>
                                                                                        <input type="radio" id="color-2"
                                                                                            name="color" value="color-2"
                                                                                            checked />
                                                                                        <span>
                                                                                            <div>
                                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                                    alt="Checked Icon" />
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div className="labelRadio propertyList">
                                                                        <label for="color-3">
                                                                            <div className="d-flex align-items-center">
                                                                                <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                                                <div
                                                                                    className="rightText flex1 borderRightBlock">
                                                                                    <div
                                                                                        className="d-flex align-items-center propertyTitle">
                                                                                        <a href="propertyDetail.html">
                                                                                            <h5
                                                                                                className="colorBlue font-weight700 mb-0">
                                                                                                Blessed Rock Apartments</h5>
                                                                                        </a>
                                                                                        <div className="topHeadSec mt-0">
                                                                                            <ul
                                                                                                className="noMarginPad listStyleNone">
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                                <li><i
                                                                                                    className="fas fa-star"></i>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        2882 Tyler St El Monte, CA 91157</p>
                                                                                    <div className="priceRange itemWebsite">
                                                                                        <h4
                                                                                            className="colorBlue mb-0 fontSize16 font-weight700">
                                                                                            $1,200-$1,800</h4>
                                                                                    </div>
                                                                                    <div
                                                                                        className="itemMobile priceRangeMobile">
                                                                                        <div
                                                                                            className="d-flex align-items-center">
                                                                                            <h4
                                                                                                className="fontSize16 font-weight700 mb-0">
                                                                                                $1,200</h4>
                                                                                            <span
                                                                                                className="font-weight700"><img
                                                                                                    src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                                                Deal</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center listingBlockLine">
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone">
                                                                                            <li
                                                                                                className="d-flex align-items-center">
                                                                                                <img
                                                                                                    src={require('../../assets/img/beds.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Beds
                                                                                            </li>
                                                                                            <li
                                                                                                className="d-flex align-items-center ml-12">
                                                                                                <img
                                                                                                    src={require('../../assets/img/shower.svg').default} /><span
                                                                                                        className="colorBlue">1-2</span>
                                                                                                Baths
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul
                                                                                            className="noMarginPad listStyleNone listIcon ml-18">
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage1.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage2.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage3.svg').default} />
                                                                                            </li>
                                                                                            <li>
                                                                                                <img
                                                                                                    src={require('../../assets/img/detailImage4.svg').default} />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <p
                                                                                        className="descriptionProperty mb-0 fontSize12">
                                                                                        <img className=""
                                                                                            src={require('../../assets/img/file.svg').default} />Special
                                                                                        Pricing for Seniors - 2882 Tyler
                                                                                        St...<a href=""
                                                                                            className="purpleText">More</a></p>
                                                                                </div>
                                                                                <div className="widthRadio">
                                                                                    <div className="text-center">
                                                                                        <a href=""
                                                                                            className="fontSize16 font-weight700 text-center">Request
                                                                                            for<br />
                                                                                            more info</a>
                                                                                        <input type="radio" id="color-3"
                                                                                            name="color" value="color-3"
                                                                                            checked />
                                                                                        <span>
                                                                                            <div>
                                                                                                <img src={require('../../assets/img/check.png').default}
                                                                                                    alt="Checked Icon" />
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bottomFooter d-flex align-items-center">
                                                                <h3>2 properties Selected</h3>
                                                                <div className="ml-auto">
                                                                    <a href="" className="checkBtnModall" data-toggle="modal"
                                                                        data-target="#exampleModal3" data-dismiss="modal"
                                                                        aria-label="Close">Check Availability</a>
                                                                </div>
                                                            </div>
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
                                                                    <p className="fontSize18 font-weight400 secondaryColor">Your
                                                                        request has been submitted successfully</p>
                                                                    <a href="" className="doneBtn brdrRadius4">Done</a>
                                                                </div>
                                                            </div>
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
                                                <p className="fontSize14 colorBlue">Your income must be below these income
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



                                <ManagementCompanyAccordion />
                                {/* <div className="accordionBoxInfo managementComp">
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
                                                        <p className="mb-0 fontSize14 secondaryColor">120 Center SL Auburn, CA,
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
                                                                        <div className="font-weight700 brdrRadius4 d-flex">
                                                                            <h5 className="mt-0 fontSize16 font-weight500 mb-0">
                                                                                Arcadia Apartment</h5>
                                                                            <img className="ml-auto"
                                                                                src={require('../../assets/img/goodDeal.svg').default} />
                                                                        </div>

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
                                                                                className="ml-auto priceTagg colorGreen   font-weight700 fontSize16">
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
                                <AffordabilityCal />
                                {/* 
                            <div className="accordionBoxInfo calculatorForm">
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
                                                    <a href=""
                                                        className="calculteBtn brdrRadius4 colorWhite font-weight700 fontSize16">Calculate</a>
                                                </div>
                                                <p className="fontSize16  secondaryColor mb-0 mt-1">You should not be paying
                                                    more than <b>$1650</b> on your rent morgage each month.</p>
                                                <a href="" className="purpleText font-weight700 fontSize16">Why?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */}

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
                            <section className="housingNearby resPonsivePad">
                                <div className="">
                                    {/* <div className="sectionTitle">
                                    <h3 className="font-weight700 colorBlue fontSize18">Continue your search<span
                                        className="font-weight700 fontSize18"> to find more house at Great Rd #16 and nearby
                                        location</span></h3>
                                </div> */}
                                    <div className="row marginTop">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">

                                            <PropertiesNearby />

                                            {/*                                       
                                        <div className="owl-carousel owl-theme housing_Nearby sliderNav">
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
                                                                <li className="ml-auto font-weight700">$1,200-1,800</li>
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
                                                                <li className="ml-auto font-weight700">$1,200-1,800</li>
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
                                                                <li className="ml-auto font-weight700">$1,200-1,800</li>
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
                                                                <li className="ml-auto font-weight700">$1,200-1,800</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     */}


                                        </div>
                                    </div>
                                    <div className="pupleLineBtn responsive15 itemWebsite">
                                        <a href="" className="w-100 transition font-weight500">Load More</a>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- <div className="pupleLineBtn mt-0">
                            <a href="" className="w-100 transition font-weight500">Load More</a>
                        </div> --> */}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="titleHeading botttomDetailSec localAdd">
                                <h3 className="fontSize18 font-weight700">Local Information about 405 Great Road, Unit 16, Acton, MA
                                </h3>
                                <p className="fontSize16 font-weight700 colorBlue">405 Great Road, Unit 16 is available for rent in
                                    Acton, MA 01720.<span className="font-weight400">This property was listed on August 8, 2021 by
                                        Conway - Brighton at $1,700. It has been on the market for a total of 3 days and was
                                        last rented on October 1, 2015. This listing's school district is Acton-Boxborough
                                        School District. Nearby schools include Luther Conant School, Raymond J Grey Junior High
                                        School and Acton-Boxborough Regional High School. 405 Great Road, Unit 16 is a 1-bed,
                                        1-bath, 818 sqft a property built in 1969.</span></p>
                                <h3 className="fontSize16 font-weight700">Affordable Housing in Acton, MA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">In this city, the Acton Housing Authority (AHA)
                                    is the agency responsible for the proper administration of public housing programs, rental
                                    assistance, and other community development projects aimed at the revitalization of the
                                    city’s neighborhoods.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are many housing programs managed by the
                                    housing authority and administered to the low income families, senior citizens, and the
                                    physically and mentally challenged individuals of the city. There are affordable apartment
                                    deals for people looking to rent and the downpayment assistance program for families looking
                                    to buy their first home.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are different ways to receive housing
                                    assistance in the city of Anaheim. You just have to know what they are, and whether or not
                                    you are eligible for the low income housing tax credit and other housing programs they might
                                    have available.</p>
                                <h3 className="fontSize16 font-weight700">Rental Assistance in Acton, MA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">The Section 8 Voucher Program, or Housing Choice
                                    Voucher (HCV), is the main rental assistance program provided by the housing authority to
                                    the residents of Anaheim. Funded by the US Department of Housing and Urban Development
                                    (HUD), the HCV promotes equal housing opportunities to the economically-challenged families
                                    who participate in the program.</p>
                                <p className="fontSize16 font-weight400 colorBlue">If you qualify for the HCV program, you can opt
                                    for decent rental housing deals in the private sector. This means that if you receive rental
                                    assistance from the agency through the Section 8 Voucher program, you won’t have to stay in
                                    public housing. Your family deserves better, so find your place now and get your loved ones
                                    a good place to live in.</p>

                            </div>
                        </div>
                    </div>
                </div>



                <Modal isOpen={isOpenQualify}
                    onRequestClose={toggleModalQualify} className="prerental">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">Pre-Rental Qualify</h5>
                        <button type="button" className="close"
                            aria-label="Close" onClick={toggleModalQualify}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name <span
                                            className="labelMark">*</span></label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Enter name"
                                            value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Address </label>
                                        <input type="text" className="form-control" id=""
                                            aria-describedby="emailHelp" placeholder="Address"
                                            value={formData.address} onChange={(e) => setformData({ ...formData, address: e.target.value })} required />
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
                                                    id="exampleFormControlSelect1"
                                                    value={formData.state} onChange={(e) => setformData({ ...formData, state: e.target.value })} required
                                                >
                                                    <option>aa</option>
                                                    <option>bb</option>
                                                    <option>sd</option>
                                                    <option>kj</option>
                                                    <option>re</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">ZIP</label>
                                                <input type="number" className="form-control"
                                                    id="" aria-describedby="emailHelp"
                                                    placeholder="Email Address"
                                                    value={formData.zip} onChange={(e) => setformData({ ...formData, zip: e.target.value })} required />
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
                                            value={formData.emailid} onChange={(e) => setformData({ ...formData, emailid: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">Phone Number <span
                                            className="labelMark">*</span></label>
                                        <input type="number" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Phone Number"
                                            value={formData.phone} onChange={(e) => setformData({ ...formData, phone: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label for="">Move-In Date</label>
                                        <div className="posRel calnderIcon">
                                            <input type="date" className="form-control" id=""
                                                aria-describedby="emailHelp"
                                                placeholder="Move-In Date"
                                                value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value })} required />
                                            {/* <span>
                                                <img src={require('../../assets/img/calander.png').default} />
                                                </span> */}
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
                                                        value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required />
                                                    {/* <!-- <span><img src={require('../../assets/img/twoArrow.png').default} /></span> --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="">Monthly Income</label>
                                                <input type="number" className="form-control"
                                                    id="" aria-describedby="emailHelp"
                                                    placeholder="Monthly Income"
                                                    value={formData.monthlyIncome} onChange={(e) => setformData({ ...formData, monthlyIncome: e.target.value })} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="radioSec">
                                        <div className="form-group mb-0">
                                            <label>Do you have a voucher?</label>
                                            <div className="d-flex align-items-center">
                                                {/* 
                                                <div>
                                                    <input
                                                        type="radio"
                                                        value="male"
                                                        checked={formData.voucher == 'male'}
                                                        onChange={onValChange}
                                                    /> Male
                                                </div>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        value="female"
                                                        checked={formData.voucher == 'female'}
                                                        onChange={onValChange}
                                                    /> Female
                                                </div>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        value="transgender"
                                                        checked={formData.voucher == 'transgender'}
                                                        onChange={onValChange}
                                                    /> Transgender
                                                </div> */}



                                                {/* <label>
                                                    <input
                                                        type="radio"
                                                        value="Yes"
                                                        checked={formData.voucher == "Yes"}
                                                        onChange={onValChange} />
                                                    <span>Yes</span>
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="No"
                                                        checked={formData.voucher == "No"}
                                                        onChange={onValChange} />
                                                    <span>No</span>
                                                </label>

                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="on waiting list"
                                                        checked={formData.voucher == "on waiting list"}
                                                        onChange={onValChange} />
                                                    <span>on waiting list</span>
                                                </label> */}






                                                <fieldset>
                                                    <div>
                                                        <input type="radio" id="test1"
                                                            name="radio-group"
                                                            value="Yes"
                                                            checked={formData.voucher == "Yes"}
                                                            onChange={onValChange}
                                                        />
                                                        <label for="test1">Yes</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="test2"
                                                            name="radio-group"
                                                            value="No"
                                                            checked={formData.voucher == "No"}
                                                            onChange={onValChange}
                                                        />
                                                        <label for="test2">No</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="test3"
                                                            value="on waiting list"
                                                            name="radio-group"
                                                            checked={formData.voucher = "on waiting list"}
                                                            onChange={onValChange}
                                                        />
                                                        <label for="test3">On Waiting List</label>
                                                    </div>

                                                </fieldset>


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
                                        value={formData.disclaimer} onChange={(e) => setformData({ ...formData, disclaimer: e.target.value })} required
                                        placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit"
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                            </div>
                        </form>

                    </div>


                </Modal>

                <Modal isOpen={isOpenImage}
                    onRequestClose={toggleModalImage}>



                    <div className="modal-header d-flex align-items-center posRel">

                        <h5 className="modal-title fontSize16 font-weight400 ml-22"
                            id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                            Nr. 1 Ba $1,200 (626) 357-1855</h5>
                        <div className="ml-auto d-flex align-items-center mr-5">
                            <a href="" className="modalCheck colorWhite">Check Availability</a>
                            <ul className="noMarginPad listStyleNone sideActionIcon">
                                <li className="brdrRadius4 itemWebsite">
                                    <img src={require('../../assets/img/redHeart.png').default} />
                                </li>
                                <li className="brdrRadius4 itemWebsite mr-0">
                                    <img src={require('../../assets/img/share.svg').default} />
                                </li>
                            </ul>
                        </div>

                        <button type="button" className="close closeModl"
                            aria-label="Close" onClick={toggleModalImage}>
                            <span aria-hidden="true" >&times;</span>
                        </button>

                    </div>

                    <div className="modal-body rentalForm availBodyBlock propertyDetlModal">
                        <div className="">
                            <div className="boxscroll4 scrollBodyPopUp">
                                <div className="wrapperScroll">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="modalPop">
                                                <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto.png').default} />
                                                </div>
                                                <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto2.png').default} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="modalLeft">
                                                <img src={require('../../assets/img/modalSidePopup.png').default} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="sideFormBlock">
                                                <div
                                                    className="SectionBlock responsive15 availabilitySection">
                                                    <div className="d-flex align-items-center">
                                                        <h2 className="colorBlue font-weight700 fontSize18">
                                                            Check Availability</h2>
                                                        <div className="ml-auto">
                                                            <p
                                                                className="purpleText font-weight700 fontSize18 itemWebsite">
                                                                <img
                                                                    src={require('../../assets/img/phoneColored.svg').default} />(626)
                                                                448-2699
                                                            </p>

                                                        </div>
                                                    </div>

                                                    <CheckAvailibilityForm />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>


                <Modal isOpen={isOpenAvailability}
                    onRequestClose={toggleModalAvailability} className="listhub-modal">

                    <div className="modal-header d-flex align-items-center">

                        <h5 className="modal-title fontSize16 font-weight400 ml-22"
                            id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                            Nr. 1 Ba $1,200 (626) 357-1855</h5>
                        <button type="button" className="close" onClick={toggleModalAvailability} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body rentalForm availBodyBlock">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="modalLeft">
                                    <div className="imageSecleftModal posRel">
                                        <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                        <div
                                            className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                            Affordable Housing</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="lefttitle">
                                            <h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
                                                Rock Apartments</h5>
                                            <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                2882 Tyler St El Monte, CA 91157</p>
                                        </div>
                                        <div className="ml-auto">
                                            <img src={require('../../assets/img/goodDeal.svg').default} />
                                        </div>
                                    </div>
                                    <div className="sliderListing">
                                        <ul className="clearfix d-flex align-items-center">
                                            <li className="fontSize17"><b>1</b>Bd</li>
                                            <li className="fontSize17"><b>1</b>Ba</li>
                                            <li className="fontSize17"><b>880</b>Sq.Ft</li>
                                            <li className="ml-auto boldTag greenText fontSize24">$1,200</li>
                                        </ul>
                                    </div>
                                    <p className="para fontSize14 font-weight400 secondaryColor">Blessed
                                        Rock Apartment is an affordable apartment community for 62 years
                                        of age or older in El Monte, CA.We currently have a waiting
                                        list. Please call today to find out how to get an application
                                        for this community or to verify income requirements</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="sideFormBlock">
                                    <div className="SectionBlock responsive15 availabilitySection">
                                        <div className="d-flex align-items-center">
                                            <h2 className="colorBlue font-weight700 fontSize18">Check
                                                Availability</h2>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700 fontSize18"><img
                                                src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                        </div>

                                        <CheckAvailibilityForm />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>













            </section>
            <Footer />
        </>

    )
}
export default Listhub