import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { addDash } from '../../containers/functions';

export const HousingAuthAgencyList = ({ data }) => {


    console.log(data, "QQQ");

    const [date, setdate] = useState();
    const [time, settime] = useState();

    useEffect(() => {
        if (data == undefined || data == null) {

        } else {
            if (data.details[0].is_section_8_wating_list == 1) {
                setdate(data.close_date);
                settime(data.close_time);
            } else if (data.details[0].is_wating_closed == 0) {
                setdate(data.open_date);
                settime(data.open_time);
            }
        }
    }, [])


    // if (data == undefined || data == null) {

    // } else {
    //     if (data.details[0].is_section_8_wating_list == 1) {
    //         setdate(data.close_date);
    //         settime(data.close_time);
    //     } else if (data.details[0].is_wating_closed == 0) {
    //         setdate(data.open_date);
    //         settime(data.open_time);
    //     }
    // }

    let date1;
    var curr_date;
    var curr_month;
    var curr_year;
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (date == undefined || date == null) {

    } else {
        date1 = new Date(date);
        // curr_date = date1.getDate();
        // curr_month = date1.getMonth();
        // curr_year = date1.getFullYear();
        // {date1.toLocaleDateString("en-US", options)}
    }
    // console.log(date1.toLocaleDateString("en-US", options));

    return (
        <>
            <div className="d-flex align-items-center">

                <a href={`/housing-authority-waiting-lists/${addDash(data.details[0].name).toLowerCase()}/${addDash(data.details[0].city + " " + data.details[0].state)}/${data.ha_id.toLowerCase()}`}>
                    <div className="leftagencyBlock text-center brdrRightNone leftagencyBlock2">
                        <div className="logoBlock2">
                            {
                                data.HAPhotoDetail == [] || data.HAPhotoDetail == null || data.HAPhotoDetail == '' || data.HAPhotoDetail.length == 0 ?
                                    <img src={'https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} />
                                    :
                                    <img src={`https://managers.rentalhousingdeals.com/${data.HAPhotoDetail[0].path}/${data.HAPhotoDetail[0].filename}`} />
                            }
                        </div>
                    </div>
                </a>
                <div className="rightagencyBlock w-100 rightagencyBlock2">
                    <a href={`/housing-authority-waiting-lists/${addDash(data.details[0].name).toLowerCase()}/${addDash(data.details[0].city + " " + data.details[0].state)}/${data.ha_id.toLowerCase()}`}>


                        <div className="d-flex align-items-top topStatusBlock w-100">
                            <span className="itemMobile logoImageBox">
                                {
                                    data.HAPhotoDetail == [] || data.HAPhotoDetail == null || data.HAPhotoDetail == '' || data.HAPhotoDetail.length == 0 ?
                                        <img src={'https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg'} />
                                        :
                                        <img src={`https://managers.rentalhousingdeals.com/${data.HAPhotoDetail[0].path}/${data.HAPhotoDetail[0].filename}`} />
                                }
                                {/* <img src={require('../../assets/img/agencyLanding1.png').default} /> */}
                            </span>
                            <div>
                                <a href={`/housing-authority-waiting-lists/${addDash(data.details[0].name).toLowerCase()}/${addDash(data.details[0].city + " " + data.details[0].state)}/${data.ha_id.toLowerCase()}`}>
                                    <h4 className="mb-0 colorBlue font-weight700 fontSize16">
                                        {data.details[0].name}</h4>
                                </a>

                                <p className="mb-0 para fontSize14">{data.details[0].city}, {data.details[0].state} - {data.details[0].county} County</p>


                                {
                                    data.details[0].is_section_8_wating_list == 0 ?
                                        <span className="statusTag fontSize14 font-weight500 closed mobileaa">
                                            Closed
                                        </span>
                                        :
                                        <span className="statusTag fontSize14 font-weight500 open mobileaa">
                                            Open
                                        </span>
                                }

                                {/* <span
                                    className="statusTag fontSize14 font-weight500 openingSoon mobileaa">
                                    Openinsdfg Soon
                                </span> */}
                                <p className="mb-0 para fontSize14 itemMobile dateBlockMobile">
                                    <span className="colorBlue">
                                        <b>
                                            {
                                                date !== '0000-00-00' && data.open_date !== '' ?
                                                    (date1 == undefined || date1 == null ? null : `${date1.toLocaleDateString("en-US", options)}`)
                                                    :
                                                    'N/A'
                                            }
                                        </b>
                                    </span>

                                    {
                                        time !== '0000-00-00' && data.open_time !== '' ?
                                            time :
                                            'N/A'
                                    }
                                </p>
                                <div className="bottomInfo d-flex align-items-center itemMobile">
                                    <a
                                        className="availbity moreInfoBtn fontSize16 font-weight700 lefta" href={`/housing-authority-waiting-lists/${addDash(data.details[0].name).toLowerCase()}/${addDash(data.details[0].city + " " + data.details[0].state)}/${data.ha_id.toLowerCase()}`}>


                                        More Info
                                    </a>
                                </div>
                            </div>
                        </div>




                        <div className="itemWebsite">
                            <div className="d-flex align-items-end">
                                {/* <span className="statusTag fontSize14 font-weight500 openingSoon">
                                    Opening Soon
                                </span> */}

                                {
                                    data.details[0].is_section_8_wating_list == 0 ?
                                        <span className="statusTag fontSize14 font-weight500 closed">
                                            Closed
                                        </span>
                                        :
                                        <span className="statusTag fontSize14 font-weight500 open">
                                            Open
                                        </span>
                                }



                                {/* <span className="statusTag fontSize14 font-weight500 open">
                                    Open
                                </span> */}
                                <p className="mb-0 fontSize16 font-weight400 colorBlue dateTime">
                                    {/* October 1st 2021 */}
                                    {
                                        date !== '0000-00-00' && data.open_date !== '' ?
                                            (date1 == undefined || date1 == null ? null : `${date1.toLocaleDateString("en-US", options)}`)
                                            :
                                            'N/A'
                                    },  {
                                        time !== '0000-00-00' && data.open_time !== '' ?
                                            time :
                                            'N/A'
                                    }
                                    {/* , 8:00 PM */}
                                </p>
                                <a className="moreInfoBtn brdrRadius4 transition font-weight700 fontSize16 ml-auto" href={`/housing-authority-waiting-lists/${addDash(data.details[0].name).toLowerCase()}/${addDash(data.details[0].city + " " + data.details[0].state)}/${data.ha_id.toLowerCase()}`}>
                                    <span >More Info</span>
                                </a>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
