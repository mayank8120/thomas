import React from 'react'

export const MapSection = () => {
    return (

        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 pr-0 pl-0 customFlexPercntRight">


            <div className="">
                <div className="itemWebsite">
                    <img src={require('../../assets/img/advertisement1.png').default} />
                </div>
                <div className="row mapSectionArea widthBlock100">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapRight0 widthBlock70">
                        <div className="posRel">
                            {/* <!-- <img className="map" src={require('../../assets/img/maplisthub.png').default} />--> */}
                            <img className="map" src={require('../../assets/img/maplisthubchange.png').default} />
                            <div className="mapObjects">
                                <div className="tagObject itemMobile">
                                    <div className="choosedTag">
                                        <div className="d-flex align-items-center">
                                            <ul className="noMarginPad listStyleNone clearfix">
                                                <li className="selectdTag">
                                                    <span className="purpleText d-flex align-items-center">Pets OK
                                                        <a href=""><i className="fas fa-times"></i></a></span>
                                                </li>
                                                <li className="selectdTag">
                                                    <span className="purpleText d-flex align-items-center">$500+ <a
                                                        href=""><i className="fas fa-times"></i></a></span>
                                                </li>
                                                <li className="selectdTag">
                                                    <span className="purpleText d-flex align-items-center">Good
                                                        Deals <a href=""><i
                                                            className="fas fa-times"></i></a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center map-list justify-content-center">
                                    <ul className="noMarginPad listStyleNone clearfix d-flex align-items-center">
                                        <li className="fontSize14 font-weight500 mr-24"><a href=""
                                            className="tpurple"><span className="purple"></span>Rentals</a></li>
                                        <li className="fontSize14 font-weight500 mr-24 tgreen"><a href=""
                                            className="tgreen"><span className="green"></span>Rental Deals</a></li>
                                        <li className="fontSize14 font-weight500 mr-24 tlightblue"><a href=""
                                            className="tlightblue"><span className="lightblue"></span>Senior
                                            Housing</a></li>
                                        <li className="fontSize14 font-weight500 tblue"><a href=""
                                            className="tblue"><span className="blue"></span>Section 8</a></li>
                                    </ul>
                                </div>
                                <div className="listingMapBlock d-flex align-items-center itemWebsite">
                                    <img src={require('../../assets/img/listmapImage.png').default} />
                                    <div className="textAreaBlock">
                                        <p className="mb-0 colorBlue fontSize14 font-weight700">405 Great Rd Unit
                                            #16, Acton, MA 01720</p>
                                        <h4 className="colorBlue mb-0 fontSize14 font-weight700">$1,700</h4>
                                        <div className="d-flex align-items-center">
                                            <a href="" className="purpleText font-weight700 fontSize14">(626)
                                                448-2699</a>
                                            <div className="ml-auto">
                                                <a href="" className="fontSize14 colorGreen font-weight700">Check
                                                    Availability</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listingMapBlockMobile itemMobile">
                                    <div className="media">
                                        <img className="mr-3 buildingImag" src={require('../../assets/img/listmapImage.png').default}
                                            alt="Generic placeholder image" />
                                        <div className="media-body rightText">
                                            <div className="d-flex align-items-top propertyTitle">
                                                <h5 className="colorBlue font-weight700 mb-0">405 Great Rd Unit #16,
                                                    Acton, MA 01720</h5>

                                            </div>

                                            <div className="priceRange">
                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700">$1,700</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center btnSectionList">
                                        <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                            <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                        </a>
                                        <a className="checkAvailableBtn colorWhite brdrRadius4">
                                            Check Availability
                                        </a>
                                    </div>
                                </div>
                                <div className="seven">
                                    <span>7</span>
                                </div>
                                <div className="eight">
                                    <span>8</span>
                                </div>
                                <div className="one-seven-green">
                                    <span>$1,700</span>
                                </div>
                                <div className="one-seven-purple">
                                    <span>$1,700</span>
                                </div>
                                <div className="one-seven-blue">
                                    <span>$1,700</span>
                                </div>
                                <div className="one-seven-greena">
                                    <span>$1,700</span>
                                </div>
                                <div className="senior">
                                    <span>Senior</span>
                                </div>
                                <div className="seniora">
                                    <span>Senior</span>
                                </div>
                                <div className="two">
                                    <span>2</span>
                                </div>
                                <div className="section-eight">
                                    <span>Section 8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 itemWebsite twoImage widthBlock0">
                        <div className="maxheightBlock">
                            <img className="img-fluid" src={require('../../assets/img/advertisement2.png').default} />
                            <img className="mt-12 img-fluid" src={require('../../assets/img/advertisement23.png').default} />

                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default MapSection
