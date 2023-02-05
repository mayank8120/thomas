import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router";
import { capitaliseFirstLetterOfWord, isItNull } from '../../containers/functions';


const Searchbox = ({ latlngdata }) => {

    const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");

    useEffect(() => {
        if (latlngdata == undefined || latlngdata == null) {

        } else {
            setcity(latlngdata.city);
            setstatenames(latlngdata.region);
        }
    }, [latlngdata]);

    const [searchterm, setsearchterm] = useState("");
    const [showdropdown, setshowdropdown] = useState(false);
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState('')
    const [pathnameS, setpathnameS] = useState("");

    const toggleshow = () => {
        if (showdropdown == false) {
            setshowdropdown(true)
        } else {
            setshowdropdown(false)
        }
    }
    const style = {
        display: 'none'
    }
    const style1 = {

    }


    const dropdownApiUrl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search'
    const [dropdowndata, setdropdowndata] = useState();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         // const result = await axios.post(dropdownApiUrl);


    //         const result = await axios.post(dropdownApiUrl)
    //             .then(res => {
    //                 // let data = res.data;
    //                 // var datah = data.data;
    //                 // console.log(res.data.data);
    //                 setdropdowndata(res.data[0].data)
    //                 // console.log(res.data[0].data);
    //             }).catch(error => {
    //                 console.log('error', error);
    //             });

    //         // setdropdowndata(result.data[0].data);
    //         // console.log(result.data[0].data);


    //     };
    //     fetchData();
    // }, []);



    const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(searchdata);
        // setSearchdata({ searchstring: '' });\
        // window.location.href = "/propertySearch";

        // history.push({ pathname: "/propertySearch" });
        window.location.href = `${pathnameS}`;
        // console.log(searchterm);
        setsearchterm("");
    }

    useEffect(() => {
        // const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
        //     .then(res => {
        //         if (res.data[0].error == true) {
        //             setdropdowndata(res.data[0].message)
        //         } else {
        //             setdropdowndata(res.data[0].data);
        //         }
        //     }).catch(error => {
        //         console.log('error', error);
        //     });
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res[0].error == true) {
                    // console.log(res.data[0]);
                    setdropdowndata(res[0].message);
                } else {
                    setdropdowndata(res[0].data);
                    // console.log(res[0].data);
                    setpathnameS(`/propertySearch/${res[0].data[0].property_city}/${res[0].data[0].property_state}`);
                }
            }

            )
            .catch(error => console.log('error', error));




    }, [searchterm])

    function searchclick() {
        if (dropdowndata == 'No Record Found') {

        } else {
            window.location.href = `${pathnameS}`;
        }
    }



    let pushtosearchresult = (city, statenames) => {

        if (isItNull(city) || isItNull(statenames)) {

        }
        else {


            localStorage.setItem("featureName", "Senior Housing");
            window.location.href = `/propertySearch/${city}/${statenames}`;
            // history.push(`/propertySearch/${city}/${statenames}`)
        }

    }

    return (

        <div>
            <section className="bannerSection bannerSection2 itemWebsite1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 responsive0">
                            <div className="bannerSectionText">
                                <h1 className="colorWhite">Find The Best Affordable Senior Housing Near You</h1>
                                <div className=" posRel">

                                    <>


                                        <div className="searchBox inputBox d-flex align-items-center">
                                            <div className="form-group mb-0 w-100 posRel">
                                                {/* <input type="text" className="form-control topSearch" id=""
                                                    aria-describedby="emailHelp" placeholder="San Gabriel, CA" value={searchdata.searchstring} onChange={(e) => setSearchdata({ searchstring: e.target.value })} required /> */}
                                                {/* {require('../../assets/img/searchBanner.svg').default} */}


                                                {/* <input type="text" className="form-control topSearch"
                                                    aria-describedby="emailHelp"
                                                    placeholder="San Gabriel, CA"
                                                    value={searchterm}
                                                    // value={searchdata.searchstring} 
                                                    // onChange={(e) => setSearchdata({ searchstring: e.target.value })} 
                                                    onChange={(e) => {
                                                        setsearchterm(e.target.value);
                                                    }}

                                                    required /> */}



                                                {/* <input type="text" className="form-control topSearch"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter city, State or ZIP"
                                                    value={searchterm}
                                                    onChange={(e) => {
                                                        setsearchterm(e.target.value);

                                                        // setpathnameS('/propertySearch?q=' + searchterm);
                                                    }}

                                                    required /> */}



                                                {/* <input type="text" className="form-control topSearch"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter city, State or ZIP"
                                                    value={searchterm}
                                                    onChange={
                                                        e => {
                                                            setsearchterm(e.target.value);
                                                        }
                                                    }

                                                    required /> */}

                                                <input type="text" className="form-control topSearch"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter City, State or ZIP"
                                                    value={searchterm}
                                                    onChange={
                                                        e => {
                                                            setsearchterm(e.target.value);
                                                        }
                                                    }
                                                    required />

                                                <span className="searchBannerItem">
                                                    <img src={require('../../assets/img/searchBanner.svg').default} />
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="serachDatadrop">

                                            {
                                                searchterm == null || searchterm == undefined || searchterm == '' ||
                                                    dropdowndata == undefined || dropdowndata == null || dropdowndata == '' ?
                                                    <>
                                                    </>
                                                    :
                                                    (
                                                        dropdowndata == 'No Record Found' ?
                                                            <>
                                                                <p>
                                                                    <span className='secondaryColor w-100 d-block' onClick={() => pushtosearchresult(city, statenames)}>
                                                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                        Use Your Current Location
                                                                    </span>
                                                                </p>
                                                                <p className='secondaryColor w-100 d-block'>
                                                                    <span className='secondaryColor w-100 d-block'>
                                                                        No Cities Found with <b className='font-weight999' >{capitaliseFirstLetterOfWord(searchterm)}</b> name
                                                                    </span>
                                                                </p>
                                                            </>
                                                            :
                                                            <>{
                                                                <>
                                                                    <p>
                                                                        <span className='secondaryColor w-100 d-block' onClick={() => pushtosearchresult(city, statenames)} >
                                                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                            Use Your Current Location
                                                                        </span>
                                                                    </p>

                                                                    {dropdowndata.map((val) => {
                                                                        return (
                                                                            <p
                                                                                // style={!showdropdown ? style1 : style}
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
                                                                                        <span className='secondaryColor  w-100 d-block' onClick={() => pushtosearchresult(val.property_city, val.property_state)}>
                                                                                            {val.property_city.toLowerCase()
                                                                                                .split(' ')
                                                                                                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                                                .join(' ')}, {val.property_state}
                                                                                        </span>
                                                                                }

                                                                            </p>
                                                                        );
                                                                    })}
                                                                </>
                                                            }</>
                                                    )
                                            }


                                        </ul>


                                        {/* <div className="searchBttn ml-auto itemMobile searchbtnnFlex">
                                            <a href=""
                                                className="greenBtn2 font-weight700 transition d-flex align-tems-center"><button type="submit" onClick={() => { console.log("search button clicked") }}>Search</button></a>
                                        </div>
                                        <div className="searchBttn searchBttn2 greenBtnBanner ml-auto itemWebsite">

                                            <button type="submit" className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                                onClick={() => {
                                                    console.log("search button clicked");
                                                    console.log(cityname);
                                                    console.log(statename);
                                                    setpathnameS("/propertySearch/" + cityname + "/" + statename + "&ft=senior");
                                                }}>    Search
                                            </button>
                                        </div>
                                        <div className="searchBttn searchBttn2 purpleBtnBanner ml-auto itemWebsite"
                                            style={{ display: "none" }}>
                                            <a href="" className="greenBtn2 font-weight700 transition d-flex align-tems-center">
                                                <button type="submit" onClick={() => { console.log("search button clicked") }}>Search</button>
                                            </a>
                                        </div> */}

                                        <div className="searchBttn ml-auto itemMobile searchbtnnFlex curserPointer">
                                            <button className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                                onClick={() => {
                                                    searchclick();
                                                }}>
                                                Search
                                            </button>
                                        </div>
                                        <div className="searchBttn searchBttn2 greenBtnBanner ml-auto itemWebsite curserPointer">
                                            <button className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                                onClick={() => {
                                                    searchclick();
                                                }}>
                                                Search
                                            </button>
                                        </div>


                                    </>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bannerSection itemMobile1 bannerMobileSection3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 responsive0">
                            <div className="bannerSectionText bannerMobileText1 bannerMobileText2">
                                <h1 className="colorWhite">Find The Best Affordable Senior Housing Near You</h1>
                                {/* <p className="colorWhite subTitle mb-0">The Right Location, The Right Price!</p> */}

                                {/* <form method="post" onSubmit={handleSubmit}>
                                <label for="browser">Choose your browser from the list:</label>
                                <input list="browsers" type="text" className="form-control topSearch"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter city, State or ZIP"
                                    value={searchterm}
                                    onChange={
                                        e => {
                                            setsearchterm(e.target.value);
                                            console.log(searchterm);
                                            const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
                                                .then(res => {
                                                    setdropdowndata(res.data[0].data);
                                                }).catch(error => {
                                                    console.log('error', error);
                                                });
                                        }
                                    }
                                    required />
                                <datalist id="browsers">
                                    {
                                        searchterm == null || searchterm == undefined || searchterm == '' || dropdowndata == undefined || dropdowndata == null || dropdowndata == '' ? <></> :
                                            dropdowndata.map((val) => {
                                                return (

                                                    <option value={`${val.property_city}, ${val.property_state}`}
                                                        style={!showdropdown ? style1 : style}
                                                        onClick={() => {
                                                            setsearchterm(val.property_city + ", " + val.property_state);
                                                            setcityname(val.property_city);
                                                            setstatename(val.property_state);
                                                            toggleshow();
                                                        }}
                                                    />

                                                );
                                            })
                                    }
                                </datalist>
                                <input type="submit" />
                            </form> */}


                                <>
                                    <div className="posRel">
                                        <div className="searchBox inputBox d-flex align-items-center">
                                            <div className="form-group mb-0 w-100 posRel">

                                                <input type="text" className="form-control topSearch"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Los Angeles, CA"
                                                    value={searchterm}
                                                    onChange={
                                                        e => {
                                                            setsearchterm(e.target.value);
                                                            // console.log(searchterm);
                                                        }
                                                    }
                                                    required />
                                            </div>
                                        </div>




                                        <ul className="serachDatadrop">
                                            {
                                                searchterm == null || searchterm == undefined || searchterm == '' ||
                                                    dropdowndata == undefined || dropdowndata == null || dropdowndata == '' ?
                                                    <>
                                                    </>
                                                    :
                                                    (
                                                        dropdowndata == 'No Record Found' ?
                                                            <>
                                                                <p>
                                                                    <span className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushtosearchresult(city, statenames)}>
                                                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                        Use Your Current Location
                                                                    </span>
                                                                </p>
                                                                <p className='secondaryColor w-100 d-block'>
                                                                    <span className='secondaryColor w-100 d-block'>
                                                                        No Cities Found with <b className='font-weight999' >{capitaliseFirstLetterOfWord(searchterm)}</b> name
                                                                    </span>
                                                                </p>
                                                            </>
                                                            :
                                                            <>
                                                                {
                                                                    <>
                                                                        <p>
                                                                            <span className='secondaryColor w-100 d-flex align-items-center' onClick={() => pushtosearchresult(city, statenames)}>
                                                                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                                Use Your Current Location
                                                                            </span>
                                                                        </p>

                                                                        {
                                                                            dropdowndata.map((val) => {
                                                                                return (

                                                                                    <>
                                                                                        <p
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
                                                                                                    <span className='secondaryColor w-100 d-block' onClick={() => pushtosearchresult(val.property_city, val.property_state)} >
                                                                                                        {val.property_city.toLowerCase()
                                                                                                            .split(' ')
                                                                                                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                                                            .join(' ')}, {val.property_state}
                                                                                                    </span>
                                                                                            }

                                                                                        </p>
                                                                                    </>


                                                                                );
                                                                            })
                                                                        }
                                                                    </>
                                                                }
                                                            </>
                                                    )
                                            }

                                        </ul>



                                        {/* <div className="searchBttn ml-auto itemMobile searchbtnnFlex curserPointer">
                                        <button className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                            onClick={() => {
                                                searchclick();
                                            }}>
                                            Search
                                        </button>
                                    </div>
                                    <div className="searchBttn searchBttn2 greenBtnBanner ml-auto itemWebsite curserPointer">
                                        <button className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                            onClick={() => {
                                                searchclick();
                                            }}>
                                            Search
                                        </button>
                                    </div> */}
                                        <div className="ml-auto curserPointer serchSmallBlock">
                                            <button className="greenBtn2 font-weight700 transition d-flex align-tems-center"
                                                onClick={() => {
                                                    searchclick();
                                                }}>
                                                <img src={require('../../assets/img/searchMobile.svg').default} className='m-auto' />
                                            </button>
                                        </div>
                                        {/* <div className="searchBttn searchBttn2 purpleBtnBanner ml-auto itemWebsite"
                                        style={{ display: "none" }}>
                                        <button type="submit" className="greenBtn2 font-weight700 transition d-flex align-tems-center" onClick={() => { console.log("search button clicked") }}>Search3</button>
                                    </div> */}
                                    </div>

                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Searchbox