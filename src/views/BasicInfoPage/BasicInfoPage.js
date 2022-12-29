import React, { useState } from 'react'
import FeaturedRentalsInCity from '../../containers/FeaturedRentalsInCity';
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion';
import PropertiesNearby from '../Index/PropertiesNearby';

import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import AffordableHousingByRegions from '../Index/AffordableHousingByRegions';
import Footer from '../../containers/Footer';
import Fbpage from '../fbpage/Fbpage';
import GoogleADS from '../../containers/GoogleADS';
import { Helmet } from 'react-helmet';

const BasicInfoPage = () => {
    { document.title = "Basic Info Page - Rental Housing Deals" }


    const [searchdata, setSearchdata] = useState({ searchstring: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(searchdata);
        setSearchdata({ searchstring: '' });
    }
    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618,632, 149);
    ezstandalone.enable();
    ezstandalone.display();
    });`

    return (
        <>
            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>
            <section className="secPad24 basicinfo-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="/" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Basic Info Page</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-8">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Income Limits</h2>
                                <p className="para">Each year, HUD publishes .income limits. for each geographical area. Income
                                    limits are based on family size and the median income in that area. When applying for
                                    housing assistance, the household income for the number of people in the household must be
                                    at or below the income limits for that household size in that geographical area.</p>
                                <p className="para">Here is a sample table for Income Limits for Orange County, CA:</p>
                                <h3 className="priceGreenText colorGreen font-weight700 itemWebsite marginTop16 fontSize24">$103,000
                                </h3>
                                <p className="mb-0 para secondaryColor itemWebsite">Median Income Limits of Orange County, CA</p>
                                <div className="itemMobile mobileIncomeLimit">
                                    <div className="brdrLine3 responsive-15"></div>
                                    <h3 className="colorBlue font-weight700 incomeLimtMobileText">Income Limits</h3>
                                    <p className="mb-0 para colorBlue mt-0">HUD sets Income Limits for each area based on the median
                                        family income in that area. Each Public Housing Agency (PHA) will use... <a href="">Read More</a></p>
                                    <h3 className="priceGreenText colorGreen font-weight700">$103,000</h3>
                                    <p className="mb-0 para secondaryColor">Median Income Limits of Orange County, CA</p>
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
                                                            Low Income Limit<span><a href="" className="infoIcon"><img
                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                    <th scope="col">
                                                        <h5 className="mb-0 skyBlueColor font-weight700">50%</h5>
                                                        <div
                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                            Low Income Limit<span><a href="" className="infoIcon"><img
                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                    <th scope="col">
                                                        <h5 className="mb-0 skyBlueColor font-weight700">30%</h5>
                                                        <div
                                                            className="d-flex align-items-center secondaryColor font-weight500 fontSize14">
                                                            Low Income Limit<span><a href="" className="infoIcon"><img
                                                                src={require('../../assets/img/info.svg').default} /></a></span></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1 Person</th>
                                                    <td>$71,750</td>
                                                    <td>$44,850</td>
                                                    <td>$26,950</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2 Person</th>
                                                    <td>$82,000</td>
                                                    <td>$51,250</td>
                                                    <td>$30,800</td>
                                                </tr>
                                                <tr className="backColorGround">
                                                    <th scope="row">3 Person</th>
                                                    <td>$92,250</td>
                                                    <td>$57,650</td>
                                                    <td>$34,650</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4 Person</th>
                                                    <td>$102,450</td>
                                                    <td>$64,050</td>
                                                    <td>$41,550</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5 Person</th>
                                                    <td>$110,650</td>
                                                    <td>$69,200</td>
                                                    <td>$44,650</td>
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
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
                                                                $71,750</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">50%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Very
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $44,850</p>
                                                        </li>
                                                        <li className="d-flex align-items-center tableRow percentBlock">
                                                            <div
                                                                className="d-flex align-items-center secondaryColor font-weight500 fontSize12">
                                                                <h5 className="skyBlueColor font-weight700 fontSize14 mb-0">30%</h5>
                                                                <span className="font-weight500 fontSize12 secondaryColor">Extremely
                                                                    Low</span>
                                                            </div>
                                                            <p className="mb-0 ml-auto font-weight400 fontSize14 secondaryColor">
                                                                $26,950</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine4"></div>
                                <div className="rentalAccordion">
                                    <div className="d-flex align-items-center headingAccordion">
                                        <span>
                                            <img src={require('../../assets/img/rental accordion1.png').default} />
                                        </span>
                                        <h2 className="mb-0 colorBlue font-weight700">Rental Assistance Options</h2>
                                    </div>
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingOneBasic">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link colo" data-toggle="collapse"
                                                        data-target="#collapseOneBasic" aria-expanded="true"
                                                        aria-controls="collapseOneBasic">
                                                        What are Income Limits?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseOneBasic" className="collapse show" aria-labelledby="headingOneBasic" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingTwoBasic">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseTwoBasic" aria-expanded="false"
                                                        aria-controls="collapseTwoBasic">
                                                        What is Public Housing?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseTwoBasic" className="collapse" aria-labelledby="headingTwoBasic" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingThreeBasic">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseThreeBasic" aria-expanded="false"
                                                        aria-controls="collapseThreeBasic">
                                                        What is Housing Choice Voucher (HC)?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseThreeBasic" className="collapse" aria-labelledby="headingThreeBasic" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingFourBasic">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseFourBasic" aria-expanded="false"
                                                        aria-controls="collapseFourBasic">
                                                        What is Low Income Housing Tax Credit (LIHTC)?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseFourBasic" className="collapse" aria-labelledby="headingFourBasic" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingFiveBasic">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseFiveBasic" aria-expanded="false"
                                                        aria-controls="collapseFiveBasic">
                                                        What is Rural Development (RD) / Rental Assistance?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseFiveBasic" className="collapse" aria-labelledby="headingFiveBasic" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="rentalAccordion secondAccordion">
                                    <div className="d-flex align-items-center headingAccordion">
                                        <span>
                                            <img src={require('../../assets/img/rental accordion2.png').default} />
                                        </span>
                                        <h2 className="mb-0 colorBlue font-weight700">Rental Assistance Tools</h2>
                                    </div>
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingOneBasic2">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link colo" data-toggle="collapse"
                                                        data-target="#collapseOneBasic2" aria-expanded="true"
                                                        aria-controls="collapseOneBasic2">
                                                        What is Income Calculator?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseOneBasic2" className="collapse show" aria-labelledby="headingOneBasic2" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingTwoBasic2">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseTwoBasic2" aria-expanded="false"
                                                        aria-controls="collapseTwoBasic2">
                                                        What is Enterprise Income Verification (EIV)?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseTwoBasic2" className="collapse" aria-labelledby="headingTwoBasic2" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingThreeBasic2">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseThreeBasic2" aria-expanded="false"
                                                        aria-controls="collapseThreeBasic2">
                                                        “A Good Place to Live” Brochure
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseThreeBasic2" className="collapse" aria-labelledby="headingThreeBasic2" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingFourBasic2">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseFourBasic2" aria-expanded="false"
                                                        aria-controls="collapseFourBasic2">
                                                        What are Payment Standards?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseFourBasic2" className="collapse" aria-labelledby="headingFourBasic2" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center" id="headingFiveBasic2">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseFiveBasic2" aria-expanded="false"
                                                        aria-controls="collapseFiveBasic2">
                                                        What are Inspections?
                                                    </button>
                                                </h5>
                                                <div className="ml-auto accordionMoreInfo brdrRadius4 itemWebsite">
                                                    <a href="" className="colorWhite font-weight700">More Info</a>
                                                </div>
                                                <div className="itemMobile ml-auto rightArrowAccordion">
                                                    <a href="">
                                                        <i className="fas fa-chevron-right skyBlueColor"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- <div id="collapseFiveBasic2" className="collapse" aria-labelledby="headingFiveBasic2" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div> --> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="brdrLine4"></div>
                                <div className="propertNearbySlider">
                                    <div className="sectionTitle">
                                        <h2 className="font-weight700 colorBlue">Property Nearby Orange County</h2>
                                    </div>
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

                                    {/* <PropertiesNearby /> */}

                                </div>
                                <div className="searchForRentals">
                                    <div className="searchHousingBox responsive-15">
                                        <h4 className="colorBlue font-weight700">Search for Rentals by City, State, or ZIP</h4>
                                        <div className="d-flex align-items-center searchInputBlock posRel">
                                            <form className="w-100 d-flex align-items-center" onSubmit={handleSubmit}>
                                                <input type="text" placeholder="e.g California" className="w-100 form-control"
                                                    value={searchdata.searchstring} onChange={(e) => setSearchdata({ searchstring: e.target.value })} required />
                                                <button type="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="featuredTab featureSection">
                                <div className="sectionTitle">
                                    <h2 className="font-weight700 colorBlue">Featured Rentals in Your City</h2>
                                </div>
                                <div className="marginTop30">
                                    <ul className="nav nav-pills owl-carousel owl-theme featureSectionSlider featureSliderNav"
                                        id="pills-tab" role="tablist">
                                        <li className="nav-item item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
                                                href="#pills-home" role="tab" aria-controls="pills-home"
                                                aria-selected="true">This City</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill"
                                                href="#pills-profile" role="tab" aria-controls="pills-profile"
                                                aria-selected="false">Nearby Cities</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill"
                                                href="#pills-contact" role="tab" aria-controls="pills-contact"
                                                aria-selected="false">Nearby Housing Authorities</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                            aria-labelledby="pills-home-tab">
                                            <div className="listingBlock">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">New York</h3>
                                                                <p className="mb-0 secondaryColor">New York</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Miami</h3>
                                                                <p className="mb-0 secondaryColor">Florida</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Seattle</h3>
                                                                <p className="mb-0 secondaryColor">Washington</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Austin</h3>
                                                                <p className="mb-0 secondaryColor">Texas</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Phoenix</h3>
                                                                <p className="mb-0 secondaryColor">Arizona</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">San Diego</h3>
                                                                <p className="mb-0 secondaryColor">California</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Boston</h3>
                                                                <p className="mb-0 secondaryColor">Massachusetts</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">New Orleans</h3>
                                                                <p className="mb-0 secondaryColor">Lousiana</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Atlanta</h3>
                                                                <p className="mb-0 secondaryColor">Georgia</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">San Francisco</h3>
                                                                <p className="mb-0 secondaryColor">California</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">Philadelphia</h3>
                                                                <p className="mb-0 secondaryColor">Pennsylvania</p>
                                                            </li>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">San Antonio</h3>
                                                                <p className="mb-0 secondaryColor">Texas</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <a className="loadMore transition itemMobile">Load More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                            aria-labelledby="pills-profile-tab">
                                            Nearby Cities
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                            aria-labelledby="pills-contact-tab">
                                            Nearby Housing Authorities
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="paddingSec64 featureSection">
                                <div className="sectionTitle">
                                    <h2 className="font-weight700 colorBlue">Featured Section 8 Rentals in Your City</h2>
                                </div>
                                <div className="marginTop30">
                                    <ul className="nav nav-pills owl-carousel owl-theme featureSectionSlider2 featureSliderNav"
                                        id="pills-tab" role="tablist">
                                        <li className="nav-item item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
                                                href="#pills-home1" role="tab" aria-controls="pills-home"
                                                aria-selected="true">East Region</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill"
                                                href="#pills-profile2" role="tab" aria-controls="pills-profile"
                                                aria-selected="false">Midwest Region</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill"
                                                href="#pills-contact3" role="tab" aria-controls="pills-contact"
                                                aria-selected="false">South Region</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill"
                                                href="#pills-contact3" role="tab" aria-controls="pills-contact"
                                                aria-selected="false">Southwest Region</a>
                                        </li>
                                        <li className="nav-item item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill"
                                                href="#pills-contact3" role="tab" aria-controls="pills-contact"
                                                aria-selected="false">West Region</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home1" role="tabpanel"
                                            aria-labelledby="pills-home-tab">
                                            <div className="listingBlock">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Maine</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">New York</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Delaware</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">New Hampshire</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Rhode Island</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Maryland</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                        <ul className="noMarginPad list-style-type">
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Vermont</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">Connecticut</p>
                                                            </li>
                                                            <li>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                                <p className="mb-0 secondaryColor">New Jersey</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <a className="loadMore transition itemMobile">Load More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile2" role="tabpanel"
                                            aria-labelledby="pills-profile-tab">
                                            Midwest Region
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                            aria-labelledby="pills-contact-tab">
                                            South Region
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                            aria-labelledby="pills-contact-tab">
                                            Southwest Region
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact3" role="tabpanel"
                                            aria-labelledby="pills-contact-tab">
                                            West Region
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                <FeaturedRentalsInCity />


                                <AffordableHousingByRegions />




                                <div className="itemMobile responsive-15">
                                    {/* <!--proud partners--> */}
                                    <section className="secPad proudPartners">
                                        <div className="container">
                                            <div className="sectionTitle">
                                                <h2 className="font-weight700 colorBlue">Proud Partners</h2>
                                            </div>
                                            <div className="row marginTop">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="owl-carousel owl-theme proudPartnerSlider sliderNav brandNav">
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider1.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider2.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider3.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider4.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider5.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider6.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider1.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider2.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider3.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider4.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider5.png').default} />
                                                        </div>
                                                        <div className="item">
                                                            <img src={require('../../assets/img/proudPartnerSlider6.png').default} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!--alert--> */}
                                    <section className="secPad alertBoxx">
                                        <div className="container mar15Res">
                                            <div className="alertBox">
                                                <div className="alertWidth">
                                                    <div className="media">
                                                        <img className="align-self-start mr-3" src={require('../../assets/img/bell.svg').default}
                                                            alt="Image" />
                                                        <div className="media-body">
                                                            <h2 className="mt-0 mb-0 font-weight400">Sign up for waitlist alerts.
                                                                <b>No spam</b>
                                                            </h2>
                                                            <div className="d-flex align-items-center inputField posRel">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Email Address"
                                                                        aria-label="Username" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <a className="getAlerted brdrRadius4">Get Alerted</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 itemWebsite">
                            <div className="agencyLandingRightSec detailRightSec">

                                {/* <div className="advertisementBlock">
                                <img src={require('../../assets/img/image 147.png').default} />
                            </div> */}

                                <div className="mt-0 mb24">
                                    <Fbpage />
                                    {/* <img className="w-100" src={require('../../assets/img/image147.png').default} /> */}
                                </div>


                                {/* <div className="nearbyAgecyBlock">
                                <div className="accordionBoxInfo">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header cardHeaderBorder0" id="headingOne">
                                                <h5 className="mb-0 d-flex align-items-center">
                                                    <button className="btn btn-link font-weight700 colorBlue"
                                                        data-toggle="collapse" data-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        Nearby Agencies
                                                    </button>
                                                    <span className="ml-auto" data-toggle="collapse" data-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        <img src={require('../../assets/img/upArrow.png').default} />
                                                    </span>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                                data-parent="#accordion">
                                                <div className="nearbyAgencyBlock boxscroll4">
                                                    <div className="wrapperScroll">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency1.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Garden Grove Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 closed">
                                                                                        Closed
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency2.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Orange Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 openingSoon">
                                                                                        Opening Soon
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency3.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Santa Ana Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency4.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Norwalk Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency5.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Lawndale Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    <div className="media">
                                                                        <img className="" src={require('../../assets/img/nearbyAgency5.png').default}
                                                                            alt="Image" />
                                                                        <div className="media-body">
                                                                            <div className="d-flex align-items-top">
                                                                                <div className="headingSec">
                                                                                    <h5
                                                                                        className="mt-0 mb-0 fontSize14 font-weight500 colorBlue">
                                                                                        Lawndale Housing Authority</h5>
                                                                                    <p
                                                                                        className="mb-0 secondaryColor fontSize14">
                                                                                        Garden Grove, CA</p>
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <span
                                                                                        className="statusTag fontSize12 font-weight500 open">
                                                                                        Open
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                                <NearbyAgenciesAccordion />

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
                                <div style={{ "margin-top": '24px' }}>
                                    <GoogleADS placeholderId='632' width='300px' height='600px' slotno='1505526895' />
                                </div>


                                {/* <div className="accordionBoxInfo losAngeles">
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0 d-flex align-items-center">
                                                <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                    data-target="#collapseFour" aria-expanded="true"
                                                    aria-controls="collapseFour">
                                                    Orange County Quick Facts
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

                                <CityCountyQuickFacts />

                                {/* <div className="margin24">
                                    <img className="w-100" src={require('../../assets/img/image145.png').default} />
                                </div> */}



                                <div style={{ "margin-top": '24px' }}>
                                    <GoogleADS placeholderId='149' width='300px' height='600px' slotno='2347851182' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default BasicInfoPage