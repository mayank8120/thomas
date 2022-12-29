import React from 'react'
import { Link } from 'react-router-dom'
import { addDash } from '../../containers/functions'

export const ManagementCompanyItem = ({ props }) => {



    // console.log(props);
    // const props = 
    //     {
    //         "property_title": "Paradise Valley Retirement Center",
    //         "property_address": "11640 N. 27th Street",
    //         "property_city": "Phoenix",
    //         "property_county": "Maricopa",
    //         "property_state": "AZ",
    //         "property_zip": "85028",
    //         "min_bed": "1",
    //         "max_bed": "1",
    //         "min_bath": "",
    //         "max_bath": ""
    //     }
    // console.log(props);

    // "id_property": 36975,
    // "property_title": "Turnagain Place Apartments",
    // "property_address": "2451 W. 27th Ave.",
    // "property_city": "Anchorage",
    // "property_state": "AK",
    // "property_type": "premium",
    // "property_zip": "99517",
    // "header_description": "4",
    // "header_value": "a:3:{i:0;s:1:\"1\";i:1;s:0:\"\";i:2;s:3:\"748\";}",
    // "photo": "uploaded/prop_1533150955_TAPA1.jpg",
    // "distance": 5.284770122800503
    return (
        <div className="media">

            {props.photo !== null
                ?
                <a href={`/apartments-for-rent/${addDash(props.property_title.toLowerCase())}-${addDash(props.property_city.toLowerCase())}-${addDash(props.property_state.toLowerCase())}-${props.property_zip}/${props.id_property}`}>
                    <img className="brdrRadius4 wh64px" src={`https://managers.rentalhousingdeals.com/${props.photo}`} alt="Generic placeholder image" />
                </a>
                :
                <a href={`/apartments-for-rent/${addDash(props.property_title.toLowerCase())}-${addDash(props.property_city.toLowerCase())}-${addDash(props.property_state.toLowerCase())}-${props.property_zip}/${props.id_property}`}>
                    <img className="brdrRadius4 wh64px" src='https://managers.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg' alt="" />
                </a>
            }

            {/* <img className="brdrRadius4 wh64px"
                src={`https://www.rentalhousingdeals.com/${props.photo}`}
                // src={require('../../assets/img/management1.png').default}
                alt="Generic placeholder image" /> */}
            <div className="media-body">
                <a href={`/apartments-for-rent/${addDash(props.property_title.toLowerCase())}-${addDash(props.property_city.toLowerCase())}-${addDash(props.property_state.toLowerCase())}-${props.property_zip}/${props.id_property}`}><h5 className="mt-0 fontSize16 font-weight500 mb-0">
                    {props.property_title}</h5></a>

                <p className="mt-0 mb-0 fontSize12 secondaryColor">
                    {props.property_address} {props.property_city}, {props.property_state} {props.property_zip}</p>
                <ul
                    className="noMarginPad listStyleNone floatLeftList d-flex align-items-center management-companyt">
                    {
                        props.min_bed == '' && props.max_bed == '' ?
                            null
                            :
                            (
                                props.min_bed == '' || props.max_bed == '' ?
                                    <li className="secondaryColor">
                                        <span className="colorBlue">{props.max_bed}{props.min_bed}</span> Bd
                                    </li>
                                    :
                                    <li className="secondaryColor">
                                        <span className="colorBlue">{props.min_bed}-{props.max_bed}</span> Bd
                                    </li>
                            )


                    }
                    {
                        props.min_bath == '' && props.max_bath == '' ?
                            // null
                            <li className="secondaryColor ml-3">
                                <span className="colorBlue">1-5</span> Ba
                            </li>
                            :
                            (
                                props.min_bath == '' ?
                                    <li className="secondaryColor ml-3">
                                        <span className="colorBlue">{props.max_bath}</span> Ba
                                    </li>
                                    :
                                    <li className="secondaryColor ml-3">
                                        <span className="colorBlue">{props.min_bath}-{props.max_bath}</span> Ba
                                    </li>
                            )
                    }

                    {/* <li className="secondaryColor ml-16">
                        <span className="colorBlue">{props.min_bath}-{props.max_bath}</span> Ba
                    </li> */}
                    <li
                        className="ml-auto priceTagg font-weight700 fontSize16">
                        {
                            props.props_amount == 0 || props.props_amount == null || props.props_amount == '' || props.props_amount == undefined ?
                                'CALL'
                                :
                                props.props_amount
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
