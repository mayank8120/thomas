import React from 'react'

const MapSection = () => {
    return (
        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 pr-0 pl-0 customFlexPercntRight">
            <div className="">
                <div className="itemWebsite">
                    <img className="w-100" src={require('../../assets/img/advertisement1.png').default} />
                </div>
                <div className="row mapSectionArea widthBlock100 padingaaa">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapRight0 widthBlock70">
                        <div className="posRel">

                        <img className="map" src={require('../../assets/img/map1.png').default} />
                           
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
                                <div className="listingMapBlock d-flex align-items-center itemWebsite">
                                    <img src={require('../../assets/img/smallImage.png').default} />
                                    <div className="textAreaBlock">
                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                            91157</p>
                                        <h4 className="colorBlue mb-0 fontSize16 font-weight700">$1,200-$1,800</h4>
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
                                        <img className="mr-3 buildingImag" src={require('../../assets/img/propertyBuilding3.png').default}
                                            alt="Generic placeholder image" />
                                        <div className="media-body rightText">
                                            <div className="d-flex align-items-top propertyTitle">
                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                    Apartments</h5>
                                                <div className="topHeadSec mt-0">
                                                    <ul
                                                        className="noMarginPad listStyleNone d-flex align-items-center">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                91157</p>
                                            <div className="priceRange">
                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                    $1,200-$1,800</h4>
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
                                <div className="mark1">
                                    <img src={require('../../assets/img/marker.png').default} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 itemWebsite twoImage widthBlock0">
                        <div className="maxheightBlock">
                            <img src={require('../../assets/img/advertisement2.png').default} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


export default MapSection