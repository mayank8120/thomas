import React, { useState, useEffect } from 'react'
import Footer from '../../containers/Footer'

export const IncomeBasedFAQ = () => {

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">

                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Frequently Asked Questions</li>
                                </ol>
                            </nav>
                        </div>

                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <h1><strong><span style={{ "font-size": "18px" }}><span style={{ "font-family": "arial" }}><span className="pagehd1">FAQ (frequently asked questions)</span></span></span></strong></h1>

                            <h4>Q: How does RentalHousingDeals.com work?</h4>

                            <p>A: Our FREE service provides access to a variety of current rental housing deals so that you can easily find the best housing options for your lifestyle and budget.</p>

                            <h4>Q: How do I submit an application?</h4>

                            <p>A: Simply complete the short pre-application form on our site and we'll submit it to our extensive list of managers and/or landlords for the quickest availability of your information.</p>

                            <h4>Q: Where I can I get Rental Assistance?</h4>

                            <p>A: RentalHousingDeals.com is building the most complete directory of all of the public housing agencies nationwide that may be able to refer you to financial or other assistance and answer many of your affordable housing questions. Please bookmark our page and come back to access our comprehensive list of resources.</p>

                            <h4>Q: What is the "Tell a Friend" program?</h4>

                            <p>A: Are you moving from an awesome property or know of a good rental deal for friends and family? At RentalHousingDeals.com, you will be able post and share with your friends and family so that they can get information to great housing choices fast through our FREE posts. You can also share your find or deals with friends and family through our Facebook page at http://www.facebook.com/pages/RentalHousingDealscom/266385446773619</p>

                            <h4>Q: What Housing Resources do you offer?</h4>

                            <p>A: We're currently researching and compiling a database of resources to provide answers to some of the toughest issues and questions when searching for a decent and safe place to live. We will soon provide you with information that can help you plan or decide to get the best housing solution. Please let us know of other issues or topics which you think would be useful for others to know.</p>

                            <h4>Q: What kind of rental deals can I find on RentalHousingDeals.com?</h4>

                            <p>A: You will find all kinds of housing deals on this site, from Section 8 apartments and homes, room rentals and market-rate apartments that are budget-friendly. Requirements to qualify for renting will vary by property and are subject to the discretion of the owner or management company.</p>

                            <h4>Q: How do I search for DEALS on Rental Housing Deals.com?</h4>

                            <p>A: Enter your search criteria (city, state and/or zip code) in the search box and find rental listings in the vicinity of where you are searching for housing.</p>

                            <h4>Q: How do I qualify for rental deals?</h4>

                            <p>A: Each rental community has certain qualifications that are in part based on your income. Please contact the community manager or landlord to see if you qualify for a "deal". To speed up the process, we've provided you with an easy pre-application form to fill out and submit to managers or landlords of your selected unit. You can also contact the property or communities directory through the “Check Availability” button with any questions or comments you may have.</p>

                            <h4>Q: How do I share my stories through comments or reviews?</h4>

                            <p>A: We encourage positive comments and reviews so that others may benefit from your experience. Since we can't fully know the rental search criteria of everyone using the site, it's best we don't spoil the rental opportunity with reviews that may be very unique to your particular situation. However, if a rental community is worthy of praise based on your first-hand knowledge, please take a few moments to let everyone know about a good thing!</p>

                            <h4>Q: How can I share and post an ad?</h4>

                            <p>A: Posting is FREE and sharing with friends requires only a sign up.</p>

                            <h4>Q: How do I report an error found on your site?</h4>

                            <p>A: Please email us at <a href="mailto:info@rentalhousingdeals.com">info@rentalhousingdeals.com</a> to report incorrect or incomplete data.</p>

                            <h4>Q: Do you offer only affordable housing on your site?</h4>

                            <p>A: We offer all kinds of deals on rental housing options as well as homes for sale on our site. We advertise apartments for market-rate communities, home for rent, as well as affordable rental housing which includes senior, student, military housing, Section 8 (subsidized)and most types of rental housing. Our goal is to help you find and get the best rental deal that suits your housing needs.</p>

                            <h4>Q: How do I file a complaint with a landlord who discriminated?</h4>

                            <p>A: Please review the Equal Housing Opportunity statement, found <a href="/equal-opportunity-housing">here</a>, for information about discrimination and where to file a complaint.</p>

                            <h4>Q: Can you help me find an apartment with 2 bedrooms and 1 baths that accept pets and has a pool?</h4>

                            <p>A: We would love to directly assist all of our users with their housing needs. Unfortunately, we do not have the resources to provide this service at this time. We do provide plenty of resources and links to help you identify the type of property that fits your lifestyle and budget.</p>

                            <h2>Landlords/Managers</h2>

                            <h4>Q: How do I list my property or post rental deals?</h4>

                            <p>A: You submit an online listing form, please <a href="/contact">email</a> us for more information.</p>

                            <h4>Q: How much does it cost to list my property?</h4>

                            <p>A: We provide you with different advertising packages to suit your vacancy needs. Our listing service varies from short term FREE classified listing to our annual premium listing at $297. Please <a href="/contact/">email</a> or call us for more information about bulk listing discounts or if you are a NAHMA or CARH member for special promotions.</p>

                            <h4>Q: I manage several properties, do you offer bulk discounts for listings them all?</h4>

                            <p>A: Yes, we offer bulk discounts which vary depending on the number of properties being listed and other factors.</p>

                            <h4>Q: How many photos may I add to my listing?</h4>

                            <p>A: You may include up to 20 photos for each listing. File formats accepted include JPG, GIF, PDF and PNG.</p>

                            <h4>Q: How do I remove my listing once my property has been rented?</h4>

                            <p>A: Please call or <a href="/contact">email</a> us with your property name and ID number and we can have it removed within 48 hours.</p>

                            <h4>Q: Can I see a demo of the listing console interface?</h4>

                            <p>A: We are at work creating a demo for our users. Please <a href="/contact">email</a> us and we will notify when it is available for your testing.</p>

                            <h4>Q: What is the approval procedure for a multi-unit residential property that wishes to participate in the Section 8 program / accept Section 8 tenants?</h4>

                            <p>A: The Section 8 program is managed by your local public housing authority. You need to contact them directly to inquire about their process for becoming a Section 8-qualified property. In addition, the following link will provide more detailed information about the Section 8 program: <a href="https://portal.hud.gov/portal/page/portal/HUDoffices/pih/programs/hcv/index.cfm" target="_blank">http://www.hud.gov/offices/pih/programs/hcv/index.cfm</a></p>

                            <h4>Q: What are Communities of Quality?</h4>

                            <p>A: Affordable housing providers who create safe, attractive, well-maintained properties that are neighborhood assets deserve to be recognized for their outstanding achievements. The National Affordable Housing Management Association (NAHMA) created the Communities of Quality? (COQ) National Recognition and Awards program to recognize such housing providers. When a property meets NAHMA's high standards in physical maintenance, financial management, programs and services, employee credentials and other criteria, it can become a member of an elite group. COQ properties qualify for regional and national awards, a listing in an online registry of the country.s top affordable properties,and the use of COQ marketing materials. See NAHMA.org for participation and program details (as cited on www.nahma.org, 2012).</p>


                        </div>
                    </div>

                </div>
            </section >
            <Footer />
        </>

    )
}
