import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const Inspections = () => {
    document.title = "Inspections - Rental Housing Deals";
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
                                    <li className="breadcrumb-item active" aria-current="page">Inspections</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Inspections</h2>
                                <p className="para">
                                    Inspections are a very important part of any housing assistance program. The standards that are set by HUD and USDA ensure that your home will be in safe, decent and sanitary condition. There are two different types of inspections. Public Housing, Affordable Housing and USDA/Rural Development have inspections that follow the Uniform Physical Condition Standards (UPCS) and the Housing Choice Voucher Program.s inspection follows the guideline of the Housing Quality Standards Inspection (HQS).


                                </p>
                                <p className="para">
                                    Each inspection type has requirements that are the Owner.s responsibility and the Tenant.s responsibility. It is important to make yourself aware of your responsibilities to ensure that the unit that you rent stays in safe, decent and sanitary condition. Inspections make certain that the unit meets the minimum standards for rental properties and that there are no health and safety concerns that could affect the participant.
                                </p>


                                <p className="para">
                                    Below you will find the top deficiencies that are found in each inspection type. Anytime you discover a problem in your unit, always report the problem to your landlord as a soon as possible. Prolonged deficiencies can in some cases cause a delay in housing assistance. The .A Good Place to Live. brochure is an excellent tool in providing useful information about things to look for in your unit that could be a potential problem. Proper care of the unit by the Tenant and proper maintenance by the Landlord will keep the unit in the best condition possible which means a better place to call home.
                                </p>

                                <h3>Top 25 Deficiencies in Multifamily Housing</h3>


                                <table className="table table-bordered">
                                    {/* <thead>
                                        <tr>
                                            <th >#</th>
                                            <th >First</th>
                                            <th >Last</th>
                                            
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                            <th >1</th>
                                            <td>Doors</td>
                                            <td>Damaged Hardware/Locks</td>
                                        </tr>
                                        <tr>
                                            <th >2</th>
                                            <td>Kitchen</td>
                                            <td>Refrigerator - Missing/Damaged/Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >3</th>
                                            <td>Doors</td>
                                            <td>Damaged Surface - Holes/Paint/Rusting/Glass</td>
                                        </tr>
                                        <tr>
                                            <th >4</th>
                                            <td>
                                                Bathroom</td>
                                            <td>Lavatory Sink - Damaged/Missing</td>
                                        </tr>
                                        <tr>
                                            <th >5</th>
                                            <td>Walls</td>
                                            <td>Missing Pieces/Holes/Spalling</td>
                                        </tr>
                                        <tr>
                                            <th >6</th>
                                            <td>Windows</td>
                                            <td>Missing/Deteriorated Caulking/Seals/Glazing Compound</td>
                                        </tr>

                                        <tr>
                                            <th >7</th>
                                            <td>Walls</td>
                                            <td>Damaged</td>
                                        </tr>
                                        <tr>
                                            <th >8</th>
                                            <td>Walls</td>
                                            <td>Stained/Peeling/Needs Paint</td>
                                        </tr>
                                        <tr>
                                            <th >9</th>
                                            <td>Windows</td>
                                            <td>Inoperable/Not Lockable</td>
                                        </tr>
                                        <tr>
                                            <th >10</th>
                                            <td>
                                                Smoke Detector</td>
                                            <td>
                                                Missing/Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >11</th>
                                            <td>Outlets/Switches</td>
                                            <td>Missing/Broken Cover Plates</td>
                                        </tr>
                                        <tr>
                                            <th >12</th>
                                            <td>Kitchen</td>
                                            <td>Range/Stove - Missing/Damaged/Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >13</th>
                                            <td>Call-for-Aid</td>
                                            <td>Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >14</th>
                                            <td>Bathroom</td>
                                            <td>Plumbing - Leaking Faucet/Pipes</td>
                                        </tr>
                                        <tr>
                                            <th >15</th>
                                            <td>
                                                Roofs</td>
                                            <td>Missing/Damaged Components from Downspout/Gutter</td>
                                        </tr>
                                        <tr>
                                            <th >16</th>
                                            <td>Walls</td>
                                            <td>Peeling/Needs Paint</td>
                                        </tr>
                                        <tr>
                                            <th >17</th>
                                            <td>Hazards</td>
                                            <td>Tripping</td>
                                        </tr>
                                        <tr>
                                            <th >18</th>
                                            <td>Bathroom</td>
                                            <td>Shower/Tub - Damaged/Missing</td>
                                        </tr>
                                        <tr>
                                            <th >19</th>
                                            <td>Electrical System</td>
                                            <td>GFI - Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >20</th>
                                            <td>Doors</td>
                                            <td>Missing Door</td>
                                        </tr>
                                        <tr>
                                            <th >21</th>
                                            <td>Doors</td>
                                            <td>Damaged/Missing Screen/Storm/Security Door</td>
                                        </tr>
                                        <tr>
                                            <th >22</th>
                                            <td>Emergency/Fire Exits</td>
                                            <td>Emergency/Fire Exits Blocked/Unusable</td>
                                        </tr>
                                        <tr>
                                            <th >23</th>
                                            <td>Floors</td>
                                            <td>Floor Covering Damage</td>
                                        </tr>

                                        <tr>
                                            <th >24</th>
                                            <td>Ceiling</td>
                                            <td>Water Stains/Water Damage/Mold/Mildew</td>
                                        </tr>
                                        <tr>
                                            <th >25</th>
                                            <td>Infestation</td>
                                            <td>Insects</td>
                                        </tr>
                                    </tbody>
                                </table>



                                <h3>Top 25 Deficiencies in Public Housing</h3>


                                <table className="table table-bordered">

                                    <tbody>
                                        <tr>
                                            <th >1</th>
                                            <td>Doors</td>
                                            <td>Damaged Hardware/Locks</td>
                                        </tr>
                                        <tr>
                                            <th >2</th>
                                            <td>Kitchen</td>
                                            <td>Refrigerator - Missing/Damaged/Inoperable</td>
                                        </tr>

                                        <tr>
                                            <th >3</th>
                                            <td>Walls</td>
                                            <td>Missing Pieces/Holes/Spalling</td>
                                        </tr>




                                        <tr>
                                            <th >4</th>
                                            <td>Doors</td>
                                            <td>Damaged Surface - Holes/Paint/Rusting/Glass</td>
                                        </tr>


                                        <tr>
                                            <th >5</th>
                                            <td>Walls</td>
                                            <td>Damaged</td>
                                        </tr>

                                        <tr>
                                            <th >6</th>
                                            <td>Walls</td>
                                            <td>Peeling/Needs Paint</td>
                                        </tr>

                                        <tr>
                                            <th >7</th>
                                            <td>Walls</td>
                                            <td>Stained/Peeling/Needs Paint</td>
                                        </tr>

                                        <tr>
                                            <th >8</th>
                                            <td>Windows</td>
                                            <td>Inoperable/Not Lockable</td>
                                        </tr>




                                        <tr>
                                            <th >9</th>
                                            <td>
                                                Bathroom</td>
                                            <td>Lavatory Sink - Damaged/Missing</td>
                                        </tr>


                                        <tr>
                                            <th >10</th>
                                            <td>Doors</td>
                                            <td>Damaged/Missing Screen/Storm/Security Door</td>
                                        </tr>














                                        <tr>
                                            <th >11</th>
                                            <td>Kitchen</td>
                                            <td>Range/Stove - Missing/Damaged/Inoperable</td>
                                        </tr>




                                        <tr>
                                            <th >12</th>
                                            <td>Infestation</td>
                                            <td>Insects</td>
                                        </tr>




                                        <tr>
                                            <th >13</th>
                                            <td>Outlets/Switches</td>
                                            <td>Missing/Broken Cover Plates</td>
                                        </tr>


                                        <tr>
                                            <th >14</th>
                                            <td>Hazards</td>
                                            <td>Tripping</td>
                                        </tr>




                                        <tr>
                                            <th >15</th>
                                            <td>Windows</td>
                                            <td>Missing/Deteriorated Caulking/Seals/Glazing Compound</td>
                                        </tr>
                                        <tr>
                                            <th >16</th>
                                            <td>Ceiling</td>
                                            <td>
                                                Peeling/Needs Paint</td>
                                        </tr>
                                        <tr>
                                            <th >17</th>
                                            <td>Roofs</td>
                                            <td>Missing/Damaged Components from Downspout/Gutter</td>
                                        </tr>
                                        <tr>
                                            <th >18</th>
                                            <td>Smoke Detector</td>
                                            <td>Missing/Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >19</th>
                                            <td>Air Quality</td>
                                            <td>Mold and/or Mildew Observed</td>
                                        </tr>
                                        <tr>
                                            <th >20</th>
                                            <td>Doors</td>
                                            <td>Damaged Frames/ Threshold/Lintels/Trim</td>
                                        </tr>
                                        <tr>
                                            <th >21</th>
                                            <td>Emergency/Fire Exits

                                            </td>
                                            <td>
                                                Emergency/Fire Exits Blocked/Unusable</td>
                                        </tr>
                                        <tr>
                                            <th >22</th>
                                            <td>Electrical System</td>
                                            <td>GFI - Inoperable</td>
                                        </tr>
                                        <tr>
                                            <th >23</th>
                                            <td>Roofs</td>
                                            <td>Damaged Soffits/Fascia</td>
                                        </tr>
                                        <tr>
                                            <th >24</th>
                                            <td>Bathroom</td>
                                            <td>Plumbing - Leaking Faucet/Pipes</td>
                                        </tr>
                                        <tr>
                                            <th >25</th>
                                            <td>Bathroom</td>
                                            <td>Shower/Tub - Damaged/Missing</td>
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
export default Inspections