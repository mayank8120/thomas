import React from 'react'
import Footer from '../../containers/Footer'
import RentalAssistance from '../../containers/RentalAssistance'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'
import { NearbyAgenciesAccordion } from '../HousingAuthority/NearbyAgenciesAccordion'

const SiteMap = () => {
    document.title = "SiteMap - Rental Housing Deals"

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">

                        <div className="col-md-24 col-sm-24 col-lg-24 sitemap">
                            {/* <h2 style="margin-top: 0;">Sitemap</h2> */}
                            {/* <section className="sep" id="statMain"> */}
                            <div className="unit w810" id="statCont">


                                <section className='mb-3'>
                                    <h2 className='h2sitemap'>Premium Listings</h2>

                                    <div className="whtBg p20 bdrBox row">

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/CA/Maywood/Maywood-Villas-Senior-Apartments">Maywood Villas</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/PA/Derry/Derry-Round-House-Court">Derry Round House Court</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/PA/Reading/Reading-Elderly-Housing">Reading Elderly Housing</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/WA/Tacoma/Vintage-at-Tacoma">Vintage at Tacoma</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/WA/Spokane-Valley/Parkside-at-Mirabeau">Parkside at Mirabeau </a></li>
                                                <li><a href="//www.rentalhousingdeals.com/IL/Morris/Morris-Family-Apartments">Morris-Family Apartments</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/IL/Plano/Kingsfield-Apartments">Kingsfield Apartments</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/IL/Wenona/Wenona-Place-Apartments">Wenona Place Apartments</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/GA/Fitzgerald/Fitzgerald-Summit-Apartments">Fitzgerald Summit Apartments</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/GA/Tifton/Tift-Tower-Apartments">Tift Tower Apartments</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/CA/San-Jose/Cambrian-Center">Cambrian Center</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/CA/Patterson/Patterson-Place-Apartments">Patterson Place Apartments</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <div className='clearfix'></div>



                                <section className='mb-3'>
                                    <h2 className="clear" className='h2sitemap'>Popular Apartment for Rent Searches</h2>

                                    <div className="whtBg p20 bdrBox row">

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/WA/Federal-Way/Mariposa-Apartment-Homes">Federal Way Apartments</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/WA/Bremerton/Pinewood-Manor">Bremerton Apartments</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/CA/Berkeley">Berkeley CA apartments</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/TX/Houston">Affordable Housing in Houston</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/CA/El-Monte">Affordable Housing in El Monte</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/OH/Toledo">Affordable Housing in Toledo</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/senior-housing/CO/Aurora">Aurora Senior Housing</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/senior-housing/CA/Bakersfield">Bakersfield Senior Housing</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/senior-housing/NJ/Newark">Newark Senior Housing</a></li>
                                            </ul>
                                        </div>

                                       
                                    </div>
                                </section>

                                <div className='clearfix'></div>

                                <section className='mb-3'>
                                    <h2 className="clear" className='h2sitemap'>Popular Housing Authority Searches</h2>

                                    <div className="whtBg p20 bdrBox row">


                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/CA/Anaheim/Anaheim-Housing-Authority">Anaheim Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/CA/Baldwin-Park/Baldwin-Park-Housing-Department">Baldwin Park Housing Authority</a></li>
                                                <li><a href="#">Mesa Housing Authority</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/NY/Albany/Albany-Housing-Authority">Albany Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/NY/Binghamton/Binghamton-Housing-Authority">Binghamton Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/IL/Alton/Alton-Housing-Authority">Alton Housing Authority</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/TX/Dallas/Dallas-Housing-Authority">Dallas Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/TX/Grand-Prairie/Grand-Prairie-Housing-Authority">Grand Prairie Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/WA/Bellingham/Bellingham-Housing-Authority">Bellingham Housing Authority</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
                                            <ul className="floatleft">
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/CO/Lamar/Lamar-Housing-Authority">Lamar Housing Authority</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/CO/Fort-Collins/Wellington-Housing-Authority">Wellington Housing Authoritya</a></li>
                                                <li><a href="//www.rentalhousingdeals.com/housing-authority-waitlists/VA/Hopewell/Hopewell-Redevelopment-and-Housing-Authority-(HRHA)">Hopewell Housing Authority</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>


                            {/* </section> */}
                        </div>

                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}
export default SiteMap