import React, { useState } from 'react'
import MapSection from './MapSection'
// import { Button, Modal } from 'react-bootstrap';
// import { Scrollbar } from "react-scrollbars-custom";
import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import MultiRangeSlider from '../../containers/multiRangeSlider';
import Multiselect from 'multiselect-react-dropdown';
import Footer from '../../containers/Footer';
const ListhubSearch = () => {
    document.title = "Listhub Search - Rental Housing Deals"


    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [isOpen, setIsOpen] = useState(false);

    // function toggleModal() {
    //     setIsOpen(!isOpen);
    // }

    // const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    // function toggleModalAvailability() {
    //     setIsOpenAvailability(!isOpenAvailability);
    // }

    const [isOpenFilter, setIsOpenFilter] = useState(false);

    function toggleModalFilter() {
        setIsOpenFilter(!isOpenFilter);
    }


    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }




    return (
        <>
            <section className="listingPage secPad16 propertySearchPage listingSerach premium">
                <div className="container2">
                    <div className="row">


                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 customFlexPercntLeft webMarLeft0 paddingLeft0 paddingRight0">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginbread">
                                <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                    <ol className="breadcrumb font-weight500 mb-0">
                                        <li className="breadcrumb-item fontSize14"><a href="" className="purpleText">Home</a></li>
                                        <li className="breadcrumb-item fontSize14 active"><a href="/housing-authority-waitlists">ListhubSearch</a></li>
                                    </ol>
                                </nav>
                            </div>
                            {/* <CheckAvailibilityForm */}
                            <div className="listingSection">
                                <h3 className="font-weight400 mb-0">Apartments for rent in or near <span
                                    className="font-weight700">Acton, MA</span></h3>
                                <div className="tagList d-flex align-items-center">

                                    <div className="mr-1 w146">


                                        <Multiselect
                                            isObject={false}
                                            onRemove={function noRefCheck() { }}
                                            onSearch={function noRefCheck() { }}
                                            onSelect={function noRefCheck() { }}
                                            options={[
                                                'Rental Deals',
                                                'Senior Housing',
                                                'Section 8 Housing'
                                            ]}
                                            placeholder="Apartment Type"
                                            showCheckbox
                                            style={{
                                                chips: {
                                                    display: 'none'
                                                },
                                                multiselectContainer: {
                                                    color: '#000'
                                                },
                                                searchBox: {

                                                }
                                            }} />


                                    </div>
                                    <div className="mr-1 w78">


                                        <Multiselect
                                            isObject={false}
                                            onRemove={function noRefCheck() { }}
                                            onSearch={function noRefCheck() { }}
                                            onSelect={function noRefCheck() { }}
                                            options={[
                                                'Efficiency',
                                                'Studio',
                                                '1 Bed',
                                                '2 Bed',
                                                '3 Bed',
                                                '4 Bed',
                                                'others'
                                            ]}
                                            placeholder="Beds"
                                            showCheckbox
                                            style={{
                                                chips: {
                                                    display: 'none'
                                                },
                                                multiselectContainer: {
                                                    color: '#000'
                                                },
                                                searchBox: {

                                                }
                                            }} />

                                        {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <ul className="unstyled centered noMarginPad listStyleNone">
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-4"
                                                                type="checkbox" value="value4" checked />
                                                            <label for="styled-checkbox-4">Efficiency</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-5"
                                                                type="checkbox" value="value5" checked />
                                                            <label for="styled-checkbox-5">Studio</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-6"
                                                                type="checkbox" value="value6" />
                                                            <label for="styled-checkbox-6">1 Bed</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-7"
                                                                type="checkbox" value="value7" />
                                                            <label for="styled-checkbox-7">3 Beds</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-8"
                                                                type="checkbox" value="value8" />
                                                            <label for="styled-checkbox-8">3 Beds</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-9"
                                                                type="checkbox" value="value9" />
                                                            <label for="styled-checkbox-9">4 Beds</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-9"
                                                                type="checkbox" value="value9" />
                                                            <label for="styled-checkbox-9">Others</label>
                                                        </li>
                                                    </ul>
                                                </div> */}

                                    </div>
                                    <div className="mr-1 w68">


                                        <Multiselect
                                            isObject={false}
                                            onRemove={function noRefCheck() { }}
                                            onSearch={function noRefCheck() { }}
                                            onSelect={function noRefCheck() { }}
                                            options={[
                                                '1 Bath',
                                                '1.5 Bath',
                                                '2 Baths',
                                                '3 Baths'
                                            ]}
                                            placeholder="Baths"
                                            showCheckbox
                                            style={{
                                                chips: {
                                                    display: 'none'
                                                },
                                                multiselectContainer: {
                                                    color: '#000'
                                                },
                                                searchBox: {

                                                }
                                            }} />
                                        {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                    <ul className="unstyled centered noMarginPad listStyleNone">
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-10"
                                                                type="checkbox" value="value10" checked />
                                                            <label for="styled-checkbox-10">1 Bath</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-11"
                                                                type="checkbox" value="value11" checked />
                                                            <label for="styled-checkbox-11">1.5 Baths</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-12"
                                                                type="checkbox" value="value12" />
                                                            <label for="styled-checkbox-12">2 Baths</label>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <input className="styled-checkbox" id="styled-checkbox-13"
                                                                type="checkbox" value="value13" />
                                                            <label for="styled-checkbox-13">3 Baths</label>
                                                        </li>
                                                    </ul>
                                                </div> */}

                                    </div>
                                    <div className="dropdown">
                                        <ul className="noMarginPad listStyleNone clearfix">
                                            <li className="secondaryColor itemTag active" onClick={toggleModalFilter}><span className="dot" ></span>Filters</li>
                                        </ul>
                                    </div>


                                    {/* <!-- Modal --> */}

                                    {/* {show ? <h1>hello</h1> : <h1>hiiiiii</h1>} */}

                                    {/* <div className="modal fade rentalModal filterModal" id="exampleModal" tabindex="-1"
                                    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">


                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title w-100 text-center font-weight700"
                                                    id="exampleModalLabel">More Filters</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="modalBlock pt-0">
                                                    <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                                        Price Range</h4>
                                                    <div className="sliderArea">
                                                        <div id="slider"></div>
                                                        <div id="min"></div>
                                                        <div id="max"></div>
                                                        <p className="mb-0 zeroTag">$0</p>
                                                        <p className="mb-0 maxtag">$5000</p>
                                                    </div>
                                                </div>
                                                <div className="brdrLineModal marLftRgt"></div>
                                                <div className="modalBlock pt-0">
                                                    <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                                        Features</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Good Deals
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Income Based
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Utilities Included
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Handicap Accessible
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Move-In Specials
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Waiting List
                                                                        <input type="checkbox" />
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
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Cats OK
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Dogs OK
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Pets OK
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">No Pets
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="brdrLineModal marLftRgt"></div>
                                                <div className="modalBlock pt-0">
                                                    <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                                        Amenities</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Air Conditioning
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Balcony, Patio, Deck
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Assisted Living
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Cable Ready
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pupleLineBtn amenityTop">
                                                    <a href="" className="w-100 transition font-weight500">Show more
                                                        amenities</a>
                                                </div>
                                                <div className="brdrLineModal marLftRgt"></div>
                                                <div className="modalBlock pt-0">
                                                    <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                                        Neighborhoods</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">San Gabriel
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Monterey Park
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Monrovia
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="checkboxList">
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Alhambra
                                                                        <input type="checkbox" checked="checked" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">Pasadena
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="checkboxItem">
                                                                    <label className="checkboxBlock">San Marino
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pupleLineBtn amenityTop">
                                                    <a href="" className="w-100 transition font-weight500">Show more
                                                        amenities</a>
                                                </div>
                                            </div>
                                            <div className="RentalFooter">
                                                <div className="d-flex align-items-center">
                                                    <div className="w-50 font-weight500 clearAll">
                                                        <u>Clear All</u>
                                                    </div>
                                                    <div className="w-50">
                                                        <button type="button"
                                                            className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite"  >Apply
                                                            Filters</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

 */}


                                    <div className="ml-auto itemWebsite compare-list">
                                        <ul className="noMarginPad listStyleNone clearfix d-flex align-items-center">

                                            {/* {require('../../assets/img/searchHome3.png').default} */}

                                            <li className=" align-items-center"><img src={require('../../assets/img/lheart.png').default} /><a className="colorBlue" href='/savedproperties'>Favourites</a></li>
                                            <li className=" align-items-center"><img src={require('../../assets/img/lcompare.png').default} /><a className="colorBlue" href='/compareProperties'>Compare</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="brdrLine2"></div>
                                {/* <!-- <div className="choosedTag">
                                <div className="d-flex align-items-center">
                                    <ul className="noMarginPad listStyleNone clearfix">
                                        <li className="selectdTag">
                                            <span className="purpleText d-flex align-items-center">Pets OK <a href=""><i className="fas fa-times"></i></a></span>
                                        </li>
                                        <li className="selectdTag">
                                            <span className="purpleText d-flex align-items-center">$500+ <a href=""><i className="fas fa-times"></i></a></span>
                                        </li>
                                        <li className="selectdTag">
                                            <span className="purpleText d-flex align-items-center">Good Deals <a href=""><i className="fas fa-times"></i></a></span>
                                        </li>
                                        <li className="purpleText clearAllText itemWebsite">
                                            <a>Clear All</a>
                                        </li>
                                    </ul>
                                    <div className="ml-auto itemWebsite">
                                        <h4 className="numProperty colorBlue fontSize16 font-weight700 mb-0">18 Properties</h4>
                                    </div>
                                </div>
                                <div className="itemMobile mt-16Res">
                                    <div className="d-flex align-items-center">
                                        <h4 className="numProperty colorBlue fontSize16 font-weight700 mb-0">18 Properties</h4>
                                        <div className="ml-auto purpleText clearAllText">
                                            <a>Clear All</a>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                                <div className="propertyList propertyListScroll listhubSearch boxscroll4">
                                    <div className="wrapperScroll">

                                        {/* <Scrollbar style={{ width: 1920, height: 1080, scrollbarWidth: 100 }}> */}
                                        <ul className="noMarginPad listStyleNone">



                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img
                                                            src={require('../../assets/img/listbuilding1.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span className="firsti">
                                                                <i className=" far fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0 htitile">405 Great Rd
                                                                    Unit #16, Acton, MA 01720</h5>
                                                            </a>
                                                        </div>
                                                        <div className="priceRange itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">$1,700
                                                            </h4>
                                                        </div>
                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">$1,700
                                                                </h4>

                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <p
                                                            className="descriptionProperty mb-0 fontSize14 d-flex align-items-center">
                                                            <img className="" src={require('../../assets/img/file.svg').default} />
                                                            Rental Deals listed by Conway - Brighton</p>
                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img
                                                            src={require('../../assets/img/propertyBuilding2a.png').default}
                                                            className="goodDealImage" /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="fontSize16 font-weight700 mb-0">$1,200</h4>
                                                                <span className="font-weight700"><img
                                                                    src={require('../../assets/img/pricetaga.png').default} />Good Deal</span>
                                                            </div>
                                                        </div>
                                                        <div className="itemWebsite priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="fontSize16 font-weight700 mb-0 colorGreen">$1,200
                                                                </h4>
                                                                <span className="font-weight700 colorGreen"><img
                                                                    src={require('../../assets/img/pricetaga.png').default} />Good Deal</span>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="d-flex align-items-center noMarginPad listStyleNone listIcon ml-95">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>
                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img className="border-right"
                                                            src={require('../../assets/img/propertyBuilding4aa.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="priceRangeMobile itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                Based</h4>
                                                        </div>

                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                    Based</h4>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-95 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>

                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img className="border-right"
                                                            src={require('../../assets/img/propertyBuilding4aa.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="priceRangeMobile itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                Based</h4>
                                                        </div>

                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                    Based</h4>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center ">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-95 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center" >
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>

                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img
                                                            src={require('../../assets/img/listbuilding1.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0 htitile">405 Great Rd
                                                                    Unit #16, Acton, MA 01720</h5>
                                                            </a>
                                                        </div>
                                                        <div className="priceRange itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">$1,700
                                                            </h4>
                                                        </div>
                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">$1,700
                                                                </h4>

                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <p
                                                            className="descriptionProperty mb-0 fontSize14 d-flex align-items-center">
                                                            <img className="" src={require('../../assets/img/file.svg').default} />
                                                            Rental Deals listed by Conway - Brighton</p>
                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img
                                                            src={require('../../assets/img/propertyBuilding2a.png').default}
                                                            className="goodDealImage" /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="fontSize16 font-weight700 mb-0">$1,200</h4>
                                                                <span className="font-weight700"><img
                                                                    src={require('../../assets/img/pricetaga.png').default} />Good Deal</span>
                                                            </div>
                                                        </div>
                                                        <div className="itemWebsite priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="fontSize16 font-weight700 mb-0 colorGreen">$1,200
                                                                </h4>
                                                                <span className="font-weight700 colorGreen"><img
                                                                    src={require('../../assets/img/pricetaga.png').default} />Good Deal</span>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-95 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>
                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img className="border-right"
                                                            src={require('../../assets/img/propertyBuilding4aa.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="priceRangeMobile itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                Based</h4>
                                                        </div>

                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                    Based</h4>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-95 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>

                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="listingBlock2 responsive-15">
                                                <div className="d-flex noMobileFlex">
                                                    <div className="leftImage posRel">
                                                        <a href="propertyDetail"><img className="border-right"
                                                            src={require('../../assets/img/propertyBuilding4aa.png').default} /></a>
                                                        <a href="/savedProperties">
                                                            <span>
                                                                <i className="redHeart fas fa-heart"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="rightText">
                                                        <div className="d-flex align-items-center propertyTitle">
                                                            <a href="propertyDetail">
                                                                <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                                                                    Apartments</h5>
                                                            </a>
                                                            <ul
                                                                className="noMarginPad listStyleNone d-flex align-items-center starLink ml-16">
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                                <li><img src={require('../../assets/img/blankStar.png').default} /></li>
                                                            </ul>

                                                        </div>
                                                        <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                                                            91157</p>
                                                        <div className="priceRangeMobile itemWebsite">
                                                            <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                Based</h4>
                                                        </div>

                                                        <div className="itemMobile priceRangeMobile">
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="colorBlue mb-0 fontSize16 font-weight700 mt-0">Income
                                                                    Based</h4>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemWebsite">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">2</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-95 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center listingBlockLine itemMobile ">
                                                            <ul className="noMarginPad listStyleNone d-flex align-items-center">
                                                                <li className="d-flex align-items-center">
                                                                    <img src={require('../../assets/img/Uniona.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Beds
                                                                </li>
                                                                <li className="d-flex align-items-center ml-12">
                                                                    <img src={require('../../assets/img/showera.png').default} /><span
                                                                        className="colorBlue font-weight700">1</span> Baths
                                                                </li>
                                                            </ul>
                                                            <ul className="noMarginPad listStyleNone listIcon ml-16 d-flex align-items-center">
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                </li>
                                                                <li>
                                                                    <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="descriptionProperty mb-0 fontSize14 d-flex align-items-center"><img className=""
                                                            src={require('../../assets/img/file.svg').default} />Special Pricing for Seniors - 2882
                                                            Tyler St E... <a href="" className="purpleText">More</a></p>

                                                        <div className="d-flex align-items-center btnSectionList">
                                                            <a href="" className="lineBtnCalling brdrRadius4 prplrFilledBtn">
                                                                <img src={require('../../assets/img/phoneFilledWhite.svg').default} />(626) 448-2699
                                                            </a>
                                                            <button className="checkAvailableBtn colorWhite brdrRadius4"
                                                                onClick={toggleModalAvailability}>
                                                                Check Availability
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>








                                        </ul>


                                        {/* </Scrollbar> */}
                                    </div>
                                </div>
                                {/* <!-- Modal --> */}
                                {/* <div className="modal fade rentalModal availabilityModal" id="exampleModal1" tabindex="-1"
                                role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header d-flex align-items-center">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                                                Nr. 1 Ba $1,200 (626) 357-1855</h5>
                                        </div>
                                        <div className="modal-body rentalForm availBodyBlock">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="modalLeft">
                                                        <div className="imageSecleftModal posRel">
                                                            <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                                            <div
                                                                className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                                                Affordable Housing</div>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="lefttitle">
                                                                <h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
                                                                    Rock Apartments</h5>
                                                                <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                                    2882 Tyler St El Monte, CA 91157</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <img src={require('../../assets/img/goodDeal.svg').default} />
                                                            </div>
                                                        </div>
                                                        <div className="sliderListing">
                                                            <ul className="clearfix d-flex align-items-center">
                                                                <li className="fontSize17"><b>1</b>Bd</li>
                                                                <li className="fontSize17"><b>1</b>Ba</li>
                                                                <li className="fontSize17"><b>880</b>Sq.Ft</li>
                                                                <li className="ml-auto boldTag greenText fontSize24">$1,200</li>
                                                            </ul>
                                                        </div>
                                                        <p className="para fontSize14 font-weight400 secondaryColor">Blessed
                                                            Rock Apartment is an affordable apartment community for 62 years
                                                            of age or older in El Monte, CA.We currently have a waiting
                                                            list. Please call today to find out how to get an application
                                                            for this community or to verify income requirements</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="sideFormBlock">
                                                        <div className="SectionBlock responsive15 availabilitySection">
                                                            <div className="d-flex align-items-center">
                                                                <h2 className="colorBlue font-weight700 fontSize18">Check
                                                                    Availability</h2>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <p className="purpleText font-weight700 fontSize18"><img
                                                                    src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                                            </div>
                                                            <form className="rentalForm">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label for="">Full Name</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address" value="Jonath" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                        <div className="form-group">
                                                                            <label for="">Phone Number</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Phone Number" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Email Address</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                 placeholder="Email Address" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Move In Date</label>
                                                                            <div className="posRel calnderIcon">
                                                                                <input type="email" className="form-control"
                                                                                    id="" aria-describedby="emailHelp"
                                                                                    placeholder="Choose Move In Date" />
                                                                                <span><img
                                                                                    src={require('../../assets/img/calander.png').default} /></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label
                                                                                for="exampleFormControlTextarea1">Message</label>
                                                                            <textarea className="form-control"
                                                                                id="exampleFormControlTextarea1" rows="3"
                                                                                placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div
                                                                            className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                            <div className="Resnoauto w-100">
                                                                                <a href=""
                                                                                    className="brdrRadius4 transition w-100"
                                                                                    data-toggle="modal"
                                                                                    data-target="#exampleModal2"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close">Check Availability</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <!--Modal--> */}
                                {/* <div className="modal fade rentalModal availabilityModal" id="exampleModal2" tabindex="-1"
                                role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header d-flex align-items-center">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                id="exampleModalLongTitle">Check Availability at These Popular Apartments
                                                Below</h5>
                                        </div>
                                        <div className="modal-body rentalForm availBodyBlock scrollModalList">
                                            <div className="custom-radios">
                                                <div className="labelRadio propertyList active">
                                                    <label for="color-1">
                                                        <div className="d-flex align-items-center">
                                                            <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                            <div className="rightText flex1 borderRightBlock">
                                                                <div className="d-flex align-items-center propertyTitle">
                                                                    <a href="propertyDetail">
                                                                        <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                            Rock Apartments</h5>
                                                                    </a>
                                                                    <div className="topHeadSec mt-0">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                    Monte, CA 91157</p>
                                                                <div className="priceRange itemWebsite">
                                                                    <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                        $1,200-$1,800</h4>
                                                                </div>
                                                                <div className="itemMobile priceRangeMobile">
                                                                    <div className="d-flex align-items-center">
                                                                        <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                        </h4>
                                                                        <span className="font-weight700"><img
                                                                            src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                            Deal</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center listingBlockLine">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li className="d-flex align-items-center">
                                                                            <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Beds
                                                                        </li>
                                                                        <li className="d-flex align-items-center ml-12">
                                                                            <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Baths
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <p className="descriptionProperty mb-0 fontSize12 d-flex align-items-center"><img className=""
                                                                    src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                    Seniors - 2882 Tyler St...<a href=""
                                                                        className="purpleText">More</a></p>
                                                            </div>
                                                            <div className="widthRadio">
                                                                <div className="text-center">
                                                                    <a href=""
                                                                        className="fontSize16 font-weight700 text-center requestTag">Request
                                                                        for<br />
                                                                        more info</a>
                                                                    <input type="radio" id="color-1" name="color"
                                                                        value="color-1" checked />
                                                                    <span>
                                                                        <div>
                                                                            <img src={require('../../assets/img/check.png').default}
                                                                                alt="Checked Icon" />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="labelRadio propertyList">
                                                    <label for="color-2">
                                                        <div className="d-flex align-items-center">
                                                            <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                            <div className="rightText flex1 borderRightBlock">
                                                                <div className="d-flex align-items-center propertyTitle">
                                                                    <a href="propertyDetail">
                                                                        <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                            Rock Apartments</h5>
                                                                    </a>
                                                                    <div className="topHeadSec mt-0">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                    Monte, CA 91157</p>
                                                                <div className="priceRange itemWebsite">
                                                                    <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                        $1,200-$1,800</h4>
                                                                </div>
                                                                <div className="itemMobile priceRangeMobile">
                                                                    <div className="d-flex align-items-center">
                                                                        <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                        </h4>
                                                                        <span className="font-weight700"><img
                                                                            src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                            Deal</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center listingBlockLine">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li className="d-flex align-items-center">
                                                                            <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Beds
                                                                        </li>
                                                                        <li className="d-flex align-items-center ml-12">
                                                                            <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Baths
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <p className="descriptionProperty mb-0 fontSize12 d-flex align-items-center"><img className=""
                                                                    src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                    Seniors - 2882 Tyler St...<a href=""
                                                                        className="purpleText">More</a></p>
                                                            </div>
                                                            <div className="widthRadio">
                                                                <div className="text-center">
                                                                    <a href=""
                                                                        className="fontSize16 font-weight700 text-center">Request
                                                                        for<br />
                                                                        more info</a>
                                                                    <input type="radio" id="color-2" name="color"
                                                                        value="color-2" checked />
                                                                    <span>
                                                                        <div>
                                                                            <img src={require('../../assets/img/check.png').default}
                                                                                alt="Checked Icon" />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="labelRadio propertyList">
                                                    <label for="color-3">
                                                        <div className="d-flex align-items-center">
                                                            <img src={require('../../assets/img/modalleftImage1.png').default} />
                                                            <div className="rightText flex1 borderRightBlock">
                                                                <div className="d-flex align-items-center propertyTitle">
                                                                    <a href="propertyDetail">
                                                                        <h5 className="colorBlue font-weight700 mb-0">Blessed
                                                                            Rock Apartments</h5>
                                                                    </a>
                                                                    <div className="topHeadSec mt-0">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                            <li><i className="fas fa-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
                                                                    Monte, CA 91157</p>
                                                                <div className="priceRange itemWebsite">
                                                                    <h4 className="colorBlue mb-0 fontSize16 font-weight700">
                                                                        $1,200-$1,800</h4>
                                                                </div>
                                                                <div className="itemMobile priceRangeMobile">
                                                                    <div className="d-flex align-items-center">
                                                                        <h4 className="fontSize16 font-weight700 mb-0">$1,200
                                                                        </h4>
                                                                        <span className="font-weight700"><img
                                                                            src={require('../../assets/img/priceTagg.svg').default} />Good
                                                                            Deal</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center listingBlockLine">
                                                                    <ul className="noMarginPad listStyleNone">
                                                                        <li className="d-flex align-items-center">
                                                                            <img src={require('../../assets/img/beds.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Beds
                                                                        </li>
                                                                        <li className="d-flex align-items-center ml-12">
                                                                            <img src={require('../../assets/img/shower.svg').default} /><span
                                                                                className="colorBlue">1-2</span> Baths
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="noMarginPad listStyleNone listIcon ml-18">
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage1.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage2.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage3.svg').default} />
                                                                        </li>
                                                                        <li>
                                                                            <img src={require('../../assets/img/detailImage4.svg').default} />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <p className="descriptionProperty mb-0 fontSize12 d-flex align-items-center"><img className=""
                                                                    src={require('../../assets/img/file.svg').default} />Special Pricing for
                                                                    Seniors - 2882 Tyler St...<a href=""
                                                                        className="purpleText">More</a></p>
                                                            </div>
                                                            <div className="widthRadio">
                                                                <div className="text-center">
                                                                    <a href=""
                                                                        className="fontSize16 font-weight700 text-center">Request
                                                                        for<br />
                                                                        more info</a>
                                                                    <input type="radio" id="color-3" name="color"
                                                                        value="color-3" checked />
                                                                    <span>
                                                                        <div>
                                                                            <img src={require('../../assets/img/check.png').default}
                                                                                alt="Checked Icon" />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottomFooter d-flex align-items-center">
                                            <h3>2 properties Selected</h3>
                                            <div className="ml-auto">
                                                <a href="" className="checkBtnModall" data-toggle="modal"
                                                    data-target="#exampleModal3" data-dismiss="modal"
                                                    aria-label="Close">Check Availability</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <!--Modal--> */}
                                {/* <div className="modal fade rentalModal availabilityModal" id="exampleModal3" tabindex="-1"
                                role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header d-flex align-items-center">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                id="exampleModalLongTitle" style={{ color: "#fff" }}>Title</h5>
                                        </div>
                                        <div className="modal-body rentalForm availBodyBlock">
                                            <div className="thankyouBlock text-center">
                                                <img src={require('../../assets/img/thankYou.png').default} />
                                                <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                <p className="fontSize18 font-weight400 secondaryColor">Your request has been
                                                    submitted successfully</p>
                                                <a href="" className="doneBtn brdrRadius4">Done</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <!--/modal close--> */}
                                <div className="pagination">
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
                                    <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing 1-25 of
                                        1,231 Results</p>
                                </div>
                            </div>


                        </div>


                        <MapSection />


                    </div>
                </div>




                {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

                {/* <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className="modal fade rentalModal availabilityModal" id="exampleModal3" tabindex="-1"
                        role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered widthModal" role="document">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-center">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                        id="exampleModalLongTitle" style={{ color: "#fff" }}>Title</h5>
                                </div>
                                <div className="modal-body rentalForm availBodyBlock">
                                    <div className="thankyouBlock text-center">
                                        <img src={require('../../assets/img/thankYou.png').default} />
                                        <h1 className="font-weight700 colorBlue">Thank You</h1>
                                        <p className="fontSize18 font-weight400 secondaryColor">Your request has been
                                            submitted successfully</p>
                                        <a href="" className="doneBtn brdrRadius4">Done</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>


            </Modal>
 */}


                {/* <button >Open modal</button> */}

                {/* <Modal isOpen={isOpen}
                onRequestClose={toggleModal}>

                <div className="modal-header">
                    <h5 className="modal-title w-100 text-center font-weight700"
                        id="exampleModalLabel">More Filters</h5>
                    <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modalBlock pt-0">
                        <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                            Price Range</h4>
                        <div className="sliderArea">
                            <div id="slider"></div>
                            <div id="min"></div>
                            <div id="max"></div>
                            <p className="mb-0 zeroTag">$0</p>
                            <p className="mb-0 maxtag">$5000</p>
                        </div>
                    </div>
                    <div className="brdrLineModal marLftRgt"></div>
                    <div className="modalBlock pt-0">
                        <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                            Features</h4>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Good Deals
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Income Based
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Utilities Included
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Handicap Accessible
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Move-In Specials
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Waiting List
                                            <input type="checkbox" />
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
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Cats OK
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Dogs OK
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Pets OK
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">No Pets
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brdrLineModal marLftRgt"></div>
                    <div className="modalBlock pt-0">
                        <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                            Amenities</h4>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Air Conditioning
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Balcony, Patio, Deck
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Assisted Living
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Cable Ready
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pupleLineBtn amenityTop">
                        <a href="" className="w-100 transition font-weight500">Show more
                            amenities</a>
                    </div>
                    <div className="brdrLineModal marLftRgt"></div>
                    <div className="modalBlock pt-0">
                        <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                            Neighborhoods</h4>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">San Gabriel
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Monterey Park
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Monrovia
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="checkboxList">
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Alhambra
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">Pasadena
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkboxItem">
                                        <label className="checkboxBlock">San Marino
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pupleLineBtn amenityTop">
                        <a href="" className="w-100 transition font-weight500">Show more
                            amenities</a>
                    </div>
                </div>
                <div className="RentalFooter">
                    <div className="d-flex align-items-center">
                        <div className="w-50 font-weight500 clearAll">
                            <u>Clear All</u>
                        </div>
                        <div className="w-50">
                            <button type="button"
                                className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite"  >Apply
                                Filters</button>
                        </div>
                    </div>
                </div>






            </Modal> */}






                <Modal isOpen={isOpenFilter}
                    onRequestClose={toggleModalFilter} className="morefilter">


                    {/* <div className="modal-content"> */}
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">More Filters</h5>
                        <button type="button" className="close" onClick={toggleModalFilter} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Price Range</h4>
                            {/* <div className="sliderArea">
                            <div id="slider"></div>
                            <div id="min"></div>
                            <div id="max"></div>
                            <p className="mb-0 zeroTag">$0</p>
                            <p className="mb-0 maxtag">$5000</p>
                        </div> */}
                            <MultiRangeSlider
                                min={0}
                                max={5000}
                                onChange={({ min, max }) => {
                                    // setabc(min);
                                    // setabcd(max);
                                }}
                            />
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Features</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Good Deals
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Income Based
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Utilities Included
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Handicap Accessible
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Move-In Specials
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Waiting List
                                                <input type="checkbox" />
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
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Cats OK
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Dogs OK
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Pets OK
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">No Pets
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Amenities</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Air Conditioning
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Balcony, Patio, Deck
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Assisted Living
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Cable Ready
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <a href="" className="w-100 transition font-weight500">Show more
                                amenities</a>
                        </div>
                        <div className="brdrLineModal marLftRgt"></div>
                        <div className="modalBlock pt-0">
                            <h4 className="font-weight700 fontSize16 font-weight500 secondaryColor">
                                Neighborhoods</h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">San Gabriel
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Monterey Park
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Monrovia
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkboxList">
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Alhambra
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">Pasadena
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkboxItem">
                                            <label className="checkboxBlock">San Marino
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pupleLineBtn amenityTop">
                            <a href="" className="w-100 transition font-weight500">Show more
                                amenities</a>
                        </div>
                    </div>
                    <div className="RentalFooter">
                        <div className="d-flex align-items-center">
                            <div className="w-50 font-weight500 clearAll">
                                <u>Clear All</u>
                            </div>
                            <div className="w-50">
                                <button type="button"
                                    className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite"  >Apply
                                    Filters</button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}






                </Modal>






                <Modal isOpen={isOpenAvailability}
                    onRequestClose={toggleModalAvailability} className="listingSerachmodal">

                    <div className="modal-header d-flex align-items-center">
                        <h5 className="modal-title fontSize16 font-weight400 ml-22"
                            id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
                            Nr. 1 Ba $1,200 (626) 357-1855</h5>
                        <button type="button" className="close" onClick={toggleModalAvailability} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body rentalForm availBodyBlock">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="modalLeft">
                                    <div className="imageSecleftModal posRel">
                                        <img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
                                        <div
                                            className="sliderTagName brdrRadius4 colorWhite font-weight700">
                                            Affordable Housing</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="lefttitle">
                                            <h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
                                                Rock Apartments</h5>
                                            <p className="mb-0 fontSize16 font-weight400 secondaryColor">
                                                2882 Tyler St El Monte, CA 91157</p>
                                        </div>
                                        <div className="ml-auto">
                                            <img src={require('../../assets/img/goodDeal.svg').default} />
                                        </div>
                                    </div>
                                    <div className="sliderListing">
                                        <ul className="clearfix d-flex align-items-center">
                                            <li className="fontSize17"><b>1</b>Bd</li>
                                            <li className="fontSize17"><b>1</b>Ba</li>
                                            <li className="fontSize17"><b>880</b>Sq.Ft</li>
                                            <li className="ml-auto boldTag greenText fontSize24">$1,200</li>
                                        </ul>
                                    </div>
                                    <p className="para fontSize14 font-weight400 secondaryColor">Blessed
                                        Rock Apartment is an affordable apartment community for 62 years
                                        of age or older in El Monte, CA.We currently have a waiting
                                        list. Please call today to find out how to get an application
                                        for this community or to verify income requirements</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="sideFormBlock">
                                    <div className="SectionBlock responsive15 availabilitySection">
                                        <div className="d-flex align-items-center">
                                            <h2 className="colorBlue font-weight700 fontSize18">Check
                                                Availability</h2>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="purpleText font-weight700 fontSize18"><img
                                                src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
                                        </div>

                                        <CheckAvailibilityForm />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>





            </section>
            <Footer />
        </>
    )
}


export default ListhubSearch
