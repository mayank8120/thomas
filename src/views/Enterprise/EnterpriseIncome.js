import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const EnterpriseIncome = () => {
    document.title = "Enterprise Income Verification (EIV) - Rental Housing Deals";
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
                                    <li className="breadcrumb-item active" aria-current="page">Enterprise Income Verification (EIV)</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Enterprise Income Verification (EIV)</h2>
                                <p className="para">
                                    HUD uses the Enterprise Income Verification System (EIV) for gathering income verification for agencies that receive funding for HUD rental assistance programs. However, the USDA does not participate in EIV at this time. EIV contains employment and income information for the entire household. The employment and income information is obtained from the local PHA, the Social Security Administration (SSA), and the US Dept. of Health and Human Services (HHS). HHS provides EIV with wage and employment information to include new hire information and unemployment compensation benefits.
                                </p>
                                <p className="para">
                                    EIV gathers the data via social security numbers. Benefits received for minors will be reported under the payee and/or responsible adult. The EIV reports that are printed can only be viewed by the recipient of that social security number. Even the head of household cannot view another adult member.s EIV report. Each adult in the household must annually sign a consent form to grant permission to pull the EIV reports. Each EIV report has a section for the participant to agree or disagree with the information printed. It is very important to review this information for accuracy as the EIV information is used in determining the household.s annual income and rent portion. EIV cannot be printed if a social security number, name or date of birth is incorrect. Failure to grant consent may be a lease and/or program violation which could result in loss of participation in the program. Participants are given the EIV and You Brochure annually which provides a quick overview of the EIV system.
                                </p>


                                <p className="para">
                                    <a href="https://www.rentalhousingdeals.com/EIV%20and%20You%20Brochure.pdf" target="_blank">Download an EIV Brochure &gt;&gt;</a>
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
export default EnterpriseIncome