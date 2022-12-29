import React from 'react'

const ResearchYourApt = () => {
    return (
        <section className="secPad reaserchApartment">
            <div className="container">
                <div className="sectionTitle responsiveMargintopTitle">
                    <h2 className="font-weight700 colorBlue">Research your apartment</h2>
                </div>
                <div className="row marginTop">
                    <div className="col-md-4 col-sm-6">
                        <div className="reaserchApartmentBlock">
                            <div className="responsiveFlex">
                                <div className="colouredBox greenBlock">
                                    <img src={require('../assets/img/researchApart1.svg').default} />
                                </div>
                                <div>
                                    <h3 className="font-weight700">Best deals first</h3>
                                    <p className="para mb-0">Find housing programs to assist you with your monthly rent
                                        expenses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="reaserchApartmentBlock">
                            <div className="responsiveFlex">
                                <div className="colouredBox purpleBlock">
                                    <img src={require('../assets/img/researchApart2.svg').default} />
                                </div>
                                <div>
                                    <h3 className="font-weight700">Pre-Application</h3>
                                    <p className="para mb-0">Complete the FREE online pre-application today and you'll be one
                                        step closer to your new home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="reaserchApartmentBlock res_mb0">
                            <div className="responsiveFlex">
                                <div className="colouredBox blueBlock">
                                    <img src={require('../assets/img/researchApart3.svg').default} />
                                </div>
                                <div>
                                    <h3 className="font-weight700">Help with your rent</h3>
                                    <p className="para mb-0">Follow us on Facebook! We keep all of our users up to date on
                                        listings through Facebook.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ResearchYourApt