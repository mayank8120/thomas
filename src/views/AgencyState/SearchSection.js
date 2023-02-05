import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router";

import axios from 'axios'
import { Link } from 'react-router-dom';
import { addDash, capitaliseFirstLetterOfWord } from '../../containers/functions';
const SearchSection = ({ latlngdata }) => {


    // console.log(latlngdata, "IOIO");

    const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const [searchterm, setsearchterm] = useState("");
    const [showdropdown, setshowdropdown] = useState(false);



    const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");












    const toggleshow = () => {
        if (showdropdown == false) {
            setshowdropdown(true)
        } else {
            setshowdropdown(false)
        }
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // dispatch(createPost(postData));
    //     console.log(searchdata);
    //     setSearchdata({ searchstring: '' });
    // }
    const style = {
        display: 'none'
    }
    const style1 = {

    }

    // const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(searchdata);
        // setSearchdata({ searchstring: '' });\
        // window.location.href = "/agencyState";

        // history.push({ pathname: "/agencyState" });
        window.location.href = `${pathnameS}`;
        // console.log(searchterm);
        setsearchterm("");
    }

    const [dropdowndata, setdropdowndata] = useState();
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState('')
    const [pathnameS, setpathnameS] = useState("");

    useEffect(() => {
        const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
            .then(res => {
                if (res.data[0].error == true) {
                    setdropdowndata(res.data[0].message);
                } else {
                    setdropdowndata(res.data[0].data);
                }
            }).catch(error => {
                console.log('error', error);
            });
    }, [searchterm]);



    useEffect(() => {
        if (latlngdata == undefined || latlngdata == null) {

        } else {
            setcityname(latlngdata.city);
            setstatename(latlngdata.region);
        }
    }, [latlngdata]);


    return (
        <div className="searchHousingBox responsive-15 mt-0 mb-0">
            <h4 className="colorBlue font-weight700">Search Housing Authority by City, State, or ZIP</h4>
            <div className="d-flex align-items-center searchInputBlock searchInputBlockk posRel mt-3">
                <form className="w-100 d-flex align-items-center" onSubmit={handleSubmit}>
                    {/* <input type="text" className="form-control topSearch"
                        aria-describedby="emailHelp"
                        placeholder="Enter city, State or ZIP"
                        value={searchterm}
                        onChange={
                            e => {
                                setsearchterm(e.target.value);
                                console.log(searchterm);
                                const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
                                    .then(res => {
                                        if (res.data[0].error == true) {
                                            setdropdowndata(res.data[0].message)
                                        } else {
                                            setdropdowndata(res.data[0].data);
                                        }
                                        // //console.log(res);
                                    }).catch(error => {
                                        console.log('error', error);
                                    });
                            }
                        }
                        required /> */}


                    <input type="text" className="form-control topSearch"
                        aria-describedby="emailHelp"
                        placeholder="Enter city, State or ZIP"
                        value={searchterm}
                        onChange={
                            e => {
                                setsearchterm(e.target.value);
                            }
                        }
                        required />


                    <span className="searchBannerItem searchBannerItemagency"> <img src={require('../../assets/img/searchBanner.svg').default} /></span>
                    <ul className="serachDatadrop">
                        {/* {
                                                JSONDATA.filter((val) => {
                                                    if (searchterm == "") {
                                                        return ""
                                                    } else if (val.city_name.toLowerCase().includes(searchterm.toLowerCase())) {
                                                        return val
                                                    }
                                                }).map((val, key) => {
                                                    return (
                                                        <p style={!showdropdown ? style1 : style}
                                                            onClick={() => {
                                                                setsearchterm(val.city_name + ", " + val.state_abbr);
                                                                toggleshow();
                                                            }}>
                                                            {val.city_name}, {val.state_abbr}
                                                        </p>
                                                    );
                                                })


                                            } */}
                        {/* {
                            searchterm == null || searchterm == undefined || searchterm == '' || dropdowndata == undefined || dropdowndata == null || dropdowndata == '' ? <></>

                                :
                                (

                                    dropdowndata == 'No Record Found' ?
                                        <p style={!showdropdown ? style1 : style}
                                        >
                                            No Record Found
                                        </p>
                                        :


                                        dropdowndata.map((val) => {
                                            return (
                                                <p style={!showdropdown ? style1 : style}
                                                    onClick={() => {
                                                        setsearchterm(val.city_name + ", " + val.state_abbr);
                                                        setcityname(val.city_name);
                                                        setstatename(val.state_abbr);
                                                        toggleshow();
                                                    }}>
                                                    {val.city_name}, {val.state_abbr}
                                                </p>
                                            );
                                        })
                                )
                        } */}

                        {
                            searchterm == null || searchterm == undefined || searchterm == '' || dropdowndata == undefined || dropdowndata == null || dropdowndata == ''
                                ?
                                <></>
                                :
                                (
                                    dropdowndata == 'No Record Found'
                                        ?
                                        <>
                                            <p
                                            // style={!showdropdown ? style1 : style}
                                            >
                                                <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(cityname)}-${statename}`}
                                                    onClick={() => {
                                                        setdropdowndata();
                                                        setsearchterm(() => '');
                                                    }}>
                                                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                    Use Your Current Location
                                                </Link>
                                            </p>
                                            <p
                                            // style={!showdropdown ? style1 : style}
                                            >
                                                <Link className='secondaryColor w-100 d-block' to={null}
                                                    onClick={() => {
                                                        setdropdowndata();
                                                        setsearchterm(() => '');
                                                    }}>

                                                    No Cities Found with {capitaliseFirstLetterOfWord(searchterm)} name
                                                </Link>

                                            </p>
                                        </>
                                        :
                                        <>
                                            {
                                                <>
                                                    <p
                                                    // style={!showdropdown ? style1 : style}
                                                    >
                                                        <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(cityname)}-${statename}`}
                                                            onClick={() => {
                                                                setdropdowndata();
                                                                setsearchterm(() => '');
                                                            }}>
                                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                            Use Your Current Location
                                                        </Link>
                                                        {/* Use Your Current Location */}
                                                    </p>

                                                    {
                                                        dropdowndata.map((val) => {
                                                            return (

                                                                <>
                                                                    <p
                                                                        // style={!showdropdown ? style1 : style}
                                                                        onClick={() => {
                                                                            // setsearchterm(val.property_city + ", " + val.property_state);

                                                                            setsearchterm();
                                                                            setcityname(val.property_city);
                                                                            setstatename(val.property_state);
                                                                            toggleshow();
                                                                            setsearchterm(() => '');
                                                                        }}>
                                                                        {
                                                                            val.property_state == null || val.property_state == undefined ?
                                                                                `${val.property_city}, ${val.property_state}`
                                                                                :
                                                                                <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(val.property_city)}-${val.property_state}`}
                                                                                    onClick={() => {
                                                                                        setdropdowndata();
                                                                                        setsearchterm(() => '');
                                                                                    }}
                                                                                >
                                                                                    {val.property_city.toLowerCase()
                                                                                        .split(' ')
                                                                                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                                        .join(' ')}, {val.property_state}
                                                                                </Link>
                                                                        }

                                                                    </p>

                                                                    {/* <Link className='secondaryColor' to={`/propertySearch/${val.property_city}/${val.property_state}`}
                                                                                    onClick={() => {
                                                                                        setsearchterm(val.property_city + ", " + val.property_state);
                                                                                        setcityname(val.property_city);
                                                                                        setstatename(val.property_state);
                                                                                        toggleshow();
                                                                                    }}>
                                                                                    {
                                                                                        val.property_state == null || val.property_state == undefined ?
                                                                                            `${val.property_city}, ${val.property_state}`
                                                                                            :
                                                                                            `${val.property_city}, ${val.property_state}`

                                                                                    }
                                                                                </Link> */}

                                                                </>
                                                            );
                                                        })
                                                    }
                                                </>
                                                // <Link
                                            }
                                        </>
                                )
                        }
                    </ul>

                    <button type="submit" onClick={() => {
                        setpathnameS(`/housing-authority-waiting-lists/${addDash(cityname)}-${statename}`);
                        // console.log("search button clicked")
                    }}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchSection