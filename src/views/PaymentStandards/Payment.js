import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const Payments = () => {
    document.title = "Payments - Rental Housing Deals";


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
                                    <li className="breadcrumb-item"><a href="/" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item" aria-current=""><a className="purpleText" href='/housing-authority-waitlists'>Housing Authority</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Payment Standards</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Voucher Payment Standards/ Section 8 Voucher Payment Standards</h2>
                                <p className="para">
                                    The Section 8 Voucher Payment Standard (VPS) is an amount used by Public Housing Agencies (PHA) in the Housing Choice Voucher (HCV) program to determine the amount of rental assistance that a participant will receive. It is not the rent amount that an Owner is requesting for the rental property. The payment standards are based on the fair market rents in the area.

                                </p>
                                <p className="para">
                                    Here is a sample chart showing the Voucher Payment Standards (VPS)
                                </p>





                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Bedroom Size</th>
                                            <th>Payment Standard</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mobile Home Space</td>
                                            <th>$651</th>
                                        </tr>
                                        <tr>
                                            <td>Single Room Occupancy (SRO)</td>
                                            <th>$732</th>
                                        </tr>
                                        <tr>
                                            <td>0</td>
                                            <th>$976</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <th>$1,177</th>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <th>$1,469</th>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <th>$1,974</th>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <th>$2,374</th>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <th>$2,730</th>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <th>$3,086</th>
                                        </tr>
                                    </tbody>
                                </table>







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


                                <div className="margin24">
                                    <img className="w-100" src={require('../../assets/img/image145.png').default} />
                                </div>
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
export default Payments