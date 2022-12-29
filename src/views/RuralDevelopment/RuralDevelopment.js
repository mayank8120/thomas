import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const RuralDevelopment = () => {
    document.title = "Rural Development (RD) / Rental Assistance - Rental Housing Deals";
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
                                    <li className="breadcrumb-item active" aria-current="page">Rural Development (RD) / Rental Assistance</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Rural Development (RD) / Rental Assistance</h2>
                                <p className="para">
                                    HUD offers the Public Housing (PH), Housing Choice Voucher (HCV) and Affordable Housing/Low Income Housing Tax Credit (AH/LIHTC) programs. The United States Department of Agriculture (USDA) only has one program known as Rental Assistance. This program is administered in rural areas of the country. Rental assistance (RA) is not located in metropolitan cities. Generally, these are communities of fewer than 10,000 persons except that certain communities between 10,000 and 25,000 population are considered rural based on their distance from urban areas.
                                </p>
                                <p className="para">
                                    The USDA/RD program provides funding to communities. The funding will cover the entire property meaning every unit will receive rental assistance or it can only cover a certain number of units in the community. Even if Rental assistance (RA) is not given to each unit, the rents for the property are significantly lower than the rents in the surrounding area.
                                </p>
                                <p className="para">
                                    Learn more or to validate whether or not you.re property is in a rural area.
                                </p>
                                <p className="para">
                                    <a href="http://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do" target="_blank">Determine eligibility for certain USDA home loan programs &gt;&gt;</a>
                                </p>
                                <p className="para">
                                    <a href="/">Search for Rural Development communities near you &gt;&gt;</a>
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
export default RuralDevelopment