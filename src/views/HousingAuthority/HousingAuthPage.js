import React, { useState, useEffect } from 'react'
import Emailsubs2 from '../../containers/Emailsubs2'
import PopularCities from '../../containers/PopularCities';
import AffordabilityCal from '../AgencyDetail/AffordabilityCal'
import PropertiesNearby from '../Index/PropertiesNearby';
import { HousingAuthAgencyList } from './HousingAuthAgencyList';
import { NearbyAgenciesAccordion } from './NearbyAgenciesAccordion';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts'

import { useHistory } from "react-router";

import axios from 'axios'
import JSONDATA from '../../containers/JSONS/MOCK.json'
import { Link } from 'react-router-dom';
import Loader from '../../containers/Loader';

import RentalAssistance from '../../containers/RentalAssistance'
import Fbpage from '../fbpage/Fbpage.js';
import GoogleADS from '../../containers/GoogleADS';
import { Helmet } from 'react-helmet';
import { addDash, capitaliseFirstLetterOfWord } from '../../containers/functions';

const HousingAuthPage = () => {
    document.title = "Housing Authority - Rental Housing Deals"


    const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();



    const [latlngdata, setlatlngdata] = useState();

    let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    // if (res.data.hasOwnProperty('lat') && res.data.hasOwnProperty('lon')) {
                    //     setlatlngdata(res.data);
                    // } else {
                    //     setlatlngdata(staticlatlng);
                    // }
                    setlatlngdata(res.data);
                    setcity(res.data.city);
                    setstatenames(res.data.region);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);


    // console.log(latlngdata);


    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    // console.log(today.toLocaleDateString("hi-IN", options));

    const [searchterm, setsearchterm] = useState("");
    const [showdropdown, setshowdropdown] = useState(false);
    const [loadmore, setloadmore] = useState(false);

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

    const [searchdata, setSearchdata] = useState({ searchstring: '' });
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


    const [housingauthdata, sethousingauthdata] = useState([]);


    const housingauthUrl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/publichousingwaitlist';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(housingauthUrl)
                .then(res => {
                    sethousingauthdata(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [housingauthUrl]);


    // console.log(housingauthdata);

    const [countydata, setcountydata] = useState([]);


    let countyfactsurl;

    if (latlngdata == undefined || latlngdata == [] || latlngdata == null) {
        countyfactsurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbyCountyfacts?state=&city=`;
    }
    else {
        countyfactsurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbyCountyfacts?state=${latlngdata.region}&city=${latlngdata.city}`;
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(countyfactsurl)
                .then(res => {
                    setcountydata(res.data.data);
                    // //console.log(res);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [countyfactsurl]);



    let nearbypropurl;

    const [nearbypropdata, setnearbypropdata] = useState([]);

    if (latlngdata == undefined || latlngdata == [] || latlngdata == null) {
        nearbypropurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=&city=`;
    }
    else {
        nearbypropurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=${latlngdata.region}&city=${latlngdata.city}`;
    }


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbypropurl)
                .then(res => {
                    setnearbypropdata(res.data.data)
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbypropurl]);




    let nearbyagencyurl;

    const [nearbyagencydata, setnearbyagencydata] = useState([]);

    if (latlngdata == undefined || latlngdata == [] || latlngdata == null) {
        nearbyagencyurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/HousingAuthorityNearby?state=&city=`;
    }
    else {
        nearbyagencyurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/HousingAuthorityNearby?state=${latlngdata.region}&city=${latlngdata.city}`;
    }


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbyagencyurl)
                .then(res => {
                    setnearbyagencydata(res.data.data);
                    // console.log(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbyagencyurl]);



    useEffect(() => {
        const result = axios.post(`https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/dropdown-search?keyword=${searchterm}`)
            .then(res => {
                if (res.data[0].error == true) {
                    setdropdowndata(res.data[0].message)
                } else {
                    setdropdowndata(res.data[0].data);
                }
            }).catch(error => {
                console.log('error', error);
            });
    }, [searchterm]);


    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618, 632,633);
    ezstandalone.enable();
    ezstandalone.display();
    });`

    return (
        <>

            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>
            <section className="secPad24 agenciesLanding pb-0 housingAuthoritya topPaddSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item fontSize14 active"><a href="/housing-authority-waitlists">Housing Authority</a></li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="agencyLandingLeftSec">
                                <div className="topTitle mt-2">
                                    <h1 className="colorBlue font-weight700 fontSize24">Search for Free Rental Assistance Near You!</h1>
                                    <p className="para fontSize16 mb-0">FIND YOUR LOCAL PUBLIC HOUSING AGENCY / Housing Authorities
                                        can help you connect with affordable housing in your community.</p>
                                </div>
                                <div className="searchHousingBox">

                                    <h4 className="colorBlue font-weight700">Search Housing Authority by City, State, or ZIP</h4>
                                    <div className="d-flex align-items-center searchInputBlock searchInputBlockAgency posRel">
                                        <form className="w-100 d-flex align-items-center" onSubmit={handleSubmit}>


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


                                            <span className="searchBannerItem searchBannerItemagency"> <img src={require('../../assets/img/searchBanner.svg').default} /></span>
                                            <ul className="serachDatadrop">
                                                {
                                                    searchterm == null || searchterm == undefined || searchterm == '' || dropdowndata == undefined || dropdowndata == null || dropdowndata == ''
                                                        ?
                                                        <></>
                                                        :
                                                        (
                                                            dropdowndata == 'No Record Found'
                                                                ?
                                                                // <p style={!showdropdown ? style1 : style}>
                                                                //     No Record Found
                                                                // </p>
                                                                <>
                                                                    <p
                                                                    // style={!showdropdown ? style1 : style}
                                                                    >
                                                                        <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(city)}-${statenames}`}>
                                                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                            Use Your Current Location
                                                                        </Link>
                                                                    </p>
                                                                    <p
                                                                    // style={!showdropdown ? style1 : style}
                                                                    >
                                                                        <Link className='secondaryColor w-100 d-block' to={null}>

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
                                                                                <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(city)}-${statenames}`}>
                                                                                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                                    Use Your Current Location
                                                                                </Link>
                                                                                {/* Use Your Current Location */}
                                                                            </p>

                                                                            {dropdowndata.map((val) => {
                                                                                return (

                                                                                    <>
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
                                                                                                    <Link className='secondaryColor w-100 d-block' to={`/housing-authority-waiting-lists/${addDash(val.property_city)}-${val.property_state}`}>
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
                                                                            })}
                                                                        </>
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
                                <div className="d-flex align-items-center flex-row subTitleHead">
                                    <div>
                                        <h2 className="mb-0 fontSize18">Section 8 Voucher And Public Housing Waitlist Openings Near You</h2>
                                        <p className="mb-0 fontSize14 ml-auto secondaryColor itemMobile">As of {today.toLocaleDateString("en-US", options)}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="mb-0 fontSize14 ml-auto secondaryColor itemWebsite">As of {today.toLocaleDateString("en-US", options)}
                                        </p>
                                    </div>
                                </div>



                                {/* <div className="dateTitle para font-weight500 fontSize16">
                                    OCTOBER 2021
                                </div> */}


                                <div className="agencylandingListing agencylandingListing2">
                                    <ul className="noMarginPad listStyleNone">

                                        {
                                            housingauthdata.length !== 0
                                                ?
                                                (
                                                    loadmore == false
                                                        ?
                                                        housingauthdata.slice(0, 5).map((data) => {
                                                            return (
                                                                <li className="brdrRadius4">
                                                                    <HousingAuthAgencyList data={data} />
                                                                </li>
                                                            );
                                                        })
                                                        :
                                                        housingauthdata.map((data) => {
                                                            return (
                                                                <li className="brdrRadius4">
                                                                    <HousingAuthAgencyList data={data} />
                                                                </li>
                                                            );
                                                        })
                                                ) :
                                                <li>
                                                    <Loader />
                                                </li>



                                        }
                                    </ul>
                                </div>



                                <div>
                                    {
                                        loadmore == false ?
                                            <span className="loadMore transition" onClick={() => { setloadmore(true) }}>Load More</span>
                                            :
                                            <span className="loadMore transition" onClick={() => { setloadmore(false) }}>Load Less</span>
                                    }
                                </div>


                                <div >
                                    <GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
                                </div>

                                <Emailsubs2 />

                                <RentalAssistance />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 itemWebsite">
                            <div className="agencyLandingRightSec detailRightSec">

                                <div className="mb-24">
                                    <Fbpage />
                                </div>

                                {
                                    nearbyagencydata == undefined || nearbyagencydata == null || nearbyagencydata == '' ?
                                        null :

                                        <NearbyAgenciesAccordion data={nearbyagencydata} />
                                }

                                <div>
                                    <GoogleADS placeholderId='632' width='300px' height='250px' slotno='3854651772' />
                                </div>


                                <AffordabilityCal />





                                <CityCountyQuickFacts propincome={countydata} />


                                <div>
                                    <GoogleADS placeholderId='633' width='300px' height='250px' slotno='4974014528' />
                                </div>


                                <div className="margin24">
                                    <Fbpage />
                                    {/* <img className="w-100" src={require('../../assets/img/image147.png').default} /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 pl-0 pr-0">
                            <div className="housingNearby mb-0">
                                {/* <!--section 8 housing nearby--> */}
                                <section className="housingNearby resPonsivePad">
                                    <div className="">

                                        <div className="row marginTop">
                                            <div className="col-lg-12 paddingaa">

                                                <PropertiesNearby propertynearby={nearbypropdata} titletext={"Affordable Properties Near You"} />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HousingAuthPage
