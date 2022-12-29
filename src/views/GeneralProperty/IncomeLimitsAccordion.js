import React from 'react'
import { Accordion } from 'react-bootstrap'

export const IncomeLimitsAccordion = ({ propdetails, specialtitle, subsidized }) => {
    // console.log(specialtitle);
    // console.log(subsidized);
    return (
        <>

            {

                // propdetails == null || propdetails == [] || propdetails == undefined || propdetails == '' ?
                //     <>
                //     </>
                //     :
                //     <>

                //         {
                //             specialtitle == 'Affordable Housing' && (propdetails.income_limit_one_person == '' || propdetails.income_limit_one_person == null)
                //                 ?
                //                 null
                //                 :
                //                 <>
                //                     {
                //                         subsidized == 'Yes' || subsidized == 1 ?
                //                             (
                propdetails == undefined ?
                    null :
                    (propdetails.income_limit_one_person == 0 || propdetails.income_limit_one_person == ''
                        ?
                        null
                        :
                        <Accordion defaultActiveKey="0" className="accordionBoxInfo losAngeles">
                            <Accordion.Item eventKey="0" className="card">
                                <Accordion.Header>
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                                data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Income limits
                                            </button>
                                            <span className="ml-auto" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <img src={require('../../assets/img/upArrow.png').default} />
                                            </span>
                                        </h5>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordion">
                                        <div className="card-body">
                                            <p className="colorBlue">Your income must be below these income
                                                levels for this property</p>
                                            <div className="row">
                                                {
                                                    propdetails.income_limit_one_person == 0 && propdetails.income_limit_three_person == 0 ?
                                                        null :
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            {
                                                                <ul className="noMarginPad listStyleNone">
                                                                    {
                                                                        propdetails.income_limit_one_person == 0 || propdetails.income_limit_one_person == '' ? null :
                                                                            <li className="d-flex align-items-center fontSize14">
                                                                                1 person<span
                                                                                    className="ml-auto colorBlue font-weight700">$
                                                                                    {propdetails.income_limit_one_person}
                                                                                </span>
                                                                            </li>
                                                                    }
                                                                    {
                                                                        propdetails.income_limit_three_person == 0 || propdetails.income_limit_three_person == '' ? null :
                                                                            <li className="d-flex align-items-center fontSize14">
                                                                                3 persons<span
                                                                                    className="ml-auto colorBlue font-weight700">$
                                                                                    {propdetails.income_limit_three_person}
                                                                                </span>
                                                                            </li>
                                                                    }
                                                                    {
                                                                        propdetails.income_limit_five_person == 0 || propdetails.income_limit_five_person == '' ? null :
                                                                            <li className="d-flex align-items-center fontSize14">
                                                                                5 persons<span
                                                                                    className="ml-auto colorBlue font-weight700">$
                                                                                    {propdetails.income_limit_five_person}
                                                                                </span>
                                                                            </li>
                                                                    }
                                                                    {
                                                                        propdetails.income_limit_seven_person == 0 || propdetails.income_limit_seven_person == '' ? null :
                                                                            <li className="d-flex align-items-center fontSize14">
                                                                                7 persons<span
                                                                                    className="ml-auto colorBlue font-weight700">$
                                                                                    {propdetails.income_limit_seven_person}
                                                                                </span>
                                                                            </li>
                                                                    }
                                                                </ul>
                                                            }
                                                        </div>
                                                }

                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <ul className="noMarginPad listStyleNone">
                                                        {
                                                            propdetails.income_limit_two_person == 0 || propdetails.income_limit_two_person == '' ? null :
                                                                <li className="d-flex align-items-center fontSize14">
                                                                    2 persons<span
                                                                        className="ml-auto colorBlue font-weight700">$
                                                                        {propdetails.income_limit_two_person}
                                                                    </span>
                                                                </li>
                                                        }
                                                        {
                                                            propdetails.income_limit_four_person == 0 || propdetails.income_limit_four_person == '' ? null :
                                                                <li className="d-flex align-items-center fontSize14">
                                                                    4 persons<span
                                                                        className="ml-auto colorBlue font-weight700">$
                                                                        {propdetails.income_limit_four_person}
                                                                    </span>
                                                                </li>
                                                        }
                                                        {
                                                            propdetails.income_limit_six_person == 0 || propdetails.income_limit_six_person == '' ? null :
                                                                <li className="d-flex align-items-center fontSize14">
                                                                    6 persons<span
                                                                        className="ml-auto colorBlue font-weight700">$
                                                                        {propdetails.income_limit_six_person}
                                                                    </span>
                                                                </li>
                                                        }
                                                        {
                                                            propdetails.income_limit_eight_person == 0 || propdetails.income_limit_eight_person == '' ? null :
                                                                <li className="d-flex align-items-center fontSize14">
                                                                    8 persons<span
                                                                        className="ml-auto colorBlue font-weight700">$
                                                                        {propdetails.income_limit_eight_person}
                                                                    </span>
                                                                </li>
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="fontSize14 secondaryColor mb-0 mt-4">Please contact this property
                                                to verify income requirements</p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
            }

        </>




    )
}
