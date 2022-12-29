import React from 'react'
import { Accordion } from 'react-bootstrap'

export const CityCountyQuickFacts = ({ propincome }) => {
    // console.log(propincome);
    return (
        <>
            {
                propincome == null || propincome.length == 0
                    ?
                    null
                    // <Accordion defaultActiveKey="0" className="accordionBoxInfo">
                    //     <Accordion.Item eventKey="0" >
                    //         <Accordion.Header>
                    //             <div className="card-header" id="headingFour">
                    //                 <h5 className="mb-0 d-flex align-items-center">
                    //                     <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                    //                         data-target="#collapseFour" aria-expanded="true"
                    //                         aria-controls="collapseFour">
                    //                         Los Angeles County Quick Facts
                    //                     </button>
                    //                     <span className="ml-auto" data-toggle="collapse" data-target="#collapseFour"
                    //                         aria-expanded="true" aria-controls="collapseFour">
                    //                         <img src={require('../../assets/img/upArrow.png').default} />
                    //                     </span>
                    //                 </h5>
                    //             </div>
                    //         </Accordion.Header>
                    //         <Accordion.Body>
                    //             <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                    //                 data-parent="#accordion4">
                    //                 <div className="card-body">
                    //                     <ul className="noMarginPad listStyleNone">
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Population<span className="ml-auto colorBlue">10,116,705</span></p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Persons per household<span className="ml-auto colorBlue">3.01</span>
                    //                             </p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Housing units in multi-units<br />structure<span
                    //                                     className="ml-auto colorBlue">42.2%</span></p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Homeownership Rate<span className="ml-auto colorBlue">46.9%</span>
                    //                             </p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Housing Units<span className="ml-auto colorBlue">3,462,202</span>
                    //                             </p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Yearly Income per Person<span
                    //                                     className="ml-auto colorBlue">$27,749</span></p>
                    //                         </li>
                    //                         <li>
                    //                             <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                    //                                 Median Household Income<span
                    //                                     className="ml-auto colorBlue">$55,909</span></p>
                    //                         </li>
                    //                     </ul>
                    //                 </div>
                    //             </div>
                    //         </Accordion.Body>
                    //     </Accordion.Item>
                    // </Accordion >
                    :
                    <Accordion defaultActiveKey="0" className="accordionBoxInfo">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>
                                <div className="card-header" id="headingFour">
                                    <h5 className="mb-0 d-flex align-items-center">
                                        <button className="btn btn-link font-weight700 colorBlue" data-toggle="collapse"
                                            data-target="#collapseFour" aria-expanded="true"
                                            aria-controls="collapseFour">
                                            {propincome[0].city_name} County Quick Facts
                                        </button>
                                        <span className="ml-auto" data-toggle="collapse" data-target="#collapseFour"
                                            aria-expanded="true" aria-controls="collapseFour">
                                            <img src={require('../../assets/img/upArrow.png').default} />
                                        </span>
                                    </h5>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='acc0margin'>
                                <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                                    data-parent="#accordion4">
                                    <div className="card-body">

                                        <ul className="noMarginPad listTxt listStyleNone">
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Population
                                                    </p>
                                                    <span className="colorBlue">{propincome[0].city_population}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Persons per household
                                                    </p>
                                                    <span className="colorBlue">{propincome[0].persons_per_household}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Persons per household structure
                                                    </p>
                                                    <span
                                                        className="colorBlue">{propincome[0].city_hu_multi_unit_structures / 10}%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Homeownership Rate
                                                    </p>
                                                    <span className="colorBlue">{propincome[0].city_homeownership_rate}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Housing Units
                                                    </p>
                                                    <span className="colorBlue">{propincome[0].city_housing_unit}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Yearly Income per Person
                                                    </p>
                                                    <span
                                                        className="colorBlue">{propincome[0].per_capita_money_income}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <p className="secondaryColor fontSize16">
                                                        Median Household Income
                                                    </p>
                                                    <span
                                                        className="colorBlue">{propincome[0].median_household_income}</span>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* <ul className="noMarginPad listTxt listStyleNone">
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Population<span className="ml-auto colorBlue">{propincome[0].city_population}</span></p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Persons per household<span className="ml-auto colorBlue">{propincome[0].persons_per_household}</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Housing units in multi-units<br />structure<span
                                                        className="ml-auto colorBlue">{propincome[0].city_hu_multi_unit_structures / 10}%</span></p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Homeownership Rate<span className="ml-auto colorBlue">{propincome[0].city_homeownership_rate}</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Housing Units<span className="ml-auto colorBlue">{propincome[0].city_housing_unit}</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Yearly Income per Person<span
                                                        className="ml-auto colorBlue">{propincome[0].per_capita_money_income}</span></p>
                                            </li>
                                            <li>
                                                <p className="mb-0 d-flex align-items-center secondaryColor fontSize16">
                                                    Median Household Income<span
                                                        className="ml-auto colorBlue">{propincome[0].median_household_income}</span></p>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion >
            }


        </>



    )
}
