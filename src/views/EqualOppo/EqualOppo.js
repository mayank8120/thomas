import React, { useState, useEffect } from 'react'
import Footer from '../../containers/Footer'

export const EqualOppo = () => {

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">

                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Equal Opportunity Housing</li>
                                </ol>
                            </nav>
                        </div>

                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <div id="article_body">
                                <h2>Equal Opportunity in Housing Statement</h2>

                                <h3>Our Policy</h3>

                                <p>The real estate advertised on this Website is subject to the federal Fair Housing Act which makes it illegal to advertise "any preference, limitation, or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or intention to make such preference, limitation or discrimination."</p>

                                <p>RentalHousingDeals.com,Inc. will not knowingly accept or permit any advertisement for real estate that is in violation of the law. It is our policy that all housing advertised on this Website is available on an equal opportunity basis.</p>

                                <h3>The Law</h3>

                                <p>State and federal fair housing laws were enacted to prohibit discrimination based on race, color, religion, sex, disability, familial status, and national origin in the purchase and rental of housing.</p>

                                <h3>Fair Housing Act</h3>

                                <p>The federal Fair Housing Act of 1968, as amended, prohibits discrimination in the sale, lease or rental of housing, or making housing otherwise unavailable because of race, color, religion, sex, disability, familial status or national origin.</p>

                                <h3>Civil Rights Act of 1966</h3>

                                <p>The federal Civil Rights Act of 1966 prohibits all racial discrimination in the sale or rental of property.</p>

                                <h3>Americans with Disabilities Act</h3>

                                <p>Title III of the federal Americans with Disabilities Act prohibits discrimination against persons with disabilities in places of public accommodation and commercial facilities.</p>

                                <h3>Equal Credit Opportunity Act</h3>

                                <p>The federal Equal Credit Opportunity Act makes it unlawful to discriminate against anyone on a credit application due to race, color, religion, national origin, sex, marital status, age or because all or part of an applicant's income comes from any public assistance program.</p>

                                <h3>If You Suspect Discrimination</h3>

                                <p>Complaints concerning discrimination in housing may be filed with the nearest office of the United States Department of Housing and Urban Development (HUD), or by calling HUDs toll free number, 1-800-669-9777.</p>

                                <p>Alternatively, you can contact HUD on the Internet at <a  target="_blank" href="https://portal.hud.gov/portal/page/portal/HUDcomplaints/housediscrim.cfm">http://www.hud.gov/complaints/housediscrim.cfm</a></p>

                            </div>
                        </div>
                    </div>

                </div>
            </section >
            <Footer />
        </>

    )
}
