import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const FeaturedRentalsInCity = () => {
    const [key, setKey] = useState('home');
    return (
        <section className="secPad featureSection basic">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">Featured Rentals in Your City</h2>
                </div>
                <div className="row marginTop2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div>


                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey="home"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3">

                                <Tab eventKey="home" title="This City">
                                    <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <ul className="noMarginPad list-style-type row">
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">New York</h3>
                                                        <p className="mb-0 secondaryColor">New York</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li className="col-lg-3">
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                </ul>
                                            </div>


                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition">
                                                    Load More
                                                </a>
                                            </div>



                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Nearby Cities" title="Nearby Cities">
                                    <p> Nearby Cities</p>
                                </Tab>
                                <Tab eventKey="Nearby Housing" title="Nearby Housing Authorities">
                                    <p>Nearby Housing Authorities</p>
                                </Tab>
                            </Tabs>







                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedRentalsInCity