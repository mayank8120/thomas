import React, { useState, useEffect } from 'react'
import Modal from "react-modal";
import axios from 'axios';
import { emptyDataCheck } from '../../containers/functions';

const SchoolItemDetail = ({ data }) => {



    // console.log(data);



    const [loadmore, setloadmore] = useState(false);
    const handleclick = () => {
        setloadmore(!loadmore)
    }
    // const five = schoolnearby.slice(0, 5);
    // const all = schoolnearby;


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


    const [schooldetaildata, setschooldetaildata] = useState([]);

    let schooldetailurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/schooldetail?schoolId=${data.id}`

    useEffect(() => {
        const fetchData = async () => {
            if (data.id == undefined || data.id == '' || data.id == null) {
            }
            else {
                // var axios = require('axios');

                var config = {
                    method: 'get',
                    url: schooldetailurl,
                    headers: {}
                };

                axios(config)
                    .then(function (res) {
                        setschooldetaildata(res.data.data)
                        // console.log(res.data.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        };
        fetchData();
    }, [schooldetailurl]);


    // console.log(schooldetaildata);


    return (

        <>
            <tr>
                <th scope="row">
                    <div className="media minWidth200">
                        <div className="media-body">
                            <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                {data.inst_name}
                            </h5>
                            <p className="mb-0 fontSize14 font-weight500 secondaryColor">
                                {data.phone}
                            </p>
                        </div>
                    </div>
                </th>
                <td>
                    <div className="minWidth150">
                        {data.grade_level == "" || data.grade_level == null ? "N/A" : data.grade_level}
                    </div>
                </td>

                <td>
                    <div className="minWidth150">
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
                                                                        // data.institute_info
                                                                        'N/A'

                        }
                    </div>
                </td>
                <td>
                    <div className="minWidth200">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">
                                    {data.inst_city}, {data.inst_state_code}</h5>
                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">{roundoff(data.distance)} Miles</p>
                            </div>
                        </div>
                    </div>

                </td>
                <td>
                    <div
                        className="ml-3 accordionMoreInfo accordionMoreInfo2 brdrRadius4 itemWebsite pull-right">
                        <button className="colorWhite font-weight700" onClick={toggleisopenschool}>More Info</button>
                    </div>
                </td>
            </tr>


            {
                schooldetaildata == null || schooldetaildata.length == 0 ? null
                    :
                    <Modal isOpen={isopenschool}
                        onRequestClose={toggleisopenschool} className="prerentala">
                        <div className="modal-header">
                            {/* <h5 className="modal-title w-100 text-center font-weight700"
                        id="exampleModalLabel">Pre-Rental Qualify</h5> */}
                            <div>
                                <h5 className="modal-title fontSize24 font-weight700 d-block w-100"
                                    id="exampleModalLongTitle">{emptyDataCheck(schooldetaildata.schoolData[0].inst_name)}</h5>
                                <p className="publicTag font-weight500 fontSize14 mb-0">
                                    {emptyDataCheck(schooldetaildata.schoolData[0].inst_type)}
                                </p>
                            </div>
                            <button type="button" className="close"
                                aria-label="Close" onClick={toggleisopenschool}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        {/* <div className="modal-body"> */}
                        <div className="modal-body rentalForm moreInfoBlock">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <h3 className="mb-0 font-weight700 fontSize20">Information</h3>
                                    <ul className="noMarginPad listStyleNone">
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                Address</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">
                                                {emptyDataCheck(schooldetaildata.schoolData[0].inst_mailing_address)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                District</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">
                                                {emptyDataCheck(schooldetaildata.schoolData[0].district)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                County</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">{
                                                emptyDataCheck(schooldetaildata.schoolData[0].county)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                Phone</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">
                                                {emptyDataCheck(schooldetaildata.schoolData[0].phone)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                Description</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">{emptyDataCheck(schooldetaildata.schoolData[0].description)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                Admission Office</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">{emptyDataCheck(schooldetaildata.schoolData[0].admission_office)}</h5>
                                        </li>
                                        <li>
                                            <p
                                                className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                Grade Level</p>
                                            <h5 className="fontSize16 font-weight500 colorBlue">{emptyDataCheck(schooldetaildata.schoolData[0].grade_level)}
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                    <h3 className="mb-0 font-weight700 fontSize20">Characteristics</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <ul className="noMarginPad listStyleNone">
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Certificate Offered</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">

                                                        {
                                                            schooldetaildata.offered.length == 0 ?
                                                                'N/A'
                                                                :
                                                                emptyDataCheck(schooldetaildata.offered[0].certificate_offered)
                                                        }

                                                        {/* {emptyDataCheck(schooldetaildata.offered[0].certificate_offered)} */}
                                                    </h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Degree Offered</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {
                                                            schooldetaildata.offered.length == 0 ?
                                                                'N/A'
                                                                :
                                                                emptyDataCheck(schooldetaildata.offered[0].degree_offered)
                                                        }
                                                    </h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Locale</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].locale)}</h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Type</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].inst_type)}</h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Charter</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].charter)}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <ul className="noMarginPad listStyleNone">
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Magnet</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].magnet) == 'magnet' ? 'Yes' : emptyDataCheck(schooldetaildata.schoolData[0].magnet)}</h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Total Teachers (FTE)</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].total_teacher_FTE)}</h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Total Students</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].total_student)}</h5>
                                                </li>
                                                <li>
                                                    <p
                                                        className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                        Student/Teacher Ratio</p>
                                                    <h5 className="fontSize16 font-weight500 colorBlue">
                                                        {emptyDataCheck(schooldetaildata.schoolData[0].student_teacher_ratio) == 'ratio' ? 'Yes' : emptyDataCheck(schooldetaildata.schoolData[0].student_teacher_ratio)}</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
            }




        </>
    )
}

export default SchoolItemDetail