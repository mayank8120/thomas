import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const AffordableHousingByRegions = () => {
    const [key, setKey] = useState('home');
    return (
        <section className="secPad featureSection">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">Affordable Housing by Regions</h2>
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

                                <Tab eventKey="home" title="East Region">
                                <div className="listingBlock">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Maine</p>
                                                    </li>
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">New York</p>
                                                    </li>
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Delaware</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">New Hampshire</p>
                                                    </li>
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Rhode Island</p>
                                                    </li>
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Maryland</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                      <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Vermont</p>
                                                    </li>
                                                    <li>
                                                      <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Connecticut</p>
                                                    </li>
                                                    <li>
                                                      <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">New Jersey</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                                <ul className="noMarginPad list-style-type">
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Massachusetts</p>
                                                    </li>
                                                    <li>
                                                    <h3 className="font-weight500 mb-0">Affordable Housing</h3>
                                                        <p className="mb-0 secondaryColor">Washington DC</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <a className="loadMore transition itemMobile">Load More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Midwest Region" title="Midwest Region"> Midwest Region</Tab>
                                <Tab eventKey="South Region" title="South Region">South Region</Tab>
                                <Tab eventKey="Southwest Region" title="Southwest Region">Southwest Region</Tab>
                                <Tab eventKey="West Region" title="West Region">West Region</Tab>
                                </Tabs>
                           
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AffordableHousingByRegions