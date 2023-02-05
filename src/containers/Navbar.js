import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import '../assets/css/fontawesome.min.css'

import '../assets/css/responsive.css'

import EmailSubs from './EmailSubs'



import JSONDATA from '../containers/JSONS/MOCK.json'
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Modal from "react-modal";


import { Link, useLocation } from 'react-router-dom';
import { capitaliseFirstLetterOfWord } from './functions'


const Navbar = () => {

    const location = useLocation();
    // console.log(location.pathname);






    const [citynames, setcitynames] = useState();
    const [statenamess, setstatenamess] = useState();

    const [feature, setfeature] = useState();



    const params = new URLSearchParams(window.location.search);

    const para =
        useEffect(() => {
            const city = params.get('city');
            const state = params.get('state');
            const feature = params.get('feature');
            setfeature(feature);
            setstatenamess(state);
            setcitynames(city);
        }, [params]);














    const [city, setcity] = useState("");
    const [statenames, setstatenames] = useState("");

    const [latlngdata, setlatlngdata] = useState();

    let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    setlatlngdata(res.data)
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);


    useEffect(() => {
        if (latlngdata == undefined || latlngdata == null) {

        } else {
            setcity(latlngdata.city);
            setstatenames(latlngdata.region);
        }
    }, [latlngdata]);


    const [nearbycitiesdata, setnearbycitiesdata] = useState([]);
    // const [loadmore, setloadmore] = useState(false);
    // console.log(latlngdata);

    let nearbycitiesurl;
    if (latlngdata == null || latlngdata == undefined) {
        nearbycitiesurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbycities?lat=&lng=`
    } else {
        nearbycitiesurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbycities?lat=${latlngdata.lat}&lng=${latlngdata.lon}`
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbycitiesurl)
                .then(res => {
                    // console.log(res.data.data);
                    // setnearbycitiesdata(res.data.data);
                    localStorage.setItem("nearbycitiesdata", JSON.stringify(res.data.data));

                    // console.log('hiii');
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbycitiesurl]);







    // console.log(nearbycitiesdata);

    const [dropdowndata, setdropdowndata] = useState();

    const customStyles = {
        content: {
            width: 500,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    // console.log(props.location);
    // console.log(props.match);
    // console.log(props.history);

    var [navlinkclick, setNavlinkclick] = useState(false);

    const openNav = () => {
        setNavlinkclick(!navlinkclick);
    }

    const closenav = () => {
        setNavlinkclick(false)
    }

    const [isOpenLogin, setIsOpenLogin] = useState(false);

    function toggleModalLogin() {
        setIsOpenLogin(!isOpenLogin);
    }


    const [isOpenSignUp, setIsOpenSignUp] = useState(false);

    function toggleModalSignUp() {
        setIsOpenSignUp(!isOpenSignUp);
    }



    const [isOpenSubscribe, setIsOpenSubscribe] = useState(false);

    function toggleModalSubscribe() {
        setIsOpenSubscribe(!isOpenSubscribe);
    }






    const [pathnameS, setpathnameS] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(createPost(postData));
        // console.log(searchdata);
        // setSearchdata({ searchstring: '' });\


        // history.push({ pathname: `${pathnameS}` });
        window.location.href = `${pathnameS}`;
        // History.push("/propertySearch?q=Java");
        // console.log(pathnameS);
        // console.log(searchterm);
        setsearchterm("");
    }




    const [searchterm, setsearchterm] = useState("");

    const [showdropdown, setshowdropdown] = useState(false);

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
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState('')







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



    function linkDirection(city, state) {
        window.location.href = `/affordable-apartments-for-rent/${city}-${state}`;
        localStorage.setItem("featureName", "");
    }



    return (


        <>

            {/* 
            <Nav>
                    <NavLink exact activeClassName="activeclass" to="" activeStyle>Rentals</NavLink>
                    <NavLink exact activeClassName="activeclass" to="/senior-housing" activeStyle>Senior Housing</NavLink>
                    <NavLink exact activeClassName="activeclass" to="/section-8-housing" activeStyle>Section 8 Housing</NavLink>
                    <NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists" activeStyle>Housing Authority Waitlists</NavLink>
                
            </Nav> */}





            <StickyHeader
                header={
                    <section className="navbarSection">
                        <div className="mar15Res">
                            <nav className="navbar navbar-expand-lg navbar-light mobileDropdown nav_top_hedr" id="sticker">
                                <div className="itemMobile mobilea">
                                    <div className="hamburgerIcon" onClick={openNav}>
                                        <i className="fa fa-bars hamburgerClick"></i>

                                        {navlinkclick ?
                                            <>
                                                <div id="mySidenav" className="sidenav" style={{ width: "298px" }}>
                                                    <div className="sidenavBlock posRel">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>

                                                                <NavLink exact activeClassName="activeclass" to="/">Rentals</NavLink>

                                                            </li>
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                                    Housing</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                                    Authority Waitlists</NavLink>
                                                            </li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <ul className="noMarginPad listStyleNone sideBarMenu2">

                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/savedProperties">
                                                                    <span><img src={require('../assets/img/sideBar1.svg').default} /></span>Favourites
                                                                </a>     </li>

                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <span>
                                                                    <img src={require('../assets/img/sideBar2.svg').default} />
                                                                </span>Subscribe for Alerts
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="https://secure.rspcdn.com/xprr/red/PID/7238/SID/sid_here">
                                                                    <span><img src={require('../assets/img/resources.svg').default} /></span>Resources
                                                                </a>
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/list-with-us"><span><img src={require('../assets/img/sideBar3.svg').default} /></span>List
                                                                    with Us</a>
                                                            </li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <div className="sidenavBtn">
                                                            {/* <button onClick={toggleModalLogin}
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</button> */}
                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</a>

                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</a>
                                                            {/* <button onClick={toggleModalSignUp} className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="blackBackground" onClick={openNav} style={{ display: "block", opacity: "1", visibility: "visible" }}></div>
                                            </>
                                            :

                                            <>


                                                <div id="mySidenav" className="sidenav" style={{ width: "0" }}>
                                                    <div className="sidenavBlock posRel">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="">Rentals</NavLink>

                                                            </li>
                                                            <li >
                                                                <NavLink exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>
                                                            </li>
                                                            <li><NavLink exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                                Housing</NavLink></li>
                                                            <li><NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                                Authority Waitlists</NavLink></li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <ul className="noMarginPad listStyleNone sideBarMenu2">

                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/savedProperties">       <span><img src={require('../assets/img/sideBar1.svg').default} /></span>Favourites
                                                                </a>    </li>

                                                            <li className="d-flex align-items-center fontSize16 font-weight500" data-toggle="modal"
                                                                data-target="#exampleModalCenterAlert" >
                                                                <span><img src={require('../assets/img/sideBar2.svg').default} /></span>Subscribe for Alerts
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="https://secure.rspcdn.com/xprr/red/PID/7238/SID/sid_here">
                                                                    <span><img src={require('../assets/img/resources.svg').default} /></span>Resources
                                                                </a>
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/list-with-us"><span><img src={require('../assets/img/sideBar3.svg').default} /></span>List
                                                                    with Us</a>
                                                            </li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <div className="sidenavBtn">
                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</a>

                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</a>
                                                            {/* <button data-toggle="modal" data-target="#exampleModalCenter" onClick={toggleModalLogin}
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite">Log In</button>
                                                            <button className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</button> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="blackBackground" onClick={openNav} style={{ display: "none", opacity: "0", visibility: "visible" }}></div>



                                            </>

                                        }



                                    </div>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="activeclass" to="">Rentals</NavLink>

                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                    Housing</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                    Authority Waitlists</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="leftTopBar d-flex align-items-center itemWebsite">
                                    <div className="hamburgerIcon" onClick={openNav}>
                                        <i className="fa fa-bars hamburgerClick"></i>

                                        {navlinkclick ?
                                            <>
                                                <div id="mySidenav" className="sidenav" style={{ width: "298px" }}>
                                                    <div className="sidenavBlock posRel">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li >
                                                                <NavLink exact activeClassName="activeclass" to="">Rentals</NavLink>

                                                            </li>
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>
                                                            </li>
                                                            <li> <NavLink exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                                Housing</NavLink></li>
                                                            <li><NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                                Authority Waitlists</NavLink></li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <ul className="noMarginPad listStyleNone sideBarMenu2">

                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/savedProperties">      <span><img src={require('../assets/img/sideBar1.svg').default} /></span>Favourites
                                                                </a>    </li>

                                                            <li className="d-flex align-items-center fontSize16 font-weight500" data-toggle="modal"
                                                                data-target="#exampleModalCenterAlert" onClick={toggleModalSubscribe} >
                                                                <span><img src={require('../assets/img/sideBar2.svg').default} /></span>Subscribe for Alerts
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="https://secure.rspcdn.com/xprr/red/PID/7238/SID/sid_here">
                                                                    <span><img src={require('../assets/img/resources.svg').default} /></span>

                                                                    Resources
                                                                </a>
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/list-with-us"><span><img src={require('../assets/img/sideBar3.svg').default} /></span>List
                                                                    with Us</a>
                                                            </li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <div className="sidenavBtn">
                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</a>

                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</a>
                                                            {/* <button onClick={toggleModalLogin}
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</button>
                                                            <button onClick={toggleModalSignUp} className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</button> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="blackBackground" onClick={openNav} style={{ display: "block", opacity: "1", visibility: "visible" }}></div>

                                            </> :

                                            <>


                                                <div id="mySidenav" className="sidenav" style={{ width: "0" }}>
                                                    <div className="sidenavBlock posRel">
                                                        <ul className="noMarginPad listStyleNone">
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="">Rentals</NavLink>

                                                            </li>
                                                            <li >
                                                                <NavLink exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>

                                                            </li>
                                                            <li>
                                                                <NavLink exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                                    Housing</NavLink>
                                                            </li>
                                                            <li><NavLink exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                                Authority Waitlists</NavLink></li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <ul className="noMarginPad listStyleNone sideBarMenu2">

                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/savedProperties">    <span><img src={require('../assets/img/sideBar1.svg').default} /></span>Favourites
                                                                </a>   </li>

                                                            <li className="d-flex align-items-center fontSize16 font-weight500" data-toggle="modal"
                                                                data-target="#exampleModalCenterAlert" >
                                                                <span><img src={require('../assets/img/sideBar2.svg').default} /></span>Subscribe for Alerts
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="https://secure.rspcdn.com/xprr/red/PID/7238/SID/sid_here">
                                                                    <span><img src={require('../assets/img/resources.svg').default} /></span>Resources
                                                                </a>
                                                            </li>
                                                            <li className="d-flex align-items-center fontSize16 font-weight500">
                                                                <a href="/list-with-us"><span><img src={require('../assets/img/sideBar3.svg').default} /></span>List
                                                                    with Us</a>
                                                            </li>
                                                        </ul>
                                                        <div className="sideBarLine"></div>
                                                        <div className="sidenavBtn">
                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite w-100">Log In</a>

                                                            <a href='https://managers.rentalhousingdeals.com/index.php/site/login'
                                                                className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</a>
                                                            {/* <button data-toggle="modal" data-target="#exampleModalCenter" onClick={toggleModalLogin}
                                                                className="loginBtnSide brdrRadius4 fontSize16 font-weight700 text-center colorWhite">Log In</button>
                                                            <button className="lineBtnSignup brdrRadius4 fontSize16 font-weight700 text-center w-100 transition?">Sign Up</button> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="blackBackground" onClick={openNav} style={{ display: "none", opacity: "0", visibility: "hidden" }}></div>



                                            </>

                                        }



                                    </div>

                                    {/* <a className="navbar-brand" href="/">
                                        <img src={require('../assets/img/logo.svg').default} />
                                    </a> */}

                                    <NavLink exact activeClassName="activeclass" to="/">
                                        <img src={require('../assets/img/logo.svg').default} />
                                    </NavLink>

                                </div>





                                <a className="navbar-brand itemMobile" href="/">
                                    <img src={require('../assets/img/logo.svg').default} />
                                </a>











                                <div className="flex1 itemWebsite scrollBlock">
                                    <div className="searchNav searchNavsmallMar">
                                        <div className="posRel posRelIcon">
                                            {
                                                location.pathname == '/' || location.pathname == '/senior-housing' || location.pathname == '/section-8-housing'
                                                    ?
                                                    null :
                                                    <form onSubmit={handleSubmit}>
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
                                                                            setdropdowndata(res.data[0].data)
                                                                        }).catch(error => {
                                                                            console.log('error', error);
                                                                        });
                                                                }
                                                            }
                                                            required /> */}

                                                        <input type="text" className="form-control topSearch"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Enter city, State or ZIP code"
                                                            value={searchterm}
                                                            onChange={
                                                                e => {
                                                                    setsearchterm(e.target.value);
                                                                }
                                                            }
                                                            required />

                                                        <button type="submit"
                                                            onClick={() => {
                                                                // console.log("search button clicked");
                                                                // console.log(cityname);
                                                                // console.log(statename);
                                                                setpathnameS(`/propertySearch/${cityname}/${statename}`);
                                                            }}>
                                                            <img type="submit" src={require('../assets/img/searchBanner.svg').default} />
                                                        </button>
                                                    </form>
                                            }



                                            <ul className="serachDatadrop">
                                                {/* {
                                                    JSONDATA.filter((val) => {
                                                        if (searchterm == "") {
                                                            return ""
                                                        } else if (val.property_city.toLowerCase().includes(searchterm.toLowerCase())) {
                                                            return val
                                                        }
                                                    }).map((val, key) => {
                                                        return (
                                                            <p style={!showdropdown ? style1 : style}
                                                                onClick={() => {
                                                                    setsearchterm(val.property_city + ", " + val.property_state);
                                                                    setcityname(val.property_city);
                                                                    setstatename(val.property_state);
                                                                    toggleshow();
                                                                }}>
                                                                {val.property_city}, {val.property_state}
                                                            </p>
                                                        );
                                                    })
                                                } */}


                                                {/* {
                                                    dropdowndata == undefined || dropdowndata == null ? <></> :
                                                        dropdowndata.map((val) => {
                                                            return (
                                                                <p style={!showdropdown ? style1 : style}
                                                                    onClick={() => {
                                                                        setsearchterm(val.property_city + ", " + val.property_state);
                                                                        setcityname(val.property_city);
                                                                        setstatename(val.property_state);
                                                                        toggleshow();
                                                                    }}>
                                                                    {val.property_city}, {val.property_state}
                                                                </p>
                                                            );
                                                        })
                                                } */}






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
                                                                        <a className='secondaryColor w-100 d-block'
                                                                            href="javascript:void(0)"
                                                                            // href={`/propertySearch/${city == undefined ? null : city}/${statenames == undefined ? null : statenames}`}
                                                                            onClick={() => {
                                                                                setdropdowndata();
                                                                                setsearchterm('');
                                                                                linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)
                                                                            }}>
                                                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>

                                                                            Use Your Current Location
                                                                        </a>
                                                                    </p>
                                                                    <p>
                                                                        <Link className='secondaryColor w-100 d-block' to={null}>
                                                                            No Cities Found with {capitaliseFirstLetterOfWord(searchterm)} name
                                                                        </Link>

                                                                    </p>
                                                                </>
                                                                :
                                                                <>
                                                                    {
                                                                        <>
                                                                            <p>
                                                                                <a className='secondaryColor w-100 d-block'
                                                                                    href="javascript:void(0)"
                                                                                    // href={`/propertySearch/${city == undefined ? null : city}/${statenames == undefined ? null : statenames}`}
                                                                                    onClick={() => {
                                                                                        setdropdowndata();
                                                                                        setsearchterm(() => '');

                                                                                        linkDirection(city == undefined ? null : city, statenames == undefined ? null : statenames)
                                                                                    }}>
                                                                                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.208 16.712a.75.75 0 01-.469-1.425 5.564 5.564 0 003.548-3.548.75.75 0 011.425.469 7.064 7.064 0 01-4.504 4.504zM4.712 8.26a.75.75 0 01-1.425-.468 7.064 7.064 0 014.505-4.505.75.75 0 01.469 1.425A5.564 5.564 0 004.712 8.26zm11.522.479a.75.75 0 00.478-.947 7.065 7.065 0 00-4.504-4.505.75.75 0 00-.469 1.425 5.564 5.564 0 013.548 3.548.75.75 0 00.947.479zm-7.973 6.548a.75.75 0 01-.469 1.425 7.065 7.065 0 01-4.505-4.504.75.75 0 011.425-.469 5.564 5.564 0 003.549 3.548z" fill="#726F6C" /><path d="M10 7a3 3 0 110 6 3 3 0 010-6z" fill="#3db675" /></svg>
                                                                                    Use Your Current Location
                                                                                </a>
                                                                            </p>

                                                                            {dropdowndata.map((val) => {
                                                                                return (

                                                                                    <>
                                                                                        <p
                                                                                            onClick={() => {
                                                                                                setsearchterm(val.property_city + ", " + val.property_state);
                                                                                                setcityname(val.property_city);
                                                                                                setstatename(val.property_state);
                                                                                                toggleshow();
                                                                                                setsearchterm('');
                                                                                                setdropdowndata();
                                                                                            }}>
                                                                                            {
                                                                                                val.property_state == null || val.property_state == undefined ?
                                                                                                    `${val.property_city}, ${val.property_state}`
                                                                                                    :
                                                                                                    <a className='secondaryColor w-100 d-block'
                                                                                                        href="javascript:void(0)"
                                                                                                        // href={`/propertySearch/${val.property_city}/${val.property_state}`}
                                                                                                        onClick={() => {
                                                                                                            setdropdowndata();
                                                                                                            setsearchterm(() => '');
                                                                                                            linkDirection(val.property_city, val.property_state);
                                                                                                        }}
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
                                                                            })}
                                                                        </>
                                                                    }
                                                                </>
                                                        )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto itemWebsite">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <NavLink className={`${feature == undefined && window.location.href.includes('propertySearch') ? 'activeclass' : null}`} exact activeClassName="activeclass" to="">Rentals</NavLink>

                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={`${feature == 'senior' ? 'activeclass' : null}`} exact activeClassName="activeclass" to="/senior-housing">Senior Housing</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={`${feature == 'section' ? 'activeclass' : null}`} exact activeClassName="activeclass" to="/section-8-housing">Section 8
                                                    Housing</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={`${feature == undefined && window.location.href.includes('housing-authority-waiting-lists') ? 'activeclass' : null}`} exact activeClassName="activeclass" to="/housing-authority-waitlists">Housing
                                                    Authority Waitlists</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="itemWebsite">
                                    {/* <button className="loginBtn font-weight700 colorWhite transition brdrRadius4" onClick={toggleModalLogin}>Log In</button> */}
                                    <a href='https://managers.rentalhousingdeals.com/index.php/site/login' className="loginBtn font-weight700 colorWhite transition brdrRadius4" >Log In</a>
                                </div>
                                <div className="itemMobile ml-auto">
                                    <a href='https://managers.rentalhousingdeals.com/index.php/site/login' className="loginBtn font-weight700 colorWhite transition brdrRadius4" >Log In</a>

                                    {/* <button className="loginBtn font-weight700 colorWhite transition brdrRadius4" onClick={toggleModalLogin}>Log In</button> */}
                                </div>
                            </nav>

                            {/* <div className="modal fade rentalModal loginModal loginModall alertModal" id="exampleModalCenterAlert"
                                tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body rentalForm">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">
                                                    <img src={require('../assets/img/close2.png').default} />
                                                </span>
                                            </button>
                                            <div className="alertWidth">
                                                <div className="media">
                                                    <img className="align-self-start mr-3" src={require('../assets/img/bell.svg').default} alt="Image" />
                                                    <div className="media-body" >
                                                        <h2 className="mt-0 mb-0 font-weight400">Sign up for waitlist alerts.<b>No spam</b>
                                                        </h2>
                                                        <div className="d-flex align-items-center inputField posRel">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control"
                                                                     placeholder="Email Address" aria-label="Username"
                                                                    aria-describedby="basic-addon1" />
                                                            </div>
                                                            <a className="getAlerted getAlertedGreen brdrRadius4">Get Alerted</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}





                        </div>





















                        <Modal isOpen={isOpenSubscribe}
                            onRequestClose={toggleModalSubscribe}
                            style={customStyles}
                            className='modalVertCentr rentalModal loginModal loginModall subscribeclass '>

                            <div className="modal-header">
                                <button type="button" className="close" aria-label="Close" onClick={toggleModalSubscribe}>
                                    <span aria-hidden="true">
                                        <img src={require('../assets/img/loginModalClose.png').default} />
                                    </span>
                                </button>
                            </div>

                            <div className="modal-body alertModalForm rentalForm modalBtnAlert">
                                <EmailSubs />
                            </div>
                        </Modal>



                        <Modal isOpen={isOpenSignUp}
                            onRequestClose={toggleModalSignUp}
                            style={customStyles}
                            className='rentalModal loginModal loginModall'>


                            <div className="modal-header">
                                <button type="button" className="close" onClick={toggleModalSignUp} aria-label="Close">
                                    <span aria-hidden="true">
                                        <img src={require('../assets/img/loginModalClose.png').default} />
                                    </span>
                                </button>
                                <h5 className="modal-title" id="exampleModalLongTitle font-weight700">Register</h5>
                            </div>
                            <div className="modal-body rentalForm">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email Address <span
                                        className="colorRed fontSize12">*</span></label>
                                    <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                        placeholder="" value="Jonathan@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex align-items-center">
                                        <label for="exampleInputEmail1">Create Password <span
                                            className="colorRed fontSize12">*</span></label>
                                    </div>
                                    <input type="password" className="form-control" id="" aria-describedby="emailHelp"
                                        placeholder="Password" />
                                </div>
                                <div className="form-group mb-0">
                                    <div className="d-flex align-items-center">
                                        <label for="exampleInputEmail1">Confirm Password <span
                                            className="colorRed fontSize12">*</span></label>
                                    </div>
                                    <input type="password" className="form-control" id="" aria-describedby="emailHelp"
                                        placeholder="Password" />
                                </div>
                                <button className="greenLongBtn brdrRadius4 w-100 font-weight500">
                                    Register
                                </button>

                                <div className="socialBtns">
                                    <div className="socialButton d-flex justify-content-center posRel facebook transition">
                                        <img src={require('../assets/img/facebook.png').default} />
                                        <p className="mb-0 font-weight500 colorBlue">Sign up with Facebook</p>
                                    </div>
                                    <div className="socialButton d-flex justify-content-center posRel facebook transition">
                                        <img src={require('../assets/img/google.png').default} />
                                        <p className="mb-0 font-weight500 colorBlue">Sign up with Google</p>
                                    </div>
                                </div>
                            </div>

                            <div className="signUp text-center padLow">
                                <p className="mb-0">Already have an account?</p>
                                <span className="purpleText fontSize14 font-weight700 curserPointer" onClick={() => {
                                    toggleModalLogin();
                                    toggleModalSignUp();
                                }} >Login</span>
                            </div>


                        </Modal>




                        <Modal isOpen={isOpenLogin}
                            onRequestClose={toggleModalLogin}
                            style={customStyles}
                            className='rentalModal loginModal loginModall'>



                            <div className="modal-header">
                                <button type="button" className="close" aria-label="Close" onClick={toggleModalLogin}>
                                    <span aria-hidden="true">
                                        <img src={require('../assets/img/loginModalClose.png').default} />
                                    </span>
                                </button>
                                <h5 className="modal-title" id="exampleModalLongTitle font-weight700">Login</h5>
                            </div>
                            <div className="modal-body rentalForm">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email Address <span
                                        className="colorRed fontSize12">*</span></label>
                                    <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                        placeholder="" value="Jonathan@gmail.com" />
                                </div>
                                <div className="form-group mb-0">
                                    <div className="d-flex align-items-center">
                                        <label for="exampleInputEmail1">Password <span
                                            className="colorRed fontSize12">*</span></label>
                                        <div className="ml-auto forgotTag">
                                            <a href="#" className="purpleText fontSize12 font-weight700">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <input type="password" className="form-control" id="" aria-describedby="emailHelp"
                                        placeholder="Password" />
                                </div>
                                <button className="greenLongBtn brdrRadius4 w-100 font-weight500">Login</button>
                                <div className="socialBtns">
                                    <div className="socialButton d-flex justify-content-center posRel facebook transition">
                                        <img src={require('../assets/img/facebook.png').default} />
                                        <p className="mb-0 font-weight500 colorBlue">Log In with Facebook</p>
                                    </div>
                                    <div className="socialButton d-flex justify-content-center posRel facebook transition">
                                        <img src={require('../assets/img/google.png').default} />
                                        <p className="mb-0 font-weight500 colorBlue">Log In with Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="signUp text-center">
                                <p className="mb-0">Don’t have an account?</p>
                                <span className="purpleText fontSize14 font-weight700 curserPointer" onClick={() => {
                                    toggleModalLogin();
                                    toggleModalSignUp();
                                }}
                                >Register</span>
                            </div>
                        </Modal>
































                    </section>
                }>
            </StickyHeader>





        </>






    )
}
export default Navbar