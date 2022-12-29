import React from 'react'

import { Accordion } from 'react-bootstrap'
import { ManagementCompanyItem } from '../GeneralProperty/ManagementCompanyItem'


const AffordableHousingAccordian = ({ propmancom }) => {
    const props =
    {
        "property_title": "Paradise Valley Retirement Center",
        "property_address": "11640 N. 27th Street",
        "property_city": "Phoenix",
        "property_county": "Maricopa",
        "property_state": "AZ",
        "property_zip": "85028",
        "min_bed": "1",
        "max_bed": "1",
        "min_bath": "",
        "max_bath": ""
    }
    return (
        <>

            {/* <h1>he;llo</h1> */}

            {
                propmancom == null || propmancom.length == 0 ? null :

                    <Accordion defaultActiveKey="0" className="accordionBoxInfo losAngeles managementComp">
                        <Accordion.Item eventKey="0" className="card">
                            <Accordion.Header>
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0 d-flex align-items-center">
                                        <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="true"
                                            aria-controls="collapseTwo">
                                            Affordable Housing Nearby
                                        </button>
                                        <span className="ml-auto" >
                                            <img src={require('../../assets/img/upArrow.png').default} />
                                        </span>
                                    </h5>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>


                                {/* <div className="brdrLine mar-15"></div> */}
                                {
                                    propmancom == null || propmancom.length == 0 ? null :
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                                            data-parent="#accordion2">
                                            <div className="card-body p-0">
                                                <div className="scrollManagement boxscroll4">
                                                    <div className="wrapperScroll">
                                                        <ul className="noMarginPad listStyleNone">
                                                            {propmancom.map(
                                                                (data) => (
                                                                    <li>
                                                                        {/* <ManagementCompanyItem */}
                                                                        <ManagementCompanyItem props={data} />
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }


                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            }

        </>
    )
}

export default AffordableHousingAccordian