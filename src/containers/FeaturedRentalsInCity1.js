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
                    <div className="col-lg-12">
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
                                            <div className="col-md-3 col-sm-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">New York</h3>
                                                        <p className="mb-0 secondaryColor">New York</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Miami</h3>
                                                        <p className="mb-0 secondaryColor">Florida</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Seattle</h3>
                                                        <p className="mb-0 secondaryColor">Washington</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Austin</h3>
                                                        <p className="mb-0 secondaryColor">Texas</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Phoenix</h3>
                                                        <p className="mb-0 secondaryColor">Arizona</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">San Diego</h3>
                                                        <p className="mb-0 secondaryColor">California</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Boston</h3>
                                                        <p className="mb-0 secondaryColor">Massachusetts</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">New Orleans</h3>
                                                        <p className="mb-0 secondaryColor">Lousiana</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Atlanta</h3>
                                                        <p className="mb-0 secondaryColor">Georgia</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">San Francisco</h3>
                                                        <p className="mb-0 secondaryColor">California</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Philadelphia</h3>
                                                        <p className="mb-0 secondaryColor">Pennsylvania</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">San Antonio</h3>
                                                        <p className="mb-0 secondaryColor">Texas</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Chicago</h3>
                                                        <p className="mb-0 secondaryColor">Illinois</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Nashville</h3>
                                                        <p className="mb-0 secondaryColor">Tennesse</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Dallas</h3>
                                                        <p className="mb-0 secondaryColor">Texas</p>
                                                    </li>
                                                    <li>
                                                        <h3 className="font-weight500 mb-0">Los Angeles</h3>
                                                        <p className="mb-0 secondaryColor">California</p>
                                                    </li>
                                                </ul>
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