import React from 'react'
import { Accordion } from 'react-bootstrap'
import { ManagementCompanyItem } from './ManagementCompanyItem'
// import { Scrollbar } from "react-scrollbars-custom";
export const ManagementCompanyAccordion = ({ propmancom }) => {
    // console.log(propmancom);
    return (
        <>


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
                                            Management Company
                                        </button>
                                        <span className="ml-auto" data-toggle="collapse" data-target="#collapseTwo"
                                            aria-expanded="true" aria-controls="collapseTwo">
                                            <img src={require('../../assets/img/upArrow.png').default} />
                                        </span>
                                    </h5>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                                    data-parent="#accordion2">
                                    <div className="card-body p-0">

                                        {propmancom.company == [] || propmancom.company == null || propmancom.company == '' ? null :

                                            <div className="media d-flex align-items-center">
                                                {
                                                    propmancom.company.length !== 0 && propmancom.company[0].logo == null || propmancom.company[0].logo == '' ?
                                                        null
                                                        :
                                                        <span className="imageCircle mr-15">
                                                            <img className="" src={`https://managers.rentalhousingdeals.com/${propmancom.company.length !== 0 ? propmancom.company[0].logo : null}`} />
                                                        </span>
                                                }
                                                <div className="media-body ml-0">
                                                    <h5 className="mt-0 font-weight400 colorBlue mb-0 fontSize16">
                                                        {propmancom.company.length !== 0 ? propmancom.company[0].name : null}
                                                    </h5>
                                                    <p className="mb-0 fontSize12 secondaryColor">
                                                        {propmancom.company.length !== 0 ? propmancom.company[0].address : null}
                                                        {propmancom.company.length !== 0 ? propmancom.company[0].zip : null}</p>
                                                    <a href="" className="purpleText">{propmancom.company.length !== 0 ? propmancom.company[0].url : null}</a>
                                                </div>
                                            </div>
                                        }
                                        <div className="brdrLine mar-15"></div>
                                        <div className="scrollManagement boxscroll4 p-0">
                                            <div className="wrapperScroll">
                                                <ul className="noMarginPad listStyleNone">



                                                    {propmancom.apartments.map(
                                                        (data) => (
                                                            <li>
                                                                <ManagementCompanyItem props={data} />
                                                            </li>
                                                        ))}






                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            }
            
        </>




    )
}
