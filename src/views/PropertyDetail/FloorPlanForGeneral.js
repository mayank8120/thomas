import React from 'react'
import FloorPlanGeneralItem from './FloorPlanGeneralItem'

const FloorPlanForGeneral = ({ propfloor, toggleModalAvailability, titletext }) => {
    return (
        <>
            <div className="SectionBlock responsive15">
                <h3 className="font-weight700 colorBlue">{titletext !== undefined && titletext !== null ? titletext : 'Floorplans'}</h3>
                <ul className="noMarginPad listStyleNone floorplanList">
                    {/* <li className="d-flex align-items-center justify-content-between floorPlanListing">
                        <div className="imageLeft floorplanHead d-flex align-items-center">
                            <img src={require('../../assets/img/floorplan2.png').default} />
                            <div className="headingList">
                                <h4 className="font-weight500 colorBlue mb-0">Studio</h4>
                                <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                    <li className="secondaryColor">
                                        <span className="colorBlue">1</span> Bd
                                    </li>
                                    <li className="secondaryColor ml-16">
                                        <span className="colorBlue">1</span> Ba
                                    </li>
                                    <li className="secondaryColor ml-24">
                                        <span className="colorBlue">880</span> Sq.ft
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="itemWebsite w-100">
                            <div className="d-flex justify-content-center flex1">
                                <ul className="noMarginPad listStyleNone floatLeftList">
                                    <li className="secondaryColor">
                                        <span className="colorBlue">N/A</span> Bedroom
                                    </li>
                                    <li className="secondaryColor ml-35">
                                        <span className="colorBlue">N/A</span> Bathroom
                                    </li>
                                    <li className="secondaryColor ml-40">
                                        <span className="colorBlue">N/A</span> Sq.ft
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ml-auto formHead itemWebsite">
                            <a href="" className="checkAvailBlockBtn fontSize16 font-weight700">Check
                                Availability</a>
                        </div>
                    </li> */}
                    {/* <li className="d-flex align-items-center justify-content-between floorPlanListing">
                        <div className="imageLeft floorplanHead d-flex align-items-center">
                            <img src={require('../../assets/img/floorplan2.png').default} />
                            <div className="headingList">
                                <h4 className="font-weight500 colorBlue mb-0">One Beds</h4>
                                <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                    <li className="secondaryColor">
                                        <span className="colorBlue">1</span> Bd
                                    </li>
                                    <li className="secondaryColor ml-16">
                                        <span className="colorBlue">1</span> Ba
                                    </li>
                                    <li className="secondaryColor ml-24">
                                        <span className="colorBlue">880</span> Sq.ft
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="itemWebsite w-100">
                            <div className="d-flex justify-content-center flex1">
                                <ul className="noMarginPad listStyleNone floatLeftList">
                                    <li className="secondaryColor">
                                        <span className="colorBlue">1</span> Bedroom
                                    </li>
                                    <li className="secondaryColor ml-35">
                                        <span className="colorBlue">N/A</span> Bathroom
                                    </li>
                                    <li className="secondaryColor ml-40">
                                        <span className="colorBlue">N/A</span> Sq.ft
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ml-auto formHead itemWebsite">
                            <a href="" className="checkAvailBlockBtn fontSize16 font-weight700">Check
                                Availability</a>
                        </div>
                    </li> */}

                    {propfloor.map((data) => {
                        return (

                            data.square_feet_to !== undefined && data.square_feet_from !== undefined ?
                                // <FloorPlan data={data} /> 
                                <FloorPlanGeneralItem data={data} toggleModalAvailability={toggleModalAvailability} />
                                :
                                null
                        );
                    })}


                    {/* <FloorPlanGeneralItem /> */}
                </ul>
            </div>



            <div className="itemMobile">
                <div className="d-flex align-items-center availSec checkFloorPlan responsive15 flex-wrap">
                    <div className="ml-auto Resnoauto">
                        <a href="" className="brdrRadius4 transition">Check Availability </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloorPlanForGeneral
