import React from 'react'

const DetailsSection = () => {
    return (
        <>

            <section className="secPad reaserchApartment" style={{padding:"80px 0 0"}}>
                <div className="container">
                    <div className="row marginTop">
                        <div className="col-md-4">
                            <div className="reaserchApartmentBlock">
                                <div className="responsiveFlex">
                                    <div className="colouredBox greenBlock">
                                        {/* {require('../../assets/img/seo.png').default} */}
                                        <img src={require('../../assets/img/globe.png').default} />
                                    </div>
                                    <div>
                                        <h3 className="font-weight700">Internet Listing Syndication</h3>
                                        <p className="para mb-0">Find housing programs to assist you with your monthly rent
                                            expenses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="reaserchApartmentBlock">
                                <div className="responsiveFlex">
                                    <div className="colouredBox purpleBlock">
                                        <img src={require('../../assets/img/seo.png').default} />
                                    </div>
                                    <div>
                                        <h3 className="font-weight700">Apartment Social Media and SEO</h3>
                                        <p className="para mb-0">Complete the FREE online pre-application today and you'll be one
                                            step closer to your new home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="reaserchApartmentBlock res_mb0">
                                <div className="responsiveFlex">
                                    <div className="colouredBox blueBlock">
                                        <img src={require('../../assets/img/qualified.png').default} />
                                    </div>
                                    <div>
                                        <h3 className="font-weight700">Quality and Qualified Leads
                                        </h3>
                                        <p className="para mb-0">Follow us on Facebook! We keep all of our users up to date on
                                            listings through Facebook.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="interner-syndiction d-flex">
                <div className="">
                    <div className="row">
                        <div className="col-md-5 wide-image">
                            <div className="image-section">
                                <img src={require('../../assets/img/listing-syndiction.png').default} className="img-full" />
                            </div>
                        </div>
                        <div className="col-md-7 align-items-center d-flex">
                            <div className="text-section">
                                <h1 className="textblue font-weight700 textblue">Internet Listing Syndication</h1>
                                <p className="font-weight500">RentalHousingDeals.com assists prospective residents to locate affordable housing.</p>
                                <p className="font-weight500">We deliver high quality and qualified leads to help you fill vacancies fast!Syndication
                                    means your property listing will be shown on multiple nationwide leading websites with
                                    millions of renters per month!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <section className=" proudPartners a" style={{ "margin-top": "50px" }}>
                <div className="container">

                    <div className="row marginTop">
                        <div className="col-lg-12">
                            <img src={require('../../assets/img/logo-group.png').default} className="img-full" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="interner-syndiction d-flex second" style={{ "margin-top": "64px" }}>
                <div className="">
                    <div className="row">
                        <div className="col-md-7 align-items-center d-flex wide-image">
                            <div className="text-section">
                                <h1 className="textblue font-weight700 textblue">Apartment Social Media <br /> SEO</h1>
                                <p className="font-weight500">We are a publisher of social media content - helping multifamily
                                    communities market and grow their brand image while helping to fill vacancies. Our goal is
                                    to help create meaningful relationship between you and your residents by crafting a social
                                    media brand that takes you from:</p>
                                <div className="listus-banner-texta">
                                    <p className="font-weight700 color-text" style={{ margin: "0 24px" }}>Social Media Management</p>
                                    <img src={require('../../assets/img/sociala.png').default} className="img-full" style={{ "margin-top": "46px" }} />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 nation-wide">
                            <div className="image-section">
                                <img src={require('../../assets/img/social-media.png').default} className="img-full" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>



            <section className="interner-syndiction d-flex">
                <div className="">
                    <div className="row">
                        <div className="col-md-5 nation-wide">
                            <div className="image-section">
                                <img src={require('../../assets/img/nation-wide.png').default} className="img-full" />
                            </div>
                        </div>
                        <div className="col-md-7 align-items-center d-flex">
                            <div className="text-section">
                                <h1 className="textblue font-weight700 textblue">Nationwide Affordable Housing <span
                                    className="color-text">Association  Partnerships</span></h1>
                                <p className="font-weight500">We work with over 3,500 non-profit housing agencies and public housing
                                    agencies nationwide. We are also endorsed and partnered with various affordable housing
                                    associations throughout the country.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


            <section className="secPad proudPartners a">
                <div className="container">

                    <div className="row marginTop">
                        <div className="col-lg-12">
                            <img src={require('../../assets/img/bottom-image.png').default} className="img-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="have-any-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 responsive0">
                            <div className="bannerSectionText">
                                <h1 className="colorWhite" style={{ "font-size": "48px", "font-weight": "700", "margin-bottom": "46px", "text-align": "center", color: "#fff" }}>Have any question?</h1>
                                <p style={{ "font-size": "24px", "font-weight": "700", "margin-bottom": "24px", "text-align": "center", color: "#fff" }}><img style={{ "margin-right": "18px" }} src={require('../../assets/img/phonea.svg').default} /> (626) 390-8163</p>
                                <p style={{ "font-size": "24px", "font-weight": "700", "margin-bottom": "24px", "text-align": "center", color: "#fff" }}><img style={{ "margin-right": "18px" }} src={require('../../assets/img/emaila.png').default} />john @rentalhousingdeals.com</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default DetailsSection