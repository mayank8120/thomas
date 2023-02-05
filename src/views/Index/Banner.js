import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { searchdropdown } from '../../api/api';
// import JSONDATA from '../../containers/JSONS/MOCK.json'
import JSONDATA from '../../containers/JSONS/MOCK.json'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import History from '../../containers/History';
import { capitaliseFirstLetterOfWord } from '../../containers/functions';
// import SliderThumbnail from '../../containers/SliderThumbnail';

// import { SliderThumbnail } from '../../containers/SliderThumbnail';

const Banner = ({ latlngdata }) => {


    const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");

    useEffect(() => {
        if (latlngdata == undefined || latlngdata == null) {

        } else {
            setcity(latlngdata.city);
            setstatenames(latlngdata.region);
        }
    }, [latlngdata]);





    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const [searchterm, setsearchterm] = useState();
    const [showdropdown, setshowdropdown] = useState(false);

    // console.log(searchterm);

    const toggleshow = () => {

        // setshowdropdown(!showdropdown);
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

    const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const history = useHistory();
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState('')
    const [pathnameS, setpathnameS] = useState("");


    const url = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search'

    const dropdownApiUrl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search'

    const dropdownApiUrlmod = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`
    const [dropdowndata, setdropdowndata] = useState();




    // useEffect(() => {
    //     const fetchData = async () => {
    //         // const result = await axios.post(dropdownApiUrl);


    //         const result = await axios.post(dropdownApiUrlmod)
    //             .then(res => {
    //                 // let data = res.data;
    //                 // var datah = data.data;
    //                 // console.log(res.data.data);
    //                 setdropdowndata(res.data[0].data)
    //                 console.log(res.data[0].data);
    //             }).catch(error => {
    //                 console.log('error', error);
    //             });

    //         // setdropdowndata(result.data[0].data);
    //         // console.log(result.data[0].data);


    //     };

    //     fetchData();
    // }, []);


    // console.log(dropdowndata);
    // const getPosts = () => async (dispatch) => {
    //     try {
    //         const { datashow } = await axios.post(url)
    //             .then(res => {
    //                 let data = res.data;
    //                 var datah = data.data;
    //                 console.log(res.data.data);
    //                 // return datah.json();
    //                 // console.log(datah);
    //                 // return res
    //             }).catch(error => {
    //                 console.log('error', error);
    //             });
    //         // dispatch({ type: 'FETCH_ALL', payload: data })
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // console.log(JSONDATA);


    // console.log(datashow);


    // axios.post(url)
    //     .then(res => {
    //         let data = res.data;
    //         var datah = data.data;
    //         console.log(res.data.data);
    //     }).catch(error => {
    //         console.log('error', error);
    //     });









    // axios.post(url)
    //     .then(res => {
    //         let data = res.data;
    //         var datah = data.data;
    //         console.log(res.data.data);
    //     }).catch(error => {
    //         console.log('error', error);
    //     });

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(createPost(postData));
        // console.log(searchdata);
        // setSearchdata({ searchstring: '' });\


        // history.push({ pathname: `${pathnameS}` });
        window.location.href = `${pathnameS}`;
        // window.location.href = `/propertySearch`;
        // History.push("/propertySearch?q=Java");
        // console.log(pathnameS);
        // console.log(searchterm);
        setsearchterm("");
    }



    function searchclick() {
        if (dropdowndata == 'No Record Found') {

        } else {
            window.location.href = `${pathnameS}`;
        }
    }



    useEffect(() => {





        // const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
        //     .then(res => {
        //         if (res.data[0].error == true) {
        //             console.log(res.data[0]);
        //             setdropdowndata(res.data[0].message);
        //         } else {
        //             setdropdowndata(res.data[0].data);
        //             console.log(res.data[0].data);
        //             setpathnameS(`/propertySearch/${res.data[0].data[0].property_city}/${res.data[0].data[0].property_state}`);
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









    }, [searchterm]);


    function linkDirection(city, state) {
        window.location.href = `/affordable-apartments-for-rent/${city}-${state}`;
        localStorage.setItem("featureName", "");
    }

    // const handleSubmit = (e) => {
    //     // prevents default, so page won't reload on form submit
    //     e.preventDefault();
    //     // set language in state
    //     // setLanguage(input);
    //     // add query string to URL
    //     History.push('/search?q=' + input);
    //     // clear the input
    //     setsearchterm("");
    //   };

    return (

        <>
            <section className="bannerSection bannerSection1 itemWebsite1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 responsive0">
                            <div className="bannerSectionText text-center">
                                <h1 className="colorWhite">Find Your Perfect Affordable Home</h1>
                                <p className="colorWhite subTitle mb-0">The Right Location, The Right Price!</p>

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
                                                    placeholder="Enter City, State or ZIP"
                                                    value={searchterm}
                                                    onChange={
                                                        e => {
                                                            setsearchterm(e.target.value);
                                                            // console.log(searchterm);
                                                        }
                                                    }
                                                    required />

                                                <span className="searchBannerItem">
                                                    {/* {require('../../assets/img/searchHome3.png').default} */}
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
                                                                    <a href="javascript:void(0)" className='secondaryColor w-100 d-flex align-items-center'

                                                                        onClick={() => linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)}

                                                                    >



                                                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                        Use Your Current Location
                                                                    </a>
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
                                                                            <a href="javascript:void(0)" className='secondaryColor w-100 d-flex align-items-center' onClick={() => linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)}


                                                                            >
                                                                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                                Use Your Current Location
                                                                            </a>
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
                                                                                                    <a href="javascript:void(0)" className='secondaryColor w-100 d-block'




                                                                                                        onClick={() => linkDirection(val.property_city, val.property_state)}



                                                                                                    >
                                                                                                        {val.property_city.toLowerCase()
                                                                                                            .split(' ')
                                                                                                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                                                            .join(' ')}, {val.property_state}
                                                                                                    </a>
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

            <section className="bannerSection itemMobile1 bannerMobileSection1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 responsive0">
                            <div className="bannerSectionText bannerMobileText1">
                                <h1 className="colorWhite">Find Your Perfect Affordable Home</h1>
                                <p className="colorWhite subTitle mb-0">The Right Location, The Right Price!</p>

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
                                                                    <a href="javascript:void(0)" className='secondaryColor w-100 d-flex align-items-center'

                                                                        onClick={() => linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)}




                                                                    >
                                                                        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                        Use Your Current Location
                                                                    </a>
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
                                                                            <a href="javascript:void(0)" className='secondaryColor w-100 d-flex align-items-center'


                                                                                // to={`/propertySearch/${city == undefined ? null : city}/${statenames == undefined ? null : statenames}`}

                                                                                onClick={() => linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)}

                                                                            >
                                                                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                                Use Your Current Location
                                                                            </a>
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
                                                                                                    <a href="javascript:void(0)" className='secondaryColor w-100 d-block'

                                                                                                        onClick={() => linkDirection(val.property_city, val.property_state)}

                                                                                                    // to={`/propertySearch/${val.property_city}/${val.property_state}`}


                                                                                                    >
                                                                                                        {val.property_city.toLowerCase()
                                                                                                            .split(' ')
                                                                                                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                                                                                            .join(' ')}, {val.property_state}
                                                                                                    </a>
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
                                                {/* gh */}
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


        </>
    )
}

export default Banner