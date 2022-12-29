import React from 'react'
import Form from './Form'

const BannerListWithUs = () => {
    return (
        <section className="listus-section">
            <div className="">
                <div className="row" style={{ margin: "0px" }}>
                    <div className="col-md-6 responsive0 align-items-center  aa">
                        <div className="bannerSectionText">
                            <h1 className="colorWhite font-weight700">Complete Affordable Housing Online Marketing</h1>
                            <div className="listus-banner-text">
                                <p className="font-weight700">Internet Listing Service</p>
                                <p className="font-weight700 color-text">Social Media Management</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 responsive0  d-flex align-items-center">
                        <div className="listus-sectionform">
                            <div className="checkAvailability">
                                <div className="sideFormBlock">
                                    <div className="SectionBlock responsive15 availabilitySection">
                                        <div className="d-flex align-items-center">
                                            <h2 className="colorBlue font-weight700" style={{ "font-size": "32px" }}>List With Us</h2>
                                        </div>

                                        <Form />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
 
export default BannerListWithUs