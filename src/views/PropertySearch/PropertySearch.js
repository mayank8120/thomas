import React, { useState, useEffect } from 'react'
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm'
import Multiselect from 'multiselect-react-dropdown';
import Modal from "react-modal";
import { PropertySearchItem } from './PropertySearchItem';
// import { Scrollbar } from "react-scrollbars-custom";
import axios from 'axios'
import MultiRangeSlider from '../../containers/multiRangeSlider';
// import { Trial } from '../Trial/Trial';
import MultiplePointMap from './MultiplePointMap';
// import ReactPaginate from 'react-paginate';
import Loader from '../../containers/Loader';
import Footer from '../../containers/Footer';

import { components } from "react-select";

import { default as ReactSelect } from "react-select";

import makeAnimated from "react-select/animated";

import MySelect from "./MySelect.js";
import { capitaliseFirstLetterOfWord, elementSearchInArray, findHighestCountCity, isItCityVISE, isItNull, isObjectEmpty, prerenderApiCall } from '../../containers/functions';
import { useDispatch, useSelector } from 'react-redux';
import { func, number } from 'prop-types';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { changeMapStateAction, getPropListAccordingToCityAndState, getPropListAccordingToMap } from '../../actions';
import { amenitieslist, apt_type, numberofbeds, numberofbaths } from '../../constants/arraysLists';
import CityWiseList from './CityWiseList';
import { ERROR, FIRSTAPI, SECONDAPI, THIRDAPI } from '../../constants/constants';
import GoogleADS from '../../containers/GoogleADS';
import { Helmet } from 'react-helmet';



const Option = props => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

const animatedComponents = makeAnimated();
let counter = 0;








const PropertySearch = () => {



    let history = useHistory();


    const [typeofdata, settypeofdata] = useState();


    let parameters = useParams();


    const mapchange = useSelector(
        (state) => state.mapState
    );

    const dispatch = useDispatch();




    const [fourpage, setfourpage] = useState(4);

    // localStorage.clear();



    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");
    const [featureParameter, setfeatureParameter] = useState("");





    useEffect(() => {
        prerenderApiCall();
    }, [])




    let featureName = localStorage.getItem("featureName");



    useEffect(() => {
        if (isItNull(featureName)) {
            localStorage.setItem("featureName", "");
        } else {
            localStorage.setItem("featureName", localStorage.getItem("featureName"));
        }

        // return () => {
        //     localStorage.setItem("featureName", "");
        // }

    }, [featureName])


    // console.log(featureName, "FFFFF");






    const [areNonQuestionParametersPresent, setareNonQuestionParametersPresent] = useState(false);

    useEffect(() => {
        if (parameters.searchText == undefined || parameters.searchText == null) {
            console.log(parameters, "REDIRECT");
            if (parameters.cityNameRedirectFixSection8 && parameters.stateAbbrRedirectFixSection8) {
                localStorage.clear()
                window.location.href = "/section-8-housing-for-rent/" + parameters.cityNameRedirectFixSection8.replace(/\s+/g, '-') + "-" + parameters.stateAbbrRedirectFixSection8;
            }

            if (parameters.cityNameRedirectFixRental && parameters.stateAbbrRedirectFixRental) {
                localStorage.clear()
                window.location.href = "/affordable-apartments-for-rent/" + parameters.cityNameRedirectFixRental.replace(/\s+/g, '-') + "-" + parameters.stateAbbrRedirectFixRental;
            }
        } else {
            if (location.pathname.search("senior-housing-for-rent") != -1) {
                localStorage.setItem("featureName", "Senior Housing");
            } else if (location.pathname.search("section-8-housing-for-rent") > -1) {
                localStorage.setItem("featureName", "Section 8");
            } else {
                localStorage.setItem("featureName", "");
            }

            window.location.href = `/propertySearch/${parameters.searchText.slice(0, -3).split('-').join(' ')}/${parameters.searchText.slice(-2)}`;


            // window.location.href = `/propertySearch/${parameters.searchText.slice(0, -3).split('-').join(' ')}/${parameters.searchText.slice(-2)}`;

            // else if()
            // window.location.href = `/propertySearch/${parameters.searchText.slice(0, -3).split('-').join(' ')}/${parameters.searchText.slice(-2)}`;
        }

        if ((parameters.cityname == undefined || parameters.cityname == null) &&
            (parameters.statename == undefined || parameters.statename == null)) {
            setareNonQuestionParametersPresent(false);
            // console.log(parameters.cityname, parameters.statename, "FALSE");
        } else {
            setcity(parameters.cityname);
            setstatename(parameters.statename);
            // setfeatureParameter(parameters.feature ? parameters.feature : "");
            setareNonQuestionParametersPresent(true);
            // console.log(parameters.cityname, parameters.statename, "TRUE");
        }
    }, [parameters]);


    // console.log(featureParameter);


    function changePaginationSimpleData(num) {
        if ((city !== null || city !== undefined) && (statename !== null || statename !== undefined) && areNonQuestionParametersPresent == true && areQuestionParametersPresent == false) {
            history.push(`/propertySearch/${city}/${statename}`);
        }
    }




    //  FETCHING URL PARAMS START



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



    // useEffect(() => {
    //     if ((minlat == null || minlat == undefined) &&
    //         (maxlat == null || maxlat == undefined) &&
    //         (minlng == null || minlng == undefined) &&
    //         (maxlng == null || maxlng == undefined)) {
    //         setareQuestionParametersPresent(false);
    //         // console.log(minlat, maxlat, minlng, maxlng, "FALSE");
    //     } else {
    //         setareQuestionParametersPresent(true);
    //         // console.log(minlat, maxlat, minlng, maxlng, "TRUE");
    //     }
    // }, [minlat, maxlat, minlng, maxlng]);





    useEffect(() => {

        if (areQuestionParametersPresent == true && areNonQuestionParametersPresent == false && arequestionparameterschanegd == true) {
            if (isItCityVISE(minlng, maxlng) == true) {
                setsearchresultdata();
                sethead(0);
                settail(24);
                // console.log("111");
                settypeofdata("CITY");
                dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, true, apartmentstring, min_price, max_price, bedstring, bathstring));
            } else {
                setsearchresultdata();
                sethead(0);
                settail(24);
                // console.log("222");
                settypeofdata("NON CITY");
                dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false, apartmentstring, min_price, max_price, bedstring, bathstring));
            }
        }

    }, [areQuestionParametersPresent, areNonQuestionParametersPresent, arequestionparameterschanegd, bedstring, bathstring, min_price, max_price, apartmentstring]);



    // useEffect(() => {
    //     
    //     setsearchresultdata();
    //     sethead(0);
    //     settail(24);
    //     // console.log("222");
    //     settypeofdata("NON CITY");
    //     dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false, featureParameter, min_price, max_price, bedstring, bathstring));
    // }, [selectBeds, selectBaths, selectapartment])






    // console.log(minlat, maxlat, minlng, maxlng);

    // FETCHING URL PARAMS END 



    // useEffect(() => {

    // }, [typeofdata])





    // console.log(areNonQuestionParametersPresent,"-->NON QUESTION",areQuestionParametersPresent,"-->QUESTION");




    const [feature, setfeature] = useState("");
    const [totalcount, settotalcount] = useState();
    const [initialpage, setinitialpage] = useState(1);
    const [lastpage, setlastpage] = useState();
    const [currentpage, setcurrentpage] = useState(1);
    const [paginationopen, setpaginationopen] = useState(false);



    const [min_price, setmin_price] = useState(0);
    const [max_price, setmax_price] = useState(5000);








    const [isShown, setIsShown] = useState(false);

    const [currLat, setcurrLat] = useState();
    const [currLng, setcurrLng] = useState();




    const [head, sethead] = useState(0);
    const [tail, settail] = useState(24);



    // let minprice = 0;
    // let maxprice = 5000;
    const [minprice, setminprice] = useState(0);
    const [maxprice, setmaxprice] = useState(5000)


    function currentpagechange(num) {
        setcurrentpage(num);
        // changePaginationSimpleData(num);
        window.scrollTo(0, 0);
    }



    // PAGINATION START 

    var paginationarray = [];
    for (var i = 1; i <= lastpage; i++) {
        paginationarray.push(i);
    }
    let tagarray;
    if (fourpage == undefined) {
    }
    else {
        tagarray = [
            <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage - 3);
                // setsearchresultdata();
            }} >{fourpage - 3}</li>
            ,
            <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage - 2);
                // setsearchresultdata();
            }}>{fourpage - 2}</li>
            ,
            <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage - 1);
                // setsearchresultdata();
            }}>{fourpage - 1}</li>
            ,
            <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage);
                // setsearchresultdata();
            }}>{fourpage}</li>
            ,
            <li className={`${currentpage == fourpage + 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage + 1);
                // setsearchresultdata();
            }}>{fourpage + 1}</li>
            ,
            <li className={`${currentpage == fourpage + 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage + 2);
                // setsearchresultdata();
            }}>{fourpage + 2}</li>
            ,
            <li className={`${currentpage == fourpage + 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                currentpagechange(fourpage + 3);
                // setsearchresultdata();
            }}>{fourpage + 3}</li>
        ];
    }

    useEffect(() => {
        if (currentpage >= lastpage - 2) {
            setfourpage(4);
        }
    }, [currentpage]);

    // PAGINATION END






















    const [isOpenFilter, setIsOpenFilter] = useState(false);
    function toggleModalFilter() {
        setIsOpenFilter(!isOpenFilter);
        setfiltermodalclick(true);
    }
    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }




    const featureNNN = (str) => {
        if (isItNull(str)) {
            return 'Rental Deals';
        } else {
            return str;
        }
    }


    const [apartmentstring, setapartmentstring] = useState('');



    const [selectapartment, setselectapartment] = useState({ value: featureNNN(localStorage.getItem("featureName")), label: featureNNN(localStorage.getItem("featureName")) });

    let selectchange = (selected) => {
        setselectapartment(selected);
        localStorage.setItem("featureName", selected.value == 'Senior Housing' || selected.value == 'Section 8' ? selected.value : "");
    }






    useEffect(() => {
        if (selectapartment.length == 0) {
            // console.log(selectapartment, "LLL"); 
        } else {
            if (selectapartment.value == 'Senior Housing') {
                // apartmentstring = 'senior';
                setapartmentstring('senior');
            }
            else if (selectapartment.value == 'Section 8') {
                // apartmentstring = 'section';
                setapartmentstring('section');
            }
            else {
                setapartmentstring('');
                // apartmentstring = '';
            }
            // console.log(selectapartment, "LLL");
        }


        return () => {
            setapartmentstring('');
        }
    }, [selectapartment]);


    // console.log(apartmentstring, "FFFF1234");






    // if (selectapartment.length == 0) {
    //     // console.log(selectapartment, "LLL"); 
    // } else {
    //     if (selectapartment.value == 'Senior Housing') {
    //         // apartmentstring = 'senior';
    //         setapartmentstring('senior');
    //     }
    //     else if (selectapartment.value == 'Section 8') {
    //         // apartmentstring = 'section';
    //         setapartmentstring('section');
    //     }
    //     else {
    //         setapartmentstring('');
    //         // apartmentstring = '';
    //     }
    //     // console.log(selectapartment, "LLL");
    // }





    const [selectBeds, setselectBeds] = useState([]);

    let selectedBeds = (selected) => {
        setselectBeds(selected);
    }

    const [selectBaths, setselectBaths] = useState([]);

    let selectedBaths = (selected) => {
        setselectBaths(selected);
    }



    // let bathstring = "";
    const [bathstring, setbathstring] = useState('');
    // let bedstring = "";

    const [bedstring, setbedstring] = useState('');


    // let apartmentstring = "";



    useEffect(() => {
        let tempbathstring = '';
        for (let i = 0; i < selectBaths.length; i++) {
            if (i < selectBaths.length - 1) {
                tempbathstring += '\'' + parseFloat(selectBaths[i].label) + '\',';
            } else {
                tempbathstring += '\'' + parseFloat(selectBaths[i].label) + '\'';
            }
        }

        setbathstring(tempbathstring);
    }, [selectBaths])



    useEffect(() => {
        let tempbedstring = '';

        for (let i = 0; i < selectBeds.length; i++) {
            if (selectBeds[i].label == 'Studio' || selectBeds[i].label == 'Others') {
                tempbedstring += '\'' + selectBeds[i].label + '\',';
            } else {
                // if (i < selectBeds.length - 1) {
                //     setbedstring(bedstring + parseFloat(selectBeds[i].label) + ',')
                // } else {
                tempbedstring += parseFloat(selectBeds[i].label) + ',';
                // }
            }
        }

        setbedstring(tempbedstring);

        // console.log(bedstring, "JAADUU4");
    }, [selectBeds]);




    useEffect(() => {
        // console.log(bathstring, "JAADU");
    }, [bathstring])




    // useEffect(() => {

    //     // console.log(bedstring, 'bedstring here');
    //     // console.log(bathstring, "Bath here");
    //     // console.log(apartmentstring, "apt str here");
    // }, [selectBeds, selectBaths, selectapartment])







    let removelastcomma = (str) => {
        let us;
        if (str.charAt(str.length - 1) == ',') {
            us = str.slice(0, -1);
        } else {
            us = str;
        }
        return us;
    }

    let changeLatLng = (lat, lng) => {
        setcurrLat(lat);
        setcurrLng(lng);

        localStorage.setItem('currLat', lat);
        localStorage.setItem('currLng', lng);
    }

    let clearLatlng = () => {
        setcurrLat();
        setcurrLng();

        localStorage.setItem('currLat', '');
        localStorage.setItem('currLng', '');
    }

    const [checked, setChecked] = useState(false);
    const [catsOK, setcatsOK] = useState('');

    const handleinput = () => {
        setChecked(!checked);
    };

    const handleChangecats = () => {
        if (checked) {
            setChecked(!checked);
            setcatsOK('');
        } else {
            setChecked(!checked);
            setcatsOK('catsOK');
        }
    };

    const petsection = [
        { name: 'Cats OK' },
        { name: 'Dogs OK' },
        { name: 'Pets OK' },
        { name: 'No Pets' }
    ]

    const [checkedStatepets, setCheckedStatepets] = useState(
        new Array(petsection.length).fill(false)
    );

    const [petsarray, setpetsarray] = useState([]);

    const handleOnChangepets = (position) => {
        const updatedCheckedStatepets = checkedStatepets.map((item, index) =>
            index == position ? !item : item
        );

        setCheckedStatepets(updatedCheckedStatepets);


        const arrpets = [];

        const totalPrice = updatedCheckedStatepets.reduce(
            (sum, currentState, index) => {
                if (currentState == true) {
                    arrpets.push(petsection[index].name);
                    return sum + 1;
                }
                return sum;
            }
            ,
            0
        );


        setpetsarray(arrpets);
    };


    const [indexforamenities, setindexforamenities] = useState(6);

    const [checkedStateamenities, setCheckedStateamenities] = useState(
        new Array(amenitieslist.length).fill(false)
    );

    const [amenitiesarray, setamenitiesarray] = useState([]);


    const handleOnChangeamenities = (position) => {
        const updatedCheckedStateamenities = checkedStateamenities.map((item, index) =>
            index == position ? !item : item
        );

        setCheckedStateamenities(updatedCheckedStateamenities);

        const arramenities = [];

        const totalPrice = updatedCheckedStateamenities.reduce(
            (sum, currentState, index) => {
                if (currentState == true) {
                    arramenities.push(amenitieslist[index].name);
                    return sum + 1;
                }
                return sum;
            }
            ,
            0
        );


        setamenitiesarray(arramenities);
    };



    const [nearbycitiesdata, setnearbycitiesdata] = useState([]);

    const [indexforcities, setindexforcities] = useState(6);

    const [checkedStatecities, setCheckedStatecities] = useState([]);

    const [citiesarray, setcitiesarray] = useState([]);


    const [filtermodalclick, setfiltermodalclick] = useState(false);


    useEffect(() => {
        setnearbycitiesdata(JSON.parse(localStorage.getItem("nearbycitiesdata")))
        if (nearbycitiesdata.length == 0) {
        } else {
            setCheckedStatecities(new Array(nearbycitiesdata.length).fill(false));
        }
        // console.log(nearbycitiesdata);
    }, [filtermodalclick]);

    const handleOnChangecities = (position) => {
        if (nearbycitiesdata.length == 0) {

        } else {
            const updatedCheckedStatecities = checkedStatecities.map((item, index) =>
                index == position ? !item : item
            );
            setCheckedStatecities(updatedCheckedStatecities);
            const arrcities = [];
            const totalPrice = updatedCheckedStatecities.reduce(
                (sum, currentState, index) => {
                    if (currentState == true) {
                        arrcities.push(nearbycitiesdata[index].name);
                        return sum + 1;
                    }
                    return sum;
                }
                ,
                0
            );
            setcitiesarray(arrcities);
        }
    };











    const [searchresultdata, setsearchresultdata] = useState([]);



    const surl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?';

    let searchApiUrl = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=${featureParameter}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    let searchsenior = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=senior&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    let searchsection8 = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=section&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`


    // console.log(apartmentstring);

    // useEffect(() => {
    //     searchApiUrl = `${surl}city=${city}/${statename}&page=${currentpage}&feature=${apartmentstring}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`;
    //     searchsenior = `${surl}city=${city}/${statename}&page=${currentpage}&feature=senior&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    //     searchsection8 = `${surl}city=${city}/${statename}&page=${currentpage}&feature=section&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    // }, [selectBeds, selectBaths]);


    useEffect(() => {
        searchApiUrl = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=${featureParameter}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`;
        searchsenior = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=senior&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
        searchsection8 = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=section&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`
    }, [selectBeds, selectBaths, areNonQuestionParametersPresent]);





    useEffect(() => {
        searchApiUrl = `${surl}city=${city}&state=${statename}&page=${currentpage}&feature=${featureParameter}&minamtval=${min_price == undefined ? '' : min_price}&maxamtval=${max_price == undefined ? '' : max_price}&beds=${removelastcomma(bedstring)}&baths=${removelastcomma(bathstring)}`;
    }, [areNonQuestionParametersPresent])



    let applyfilters = () => {
        // `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?city=${city}/${statename.toUpperCase()}&page=${currentpage}&feature=senior`
        // searchApiUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-search?city=${city}&state=${statename.toUpperCase()}&page=${currentpage}&minamtval=${min_price}&maxamtval=${max_price}`
        // console.log(searchApiUrl);
        setmin_price(minprice);
        setmax_price(maxprice);
        toggleModalFilter();
        // console.log(minprice, maxprice);
    }

    // var requestOptions = {
    //     method: 'POST',
    //     redirect: 'follow'
    // };



    let propResult = useSelector((state) => state.search_result);





    // console.log(propResult);







    // useEffect(() => {

    //     if (isObjectEmpty(parameters) == true) {

    //     } else {

    //         if (areNonQuestionParametersPresent == true && mapchange == false) {

    //             // console.log(city, statename);
    //             if (city == null || statename == null || city == undefined || statename == undefined) {
    //             } else {
    //                 dispatch(getPropListAccordingToCityAndState(searchApiUrl));
    //             }

    //         } else {

    //         }
    //     }
    //     // const fetchData = async () => {
    //     //     if (statename == 'undefined' || statename == '' || statename == null) {

    //     //     }
    //     //     else {



    //     //         if (mapchange == false) {

    //     //             setsearchresultdata([]);

    //     //             if (feature == 'senior') {

    //     //                 const result = await fetch(`${searchsenior}`, requestOptions)
    //     //                     .then(response => response.json())
    //     //                     .then(res => {
    //     //                         // console.log(res.error);
    //     //                         if (res.error == true) {
    //     //                             // console.log('5');
    //     //                             setsearchresultdata(res.message);
    //     //                             settotalcount(0);
    //     //                         } else {
    //     //                             // console.log('6');
    //     //                             setsearchresultdata(res.data);

    //     //                             settotalcount(res.count);
    //     //                             setlastpage((parseInt((res.count) / 25, 10) + 1));
    //     //                         }
    //     //                     })
    //     //                     .catch(error => console.log('error', error));

    //     //             } else if (feature == 'section') {
    //     //                 const result = await fetch(`${searchsection8}`, requestOptions)
    //     //                     .then(response => response.json())
    //     //                     .then(res => {
    //     //                         // console.log(res.error);
    //     //                         if (res.error == true) {
    //     //                             // console.log('5');
    //     //                             setsearchresultdata(res.message);
    //     //                             settotalcount(0);
    //     //                         } else {
    //     //                             // console.log('6');
    //     //                             setsearchresultdata(res.data);
    //     //                             settotalcount(res.count);
    //     //                             setlastpage((parseInt((res.count) / 25, 10) + 1));
    //     //                         }
    //     //                     })
    //     //                     .catch(error => console.log('error', error));

    //     //             }
    //     //             else {
    //     //                 const result = await fetch(`${searchApiUrl}`, requestOptions)
    //     //                     .then(response => response.json())
    //     //                     .then(res => {
    //     //                         // console.log(res.error);
    //     //                         if (res.error == true) {
    //     //                             console.log('5');
    //     //                             setsearchresultdata(res.message);
    //     //                             settotalcount(0);
    //     //                         } else {
    //     //                             // console.log('6');
    //     //                             setsearchresultdata(res.data);
    //     //                             settotalcount(res.count);
    //     //                             setlastpage((parseInt((res.count) / 25, 10) + 1));
    //     //                         }
    //     //                     })
    //     //                     .catch(error => console.log('error', error));
    //     //             }

    //     //         }
    //     //         else if (mapchange == true) {
    //     //             setsearchresultdata([]);

    //     //             setsearchresultdata(propResult.data);

    //     //             if (propResult.hasOwnProperty('count') == false) {
    //     //                 settypeofdata("CITY");
    //     //             } else {
    //     //                 settypeofdata();
    //     //                 settotalcount(propResult.count);
    //     //                 setlastpage((parseInt((propResult.count) / 25, 10) + 1));
    //     //             }
    //     //         }




    //     //         // console.log(propResult);

    //     //     }
    //     // };
    //     // fetchData();
    // }, [searchApiUrl]);

















    useEffect(() => {
        if (areNonQuestionParametersPresent == true && areQuestionParametersPresent == false) {
            if (city == null || statename == null || city == undefined || statename == undefined) {
            } else {
                dispatch(getPropListAccordingToCityAndState(searchApiUrl));
            }
        } else if (areNonQuestionParametersPresent == false && areQuestionParametersPresent == true) {
            if (mapchange == true) {
                // console.log("FETCH SECOND API");

                if (areQuestionParametersPresent == true && areNonQuestionParametersPresent == false) {
                    if (isItCityVISE(minlng, maxlng) == true) {
                        setsearchresultdata();
                        sethead(0);
                        settail(24);
                        // console.log("333");
                        settypeofdata("CITY");
                        dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, true, apartmentstring, min_price, max_price, bedstring, bathstring));
                    } else {
                        setsearchresultdata();
                        sethead(0);
                        settail(24);
                        // console.log("444");
                        settypeofdata("NON CITY");
                        dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng, false, apartmentstring, min_price, max_price, bedstring, bathstring));
                    }
                }
            }
        }
    }, [areNonQuestionParametersPresent, areQuestionParametersPresent, mapchange, arequestionparameterschanegd, bedstring, bathstring, min_price, max_price, apartmentstring])






    useEffect(() => {
        if (propResult.error == true) {
            setsearchresultdata(ERROR);
        } else if (propResult.error == false) {
            setsearchresultdata(propResult.data);

            if (propResult.type == FIRSTAPI) {
                settypeOfAPI(FIRSTAPI);
            } else if (propResult.type == SECONDAPI) {
                settypeOfAPI(SECONDAPI)
            } else if (propResult.type == THIRDAPI) {
                settypeOfAPI(THIRDAPI);
            }

        }

    }, [propResult]);













    let findLastPage = (count) => {
        return parseInt(count / 25) + (count % 25 == 0 ? 0 : 1);
    }

    const [resultdatabackup, setresultdatabackup] = useState([]);

    const [typeOfApi, settypeOfAPI] = useState('');


    useEffect(() => {
        if (propResult.error == true) {
            setsearchresultdata(ERROR);
            settotalcount(0);
        } else if (propResult.error == false) {
            setsearchresultdata(propResult.data);

            if (propResult.type == FIRSTAPI) {
                settypeOfAPI(FIRSTAPI);
            } else if (propResult.type == SECONDAPI) {
                settypeOfAPI(SECONDAPI)
            } else if (propResult.type == THIRDAPI) {
                settypeOfAPI(THIRDAPI);
            }


            settotalcount(propResult.count);
            setlastpage(findLastPage(propResult.count));
        }


        if (mapchange == true) {
            currentpagechange(1);
            setfourpage(4);
        }

    }, [propResult])

    // console.log(searchresultdata);





    useEffect(() => {

        if (mapchange == true) {
            if (lastpage == 1) {
                sethead(0);
                settail(totalcount);
                // console.log("tail 1");
                // console.log(head, tail);
            } else {
                if (currentpage == lastpage) {
                    sethead((currentpage - 1) * 25);
                    settail(totalcount);
                    // console.log("tail 2");
                } else {
                    sethead((currentpage - 1) * 25);
                    settail(currentpage * 25);
                    // console.log("tail 3");
                }
            }
        }



    }, [currentpage, mapchange]);






    const [firstListofCityStates, setfirstListofCityStates] = useState([]);
    const [uniQueCityStateList, setuniQueCityStateList] = useState([]);



    const findUnique = (array) => {
        if (array == undefined || array == null || array.length == 0) {
        } else {
            let newarr = [];
            array.map(
                (item, index) => {
                    if (newarr == null || newarr.length == 0) {
                        let obj = {
                            city: item.city,
                            state: item.state,
                            count: 1
                        }
                        newarr.push(obj);
                    } else {
                        let idx = elementSearchInArray(newarr, item);
                        if (idx == 0) {
                            let obj = {
                                city: item.city,
                                state: item.state,
                                count: 1
                            }
                            newarr.push(obj);
                        } else {
                            newarr[idx].count += 1;
                        }
                    }
                }
            )
            setuniQueCityStateList(newarr);
        }
    }





    const generateFirstFilterList = (data) => {
        let tempArr = [];
        data.map(
            (item) => {
                let obj = {
                    state: item.property.property_state.toLowerCase(),
                    city: item.property.property_city.toLowerCase(),
                }
                tempArr.push(obj);
            }
        )
        setfirstListofCityStates(tempArr);
    }




    useEffect(() => {
        if (firstListofCityStates == undefined || firstListofCityStates.length == 0) {

        } else {
            findUnique(firstListofCityStates);
        }
    }, [firstListofCityStates])




    useEffect(() => {
        if (uniQueCityStateList.length == 0) { }
        else {
            // console.log(uniQueCityStateList, "QQQQ");
            setcity(uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city);
            setstatename(uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state);
            let str = localStorage.getItem("featureName");
            if (str == "Senior Housing") {
                window.history.replaceState(100, "Page 2", `/senior-housing-for-rent/${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city.split(' ').join('-')}-${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state}`);
            } else if (str == "Section 8") {
                window.history.replaceState(100, "Page 2", `/section-8-housing-for-rent/${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city.split(' ').join('-')}-${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state}`);
            } else if (str == "") {
                window.history.replaceState(100, "Page 2", `/affordable-apartments-for-rent/${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city.split(' ').join('-')}-${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state}`);
            } else {
                window.history.replaceState(100, "Page 2", `/affordable-apartments-for-rent/${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city.split(' ').join('-')}-${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state}`);
            }


            // window.history.replaceState(100, "Page 2", `/affordable-apartments-for-rent/${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city.split(' ').join('-')}-${uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state}`);

        }

    }, [uniQueCityStateList])




    useEffect(() => {
        // console.log(head, "HEAD", tail, "TAIL");

        if (searchresultdata == undefined || searchresultdata == null || searchresultdata.length == 0) {

        } else {
            if (typeOfApi == FIRSTAPI || typeOfApi == SECONDAPI) {
                generateFirstFilterList(searchresultdata.slice(head, tail));
            }
        }

    }, [head, tail, searchresultdata])

    useEffect(() => {
    }, [head, tail])









    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(621,149);
    ezstandalone.enable();
    ezstandalone.display();
    });`






    return (
        <>



            <section className="listingPage secPad24 propertySearchPage premium">
                <div className="container2">
                    <div className="row">



                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 pl-0">    */}
                        <div
                            className="listting-search-left">


                            {
                                (searchresultdata == null || searchresultdata == undefined || searchresultdata == '' || searchresultdata.length == 0) ?
                                    <Loader />
                                    :

                                    (
                                        // typeofdata == "CITY" 
                                        typeOfApi == THIRDAPI
                                            ?
                                            <>
                                                <CityWiseList searchresultdata={searchresultdata} />
                                            </>
                                            :
                                            <>
                                                <div className="listingSection map-filter-section">
                                                    <div className="cst adjustment">
                                                        <div className="itemWebsite">
                                                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                                                <ol className="breadcrumb font-weight500 mb-0">
                                                                    <li className="breadcrumb-item fontSize14"><a href="/" className=' purpleText' > Home</a></li>
                                                                    <li className="breadcrumb-item fontSize14 purpleText"><a href="/" className=' purpleText' >{feature == 'senior' ? 'Senior Housing' : (feature == 'section' ? 'Section 8 Housing' : 'Rentals')}</a></li>
                                                                    <li className="breadcrumb-item fontSize14 purpleText"><a href={`/propertySearch//${statename}`} className={city == undefined || city == '' ? 'activeimp' : 'purpleText'} >{statename.toUpperCase()}</a></li>
                                                                    {city == undefined || city == '' ? null : <li className="breadcrumb-item fontSize14 active">{capitaliseFirstLetterOfWord(city)}</li>}
                                                                </ol>
                                                            </nav>
                                                        </div>
                                                        <h1 className="font-weight400 mb-0 fontSize18">Apartments for rent in or near {city == undefined || city == '' ? null : `${capitaliseFirstLetterOfWord(city)},`} {statename.toUpperCase()}</h1>
                                                        <div className="tagList d-flex align-items-center">


                                                            <div className="itemWebsite w-167 mr-1 apat">
                                                                <MySelect
                                                                    placeholder={'Apartment Type'}
                                                                    options={apt_type}
                                                                    // !isMulti
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    components={{ Option, animatedComponents }}
                                                                    onChange={selectchange}
                                                                    allowSelectAll={false}
                                                                    value={selectapartment}
                                                                />
                                                            </div>

                                                            <div className="itemWebsite w-130 mr-1 bedd">
                                                                <MySelect
                                                                    placeholder={'Beds'}
                                                                    options={numberofbeds}
                                                                    isMulti
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    components={{ Option, MultiValue, animatedComponents }}
                                                                    onChange={selectedBeds}
                                                                    allowSelectAll={false}
                                                                    value={selectBeds}
                                                                />
                                                            </div>

                                                            <div className="itemWebsite w-130 mr-1 bbaaths">
                                                                <MySelect
                                                                    placeholder={'Baths'}
                                                                    options={numberofbaths}
                                                                    isMulti
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    components={{ Option, MultiValue, animatedComponents }}
                                                                    onChange={selectedBaths}
                                                                    allowSelectAll={false}
                                                                    value={selectBaths}
                                                                />
                                                            </div>

                                                            <div className="dropdown">
                                                                <ul className="noMarginPad listStyleNone clearfix">
                                                                    <li className="secondaryColor itemTag " onClick={toggleModalFilter}><span className="dot" ></span>Filters</li>
                                                                </ul>
                                                            </div>
                                                            {/* if the filters are active below code 
                                                <div className="dropdown">
                                                    <ul className="noMarginPad listStyleNone clearfix">
                                                        <li className="secondaryColor itemTag active" onClick={toggleModalFilter}><span className="dot" ></span>Filters</li>
                                                    </ul>
                                                </div> */}


                                                            <div className="ml-auto itemWebsite">
                                                                <h4 className="numProperty colorBlue fontSize16 font-weight700 mb-0">
                                                                    {searchresultdata == null || searchresultdata.length == 0 ? 0 : totalcount} Properties</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listingSection adjustment1">


                                                    <div className="propertyList propertyListScroll boxscroll4">

                                                        <div className="wrapperScroll ">
                                                            <ul className="noMarginPad listStyleNone">

                                                                {

                                                                    searchresultdata == undefined || searchresultdata == '' || searchresultdata.length == 0 || searchresultdata == null || typeOfApi == FIRSTAPI
                                                                        ?
                                                                        <>
                                                                            <Loader />
                                                                        </>
                                                                        :
                                                                        searchresultdata == ERROR
                                                                            ?
                                                                            window.location.replace("/error404")
                                                                            :
                                                                            (
                                                                                searchresultdata.slice(head, tail).map((post, index) => (
                                                                                    <>
                                                                                        {/* {index == 4 ?
                                                                                            <li className="listingBlock2 responsive-15">
                                                                                                <GoogleADS placeholderId='618' width='680px' height='220px' slotno='2539422872' />

                                                                                            </li>
                                                                                            :
                                                                                            null
                                                                                        }
                                                                                        {
                                                                                            index == 9 ?
                                                                                                <li className="listingBlock2 responsive-15">
                                                                                                    <GoogleADS placeholderId='619' width='680px' height='220px' slotno='6665520080' />

                                                                                                </li>
                                                                                                :
                                                                                                null
                                                                                        } */}
                                                                                        <li className="listingBlock2 responsive-15"
                                                                                            onMouseEnter={() => changeLatLng(post.property.lat, post.property.lng)}
                                                                                            onMouseLeave={() => clearLatlng()}
                                                                                        >
                                                                                            <PropertySearchItem post={post} />
                                                                                        </li>

                                                                                    </>
                                                                                )
                                                                                )
                                                                            )
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    {/* pagination */}
                                                    {
                                                        lastpage == undefined || lastpage == 0 || lastpage == '' || totalcount < 26 ? null :
                                                            <div className="pagination">
                                                                <ul className="noMarginPad listStyleNone">

                                                                    {/* left arrow  */}
                                                                    {
                                                                        currentpage == 1
                                                                            ?
                                                                            null
                                                                            :
                                                                            <li className="paginationNum arrowRight" onClick={() => {
                                                                                if (currentpage <= 4) {
                                                                                    currentpagechange(currentpage - 1);
                                                                                    // setsearchresultdata();
                                                                                }
                                                                                else {
                                                                                    setfourpage(currentpage - 1);
                                                                                    currentpagechange(currentpage - 1);
                                                                                    // setsearchresultdata();
                                                                                }
                                                                            }}>
                                                                                <img src={require('../../assets/img/checvronpl.png').default} />
                                                                            </li>
                                                                    }



                                                                    {/* before dots section  */}
                                                                    {

                                                                        <>
                                                                            {
                                                                                lastpage < 8
                                                                                    ?
                                                                                    (
                                                                                        tagarray.slice(0, lastpage).map(
                                                                                            (data) => {
                                                                                                return (
                                                                                                    data
                                                                                                );
                                                                                            }
                                                                                        )
                                                                                    )
                                                                                    :
                                                                                    <>
                                                                                        <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(fourpage - 3);
                                                                                        }}>{fourpage - 3}</li>

                                                                                        <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(fourpage - 2);
                                                                                        }}>{fourpage - 2}</li>

                                                                                        <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(fourpage - 1);
                                                                                        }}>{fourpage - 1}</li>

                                                                                        <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(fourpage);
                                                                                        }}>{fourpage}</li>
                                                                                    </>
                                                                            }





                                                                            {/* after dots section  */}
                                                                            {
                                                                                lastpage > 7
                                                                                    ?
                                                                                    <>
                                                                                        <li className="dotsBlock">...</li>

                                                                                        <li className={`${currentpage == lastpage - 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(lastpage - 2);
                                                                                        }}>{lastpage - 2}</li>

                                                                                        <li className={`${currentpage == lastpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(lastpage - 1);
                                                                                        }}>{lastpage - 1}</li>

                                                                                        <li className={`${currentpage == lastpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                                            currentpagechange(lastpage);
                                                                                        }}>{lastpage}</li>
                                                                                    </>
                                                                                    :
                                                                                    null
                                                                            }


                                                                        </>
                                                                    }


                                                                    {/* right aRROW  */}
                                                                    {
                                                                        currentpage == lastpage
                                                                            ?
                                                                            null
                                                                            :
                                                                            <li className="paginationNum arrowRight" onClick={() => {
                                                                                if (currentpage >= 4) {
                                                                                    setfourpage(currentpage + 1);
                                                                                    currentpagechange(currentpage + 1);
                                                                                }
                                                                                else {
                                                                                    currentpagechange(currentpage + 1);
                                                                                }
                                                                            }}>

                                                                                <img src={require('../../assets/img/checvronpr.png').default} />
                                                                            </li>
                                                                    }
                                                                </ul>
                                                                <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing&nbsp;
                                                                    {
                                                                        lastpage == 1 ?
                                                                            <>{1}-{totalcount} of&nbsp;{totalcount}</>
                                                                            :
                                                                            <>
                                                                                {
                                                                                    currentpage == lastpage ?
                                                                                        <>{currentpage * 25 - 24}-{totalcount} of&nbsp;{totalcount}</>
                                                                                        :
                                                                                        <>{currentpage * 25 - 24}-{currentpage * 25} of&nbsp;{totalcount}</>
                                                                                }
                                                                            </>

                                                                    }
                                                                    &nbsp;Results</p>
                                                            </div>
                                                    }
                                                </div>
                                            </>
                                    )
                            }


                            <GoogleADS placeholderId='149' width='728px' height='90px' slotno='3854651772' />

                            <div className="itemWebsite">
                                <Footer />
                            </div>

                        </div>
                        {/* </div> */}

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 pl-0">
                            <div className="map-fixed">
                                <div className="whiteBg h-94">
                                    <div style={{ width: '766px', height: '94px' }}>
                                        <GoogleADS placeholderId='621' width='766px' height='94px' slotno='7791749557' />
                                    </div>
                                    {/* <img className="h-94" src={require('../../assets/img/advertisement1.png').default} /> */}
                                </div>
                                <div className="row mapSectionArea widthBlock100 ">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapRight0 widthBlock70 ">
                                        <div className="posRel ">
                                            {
                                                // (searchresultdata !== null && searchresultdata.length !== 0 && searchresultdata !== undefined) && mapchange == false ?
                                                //     <MultiplePointMap className="map"
                                                //         searchresultdata={searchresultdata}
                                                //     />
                                                //     :
                                                <MultiplePointMap className="map" />
                                            }


                                            <div className="mapBlockCheck">
                                                <div className="listingSection adjustment1 mapListingSection d-flex align-items-center">
                                                    {/* <h1>{JSON.stringify(mapchange)}</h1> */}
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={mapchange}
                                                        onChange={() => { dispatch(changeMapStateAction()); }}
                                                    />  <span className="ml-2">Search as I move the Map</span>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="itemMobile secondFooter">
                                {/* <GoogleADS placeholderId='172' width='728px' height='90px' slotno='1505526895' /> */}
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>



                <Modal isOpen={isOpenFilter}
                    onRequestClose={toggleModalFilter} className="morefilter modalVertCentr">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">Filters</h5>
                        <button type="button" className="close" onClick={toggleModalFilter} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Price Range</h4>
                            <MultiRangeSlider
                                min={0}
                                max={5000}
                                onChange={({ min, max }) => {
                                    // console.log(min, max);
                                    // setmin_price(min);
                                    // setmax_price(max);
                                    // minprice = min;
                                    // maxprice = max;

                                    setminprice(min);
                                    setmaxprice(max);

                                }}


                                minpr={minprice}
                                maxpr={maxprice}
                            />
                        </div>
                        {/* <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Features</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Good Deals
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Income Based
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Utilities Included
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Handicap Accessible
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Move-In Specials
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Waiting List
                                                <input type="checkbox" disabled />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">Pets
                            </h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                        <div className="checkboxItem">
                                           

                                           

                                        </div>


                                        {
                                            petsection.map(({ name, price }, index) => {
                                                return (
                                                    <>
                                                        <div className="checkboxItem col-sm-6">
                                                            <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-${index}`}>
                                                                {name}
                                                                <input
                                                                    type="checkbox"
                                                                    id={`custom-checkbox-${index}`}
                                                                    name={name}
                                                                    value={name}
                                                                    checked={checkedStatepets[index]}
                                                                    onChange={() => handleOnChangepets(index)}
                                                                    disabled
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>

                                                    </>
                                                );
                                            })
                                        }




                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Amenities</h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                        {
                                            amenitieslist.slice(0, indexforamenities).map(({ name, price }, index) => {
                                                return (
                                                    <>
                                                        <div className="checkboxItem col-sm-6">
                                                            <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-amenities-${index}`}>
                                                                {name}
                                                                <input
                                                                    type="checkbox"
                                                                    id={`custom-checkbox-amenities-${index}`}
                                                                    name={name}
                                                                    value={name}
                                                                    checked={checkedStateamenities[index]}
                                                                    onChange={() => handleOnChangeamenities(index)}
                                                                    disabled
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>

                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <span className="w-100 transition font-weight500" onClick={() => {
                                if (indexforamenities == 6) {
                                    setindexforamenities(amenitieslist.length);
                                } else {
                                    setindexforamenities(6);
                                }

                            }}>Show {indexforamenities == 6 ? 'more' : 'less'} amenities</span>
                        </div>



                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Neighborhoods</h4>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="checkboxList row">
                                       
                                        {
                                            nearbycitiesdata == null || nearbycitiesdata == '' || nearbycitiesdata.length == 0 ?
                                                null
                                                :
                                                nearbycitiesdata.slice(0, indexforcities).map(({ property_city, price }, index) => {
                                                    return (
                                                        <>
                                                            <div className="checkboxItem col-sm-6">
                                                                <label key={index} className="checkboxBlock" htmlFor={`custom-checkbox-cities-${index}`}>
                                                                    {property_city}
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`custom-checkbox-cities-${index}`}
                                                                        name={property_city}
                                                                        value={property_city}
                                                                        checked={checkedStatecities[index]}
                                                                        onChange={() => handleOnChangecities(index)}
                                                                        disabled
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    );
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <span className="w-100 transition font-weight500"
                                onClick={() => {
                                    if (indexforcities == 6) {
                                        setindexforcities(12);
                                    } else {
                                        setindexforcities(6);
                                    }

                                }}>Show {indexforcities == 6 ? 'more' : 'less'} neighborhoods</span>
                        </div> */}
                    </div>
                    <div className="RentalFooter">
                        <div className="d-flex align-items-center">
                            <div className="w-50 font-weight500 clearAll">
                                {/* <u>Clear All</u> */}
                            </div>
                            <div className="w-50">
                                <button type="button" onClick={applyfilters}
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Apply Filters</button>
                            </div>
                        </div>
                    </div>
                </Modal>




            </section>
            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>


            {/* <Footer /> */}
        </>
    )
}


// const Checkbox = ({ label, value, onChange }) => {
//     return (
//         <>
//             <label className="checkboxBlock">
//                 {label}
//                 <input
//                     type="checkbox"
//                     checked={value}
//                     onChange={onChange}
//                 />

//                 <span className="checkmark"></span>

//             </label>
//         </>
//     );
// };



export default PropertySearch