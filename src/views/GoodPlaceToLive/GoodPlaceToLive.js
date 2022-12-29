import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const GoodPlaceToLive = () => {
    document.title = "A Good Place To Live - Rental Housing Deals";
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
                                    <li className="breadcrumb-item active" aria-current="page">A Good Place to Live</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Finding "A Good Place to Live"</h2>
                                <p className="para">
                                    Choosing your new place is a big deal and can seem quite complicated. Rental Housing Deals takes you step by step through the process and makes each step easier. Each housing assistance program can be found under the Housing Assistance Programs tab. You may have chosen a program and/or a new place already. If not, take the first step in locating the city you want to live in to see what housing options are available. In choosing your new place, your primary focus is having a place to call home that is safe for your family and at the same time has as many amenities as possible. So how do you find that perfect place? Well, RHD is here to help you along the way.
                                </p>
                                <p className="para">
                                    Subsidized housing programs don.t mean .sub. par housing. Rental Housing Deals gives you the tools to make the right decision about the best place to call home while making the whole process simple. Every housing assistance program requires that a unit be in .safe, decent and sanitary. condition. This means that there are standard requirements for each room of a unit. To help you understand the requirements, HUD.s .A Good Place to Live Brochure. takes you through each room of a unit to show you the things you need to look for and beware of in that space. Also, RHD has listed the Top 25 Deficiencies that you need to look over so that you can make sure that your new place is in the best condition possible.
                                </p>
                                <p className="para">
                                    Use these tools when taking a look at the place you want to move to. Rental Housing Deals has an Inspection FAQs section for any question you may have about inspections or deficient items. As you can see, RHD has helped make the inspection of your potential new home simple for you.
                                </p>

                                <p className="para">
                                    <a href="https://www.rentalhousingdeals.com/a%20good%20place%20to%20live%20brochure.pdf" target="_blank">Download "A Good Place to Live" Brochure &gt;&gt;</a>
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
export default GoodPlaceToLive