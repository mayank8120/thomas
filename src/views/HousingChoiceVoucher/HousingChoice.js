import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../containers/Footer'
import GoogleADS from '../../containers/GoogleADS'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import Fbpage from '../fbpage/Fbpage'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const HousingChoice = () => {
    document.title = "Housing Choice - Rental Housing Deals";
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
                                    <li className="breadcrumb-item active" aria-current="page">Housing Choice</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Housing Choice Voucher (HCV)</h2>
                                <p className="para">The Housing Choice Voucher (HCV) program is also administered by the local PHA but they are not the landlord in this program. The HCV program is where HUD gives a PHA a certain number of vouchers to help low income families in their area. The larger the PHA, the more vouchers they have to give out. A majority of PHAs have a waiting list for the HCV Program.</p>
                                <p className="para">Under the HCV program, the participant is given a voucher with a bedroom size that is based number of people in the household. Each bedroom size is allocated a voucher amount and each PHA will have different amounts for voucher sizes. The voucher allows participants to search for housing options from private owners. The voucher certifies that a portion of the rent will be paid to the owner from the PHA. Participants will generally pay 30% of their monthly income toward rent just like with the PH program. However, the rent is paid to the Owner and not the PHA.</p>
                                <p className="para">
                                    The HCV Program has a special feature called .portability.. The HCV program is designed to allow participants to move anywhere in the United States without losing their housing assistance. The portability feature enables participants to move to an area where another PHA has jurisdiction but will not have to go on that PHAs waiting list for the HCV program. Each PHA has portability procedures that must be followed to prevent losing the housing assistance including the PHA that you are initially provided the voucher. Both the current PHA and the PHA that a participant wishes to relocate to will both have .incoming and outgoing. portability procedures.
                                </p>
                                <p className="para">
                                    <a href="/housing-authority-waitlists">Contact a Public Housing Agency near you to see if you qualify for the HCV program &gt;&gt;</a>
                                </p>

                                <RentalAssistance />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="agencyLandingRightSec detailRightSec">
                                <div className="mt-0 mb-24">
                                    <Fbpage />
                                    <img className="w-100" src={require('../../assets/img/image147.png').default} />
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
export default HousingChoice