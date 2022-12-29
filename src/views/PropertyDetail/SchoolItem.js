import React, { useState } from 'react'
import Modal from "react-modal";
import SchoolItemDetail from './SchoolItemDetail';

const SchoolItem = ({ schoolnearby }) => {





    const [loadmore, setloadmore] = useState(false);
    const handleclick = () => {
        setloadmore(!loadmore)
    }
    const five = schoolnearby.slice(0, 5);
    const all = schoolnearby;


    var value = 1.334243245, m, f, isHalf, sgn // helper variables
    // making sure precision is integer
    // precision |= 0
    m = Math.pow(10, 2)
    value *= m
    // sign of the number
    sgn = (value > 0) | -(value < 0)
    isHalf = value % 1 == 0.5 * sgn

    f = Math.floor(value)
    value = f + (f % 2 * sgn)

    let roundoff = (value) => {
        var m, f, isHalf, sgn // helper variables
        // making sure precision is integer
        // precision |= 0
        m = Math.pow(10, 2)
        value *= m
        // sign of the number
        sgn = (value > 0) | -(value < 0)
        isHalf = value % 1 == 0.5 * sgn

        f = Math.floor(value)
        value = f + (f % 2 * sgn)

        return value / m;
    }


    const [isopenschool, setisopenschool] = useState(false);
    function toggleisopenschool() {
        setisopenschool(!isopenschool);
    }


 


    return (

        <>
            {schoolnearby == null || schoolnearby == [] || schoolnearby == '' ? null :

                <>
                    <div className="responsive15 paddingBottom0 mt-2">
                        <div className="titleHeading">
                            <h3 className="fontSize18 font-weight700">Schools Nearby</h3>
                        </div>
                        <div className="itemWebsite">
                            <table className="table agencyDetailtable">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ "width": "250px" }}>Name</th>
                                        <th scope="col">Grades</th>
                                        <th scope="col">Urban Center</th>
                                        <th scope="col">City, State</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadmore == false ?
                                            (
                                                five.map((data) => (

                                                    <SchoolItemDetail data={data} />

                                                ))
                                            )

                                            :

                                            (
                                                all.map((data) => (

                                                    <SchoolItemDetail data={data} />

                                                    // <tr>
                                                    //     <th scope="row">
                                                    //         <div className="media">
                                                    //             <div className="media-body">
                                                    //                 <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                    //                     {data.inst_name}
                                                    //                 </h5>
                                                    //                 <p className="mb-0 fontSize14 font-weight500 secondaryColor">
                                                    //                     {data.phone}
                                                    //                 </p>
                                                    //             </div>
                                                    //         </div>
                                                    //     </th>
                                                    //     <td>{data.grade_level == "" || data.grade_level == null ? "N/A" : data.grade_level}</td>
                                                    //     <td>
                                                    //         {
                                                    //             data.institute_info == "" || data.institute_info == null ? "N/A" :
                                                    //                 data.institute_info == 'CityLarge11' ? 'City Large' :
                                                    //                     data.institute_info == 'TownRemote33' ? 'Town Remote' :
                                                    //                         data.institute_info == 'TownDistant32' ? 'Town Distant' :
                                                    //                             data.institute_info == 'TownFringe31' ? 'Town Fringe' :
                                                    //                                 data.institute_info == 'SuburbSmall23' ? 'Suburb Small' :
                                                    //                                     data.institute_info == 'SuburbMidsize22' ? 'Suburb Midsize' :
                                                    //                                         data.institute_info == 'SuburbLarge21' ? 'Suburb Large' :
                                                    //                                             data.institute_info == 'RuralRemote43' ? 'Rural Remote' :
                                                    //                                                 data.institute_info == 'RuralFringe41' ? 'Rural Fringe' :
                                                    //                                                     data.institute_info == 'RuralDistant42' ? 'Rural Distant' :
                                                    //                                                         // data.institute_info
                                                    //                                                         'N/A'
                                                    //         }
                                                    //     </td>
                                                    //     <td>
                                                    //         <div className="media">
                                                    //             <div className="media-body">
                                                    //                 <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                                    //                     {data.inst_city}, {data.inst_state_code}</h5>
                                                    //                 <p className="mb-0 fontSize14 font-weight500 secondaryColor">{roundoff(data.distance)} Miles</p>
                                                    //             </div>
                                                    //         </div>
                                                    //     </td>
                                                    //     <td>
                                                    //         <div
                                                    //             className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">

                                                    //             <button className="colorWhite font-weight700" onClick={toggleisopenschool}>More Info</button>
                                                    //         </div>
                                                    //     </td>
                                                    // </tr>
                                                ))
                                            )

                                    }



                                </tbody>
                            </table>

                        </div>
                        <div className="pupleLineBtn responsive15 itemWebsite">
                            <button href="" className="w-100 transition font-weight500" onClick={handleclick}>Load

                                {loadmore == false ? ' More' : ' Less'}
                            </button>
                        </div>


                    </div>





                    <div className="itemMobile responsive15 paddingTop0">
                        <ul className="noMarginPad listStyleNone agendtailList">


                            {
                                (
                                    five.map((data) => (

                                        <>
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue"> {data.inst_name}</h5>
                                                        </div>
                                                        <p className="mb-0 fontSize14 font-weight500 secondaryColor">{data.phone}</p>
                                                        <div className="d-flex align-items-center w-100 listTop12">
                                                            <div className="w-50">
                                                                <ul className="noMarginPad listStyleNone">
                                                                    <li>
                                                                        <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                            {data.grade_level == "" || data.grade_level == null ? "N/A" : data.grade_level}
                                                                        </h5>
                                                                        <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                            {
                                                                                data.institute_info == "" || data.institute_info == null ? "N/A" :
                                                                                    data.institute_info == 'CityLarge11' ? 'City Large' :
                                                                                        data.institute_info == 'TownRemote33' ? 'Town Remote' :
                                                                                            data.institute_info == 'TownDistant32' ? 'Town Distant' :
                                                                                                data.institute_info == 'TownFringe31' ? 'Town Fringe' :
                                                                                                    data.institute_info == 'SuburbSmall23' ? 'Suburb Small' :
                                                                                                        data.institute_info == 'SuburbMidsize22' ? 'Suburb Midsize' :
                                                                                                            data.institute_info == 'SuburbLarge21' ? 'Suburb Large' :
                                                                                                                data.institute_info == 'RuralRemote43' ? 'Rural Remote' :
                                                                                                                    data.institute_info == 'RuralFringe41' ? 'Rural Fringe' :
                                                                                                                        data.institute_info == 'RuralDistant42' ? 'Rural Distant' :
                                                                                                                            'N/A'

                                                                            }
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="w-50">
                                                                <ul className="noMarginPad listStyleNone">
                                                                    <li>
                                                                        <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                            {data.inst_city}, {data.inst_state_code}</h5>
                                                                        <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                            City,State</p>
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
                                )



                            }


                        </ul>
                    </div>


                    <div className="brdrLine"></div>
                </>
            }


          



        </>
    )
}

export default SchoolItem
