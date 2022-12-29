import React, { useState, useEffect } from 'react'
import Footer from '../../containers/Footer'

export const AboutUs = () => {

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-12">
                            <div className="leftContSection">
                                <h2 className="primaryColor font-weight700">Mission</h2>
                                <p className="para">Helping individuals and families find the best rental housing deals - based on their location, preferences and budget. Maintaining one of the most up-to-date databases for affordably priced rental listings for apartments, townhouses, and more.</p>
                                <h2 className="primaryColor font-weight700">Our Philosophy</h2>
                                <p className="para">
                                    We know how exciting and stressful searching for a new “home” can be - especially a home that meets your preferences for location, affordability, or specific housing needs. RentalHousingDeals.com's search tool allows you to view all types of available rental housing deals in your area. To help you find your new affordable home, we have collected valuable resources and information about goverment-subsidized housing and how to apply for rental assistance.  No matter what your budget may be, we strive to provide you with high-quality, safe and affordable housing options nationwide.
                                </p>
                                <p className="para">
                                    We value your feedback, if you have any questions or comments please feel free to <a href='/contact'>contact us</a> today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>

    )
}
