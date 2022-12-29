import React, { useState, useEffect } from 'react'
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm'
import Multiselect from 'multiselect-react-dropdown';
import Modal from "react-modal";
// import { PropertySearchItem } from './PropertySearchItem';
// import { Scrollbar } from "react-scrollbars-custom";
import axios from 'axios'
import MultiRangeSlider from '../../containers/multiRangeSlider';
// import { Trial } from '../Trial/Trial';
// import MultiplePointMap from './MultiplePointMap';
// import ReactPaginate from 'react-paginate';
import Loader from '../../containers/Loader';
import Footer from '../../containers/Footer';

import { components } from "react-select";

import { default as ReactSelect } from "react-select";

import makeAnimated from "react-select/animated";

// import MySelect from "./MySelect.js";
import { capitaliseFirstLetterOfWord, isItCityVISE, isObjectEmpty } from '../../containers/functions';
import { useDispatch, useSelector } from 'react-redux';
import { func, number } from 'prop-types';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { changeMapStateAction, getPropListAccordingToCityAndState, getPropListAccordingToMap } from '../../actions';
import { amenitieslist, apt_type, numberofbeds, numberofbaths } from '../../constants/arraysLists';
import MultiplePointMap from '../PropertySearch/MultiplePointMap';
// import CityWiseList from './CityWiseList';









const PropertySearchFullMap = () => {




    const surl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?';


    let propResult = useSelector((state) => state.search_result);






    const [searchresultdata, setsearchresultdata] = useState([]);



    let history = useHistory();


    const [typeofdata, settypeofdata] = useState();


    let parameters = useParams();


    const mapchange = useSelector(
        (state) => state.mapState
    );

    const dispatch = useDispatch();




    const [fourpage, setfourpage] = useState(4);



    const [head, sethead] = useState(0);
    const [tail, settail] = useState(24);





    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");
    const [featureParameter, setfeatureParameter] = useState("");



    const [areNonQuestionParametersPresent, setareNonQuestionParametersPresent] = useState(false);

    useEffect(() => {
        if ((parameters.cityname == undefined || parameters.cityname == null) &&
            (parameters.statename == undefined || parameters.statename == null)) {
            setareNonQuestionParametersPresent(false);
            // console.log(parameters.cityname, parameters.statename, "FALSE");
        } else {
            setcity(parameters.cityname);
            setstatename(parameters.statename);
            setfeatureParameter(parameters.feature ? parameters.feature : "");
            setareNonQuestionParametersPresent(true);
            // console.log(parameters.cityname, parameters.statename, "TRUE");
        }

    }, [parameters]);



    let location = useLocation();

    const [minlat, setminlat] = useState();
    const [maxlat, setmaxlat] = useState();
    const [minlng, setminlng] = useState();
    const [maxlng, setmaxlng] = useState();






    let searchParameters = new URLSearchParams(location.search);

    const [areQuestionParametersPresent, setareQuestionParametersPresent] = useState(false);
    const [arequestionparameterschanegd, setarequestionparameterschanegd] = useState(false);



    useEffect(() => {
        if (minlat == searchParameters.get('minlat') && maxlat == searchParameters.get('maxlat') && minlng == searchParameters.get('minlng') && maxlng == searchParameters.get('maxlng')) {
            setarequestionparameterschanegd(false);
        } else {
            setarequestionparameterschanegd(true);
        }
        setminlat(searchParameters.get('minlat'));
        setmaxlat(searchParameters.get('maxlat'));
        setminlng(searchParameters.get('minlng'));
        setmaxlng(searchParameters.get('maxlng'));
        // console.log("PARAMETERS CHANGED");
        if ((minlat == null || minlat == undefined) &&
            (maxlat == null || maxlat == undefined) &&
            (minlng == null || minlng == undefined) &&
            (maxlng == null || maxlng == undefined)) {
            setareQuestionParametersPresent(false);
            // console.log(minlat, maxlat, minlng, maxlng, "FALSE");
        } else {
            setareQuestionParametersPresent(true);
            // console.log(minlat, maxlat, minlng, maxlng, "TRUE");
        }
    }, [searchParameters]);






    useEffect(() => {

        if (areQuestionParametersPresent == true && areNonQuestionParametersPresent == false && arequestionparameterschanegd == true) {
            if (isItCityVISE(minlng, maxlng) == true) {
                setsearchresultdata();
                sethead(0);
                settail(24);
                settypeofdata("CITY");
                dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, true));
            } else {
                setsearchresultdata();
                sethead(0);
                settail(24);
                settypeofdata("NON CITY");
                dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false));
            }
        }

    }, [areQuestionParametersPresent, areNonQuestionParametersPresent, arequestionparameterschanegd]);


    let searchApiUrl = `${surl}city=${city}&state=${statename}&page=${1}&feature=${featureParameter}`




    useEffect(() => {
        if (areNonQuestionParametersPresent == true && areQuestionParametersPresent == false) {
            if (city == null || statename == null || city == undefined || statename == undefined) {
            } else {
                dispatch(getPropListAccordingToCityAndState(searchApiUrl));
            }
            // console.log("FETCH FIRST API");
        } else if (areNonQuestionParametersPresent == false && areQuestionParametersPresent == true) {
            if (mapchange == true) {
                // console.log("FETCH SECOND API");

                if (areQuestionParametersPresent == true && areNonQuestionParametersPresent == false) {
                    if (isItCityVISE(minlng, maxlng) == true) {
                        setsearchresultdata();
                        sethead(0);
                        settail(24);
                        settypeofdata("CITY");
                        dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, true));
                    } else {
                        setsearchresultdata();
                        sethead(0);
                        settail(24);
                        settypeofdata("NON CITY");
                        dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false));
                    }
                }


            }
        }
    }, [areNonQuestionParametersPresent, areQuestionParametersPresent, mapchange, arequestionparameterschanegd, searchApiUrl])






    useEffect(() => {
        if (propResult.error == true) {
            setsearchresultdata('No Record Found');
        } else if (propResult.error == false) {
            setsearchresultdata(propResult.data);

            // if (propResult.type == FIRSTAPI) {
            //     setAPItype(FIRSTAPI);
            // } else if (propResult.type == SECONDAPI) {
            //     setAPItype(SECONDAPI)
            // } else if (propResult.type == THIRDAPI) {
            //     setAPItype(THIRDAPI);
            // }

        }

    }, [propResult])





    return (
        <>



            <p>sdkfj</p>

            <p>sdkfj</p>


            hiii

            <p>non question  {areNonQuestionParametersPresent == true ? "tr" : 'false'}</p>
            <p>question   {areQuestionParametersPresent == true ? "tr" : "false"}</p>


            <MultiplePointMap className="map" />

        </>
    )
}

export default PropertySearchFullMap