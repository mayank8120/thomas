import React, { useState, useEffect } from 'react'
import { AgencyStateListItem } from './AgencyStateListItem'
import MapSection from './MapSection'
import SearchSection from './SearchSection'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Maptile from './Maptile';

import L from 'leaflet'
import Maptile1 from './Maptile1'
import Loader from '../../containers/Loader'
import Footer from '../../containers/Footer.js'
import GoogleADS from '../../containers/GoogleADS'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { addDash, capitaliseFirstLetterOfWord, prerenderApiCall } from '../../containers/functions'
const AgencyState = () => {

    document.title = `Rental Housing Deals`;
    const [fourpage, setfourpage] = useState(4);

    const [counter, setcounter] = useState(0);

    const [city, setcity] = useState("");
    const [statename, setstatename] = useState("");
    // const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");

    const [searchresultdata, setsearchresultdata] = useState([]);

    const [totalcount, settotalcount] = useState();
    const [initialpage, setinitialpage] = useState(1);
    const [lastpage, setlastpage] = useState();
    const [currentpage, setcurrentpage] = useState(1);

    const [paginationopen, setpaginationopen] = useState(false);


    const [latlngdata, setlatlngdata] = useState();

    const [locationCity, setlocationCity] = useState("");
    const [locationState, setlocationState] = useState("")
    let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    // setlatlngdata(res.data);
                    // setcity(res.data.city);
                    // setstatenames(res.data.region);
                    setlatlngdata(res.data);
                    // setlocationCity(res.data.city);
                    // setlocationState(res.data.region);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);





    useEffect(() => {
        prerenderApiCall();
    }, [])






    var paginationarray = [];
    for (var i = 1; i <= lastpage; i++) {
        paginationarray.push(i);
    }

    let tagarray;
    if (fourpage == undefined) {
    } else {
        tagarray = [
            <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 3)
                setsearchresultdata();
            }} >{fourpage - 3}</li>
            ,
            <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 2)
                setsearchresultdata();
            }}>{fourpage - 2}</li>
            ,
            <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage - 1)
                setsearchresultdata();
            }}>{fourpage - 1}</li>
            ,
            <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage)
                setsearchresultdata();
            }}>{fourpage}</li>
            ,
            <li className={`${currentpage == fourpage + 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 1)
                setsearchresultdata();
            }}>{fourpage + 1}</li>
            ,
            <li className={`${currentpage == fourpage + 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 2)
                setsearchresultdata();
            }}>{fourpage + 2}</li>
            ,
            <li className={`${currentpage == fourpage + 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                setcurrentpage(fourpage + 3)
                setsearchresultdata();
            }}>{fourpage + 3}</li>
        ];
    }






    useEffect(() => {
        if (currentpage >= lastpage - 2) {
            setfourpage(4);
        }
    }, [currentpage]);



    let parameters = useParams();

    // const  = new URLSearchParams(window.location.search);
    // const authdetail =
    useEffect(() => {
        // const city = params.get('city');
        // const states = params.get('state');
        // setcity(city);
        // setstatename(states.toUpperCase());

        if (parameters.stateAbbrRedirectFix && parameters.cityNameRedirectFix) {
            localStorage.clear()
            window.location.href = "/housing-authority-waiting-lists/" + parameters.cityNameRedirectFix.replace(/\s+/g, '-') + "-" + parameters.stateAbbrRedirectFix;
        }

        const text = parameters.searchText;

        const city = text.slice(0, -3).split('-').join(' ');
        const states = text.slice(-2);
        if (text.slice(-3, -2) == "-") {
            setcity(city);
        }
        setstatename(states.toUpperCase());

    }, [parameters]);
    // console.log(city, statename);

    let housngAPIurl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/housing-authorities?state=CA&city=los angeles'
    let housingAPIurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/housing-authorities?city=${city.toUpperCase()}&state=${statename.toUpperCase()}&page=${currentpage}`

    useEffect(() => {
        const fetchData = async () => {
            if (statename == 'undefined' || statename == '' || statename == null) {
            }
            else {
                setsearchresultdata([]);
                const result = await axios.post(housingAPIurl)
                    .then(res => {
                        if (res.data.error == true) {
                            setsearchresultdata(res.data.message);
                        } else {
                            setsearchresultdata(res.data.data);
                            settotalcount(res.data.count);
                            setlastpage((parseInt((res.data.count) / 25, 10) + 1));
                        }
                    }).catch(error => {
                        console.log('error', error);
                    });
            }
        };
        fetchData();
    }, [housingAPIurl]);


    const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(142,618, 619,621);
    ezstandalone.enable();
    ezstandalone.display();
    });`

    // console.log(searchresultdata);


    return (
        <>

            <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet>
            <section className="listingPage secPad16 responsiveSecPad0 agencystate-page">
                <div className="container2">
                    <div className="row">

                        <div className="listting-search-left">

                            <div className="listingSection map-filter-section">
                                <div className="cst pd-12 responsiveCst">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <nav className="navbar resNavbarBread breadleftmargin mb-3" aria-label="breadcrumb">
                                            <ol className="breadcrumb font-weight500 mb-0">
                                                <li className="breadcrumb-item fontSize14 "><a href="/" className="purpleText">Home</a></li>
                                                <li className="breadcrumb-item fontSize14"><a href="/housing-authority-waitlists" className="purpleText">Housing
                                                    Authority</a></li>
                                                <li className="breadcrumb-item fontSize14 "><a href={`/housing-authority-waiting-lists/${statename}`} className="purpleText">{statename == undefined || statename == '' ? null : statename}</a></li>
                                                {city == undefined || city == '' ? null : <li className="breadcrumb-item fontSize14 active"><a href={`/housing-authority-waiting-lists/${addDash(city)}-${statename}`} className="">{city == undefined || city == '' ? null : capitaliseFirstLetterOfWord(city)}</a></li>}

                                            </ol>
                                        </nav>
                                    </div>
                                    <SearchSection latlngdata={latlngdata} />
                                    <div className="d-flex align-items-center headingTab itemWebsite">
                                        <h1 className="colorBlue font-weight700 mb-0 fontSize18">Housing Authority in or near {city == undefined || city == '' ? null : `${capitaliseFirstLetterOfWord(city)},`} {statename == undefined || statename == '' ? null : statename}</h1>
                                        {/* <ul className="noMarginPad listStyleNone itemMobile ml-auto tabiIconResponsive">
                                            <li>
                                                <img src={require('../../assets/img/mapIcon.png').default} />
                                                <p className="mb-0 purpleText font-weight400">Map</p>
                                            </li>
                                            <li style={{ display: "none" }}>
                                                <img src={require('../../assets/img/list.png').default} />
                                                <p className="mb-0 purpleText font-weight400">List</p>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>

                            <div className="listingSection">

                                <div className="agencyStateList">

                                    <div className="propertyListState propertyListScroll boxscroll4">

                                        <div className="wrapperScroll">
                                            <ul className="noMarginPad listStyleNone">
                                                {

                                                    searchresultdata == undefined || searchresultdata == '' || searchresultdata.length == 0 || searchresultdata == null ?
                                                        <>
                                                            <Loader />
                                                        </>
                                                        :
                                                        searchresultdata == 'No Record Found'
                                                            ?
                                                            <h1>{searchresultdata}</h1>
                                                            :
                                                            searchresultdata.map(
                                                                (data, index) => (
                                                                    <>
                                                                        {/* {
                                                                            index == 4 ?
                                                                                <li className="listState">
                                                                                    <GoogleADS placeholderId='618' width='696px' height='200px' slotno='6665520080' />
                                                                                </li>
                                                                                :
                                                                                null
                                                                        }
                                                                        {
                                                                            index == 9 ?
                                                                                <li className="listState">
                                                                                    <GoogleADS placeholderId='619' width='696px' height='200px' slotno='6293112857' />

                                                                                </li>
                                                                                :
                                                                                null
                                                                        } */}

                                                                        < li className="listState" >
                                                                            <AgencyStateListItem data={data} />

                                                                        </li>
                                                                        {/* //     <li className="listingBlock2 responsive-15">
                                                                    //     <AgencyStateListItem data={data} />

                                                                    // </li> */}
                                                                    </>
                                                                )
                                                            )
                                                }

                                                {/* {searchresultdata.map((data) => (
                                                    <AgencyStateListItem data={data} />
                                                ))} */}
                                            </ul>
                                        </div>
                                    </div>

                                    {
                                        lastpage == undefined || lastpage == 0 || lastpage == '' ? null :
                                            <div className="pagination">
                                                <ul className="noMarginPad listStyleNone">

                                                    {
                                                        currentpage == 1
                                                            ?
                                                            null
                                                            :
                                                            <li className="paginationNum arrowRight" onClick={() => {
                                                                if (currentpage <= 4) {
                                                                    setcurrentpage(currentpage - 1);
                                                                    setsearchresultdata();
                                                                }
                                                                else {
                                                                    setfourpage(currentpage - 1);
                                                                    setcurrentpage(currentpage - 1);
                                                                    setsearchresultdata();
                                                                }
                                                            }}>
                                                                <img src={require('../../assets/img/checvronpl.png').default} />
                                                            </li>
                                                    }




                                                    {
                                                        // paginationopen == true ?
                                                        //     paginationarray.map((data) => (
                                                        //         currentpage == data ?
                                                        //             <li className="active paginationNum" onClick={() => {
                                                        //                 setcurrentpage(data);
                                                        //                 setsearchresultdata();
                                                        //             }}>{data}</li>
                                                        //             :
                                                        //             <li className="paginationNum" onClick={() => {
                                                        //                 setcurrentpage(data);
                                                        //                 setsearchresultdata();
                                                        //             }}>{data}</li>
                                                        //     ))
                                                        //     :
                                                        <>
                                                            {
                                                                lastpage < 8
                                                                    ?

                                                                    (tagarray.slice(0, lastpage).map((data) => {
                                                                        return (
                                                                            data
                                                                        );
                                                                    }))
                                                                    :
                                                                    <>
                                                                        <li className={`${currentpage == fourpage - 3 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(fourpage - 3)
                                                                            setsearchresultdata();
                                                                        }} >{fourpage - 3}</li>

                                                                        <li className={`${currentpage == (fourpage - 2) ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(fourpage - 2)
                                                                            setsearchresultdata();
                                                                        }}>{fourpage - 2}</li>

                                                                        <li className={`${currentpage == fourpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(fourpage - 1)
                                                                            setsearchresultdata();
                                                                        }}>{fourpage - 1}</li>

                                                                        <li className={`${currentpage == fourpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(fourpage)
                                                                            setsearchresultdata();
                                                                        }}>{fourpage}</li>
                                                                    </>
                                                            }






                                                            {
                                                                lastpage > 7
                                                                    ?
                                                                    <>
                                                                        <li className="dotsBlock">...</li>

                                                                        <li className={`${currentpage == lastpage - 2 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(lastpage - 2)
                                                                            setsearchresultdata();
                                                                        }}>{lastpage - 2}</li>

                                                                        <li className={`${currentpage == lastpage - 1 ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(lastpage - 1)
                                                                            setsearchresultdata();
                                                                        }}>{lastpage - 1}</li>

                                                                        <li className={`${currentpage == lastpage ? "active paginationNum" : "paginationNum"}`} onClick={() => {
                                                                            setcurrentpage(lastpage)
                                                                            setsearchresultdata();
                                                                        }}>{lastpage}</li>
                                                                    </>
                                                                    :
                                                                    null
                                                            }


                                                        </>
                                                    }

                                                    {
                                                        currentpage == lastpage
                                                            ?
                                                            null
                                                            :
                                                            <li className="paginationNum arrowRight" onClick={() => {
                                                                if (currentpage >= 4) {
                                                                    setfourpage(currentpage + 1);
                                                                    setcurrentpage(currentpage + 1);
                                                                    setsearchresultdata();
                                                                }
                                                                else {
                                                                    setcurrentpage(currentpage + 1);
                                                                    setsearchresultdata();
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
                                    {/* <div className="pagination">
                                        <ul className="noMarginPad listStyleNone">
                                            <li className="active paginationNum">1</li>
                                            <li className="paginationNum">2</li>
                                            <li className="paginationNum">3</li>
                                            <li className="paginationNum">4</li>
                                            <li className="dotsBlock">...</li>
                                            <li className="paginationNum">37</li>
                                            <li className="paginationNum">38</li>
                                            <li className="paginationNum">39</li>
                                            <li className="paginationNum arrowRight"><img src={require('../../assets/img/rightArrowo.png').default} /></li>
                                        </ul>
                                        <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing 1-25
                                            of 1,231 Results</p>
                                    </div> */}
                                </div>
                            </div>

                            <Footer />
                        </div>










                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 pr-0 pl-0 customFlexPercntRight">
                            <div className="map-fixed">


                                <div className="itemWebsite">
                                    <div>
                                        <GoogleADS placeholderId='142' width='728px' height='90px' slotno='7791749557' />
                                    </div>
                                    {/* <img className="" src={require('../../assets/img/advertisement1.png').default} />  */}
                                </div>

                                <div>
                                    <GoogleADS placeholderId='621' width='728px' height='90px' slotno='3956446321' />
                                </div>

                                <div className="row mapSectionArea widthBlock100">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapRight0 widthBlock70">
                                        <div className="posRel">
                                            <div className='map'>
                                                <div className="row">
                                                    <div className="col">
                                                        {
                                                            searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == null ?
                                                                <Loader />
                                                                :
                                                                searchresultdata == 'No Record Found' ?
                                                                    <h1>{searchresultdata}</h1>
                                                                    :
                                                                    <>
                                                                        <MapContainer center={
                                                                            searchresultdata[0].HADetail[0].hasOwnProperty('lat') &&
                                                                                searchresultdata[0].HADetail[0].hasOwnProperty('lng') ?

                                                                                [searchresultdata[0].HADetail[0].lat, searchresultdata[0].HADetail[0].lng]
                                                                                :
                                                                                [0, 0]} zoom={7} scrollWheelZoom={true}>
                                                                            <TileLayer
                                                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                                            <Maptile1 searchresultdata={searchresultdata} />
                                                                        </MapContainer>
                                                                    </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <MapSection /> */}
                        {/* <div className="row">
                            <div className="col">
                                {
                                    searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == null ?
                                        <Loader />
                                        :
                                        searchresultdata == 'No Record Found' ?
                                            <h1>{searchresultdata}</h1>
                                            :
                                            <MapContainer center={
                                                searchresultdata[0].HADetail.hasOwnProperty('lat') &&
                                                    searchresultdata[0].HADetail.hasOwnProperty('lng') ?

                                                    [searchresultdata[0].HADetail.lat, searchresultdata[0].HADetail.lng]
                                                    :
                                                    [0, 0]} zoom={9} scrollWheelZoom={true}>
                                                <TileLayer
                                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />

                                                <Maptile1 searchresultdata={searchresultdata} />
                                            </MapContainer>
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}


export default AgencyState