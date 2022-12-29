import React from 'react'
import { Link } from 'react-router-dom'
import { addDash } from '../../containers/functions'

const HousingAuthorityforGeneral = ({ prophousingAuthority }) => {

    // console.log(prophousingAuthority,"WEW");
    return (
        <>
            <div className="table-responsive responsive15 itemWebsite">
                <table className="table agencyDetailtable HousingAutho">
                    <thead>
                        <tr>
                            <th width="42%" scope="col">Agency</th>
                            <th scope="col">Section 8<br /> Vouchers</th>
                            <th scope="col">Housing<br /> Units</th>
                            <th scope="col">Status</th>
                            <th width="15%" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {prophousingAuthority.map(
                            (data) => (
                                <tr>
                                    <th scope="row">
                                        <div className="media minWidth200">

                                            {
                                                data.image == [] || data.image == null || data.image == '' || data.image == undefined ?

                                                    <img className="mr-3 imageresize" src='https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg' alt="" />
                                                    :
                                                    <>
                                                        <img className="mr-3 imageresize" src={`https://managers.rentalhousingdeals.com/${data.image[0].path}/${data.image[0].filename}`} alt="" />
                                                    </>
                                            }
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                    <a href={`/housing-authority-waiting-lists/${addDash(data.name).toLowerCase()}/${addDash(data.city + " " + data.state + " " + data.zip)}/${data.ha_id.toLowerCase()}`} className="colorBlue"> {data.name} </a>
                                                </h5>
                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor mt-2">
                                                    {data.city}, {data.state} - {data.distance} {data.distance !== '' ? 'Miles' : null}</p>

                                            </div>

                                        </div>
                                    </th>
                                    <td>
                                        <div className="minWidth150 font-weight500">
                                            {
                                                data.section_units == [] || data.section_units == null || data.section_units == '' ?
                                                    'N/A'
                                                    :
                                                    (data.section_units[0].section_units == null || data.section_units[0].section_units == "" || data.section_units[0].section_units == 0 ?
                                                        'N/A'
                                                        :
                                                        data.section_units[0].section_units)
                                            }
                                        </div>

                                    </td>
                                    <td>
                                        <div className="minWidth150 font-weight500">
                                            {
                                                data.section_units == [] || data.section_units == null || data.section_units == '' ?
                                                    'N/A'
                                                    :
                                                    (data.section_units[0].total_units == null || data.section_units[0].total_units == "" || data.section_units[0].total_units == 0 ?
                                                        'N/A'
                                                        :
                                                        data.section_units[0].total_units)
                                            }
                                        </div>
                                    </td>
                                    <td >
                                        <div className="minWidth150">
                                            {
                                                data.is_wating_closed == 0 ?
                                                    <span className="statusTag fontSize14 font-weight500 open">
                                                        Open
                                                    </span>
                                                    :
                                                    <span className="statusTag fontSize14 font-weight500 closed">
                                                        Closed
                                                    </span>
                                            }
                                        </div>
                                    </td>
                                    <td className='contactBtn'>
                                        <a href={`/housing-authority-waiting-lists/${addDash(data.name).toLowerCase()}/${addDash(data.city + " " + data.state + " " + data.zip)}/${data.ha_id.toLowerCase()}`} className="closeBttn" >Contact</a>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>



            {/* mobile responsive  */}
            <div className="itemMobile responsive15 responsive15-0">
                <ul className="noMarginPad listStyleNone agendtailList">


                    {prophousingAuthority.map(
                        (data) => (
                            <>
                                <li>
                                    <div className="media">


                                        {
                                            data.image == [] || data.image == null || data.image == '' || data.image == undefined ?

                                                <img className="mr-3 imageresize" src='https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg' alt="" />
                                                :
                                                <>
                                                    <img className="mr-3 imageresize" src={`https://managers.rentalhousingdeals.com/${data.image[0].path}/${data.image[0].filename}`} alt="" />
                                                </>
                                        }

                                        {/* <img className="mr-3" src={require('../../assets/img/author1.png').default} alt="" /> */}

                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">

                                                    <a href={`/housing-authority-waiting-lists/${addDash(data.name).toLowerCase()}/${addDash(data.city + " " + data.state + " " + data.zip)}/${data.ha_id.toLowerCase()}`} className="colorBlue"> {data.name} </a>

                                                </h5>
                                                <div className="ml-auto">

                                                    {
                                                        data.is_wating_closed == 0 ?
                                                            <span className="statusTag fontSize14 font-weight500 open">
                                                                Open
                                                            </span>
                                                            :
                                                            <span className="statusTag fontSize14 font-weight500 closed">
                                                                Closed
                                                            </span>
                                                    }


                                                    {/* <span className="statusTag fontSize14 font-weight500 closed">
                                                        Closed
                                                    </span> */}
                                                </div>
                                            </div>
                                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">{data.city}, {data.state}
                                            </p>
                                            <div className="d-flex align-items-center w-100 listTop12">
                                                <div className="w-50">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                {
                                                                    data.section_units == [] || data.section_units == null || data.section_units == '' ?
                                                                        'N/A'
                                                                        :
                                                                        (data.section_units[0].section_units == null || data.section_units[0].section_units == "" || data.section_units[0].section_units == 0 ?
                                                                            'N/A'
                                                                            :
                                                                            data.section_units[0].section_units)
                                                                }
                                                            </h5>
                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                Section 8 Vouchers</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-50">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                {
                                                                    data.section_units == [] || data.section_units == null || data.section_units == '' ?
                                                                        'N/A'
                                                                        :
                                                                        (data.section_units[0].total_units == null || data.section_units[0].total_units == "" || data.section_units[0].total_units == 0 ?
                                                                            'N/A'
                                                                            :
                                                                            data.section_units[0].total_units)
                                                                }
                                                            </h5>
                                                            <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                Housing Units</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="brdrLinee"></li>
                            </>

                        ))
                    }

                </ul>
            </div>
        </>
    )
}

export default HousingAuthorityforGeneral
