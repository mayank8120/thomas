import React from 'react'
import Footer from '../../containers/Footer'
import { SavedPropertyItem } from './SavedPropertyItem'

const SavedProperties = () => {
    document.title = "Saved Properties - Rental Housing Deals"

    return (
        <>
            <section className="secPad16 savedProperty pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="savedPropertyBlock">
                                <h2 clas="colorBlue font-weight700">My Favorites</h2>
                                <ul className="nav nav-tabs savedPropertyTab itemMobile" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">Properties</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                            aria-controls="profile" aria-selected="false">Housing Authorities</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="tabCont propertyList">



                                            <h3 className="mb-0 colorBlue itemWebsite">Saved Properties</h3>
                                            <ul className="noMarginPad listStyleNone">
                                                <li className="listingBlock2">

                                                    <SavedPropertyItem />
                                                </li>
                                                <li className="listingBlock2">

                                                    <SavedPropertyItem />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel"
                                        aria-labelledby="profile-tab">
                                        <div className="tabCont propertyList mtEight">
                                            <h3 className="mb-0 colorBlue itemWebsite">Saved Housing Authorities</h3>
                                            <ul className="noMarginPad listStyleNone">
                                                <li className="listingBlock2">



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
                                                    </div>







                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SavedProperties