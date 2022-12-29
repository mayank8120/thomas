import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const FairMarketRents = () => {
    document.title = "Fair Market Rents - Rental Housing Deals";

    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618,632, 149);
    ezstandalone.enable();
    ezstandalone.display();
    });`;

    return (
        <>

            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>


            <section className="secPad24">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item" aria-current=""><a className="purpleText" href='/housing-authority-waitlists'>Housing Authority</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Fair Market Rents</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Fair Market Rents</h2>
                                <p className="para">
                                    The term fair market rent is the amount of money that a certain property would rent for in the area in which it is located. Renters with or without rental assistance should be aware of the fair market rents in their area to ensure the rent they are paying is appropriate for the unit and the amenities that are provided.
                                </p>
                                <p className="para">
                                    Here is a sample table for Fair Market Rents for New York County, New York:
                                </p>


                                <center>
                                    <h2>FY 2017 Fair Market Rent Summary</h2>

                                    <div className="row">
                                        <div className="col-md-24 col-sm-24">
                                            {/* <style type="text/css">.localhousing_tbl.table > thead > tr > th, 
                .localhousing_tbl.table > tbody > tr > th, 
                .localhousing_tbl.table > tfoot > tr > th, 
                .localhousing_tbl.table > thead > tr > td, 
                .localhousing_tbl.table > tbody > tr > td, 
                .localhousing_tbl.table > tfoot > tr > td    {
                                                    vertical - align: middle;
                }

                                                div table.fair-market-tbl th {
                                                    text - align: center !important;
                }
                                            </style> */}
                                            <table className="table fair-market-tbl thborder localhousing_tbl">
                                                <tbody>
                                                    <tr>
                                                        <th align="center" valign="middle">Efficiency</th>
                                                        <th align="center" valign="middle">One-Bedroom</th>
                                                        <th align="center" valign="middle">Two-Bedroom</th>
                                                        <th align="center" valign="middle">Three-Bedroom</th>
                                                        <th align="center" valign="middle">Four-Bedroom</th>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" valign="middle">$1,196</td>
                                                        <td align="center" valign="middle">$1,249</td>
                                                        <td align="center" valign="middle">$1,481</td>
                                                        <td align="center" valign="middle">$1,904</td>
                                                        <td align="center" valign="middle">$2,134</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </center>


                                <p className="para">
                                    <a href="http://www.huduser.org/portal/datasets/fmr/fmrs/docsys.html&data=fmr15" target="_blank">View the latest 2015 Fair Market rents in your area &gt;&gt;</a>
                                </p>

                                <RentalAssistance />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="agencyLandingRightSec detailRightSec">
                                <div className="mt-0 mb-24">
                                    <Fbpage />
                                    {/* <img className="w-100" src={require('../../assets/img/image147.png').default} /> */}
                                </div>

                                <NearbyAgenciesAccordion />



                                <AffordabilityCal />
                                <div style={{ "margin-top": '24px' }}>
                                    <GoogleADS placeholderId='632' width='300px' height='600px' slotno='1505526895' />
                                </div>


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
export default FairMarketRents