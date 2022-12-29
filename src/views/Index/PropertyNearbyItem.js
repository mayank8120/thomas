import React, { useState, useEffect } from 'react'
import { addDash, addOrRemoveProp, getAllProp, removeDollarWaitlist, toggleHeart } from '../../containers/functions';

import { Link } from 'react-router-dom';




const PropertyNearbyItem = ({ data }) => {


    const [colorCHangeheart, setcolorCHangeheart] = useState();

    function colorChange(item) {
        if (toggleHeart(item) == true) {
            setcolorCHangeheart(true);
        } else {
            setcolorCHangeheart(false);
        }
    }



    useEffect(() => {
        colorChange(data.id_property);
    }, [])







    // let arr = JSON.parse(localStorage.getItem('savePropList'));

    // useEffect(() => {

    // }, [arr, data])



    return (
        <>

            <div className="sliderItem brdr-4px">
                {
                    data.photo == null || data.photo == '' || data.photo == undefined ?
                        <img src={require('../../assets/img/equalhousinglogo.jpg').default} />
                        :
                        <img src={`https://managers.rentalhousingdeals.com/${data.photo}`} />
                }
                <span className="likeTag transition"
                    onClick={
                        () => {
                            addOrRemoveProp(data.id_property, new Date());
                            getAllProp();
                            colorChange(data.id_property);
                        }
                    }
                >
                    {
                        colorCHangeheart == true ?
                            <>
                                <i className="fas fa-heart redcolor"></i>
                            </>
                            :
                            <>
                                <i className="far fa-heart lightbluemodified"></i>
                            </>
                    }
                </span>
                {
                    data.prog_type == "affordablehousing" ? <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div> : null
                }
                <div className="sliderTextArea">
                    <div className="d-flex align-items-top">
                        <div>
                            <a className="black-color" href={`/apartments-for-rent/${addDash(data.property_title.toLowerCase())}-${addDash(data.property_city.toLowerCase())}-${addDash(data.property_state.toLowerCase())}-${data.property_zip}/${data.id_property}`}><h4 className="font-weight700 mb-0">{data.property_title}</h4></a>

                            <p className="mb-0">{data.property_address} {data.property_city}, {data.property_state} {data.property_zip}</p>
                        </div>

                    </div>
                    <div className="sliderListing">
                        <ul className="clearfix d-flex align-items-center">
                            <li><b>
                                {
                                    data.details == null || data.details == '' || data.details == undefined ?
                                        'N/A'
                                        :
                                        (
                                            data.details.min_bed == '' || data.details.min_bed == null || data.details.min_bed == 0 ?

                                                (
                                                    data.details.max_bed == '' || data.details.max_bed == null || data.details.max_bed == 0 ?
                                                        'N/A'
                                                        :
                                                        data.details.max_bed
                                                )

                                                :

                                                data.details.min_bed
                                        )
                                }
                            </b>Bd</li>
                            <li>
                                <b>

                                    {
                                        data.details == null || data.details == '' || data.details == undefined ?
                                            'N/A'
                                            :
                                            (
                                                data.details.min_bath == '' || data.details.min_bath == null || data.details.min_bath == 0 ?

                                                    (
                                                        data.details.max_bath == '' || data.details.max_bath == null || data.details.max_bath == 0 ?
                                                            'N/A'
                                                            :
                                                            data.details.max_bath
                                                    )

                                                    :

                                                    data.details.min_bath
                                            )
                                    }

                                </b>
                                Ba</li>
                            <li><b>
                                {
                                    data.floorPlan == null || data.floorPlan == '' ?

                                        'N/A'
                                        :
                                        ((data.floorPlan.square_feet_to !== '' && data.floorPlan.square_feet_from !== '') || (data.floorPlan.square_feet_to !== 0 && data.floorPlan.square_feet_from !== 0) || (data.floorPlan.square_feet_to !== null && data.floorPlan.square_feet_from !== null)
                                            ?
                                            (data.floorPlan.square_feet_to !== '' || data.floorPlan.square_feet_to !== 0 ? data.floorPlan.square_feet_to : data.floorPlan.square_feet_from)
                                            :
                                            'N/A')
                                }

                            </b>Sq.Ft</li>

                        </ul>
                        <div className="boldTag fontSize16">

                            {removeDollarWaitlist(data.amount)}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyNearbyItem