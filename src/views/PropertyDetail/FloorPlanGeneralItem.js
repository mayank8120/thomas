import React, { useState } from 'react'
import Modal from "react-modal";

import { commaInNumber, decimalRoundOff } from '../../containers/functions';


const FloorPlanGeneralItem = ({ data, toggleModalAvailability }) => {

    const [isOpenFloor, setIsOpenFloor] = useState(false);
    function toggleModalFloor() {
        setIsOpenFloor(!isOpenFloor);
    }

    return (
        <>
            {data == undefined || data == null || data == [] || data == '' ? null :
                <li className="d-flex align-items-center justify-content-between floorPlanListing">
                    <div className="imageLeft floorplanHead d-flex align-items-center">


                        {
                            data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                <>

                                    <div className="">
                                        <img src={require('../../assets/img/floorplanGrey.svg').default} className="twentyfourbytwentyfour" />
                                    </div>

                                </>
                                :
                                <>
                                    <div className="" onClick={() => {
                                        toggleModalFloor();
                                    }
                                    } >
                                        <img src={require('../../assets/img/floorplan.svg').default} />
                                        {/* <span className="ml-3 purpleText fontSize14 font-weight500">Floor plan</span> */}
                                    </div>

                                    <Modal isOpen={isOpenFloor}
                                        onRequestClose={toggleModalFloor} className="propertdetailmodal">
                                        <div className="modal-header d-flex align-items-center">


                                            <button type="button" className="close" onClick={toggleModalFloor} aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body rentalForm availBodyBlock">
                                            {
                                                data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                                    <></>
                                                    :
                                                    <img className=' w-100' src={`https://managers.rentalhousingdeals.com/${data.floor_plan_photo}`} alt='alt' />
                                            }

                                        </div>

                                    </Modal>
                                </>
                        }

                        {/* <img src={require('../../assets/img/floorplan2.png').default} /> */}


                        <div className="headingList">
                            <h4 className="font-weight500 colorBlue mb-0">{data.floor_plan_name}</h4>
                            <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                <li className="secondaryColor">

                                    {
                                        data.beds == 0 || data.beds == '' ?
                                            (<span className="colorBlue">N/A Bd</span>)
                                            :

                                            <>
                                                <span className="colorBlue font-weight500">{data.beds}</span> <span className='colorblack font-weight400'> {data.beds == 'Studio' ? null : 'Bd'}</span>
                                            </>
                                    }
                                    {/* <span className="colorBlue">{data.beds}</span> {data.beds == 'Studio' ? null : 'Bd'} */}


                                </li>
                                <li className="secondaryColor ml-16">
                                    {
                                        data.baths == 0 || data.baths == '' ?
                                            (<span className="colorBlue font-weight500">N/A Ba</span>)
                                            :
                                            <span className="colorBlue font-weight500">{decimalRoundOff(data.baths)}   <span className='colorblack font-weight400'> Ba</span></span>
                                    }
                                    {/* <span className="colorBlue">{data.baths}</span> Ba */}

                                </li>
                                <li className="secondaryColor ml-24">
                                    {/* {data.square_feet_to !== '' || data.square_feet_to !== undefined || data.square_feet_to !== null ?
                                        data.square_feet_to :
                                        'N/A'
                                    } */}

                                    {
                                        data.square_feet_to == 0 ?
                                            (<span className="colorBlue font-weight500">N/A Sq.ft</span>)
                                            :
                                            <><span className="colorBlue font-weight500">{commaInNumber(data.square_feet_to)}</span><span className='colorblack font-weight400'> Sq.ft</span>  </>
                                    }


                                    {/* {
                                        data.square_feet_to == undefined || data.square_feet_from == undefined ?
                                            null
                                            :

                                            (data.square_feet_to == data.square_feet_from ?
                                                <>
                                                    <span className="colorBlue">{data.square_feet_from}</span> Sq.ft
                                                </>
                                                :
                                                (data.square_feet_from == 0 || data.square_feet_from == null) && (data.square_feet_to == 0 || square_feet_to == null) ?
                                                    <span className="colorBlue">N/A</span>
                                                    :
                                                    data.square_feet_from == 0 || data.square_feet_from == null ?
                                                        <>
                                                            <span className="colorBlue">{data.square_feet_to}</span> Sq.ft
                                                        </>
                                                        :
                                                        <>
                                                            <span className="colorBlue">{data.square_feet_from}</span> Sq.ft
                                                        </>
                                            )
                                    } */}

                                    {/* <span className="colorBlue">880</span> Sq.ft */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemWebsite w-100">
                        <div className="d-flex justify-content-center flex1">
                            <ul className="noMarginPad listStyleNone floatLeftList">
                                <li className="secondaryColor">


                                    {
                                        data.beds == 0 || data.beds == '' ?
                                            (<span className="colorBlue">N/A Bd</span>)
                                            :

                                            <>
                                                <span className="colorBlue font-weight500">{data.beds}</span> <span className='colorblack font-weight400'> {data.beds == 'Studio' ? null : 'Bd'}</span>
                                            </>
                                    }


                                    {/* <span className="colorBlue">{data.beds}</span> {data.beds == 'Studio' ? null : 'Bedroom'} */}
                                </li>
                                <li className="secondaryColor ml-35">


                                    {
                                        data.baths == 0 || data.baths == '' ?
                                            (<span className="colorBlue font-weight500">N/A Ba</span>)
                                            :
                                            <span className="colorBlue font-weight500">{decimalRoundOff(data.baths)}   <span className='colorblack font-weight400'> Ba</span></span>
                                    }
                                    {/* <span className="colorBlue">{data.baths}</span> Bathroom */}



                                </li>
                                <li className="secondaryColor ml-40">
                                    {
                                        data.square_feet_to == 0 ?
                                            (<span className="colorBlue font-weight500">N/A Sq.ft</span>)
                                            :

                                            <><span className="colorBlue font-weight500">{commaInNumber(data.square_feet_to)}</span><span className='colorblack font-weight400'> Sq.ft</span>  </>
                                    }
                                    {/* <span className="colorBlue">{data.square_feet_to}</span> Sq.ft */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ml-auto formHead itemWebsite">
                        <span className="checkAvailBlockBtn fontSize16 font-weight700" onClick={toggleModalAvailability}>Check
                            Availability</span>
                    </div>
                </li>
            }
        </>
    )
}

export default FloorPlanGeneralItem
