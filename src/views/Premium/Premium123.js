import React, { useState } from 'react'
import { Form, Button, DropdownButton, Dropdown, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'


export const Premium = () => {




    const [searchdata, setSearchdata] = useState({ searchstring: '', pass: '', dropdown: '', radio: '', check: '', check1: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        console.log(searchdata);
        // setSearchdata({ searchstring: '' });
    }
    // console.log(searchdata);


    // const [value, setValue] = useState('');
    // const handleSelect = (e) => {
    //     console.log(e);
    //     setValue(e)
    // }

    const [value, setValue] = React.useState('');
    const handleChange = (val) => {
        setValue(val);
    }



    const [activelinkontab, setactivelinkontab] = useState(false);
    const [nonactivelinkontab, setnonactivelinkontab] = useState(true);
    const nonactivestyle = {
        color: 'red'
    }
    const activestyle = {
        color: 'blue'
    }
    const toggleshow = () => {
        if (activelinkontab == false) {
            setactivelinkontab(true)
        } else {
            setactivelinkontab(false)
        }
    }



    return (

        <>




            <Form onSubmit={handleSubmit}>
                <section className="tabs-section text-white secPad premium">
                    <div className="container3">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-left">
                                <div className="as">
                                    <p className="font-size16 font-weight500 lightblack">ListHub Property Information</p>
                                    <ul className="nav  flex-column mb-3">
                                        <li className="nav-item">
                                            <a className="nav-link active show" href="#tab-1">Listing Information </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"

                                                href="#tab-2"
                                                style={!activelinkontab ? activestyle : nonactivestyle}
                                                onClick={() => {
                                                    toggleshow();
                                                }}>Property Information</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-3"
                                                style={!activelinkontab ? activestyle : nonactivestyle}
                                                onClick={() => {
                                                    toggleshow();
                                                }}>Contact </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-4">Floorplan </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-5">Manage Deal/Specials
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-6">Utility Allowances</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-7">Property Amenities </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-8">Unit Amenities</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-9">Pet Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-10">Parking Details </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-11">Photos </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-11">Property Icons </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-11">Office Hours</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-11">Facebook</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#tab-11">MLS Listing</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 tab-right">
                                <div className="tab-content">
                                    <div className="tab-pane active show ml-17" id="tab-1">
                                        <div className="listing-tab">
                                            <h3 className=" fontSize20 font-weight700 textblue mb-20">Listing Information (Property ID
                                                123456)
                                            </h3>

                                            <div className="row  align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Property Type <span
                                                        className="colorred">*</span></p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0 pl-2">
                                                    <div className="">

                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>
                                                            <ToggleButton value={"Premium Listing"}>Premium Listing</ToggleButton>
                                                            <ToggleButton value={"General Listing"}>General Listing</ToggleButton>
                                                            <ToggleButton value={"Listhub"}>Listhub</ToggleButton>
                                                            <ToggleButton value={"Premium Listhub"}>Premium Listhub</ToggleButton>



                                                         
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-24">
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className=" pl-0  col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Managed by <span className="colorred">*</span></label>
                                                        {/*   <select name="stateid" className="selectpicker form-control">
                                                <option hidden>Insert Property Management</option>

                                            </select> */}

                                                        <DropdownButton
                                                            alignRight
                                                            title="Insert Property Management"
                                                            id="dropdown-menu-align-right "
                                                            className="widthfull"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                        </DropdownButton>

                                                    </div>


                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="pl-0 col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Regional Manager<span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="w-100 form-control"
                                                            value="Insert Regional Manager" />



                                                    </div>


                                                </div>

                                            </div>
                                            <div className="row  mt-2 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Listing Status<span
                                                        className="colorred">*</span></p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pl-2">
                                                    <div className="">


                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Active"}>Active</ToggleButton>
                                                            <ToggleButton value={"Pending"}>Pending</ToggleButton>
                                                            <ToggleButton value={"Denied"}>Denied</ToggleButton>
                                                        </ToggleButtonGroup>
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Active</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Pending </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Denied </label>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="property-tab mt-64" id="tab-2">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Property Information</h3>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Property Name</label>
                                                        <input type="text" className="form-control" value="Insert Property Name" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight700 lablecolor"
                                                            for="formGroupInput">Number of Unit</label>
                                                        <input type="text" className="form-control" value="40" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Property Address<span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="form-control"
                                                            value="405 Great Rd #16, Acton, MA 01720" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="pl-0 col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">City, State, ZIP<span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="form-control col-sm-4 mr-3" value="Anaheim" />
                                                        {/* <select name="stateid" className="selectpicker form-control col-sm-1 mr-3">

                                                <option value="1">CsdfA</option>
                                            </select> */}
                                                        <DropdownButton
                                                            alignRight
                                                            title="CA"
                                                            id="dropdown-menu-align-right"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">state 1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">state 1-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">state 1 3</Dropdown.Item>
                                                        </DropdownButton>
                                                        <input type="text" className="w273 form-control" value="92805" />

                                                    </div>
                                                </div>



                                                <div className="col-lg-12">
                                                    <div className="form-group mb-0 d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Latitude & Longitude<span
                                                                className="w-100 colorGreen fontSize14  d-block font-weight700">Auto-Populate</span></label>
                                                        <input type="text" className="w268 form-control" value="45.312361238" />
                                                        <input type="text" className="w320 ml-3 form-control" value="-118.312361238" />


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="premium-contact mt-64" id="tab-3">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Contact</h3>
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Contact Name</label>
                                                        <input type="text" className="w268 form-control"
                                                            value="First Name" />
                                                        <input type="text" className="w320 ml-3 form-control" value="Last Name" />


                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Phone Number </label>
                                                        <input type="text" className="form-control" value="Phone Number" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Fax</label>
                                                        <input type="text" className="form-control" value="Fax" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Email Address<span
                                                                className="colorred">*</span></label>
                                                        <input type="text" className="form-control" value="Email Address" />

                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">CC Email Address</label>
                                                        <input type="text" className="w268 form-control"
                                                            value="CC Email Address 1" />
                                                        <input type="text" className="w320 ml-3 form-control" value="CC Email Address 2" />



                                                    </div>
                                                    <div className="form-group d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput"></label>
                                                        <input type="text" className="w268 form-control"
                                                            value="CC Email Address 3" />
                                                        <input type="text" className="w320 ml-3 form-control" value="CC Email Address 4" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Timestamp</label>
                                                        <div className="w-100">


                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                className="wauto"
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                            >
                                                                <ToggleButton value={"Active"}>Active</ToggleButton>
                                                                <ToggleButton value={"Pending"}>Pending</ToggleButton>
                                                                <ToggleButton value={"Denied"}>Denied</ToggleButton>
                                                            </ToggleButtonGroup>

                                                            {/* <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name=""
                                                        id="inlineRadio22" value="option22" checked />
                                                    <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                        for="inlineRadio22">Active</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                        for="inlineRadio2">Pending </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                        for="inlineRadio3">Denied </label>
                                                </div> */}
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group  d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Notes (Internal)</label>
                                                        <textarea className="h-80 w-100"
                                                            placeholder="Insert Notes (Internal) "></textarea>


                                                    </div>
                                                </div>



                                                <div className="col-lg-12">
                                                    <div className="form-group  d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Tag Line <span
                                                                className="w-100 colorGreen fontSize14  d-block font-weight700">Auto-Populate</span></label>
                                                        <input type="text" className=" form-control" value="2882 Tyler St El Monte, CA 91157 Rental Deals 1 Br. 1 Ba $1,200 (626) 357-1855"/>


                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group m d-flex align-items-center">
                                                        <label className="pl-0 col-sm-3 fontSize14 font-weight500 colorBlue w-100"
                                                            for="formGroupInput">Property Description </label>
                                                        <textarea
                                                            className="w-100">This 25-story apartment community is a visual extension of Piedmont Park in Midtown.Designed by internationally-acclaimed YOO Design Studio, YOO on the Park sits at the intersection of fashion, function and design.</textarea>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="floorplan mt-64" id="tab-4">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Floorplan</h3>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="fontSize14 font-weight700 colorBlue">Floorplan Name </th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Br</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Ba</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Sqft</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Deposit</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Rent</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Good Deals</th>
                                                        <th className="fontSize14 font-weight700 colorBlue"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Studio</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">760</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">First Month Rent</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">Call</td>
                                                        <td className="fontSize14 font-weight400 colorBlue"></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.5 5H4.16667H17.5" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.5 5H4.16667H17.5" stroke="white" stroke-opacity="0.3"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">One Bedroom </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">760</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">Call</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">Income Based </td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><span
                                                            className="font-weight700 fontSize14"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                viewBox="0 0 16 16" fill="none">
                                                                <g clip-path="url(#clip0)">
                                                                    <path
                                                                        d="M12.6007 3.9223C12.585 3.72563 12.5206 3.53544 12.4121 3.37082C12.0268 2.78638 10.9131 1.3993 8.45052 0.26154C8.13855 0.117291 7.77855 0.117291 7.46658 0.26154C5.00402 1.3993 3.89032 2.78642 3.5053 3.37084C3.39648 3.53544 3.33206 3.72563 3.31666 3.92232C3.02507 7.59751 3.00812 10.5795 3.26489 14.1727C3.30495 14.734 3.73774 15.1893 4.2966 15.2547C6.73791 15.5395 9.17922 15.5395 11.6205 15.2547C12.1794 15.1893 12.6122 14.734 12.6522 14.1727C12.9093 10.5795 12.892 7.59751 12.6007 3.9223ZM7.95855 3.61928C7.45028 3.61928 7.03814 3.20715 7.03814 2.69887C7.03814 2.19055 7.45025 1.77844 7.95857 1.77844C8.4669 1.77844 8.87898 2.19057 8.87901 2.69887C8.87898 3.20717 8.46685 3.6193 7.95855 3.61928Z"
                                                                        fill="#1BC47D" />
                                                                </g>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M8.04136 5.71436C8.27806 5.71436 8.46994 5.90623 8.46994 6.14293V13.1034C8.46994 13.34 8.27806 13.5319 8.04136 13.5319C7.80467 13.5319 7.61279 13.34 7.61279 13.1034V6.14293C7.61279 5.90623 7.80467 5.71436 8.04136 5.71436Z"
                                                                    fill="white" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.16421 7.42978C6.45225 7.14174 6.84292 6.97992 7.25027 6.97992H9.62314C9.85983 6.97992 10.0517 7.1718 10.0517 7.40849C10.0517 7.64518 9.85983 7.83706 9.62314 7.83706H7.25027C7.07025 7.83706 6.8976 7.90858 6.77031 8.03587C6.64301 8.16316 6.5715 8.33581 6.5715 8.51583C6.5715 8.69585 6.64301 8.8685 6.77031 8.99579C6.8976 9.12309 7.07025 9.1946 7.25027 9.1946H8.83218C9.23953 9.1946 9.6302 9.35642 9.91824 9.64446C10.2063 9.9325 10.3681 10.3232 10.3681 10.7305C10.3681 11.1379 10.2063 11.5285 9.91824 11.8166C9.6302 12.1046 9.23953 12.2664 8.83218 12.2664H6.14293C5.90623 12.2664 5.71436 12.0745 5.71436 11.8379C5.71436 11.6012 5.90623 11.4093 6.14293 11.4093H8.83218C9.0122 11.4093 9.18485 11.3378 9.31214 11.2105C9.43944 11.0832 9.51095 10.9105 9.51095 10.7305C9.51095 10.5505 9.43944 10.3778 9.31214 10.2506C9.18485 10.1233 9.0122 10.0517 8.83218 10.0517H7.25027C6.84292 10.0517 6.45225 9.88992 6.16421 9.60189C5.87617 9.31385 5.71436 8.92318 5.71436 8.51583C5.71436 8.10848 5.87617 7.71782 6.16421 7.42978Z"
                                                                    fill="white" />
                                                                <defs>
                                                                    <clipPath id="clip0">
                                                                        <rect width="16" height="16" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>Good
                                                            Deal</span></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.5 5H4.16667H17.5" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.5 5H4.16667H17.5" stroke="white" stroke-opacity="0.3"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Two Bedroom</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">1</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">760</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">Income Based

                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">$1,000
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue"></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M9.16663 3.33331H3.33329C2.89127 3.33331 2.46734 3.50891 2.15478 3.82147C1.84222 4.13403 1.66663 4.55795 1.66663 4.99998V16.6666C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V10.8333"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M15.4166 2.08332C15.7481 1.7518 16.1978 1.56555 16.6666 1.56555C17.1355 1.56555 17.5851 1.7518 17.9166 2.08332C18.2481 2.41484 18.4344 2.86448 18.4344 3.33332C18.4344 3.80216 18.2481 4.2518 17.9166 4.58332L9.99996 12.5L6.66663 13.3333L7.49996 9.99999L15.4166 2.08332Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg></td>
                                                        <td className="fontSize14 font-weight400 colorBlue"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.5 5H4.16667H17.5" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.5 5H4.16667H17.5" stroke="white" stroke-opacity="0.3"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="#4C5B68" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                                                                stroke="white" stroke-opacity="0.3" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33337 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="#4C5B68" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M11.6666 9.16669V14.1667" stroke="white"
                                                                stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="floorplan mt-3">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Floorplan Summary </h3>
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="inlineFormInputGroup">Beds</label>
                                                        <div className="input-group mb-2 col-sm-4 d-flex align-items-center pr-0">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="14"
                                                                    viewBox="0 0 16 14" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M3.83589 0.749756H12.1605L12.1624 0.749759C12.7151 0.75141 13.245 0.971714 13.6358 1.36256C14.0267 1.7534 14.247 2.28302 14.2486 2.83576L14.2486 2.83761V6.02787C14.5461 6.16982 14.8201 6.36227 15.0576 6.5997C15.6044 7.14653 15.9126 7.88753 15.9149 8.66085L15.9149 8.66276L15.9149 12.2699L15.9149 12.2717V12.5478V12.5494C15.9149 12.9363 15.6012 13.25 15.2142 13.25C14.8273 13.25 14.5136 12.9363 14.5136 12.5494V12.5478C14.5136 12.5478 14.5136 12.5479 14.5136 12.5478V12.2737C14.5136 12.2737 14.5136 12.2736 14.5136 12.2737C14.5133 12.2384 14.4992 12.2043 14.4743 12.1794C14.4493 12.1545 14.4156 12.1403 14.3803 12.1401H1.6188C1.58354 12.1403 1.54979 12.1545 1.52485 12.1794C1.49991 12.2043 1.4858 12.2381 1.48554 12.2733V12.5478V12.5494C1.48554 12.9363 1.17185 13.25 0.784885 13.25C0.397923 13.25 0.0842285 12.9363 0.0842285 12.5494L0.0842285 12.5479C0.0842285 12.5478 0.0842285 12.5479 0.0842285 12.5479L0.084231 12.2701L0.0842311 8.66107C0.0865168 7.88774 0.394733 7.14653 0.941561 6.5997C1.17829 6.36297 1.45142 6.17096 1.7478 6.02913L1.7478 2.83598C1.74945 2.28324 1.96976 1.7534 2.3606 1.36256C2.75144 0.971714 3.28107 0.75141 3.8338 0.749759L3.83589 0.749756ZM14.5136 10.7447C14.4705 10.7409 14.4272 10.7389 14.3836 10.7388L14.3818 10.7388H1.61735L1.61531 10.7388C1.57183 10.7389 1.52853 10.7409 1.48554 10.7446V8.66407C1.48698 8.26129 1.64761 7.8754 1.93244 7.59058C2.19928 7.32374 2.55482 7.1659 2.92984 7.14585H13.0693C13.4443 7.1659 13.7999 7.32374 14.0667 7.59058C14.3516 7.87548 14.5122 8.26149 14.5136 8.66438V10.7447ZM7.27196 5.74237H3.7351C3.75564 5.68983 3.78693 5.64155 3.82759 5.6009C3.90447 5.52401 4.0086 5.48061 4.11731 5.48011H6.88975C6.99846 5.48061 7.10259 5.52402 7.17947 5.6009C7.22013 5.64155 7.25142 5.68983 7.27196 5.74237ZM12.2665 5.74237H8.72961C8.75014 5.68983 8.78144 5.64155 8.82209 5.6009C8.89898 5.52402 9.00311 5.48061 9.11181 5.48011H11.8843C11.993 5.48061 12.0971 5.52402 12.174 5.6009C12.2146 5.64155 12.2459 5.68983 12.2665 5.74237ZM12.1593 2.15107H3.83713C3.65491 2.15184 3.48035 2.22457 3.35148 2.35344C3.22261 2.48231 3.14988 2.65686 3.14911 2.83909V4.36002C3.43562 4.17867 3.76971 4.07976 4.11413 4.0788L4.11609 4.0788H6.89097L6.89273 4.0788C7.29614 4.07993 7.68552 4.21542 8.00078 4.46039C8.31599 4.21542 8.70522 4.07993 9.10864 4.0788L9.1106 4.0788H11.8855L11.8872 4.0788C12.2296 4.07976 12.5619 4.1775 12.8473 4.3568L12.8473 2.83942C12.8466 2.65716 12.7738 2.48233 12.6449 2.35344C12.5161 2.22457 12.3415 2.15184 12.1593 2.15107Z"
                                                                        fill="#4C5B68" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M3.83589 0.749756H12.1605L12.1624 0.749759C12.7151 0.75141 13.245 0.971714 13.6358 1.36256C14.0267 1.7534 14.247 2.28302 14.2486 2.83576L14.2486 2.83761V6.02787C14.5461 6.16982 14.8201 6.36227 15.0576 6.5997C15.6044 7.14653 15.9126 7.88753 15.9149 8.66085L15.9149 8.66276L15.9149 12.2699L15.9149 12.2717V12.5478V12.5494C15.9149 12.9363 15.6012 13.25 15.2142 13.25C14.8273 13.25 14.5136 12.9363 14.5136 12.5494V12.5478C14.5136 12.5478 14.5136 12.5479 14.5136 12.5478V12.2737C14.5136 12.2737 14.5136 12.2736 14.5136 12.2737C14.5133 12.2384 14.4992 12.2043 14.4743 12.1794C14.4493 12.1545 14.4156 12.1403 14.3803 12.1401H1.6188C1.58354 12.1403 1.54979 12.1545 1.52485 12.1794C1.49991 12.2043 1.4858 12.2381 1.48554 12.2733V12.5478V12.5494C1.48554 12.9363 1.17185 13.25 0.784885 13.25C0.397923 13.25 0.0842285 12.9363 0.0842285 12.5494L0.0842285 12.5479C0.0842285 12.5478 0.0842285 12.5479 0.0842285 12.5479L0.084231 12.2701L0.0842311 8.66107C0.0865168 7.88774 0.394733 7.14653 0.941561 6.5997C1.17829 6.36297 1.45142 6.17096 1.7478 6.02913L1.7478 2.83598C1.74945 2.28324 1.96976 1.7534 2.3606 1.36256C2.75144 0.971714 3.28107 0.75141 3.8338 0.749759L3.83589 0.749756ZM14.5136 10.7447C14.4705 10.7409 14.4272 10.7389 14.3836 10.7388L14.3818 10.7388H1.61735L1.61531 10.7388C1.57183 10.7389 1.52853 10.7409 1.48554 10.7446V8.66407C1.48698 8.26129 1.64761 7.8754 1.93244 7.59058C2.19928 7.32374 2.55482 7.1659 2.92984 7.14585H13.0693C13.4443 7.1659 13.7999 7.32374 14.0667 7.59058C14.3516 7.87548 14.5122 8.26149 14.5136 8.66438V10.7447ZM7.27196 5.74237H3.7351C3.75564 5.68983 3.78693 5.64155 3.82759 5.6009C3.90447 5.52401 4.0086 5.48061 4.11731 5.48011H6.88975C6.99846 5.48061 7.10259 5.52402 7.17947 5.6009C7.22013 5.64155 7.25142 5.68983 7.27196 5.74237ZM12.2665 5.74237H8.72961C8.75014 5.68983 8.78144 5.64155 8.82209 5.6009C8.89898 5.52402 9.00311 5.48061 9.11181 5.48011H11.8843C11.993 5.48061 12.0971 5.52402 12.174 5.6009C12.2146 5.64155 12.2459 5.68983 12.2665 5.74237ZM12.1593 2.15107H3.83713C3.65491 2.15184 3.48035 2.22457 3.35148 2.35344C3.22261 2.48231 3.14988 2.65686 3.14911 2.83909V4.36002C3.43562 4.17867 3.76971 4.07976 4.11413 4.0788L4.11609 4.0788H6.89097L6.89273 4.0788C7.29614 4.07993 7.68552 4.21542 8.00078 4.46039C8.31599 4.21542 8.70522 4.07993 9.10864 4.0788L9.1106 4.0788H11.8855L11.8872 4.0788C12.2296 4.07976 12.5619 4.1775 12.8473 4.3568L12.8473 2.83942C12.8466 2.65716 12.7738 2.48233 12.6449 2.35344C12.5161 2.22457 12.3415 2.15184 12.1593 2.15107Z"
                                                                        fill="white" fill-opacity="0.3" />
                                                                </svg></div>
                                                            </div>


                                                            {/* <select name="stateid" className="selectpicker form-control mr-3"
                                                    id="inlineFormInputGroup">

                                                    <option hidden>Minimum Bed</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Minimum Bed"
                                                                className="w-250"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                        <p className="fontSize14 font-weght500 lablecolor mb-0">to</p>
                                                        <div className="input-group mb-2 col-sm-4 d-flex align-items-center">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="14"
                                                                    viewBox="0 0 16 14" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M3.83589 0.749756H12.1605L12.1624 0.749759C12.7151 0.75141 13.245 0.971714 13.6358 1.36256C14.0267 1.7534 14.247 2.28302 14.2486 2.83576L14.2486 2.83761V6.02787C14.5461 6.16982 14.8201 6.36227 15.0576 6.5997C15.6044 7.14653 15.9126 7.88753 15.9149 8.66085L15.9149 8.66276L15.9149 12.2699L15.9149 12.2717V12.5478V12.5494C15.9149 12.9363 15.6012 13.25 15.2142 13.25C14.8273 13.25 14.5136 12.9363 14.5136 12.5494V12.5478C14.5136 12.5478 14.5136 12.5479 14.5136 12.5478V12.2737C14.5136 12.2737 14.5136 12.2736 14.5136 12.2737C14.5133 12.2384 14.4992 12.2043 14.4743 12.1794C14.4493 12.1545 14.4156 12.1403 14.3803 12.1401H1.6188C1.58354 12.1403 1.54979 12.1545 1.52485 12.1794C1.49991 12.2043 1.4858 12.2381 1.48554 12.2733V12.5478V12.5494C1.48554 12.9363 1.17185 13.25 0.784885 13.25C0.397923 13.25 0.0842285 12.9363 0.0842285 12.5494L0.0842285 12.5479C0.0842285 12.5478 0.0842285 12.5479 0.0842285 12.5479L0.084231 12.2701L0.0842311 8.66107C0.0865168 7.88774 0.394733 7.14653 0.941561 6.5997C1.17829 6.36297 1.45142 6.17096 1.7478 6.02913L1.7478 2.83598C1.74945 2.28324 1.96976 1.7534 2.3606 1.36256C2.75144 0.971714 3.28107 0.75141 3.8338 0.749759L3.83589 0.749756ZM14.5136 10.7447C14.4705 10.7409 14.4272 10.7389 14.3836 10.7388L14.3818 10.7388H1.61735L1.61531 10.7388C1.57183 10.7389 1.52853 10.7409 1.48554 10.7446V8.66407C1.48698 8.26129 1.64761 7.8754 1.93244 7.59058C2.19928 7.32374 2.55482 7.1659 2.92984 7.14585H13.0693C13.4443 7.1659 13.7999 7.32374 14.0667 7.59058C14.3516 7.87548 14.5122 8.26149 14.5136 8.66438V10.7447ZM7.27196 5.74237H3.7351C3.75564 5.68983 3.78693 5.64155 3.82759 5.6009C3.90447 5.52401 4.0086 5.48061 4.11731 5.48011H6.88975C6.99846 5.48061 7.10259 5.52402 7.17947 5.6009C7.22013 5.64155 7.25142 5.68983 7.27196 5.74237ZM12.2665 5.74237H8.72961C8.75014 5.68983 8.78144 5.64155 8.82209 5.6009C8.89898 5.52402 9.00311 5.48061 9.11181 5.48011H11.8843C11.993 5.48061 12.0971 5.52402 12.174 5.6009C12.2146 5.64155 12.2459 5.68983 12.2665 5.74237ZM12.1593 2.15107H3.83713C3.65491 2.15184 3.48035 2.22457 3.35148 2.35344C3.22261 2.48231 3.14988 2.65686 3.14911 2.83909V4.36002C3.43562 4.17867 3.76971 4.07976 4.11413 4.0788L4.11609 4.0788H6.89097L6.89273 4.0788C7.29614 4.07993 7.68552 4.21542 8.00078 4.46039C8.31599 4.21542 8.70522 4.07993 9.10864 4.0788L9.1106 4.0788H11.8855L11.8872 4.0788C12.2296 4.07976 12.5619 4.1775 12.8473 4.3568L12.8473 2.83942C12.8466 2.65716 12.7738 2.48233 12.6449 2.35344C12.5161 2.22457 12.3415 2.15184 12.1593 2.15107Z"
                                                                        fill="#4C5B68" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M3.83589 0.749756H12.1605L12.1624 0.749759C12.7151 0.75141 13.245 0.971714 13.6358 1.36256C14.0267 1.7534 14.247 2.28302 14.2486 2.83576L14.2486 2.83761V6.02787C14.5461 6.16982 14.8201 6.36227 15.0576 6.5997C15.6044 7.14653 15.9126 7.88753 15.9149 8.66085L15.9149 8.66276L15.9149 12.2699L15.9149 12.2717V12.5478V12.5494C15.9149 12.9363 15.6012 13.25 15.2142 13.25C14.8273 13.25 14.5136 12.9363 14.5136 12.5494V12.5478C14.5136 12.5478 14.5136 12.5479 14.5136 12.5478V12.2737C14.5136 12.2737 14.5136 12.2736 14.5136 12.2737C14.5133 12.2384 14.4992 12.2043 14.4743 12.1794C14.4493 12.1545 14.4156 12.1403 14.3803 12.1401H1.6188C1.58354 12.1403 1.54979 12.1545 1.52485 12.1794C1.49991 12.2043 1.4858 12.2381 1.48554 12.2733V12.5478V12.5494C1.48554 12.9363 1.17185 13.25 0.784885 13.25C0.397923 13.25 0.0842285 12.9363 0.0842285 12.5494L0.0842285 12.5479C0.0842285 12.5478 0.0842285 12.5479 0.0842285 12.5479L0.084231 12.2701L0.0842311 8.66107C0.0865168 7.88774 0.394733 7.14653 0.941561 6.5997C1.17829 6.36297 1.45142 6.17096 1.7478 6.02913L1.7478 2.83598C1.74945 2.28324 1.96976 1.7534 2.3606 1.36256C2.75144 0.971714 3.28107 0.75141 3.8338 0.749759L3.83589 0.749756ZM14.5136 10.7447C14.4705 10.7409 14.4272 10.7389 14.3836 10.7388L14.3818 10.7388H1.61735L1.61531 10.7388C1.57183 10.7389 1.52853 10.7409 1.48554 10.7446V8.66407C1.48698 8.26129 1.64761 7.8754 1.93244 7.59058C2.19928 7.32374 2.55482 7.1659 2.92984 7.14585H13.0693C13.4443 7.1659 13.7999 7.32374 14.0667 7.59058C14.3516 7.87548 14.5122 8.26149 14.5136 8.66438V10.7447ZM7.27196 5.74237H3.7351C3.75564 5.68983 3.78693 5.64155 3.82759 5.6009C3.90447 5.52401 4.0086 5.48061 4.11731 5.48011H6.88975C6.99846 5.48061 7.10259 5.52402 7.17947 5.6009C7.22013 5.64155 7.25142 5.68983 7.27196 5.74237ZM12.2665 5.74237H8.72961C8.75014 5.68983 8.78144 5.64155 8.82209 5.6009C8.89898 5.52402 9.00311 5.48061 9.11181 5.48011H11.8843C11.993 5.48061 12.0971 5.52402 12.174 5.6009C12.2146 5.64155 12.2459 5.68983 12.2665 5.74237ZM12.1593 2.15107H3.83713C3.65491 2.15184 3.48035 2.22457 3.35148 2.35344C3.22261 2.48231 3.14988 2.65686 3.14911 2.83909V4.36002C3.43562 4.17867 3.76971 4.07976 4.11413 4.0788L4.11609 4.0788H6.89097L6.89273 4.0788C7.29614 4.07993 7.68552 4.21542 8.00078 4.46039C8.31599 4.21542 8.70522 4.07993 9.10864 4.0788L9.1106 4.0788H11.8855L11.8872 4.0788C12.2296 4.07976 12.5619 4.1775 12.8473 4.3568L12.8473 2.83942C12.8466 2.65716 12.7738 2.48233 12.6449 2.35344C12.5161 2.22457 12.3415 2.15184 12.1593 2.15107Z"
                                                                        fill="white" fill-opacity="0.3" />
                                                                </svg></div>
                                                            </div>
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3"
                                                    id="inlineFormInputGroup">

                                                    <option hidden>Minimum Bed</option>
                                                </select> */}

                                                            <DropdownButton
                                                                alignRight
                                                                title="Maximum bed"
                                                                className="w-250"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>

                                                                <Dropdown.Item eventKey="option-3">1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-1">2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="col-sm-3 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="inlineFormInputGroup">Rent Price</label>
                                                        <div className="input-group mb-2 col-sm-4 d-flex align-items-center pr-0">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="9" height="15"
                                                                    viewBox="0 0 9 15" fill="none">
                                                                    <path
                                                                        d="M3.846 14.392V13.16C2.80067 13.0427 1.974 12.6693 1.366 12.04C0.758 11.4107 0.454 10.6107 0.454 9.64H1.862C1.862 10.2053 2.02733 10.712 2.358 11.16C2.69933 11.5973 3.19533 11.88 3.846 12.008V7.672C3.77133 7.65067 3.69133 7.62933 3.606 7.608C3.53133 7.576 3.45667 7.54933 3.382 7.528C2.518 7.22933 1.878 6.86133 1.462 6.424C1.046 5.976 0.838 5.39467 0.838 4.68C0.827333 3.848 1.08867 3.15467 1.622 2.6C2.166 2.04533 2.90733 1.72533 3.846 1.64V0.344H4.95V1.64C5.846 1.74667 6.56067 2.08267 7.094 2.648C7.62733 3.21333 7.89933 3.90133 7.91 4.712H6.502C6.502 4.31733 6.374 3.93867 6.118 3.576C5.862 3.20267 5.47267 2.952 4.95 2.824V6.696C5.03533 6.71733 5.12067 6.744 5.206 6.776C5.29133 6.808 5.382 6.83467 5.478 6.856C6.01133 7.048 6.49133 7.272 6.918 7.528C7.34467 7.784 7.67533 8.11467 7.91 8.52C8.15533 8.92533 8.278 9.44267 8.278 10.072C8.278 10.5733 8.15533 11.048 7.91 11.496C7.66467 11.944 7.29133 12.3227 6.79 12.632C6.29933 12.9413 5.686 13.1227 4.95 13.176V14.392H3.846ZM2.23 4.552C2.23 5.04267 2.374 5.416 2.662 5.672C2.95 5.91733 3.34467 6.13067 3.846 6.312V2.792C3.366 2.86667 2.97667 3.05867 2.678 3.368C2.37933 3.66667 2.23 4.06133 2.23 4.552ZM6.886 10.152C6.886 9.53333 6.70467 9.07467 6.342 8.776C5.97933 8.47733 5.51533 8.232 4.95 8.04V12.04C5.56867 11.9653 6.04333 11.752 6.374 11.4C6.71533 11.048 6.886 10.632 6.886 10.152Z"
                                                                        fill="#4C5B68" />
                                                                    <path
                                                                        d="M3.846 14.392V13.16C2.80067 13.0427 1.974 12.6693 1.366 12.04C0.758 11.4107 0.454 10.6107 0.454 9.64H1.862C1.862 10.2053 2.02733 10.712 2.358 11.16C2.69933 11.5973 3.19533 11.88 3.846 12.008V7.672C3.77133 7.65067 3.69133 7.62933 3.606 7.608C3.53133 7.576 3.45667 7.54933 3.382 7.528C2.518 7.22933 1.878 6.86133 1.462 6.424C1.046 5.976 0.838 5.39467 0.838 4.68C0.827333 3.848 1.08867 3.15467 1.622 2.6C2.166 2.04533 2.90733 1.72533 3.846 1.64V0.344H4.95V1.64C5.846 1.74667 6.56067 2.08267 7.094 2.648C7.62733 3.21333 7.89933 3.90133 7.91 4.712H6.502C6.502 4.31733 6.374 3.93867 6.118 3.576C5.862 3.20267 5.47267 2.952 4.95 2.824V6.696C5.03533 6.71733 5.12067 6.744 5.206 6.776C5.29133 6.808 5.382 6.83467 5.478 6.856C6.01133 7.048 6.49133 7.272 6.918 7.528C7.34467 7.784 7.67533 8.11467 7.91 8.52C8.15533 8.92533 8.278 9.44267 8.278 10.072C8.278 10.5733 8.15533 11.048 7.91 11.496C7.66467 11.944 7.29133 12.3227 6.79 12.632C6.29933 12.9413 5.686 13.1227 4.95 13.176V14.392H3.846ZM2.23 4.552C2.23 5.04267 2.374 5.416 2.662 5.672C2.95 5.91733 3.34467 6.13067 3.846 6.312V2.792C3.366 2.86667 2.97667 3.05867 2.678 3.368C2.37933 3.66667 2.23 4.06133 2.23 4.552ZM6.886 10.152C6.886 9.53333 6.70467 9.07467 6.342 8.776C5.97933 8.47733 5.51533 8.232 4.95 8.04V12.04C5.56867 11.9653 6.04333 11.752 6.374 11.4C6.71533 11.048 6.886 10.632 6.886 10.152Z"
                                                                        fill="white" fill-opacity="0.3" />
                                                                </svg></div>
                                                            </div>
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3"
                                                    id="inlineFormInputGroup">

                                                    <option hidden>Minimum Rent</option>
                                                </select> */}

                                                            <DropdownButton
                                                                alignRight
                                                                title="Minimum rent"
                                                                className="w-250"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>

                                                                <Dropdown.Item eventKey="option-3">1000</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-1">2000</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">3000</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                        <p className="fontSize14 font-weght500 lablecolor mb-0">to</p>
                                                        <div className="input-group mb-2 col-sm-4 d-flex align-items-center">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="9" height="15"
                                                                    viewBox="0 0 9 15" fill="none">
                                                                    <path
                                                                        d="M3.846 14.392V13.16C2.80067 13.0427 1.974 12.6693 1.366 12.04C0.758 11.4107 0.454 10.6107 0.454 9.64H1.862C1.862 10.2053 2.02733 10.712 2.358 11.16C2.69933 11.5973 3.19533 11.88 3.846 12.008V7.672C3.77133 7.65067 3.69133 7.62933 3.606 7.608C3.53133 7.576 3.45667 7.54933 3.382 7.528C2.518 7.22933 1.878 6.86133 1.462 6.424C1.046 5.976 0.838 5.39467 0.838 4.68C0.827333 3.848 1.08867 3.15467 1.622 2.6C2.166 2.04533 2.90733 1.72533 3.846 1.64V0.344H4.95V1.64C5.846 1.74667 6.56067 2.08267 7.094 2.648C7.62733 3.21333 7.89933 3.90133 7.91 4.712H6.502C6.502 4.31733 6.374 3.93867 6.118 3.576C5.862 3.20267 5.47267 2.952 4.95 2.824V6.696C5.03533 6.71733 5.12067 6.744 5.206 6.776C5.29133 6.808 5.382 6.83467 5.478 6.856C6.01133 7.048 6.49133 7.272 6.918 7.528C7.34467 7.784 7.67533 8.11467 7.91 8.52C8.15533 8.92533 8.278 9.44267 8.278 10.072C8.278 10.5733 8.15533 11.048 7.91 11.496C7.66467 11.944 7.29133 12.3227 6.79 12.632C6.29933 12.9413 5.686 13.1227 4.95 13.176V14.392H3.846ZM2.23 4.552C2.23 5.04267 2.374 5.416 2.662 5.672C2.95 5.91733 3.34467 6.13067 3.846 6.312V2.792C3.366 2.86667 2.97667 3.05867 2.678 3.368C2.37933 3.66667 2.23 4.06133 2.23 4.552ZM6.886 10.152C6.886 9.53333 6.70467 9.07467 6.342 8.776C5.97933 8.47733 5.51533 8.232 4.95 8.04V12.04C5.56867 11.9653 6.04333 11.752 6.374 11.4C6.71533 11.048 6.886 10.632 6.886 10.152Z"
                                                                        fill="#4C5B68" />
                                                                    <path
                                                                        d="M3.846 14.392V13.16C2.80067 13.0427 1.974 12.6693 1.366 12.04C0.758 11.4107 0.454 10.6107 0.454 9.64H1.862C1.862 10.2053 2.02733 10.712 2.358 11.16C2.69933 11.5973 3.19533 11.88 3.846 12.008V7.672C3.77133 7.65067 3.69133 7.62933 3.606 7.608C3.53133 7.576 3.45667 7.54933 3.382 7.528C2.518 7.22933 1.878 6.86133 1.462 6.424C1.046 5.976 0.838 5.39467 0.838 4.68C0.827333 3.848 1.08867 3.15467 1.622 2.6C2.166 2.04533 2.90733 1.72533 3.846 1.64V0.344H4.95V1.64C5.846 1.74667 6.56067 2.08267 7.094 2.648C7.62733 3.21333 7.89933 3.90133 7.91 4.712H6.502C6.502 4.31733 6.374 3.93867 6.118 3.576C5.862 3.20267 5.47267 2.952 4.95 2.824V6.696C5.03533 6.71733 5.12067 6.744 5.206 6.776C5.29133 6.808 5.382 6.83467 5.478 6.856C6.01133 7.048 6.49133 7.272 6.918 7.528C7.34467 7.784 7.67533 8.11467 7.91 8.52C8.15533 8.92533 8.278 9.44267 8.278 10.072C8.278 10.5733 8.15533 11.048 7.91 11.496C7.66467 11.944 7.29133 12.3227 6.79 12.632C6.29933 12.9413 5.686 13.1227 4.95 13.176V14.392H3.846ZM2.23 4.552C2.23 5.04267 2.374 5.416 2.662 5.672C2.95 5.91733 3.34467 6.13067 3.846 6.312V2.792C3.366 2.86667 2.97667 3.05867 2.678 3.368C2.37933 3.66667 2.23 4.06133 2.23 4.552ZM6.886 10.152C6.886 9.53333 6.70467 9.07467 6.342 8.776C5.97933 8.47733 5.51533 8.232 4.95 8.04V12.04C5.56867 11.9653 6.04333 11.752 6.374 11.4C6.71533 11.048 6.886 10.632 6.886 10.152Z"
                                                                        fill="white" fill-opacity="0.3" />
                                                                </svg></div>
                                                            </div>
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3"
                                                    id="inlineFormInputGroup">

                                                    <option hidden>Minimum Rent</option>
                                                </select> */}

                                                            <DropdownButton
                                                                alignRight
                                                                title="Maximum rent"
                                                                className="w-250"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>

                                                                <Dropdown.Item eventKey="option-3">1000</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-1">2000</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">3000</Dropdown.Item>
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ManageDeal premium-contact mt-64" id="tab-5">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Manage Deal/Specials
                                            </h3>
                                            <div className="row">
                                                <div className="col-sm-6">

                                                    <div className=" borderBottom pb-32">
                                                        <div className="form-check form-check-inline">
                                                            {/* <input className="form-check-input" type="radio" name="" id="inlineRadio33"
                                                    value="option33" />
                                                <label className="form-check-label fontSize16 font-weight500 colorBlue"
                                                    for="inlineRadio33">Custom</label> */}

                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                    
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                                <ToggleButton value={"Custom"}>Custom</ToggleButton>

                                                            </ToggleButtonGroup>

                                                        </div>

                                                        <div className="manage-deal-form pl-3 mt-24 ">
                                                            {/* <div className="form-check form-check-inline mb-19">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio60" value="option60"
                                                        checked="" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio60">Good Deals</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio2">Affordable Housing</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Senior Housing</label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Rental Deal
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">
                                                    </label>
                                                    <input className="form-control" type="text" placeholder="Type Title" />
                                                </div> */}
                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                className="wauto"
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                                <ToggleButton value={"Good Deal"}>Good Deal</ToggleButton>
                                                                <ToggleButton value={"Affordable Housing"}>Affordable Housing</ToggleButton>
                                                                <ToggleButton value={"Senior Housing"}>Senior Housing</ToggleButton>
                                                                

                                                            </ToggleButtonGroup>
                                                            <div className="form-check form-check-inline ml-0">
                                                                <input className="form-check-input" type="radio"
                                                                    name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                                    for="inlineRadio3">
                                                                </label>
                                                                <input className="form-control" type="text" placeholder="Type Title" />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-24 pl-3">
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                        for="inlineFormInputGroup">Floorplan </label>
                                                                    <div className="input-group w-143 mb-2">
                                                                        <input type="text" className="w-109 form-control"
                                                                            id="inlineFormInputGroup" placeholder="Floorplan" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                        for="inlineFormInputGroup">Rental Deal </label>
                                                                    <div className="input-group w-143 mb-2">
                                                                        <input type="text" className="w-109 form-control"
                                                                            id="inlineFormInputGroup" placeholder="Type" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label
                                                                        className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                        for="inlineFormInputGroup">Amount </label>
                                                                    <div className="input-group w-143 mb-2">
                                                                        <input type="text" className="w-109 form-control"
                                                                            id="inlineFormInputGroup" placeholder="Amount" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>






                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="fontSize18 font-weght500 colorBlue">How it looks:</p>
                                                    <div className="howit w369">
                                                        <p className="d-flex align-items-center"><span
                                                            className="bggreen font-weight700 fontSize16 tgreen"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                viewBox="0 0 16 16" fill="none">
                                                                <g clip-path="url(#clip0)">
                                                                    <path
                                                                        d="M12.6007 3.9223C12.585 3.72563 12.5206 3.53544 12.4121 3.37082C12.0268 2.78638 10.9131 1.3993 8.45052 0.26154C8.13855 0.117291 7.77855 0.117291 7.46658 0.26154C5.00402 1.3993 3.89032 2.78642 3.5053 3.37084C3.39648 3.53544 3.33206 3.72563 3.31666 3.92232C3.02507 7.59751 3.00812 10.5795 3.26489 14.1727C3.30495 14.734 3.73774 15.1893 4.2966 15.2547C6.73791 15.5395 9.17922 15.5395 11.6205 15.2547C12.1794 15.1893 12.6122 14.734 12.6522 14.1727C12.9093 10.5795 12.892 7.59751 12.6007 3.9223ZM7.95855 3.61928C7.45028 3.61928 7.03814 3.20715 7.03814 2.69887C7.03814 2.19055 7.45025 1.77844 7.95857 1.77844C8.4669 1.77844 8.87898 2.19057 8.87901 2.69887C8.87898 3.20717 8.46685 3.6193 7.95855 3.61928Z"
                                                                        fill="#1BC47D"></path>
                                                                </g>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M8.04136 5.71436C8.27806 5.71436 8.46994 5.90623 8.46994 6.14293V13.1034C8.46994 13.34 8.27806 13.5319 8.04136 13.5319C7.80467 13.5319 7.61279 13.34 7.61279 13.1034V6.14293C7.61279 5.90623 7.80467 5.71436 8.04136 5.71436Z"
                                                                    fill="white"></path>
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.16421 7.42978C6.45225 7.14174 6.84292 6.97992 7.25027 6.97992H9.62314C9.85983 6.97992 10.0517 7.1718 10.0517 7.40849C10.0517 7.64518 9.85983 7.83706 9.62314 7.83706H7.25027C7.07025 7.83706 6.8976 7.90858 6.77031 8.03587C6.64301 8.16316 6.5715 8.33581 6.5715 8.51583C6.5715 8.69585 6.64301 8.8685 6.77031 8.99579C6.8976 9.12309 7.07025 9.1946 7.25027 9.1946H8.83218C9.23953 9.1946 9.6302 9.35642 9.91824 9.64446C10.2063 9.9325 10.3681 10.3232 10.3681 10.7305C10.3681 11.1379 10.2063 11.5285 9.91824 11.8166C9.6302 12.1046 9.23953 12.2664 8.83218 12.2664H6.14293C5.90623 12.2664 5.71436 12.0745 5.71436 11.8379C5.71436 11.6012 5.90623 11.4093 6.14293 11.4093H8.83218C9.0122 11.4093 9.18485 11.3378 9.31214 11.2105C9.43944 11.0832 9.51095 10.9105 9.51095 10.7305C9.51095 10.5505 9.43944 10.3778 9.31214 10.2506C9.18485 10.1233 9.0122 10.0517 8.83218 10.0517H7.25027C6.84292 10.0517 6.45225 9.88992 6.16421 9.60189C5.87617 9.31385 5.71436 8.92318 5.71436 8.51583C5.71436 8.10848 5.87617 7.71782 6.16421 7.42978Z"
                                                                    fill="white"></path>
                                                                <defs>
                                                                    <clipPath id="clip0">
                                                                        <rect width="16" height="16" fill="white"></rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>Good
                                                            Deal</span>
                                                            <span className="ml-auto colorBlue font-weight700 fontSize18">$1200</span>
                                                        </p>
                                                        <div className="sliderListing">
                                                            <ul className="clearfix d-flex align-items-center">
                                                                <li><b>1</b>Bd</li>
                                                                <li><b>1</b>Ba</li>
                                                                <li><b>980</b>Sq.Ft</li>
                                                                <li className="ml-auto fontSize16">Affordable Housing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="utilitiy-allowances mt-64" id="tab-6">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Utility Allowances
                                            </h3>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Electric Paid By:
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">


                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>


                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Water Paid By:
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Trash Paid By:
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Sewer Paid By:
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Hot Water Paid By:

                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Cooling Paid By:

                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Cooking Paid By: :
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  align-items-center mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Head Paid By: :
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio60" value="option60" checked="" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio60">Management
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio2">Resident </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">N/A </label>
                                            </div>
                                            <div className="form-check form-check-inline ml-0">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                    for="inlineRadio3">Call</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}
                                                        >
                                                            <ToggleButton value={"Management"}>Management</ToggleButton>
                                                            <ToggleButton value={"Resident"}>Resident</ToggleButton>
                                                            <ToggleButton value={"N/A"}>N/A</ToggleButton>
                                                            <ToggleButton value={"Call"}>Call</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="premium-contact mt-64 unity-aminities Propertyamenities" id="tab-7">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Property Amenities</h3>








                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">#</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0">
                                                    <div className="row">


                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check: e })} >
                                                            <ToggleButton value={"24hr Emergency Maintenance"}>24hr Emergency Maintenance</ToggleButton>
                                                        </ToggleButtonGroup>


                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"24/7 Emergency Maintenance"}>24/7 Emergency Maintenance</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"9.25 Acres of Lush, Landscaped Grounds"}>9.25 Acres of Lush, Landscaped Grounds</ToggleButton>
                                                        </ToggleButtonGroup>



                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">A</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">After-School Homework Club </label>
                                            </div> */}

                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"After-School Homework Club"}>After-School Homework Club</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Assigned Parking </label>
                                            </div> */}

                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Assigned Parking"}>Assigned Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Attached Garage </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Attached Garage"}>Attached Garage</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">B</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Basketball Court </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Basketball Court"}>Basketball Court</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">BBQ/Picnic Area </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"BBQ/Picnic Area"}>BBQ/Picnic Area</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Bus Line </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Bus Line"}>Bus Line</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Bus Stop </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Bus Stop "}>Bus Stop </ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Business </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Business"}>Business</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">C</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Cable </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Cable"}>Cable</ToggleButton>
                                                        </ToggleButtonGroup>



                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Carport </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Carport"}>Carport</ToggleButton>
                                                        </ToggleButtonGroup>


                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Central Air </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Central Air"}>Central Air</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Central Air and Heat </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Central Air and Heat"}>Central Air and Heat</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Central Air Conditioning </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Central Air Conditioning"}>Central Air Conditioning</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Business District </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Close to Business District"}>Close to Business District</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Dining </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Dining"}>Close to Dining</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Downtown District </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Downtown District"}>Close to Downtown District</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Hospitals </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Hospitals"}>Close to Hospitals</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Library </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Library"}>Close to Library</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Public Transit </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Public Transit"}>Close to Public Transit</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Schools </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Schools"}>Close to Schools</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Shopping </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Shopping"}>Close to Shopping</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Close to Shopping, Dining, Banking & Schools
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Close to Shopping, Dining, Banking & Schools"}>Close to Shopping, Dining, Banking & Schools</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Clubhouse </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Clubhouse"}>Clubhouse</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Coded Parking</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Coded Parking"}>Coded Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Community Laundry Room</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Community Laundry Room"}>Community Laundry Room</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Community Room</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Community Room"}>Community Room</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Community/Onsite Parking</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Community/Onsite Parking"}>Community/Onsite Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Computer Room</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Computer Room"}>Computer Room</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Controlled Access</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Controlled Access"}>Controlled Access</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Covered Parking</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Covered Parking"}>Covered Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Covered Picnic Area</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Covered Picnic Area"}>Covered Picnic Area</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">D</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Day Care Center </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Day Care Center"}>Day Care Center</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Detached Garage</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Detached Garage"}>Detached Garage</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Door Attendant</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Door Attendant"}>Door Attendant</ToggleButton>
                                                        </ToggleButtonGroup>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">E</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Elevator
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Elevator"}>Elevator</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Extra Storage Available </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Extra Storage Available"}>Extra Storage Available</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">F</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Fenced, Off-Leash Dog Park
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Fenced, Off-Leash Dog Park"}>Fenced, Off-Leash Dog Park</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Fitness Center
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Fitness Center"}>Fitness Center</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Furnished Units Available</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Furnished Units Available"}>Furnished Units Available</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">G</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Game Room
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Game Room"}>Game Room</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Gas
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Gas"}>Gas</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Gated Community</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Gated Community"}>Gated Community</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Gated Parking</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Gated Parking"}>Gated Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Grill</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Grill"}>Grill</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Guest Parking</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Guest Parking"}>Guest Parking</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">H</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Historic Building
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Historic Building"}>Historic Building</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">I</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Internet
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Internet"}>Internet</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Intrusion Alarm Available
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Intrusion Alarm Available"}>Intrusion Alarm Available</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">L</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Laundry Facilities
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Laundry Facilities"}>Laundry Facilities</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Laundry Facility
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Laundry Facility"}>Laundry Facility</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Lawn Care
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Lawn Care"}>Lawn Care</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Library
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Library"}>Library</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">M</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Media Center/Movie Theater
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Media Center/Movie Theater"}>Media Center/Movie Theater</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Mukilteo School District
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Mukilteo School District"}>Mukilteo School District</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">N</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Near Park
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Near Park"}>Near Park</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Near Public Transportation</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Near Public Transportation"}>Near Public Transportation</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">O</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Off Street Parking
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Off Street Parking"}>Off Street Parking</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Online Maintenance Portal</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Online Maintenance Portal"}>Online Maintenance Portal</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Online Rental Payments</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Online Rental Payments"}>Online Rental Payments</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Onsite Maintenance</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Onsite Management"}>Onsite Management</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Onsite Management</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Onsite Management"}>Onsite Management</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">On-Site Management</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"On-Site Management"}>On-Site Management</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">On-Site Manager</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"On-Site Manager"}>On-Site Manager</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">On-Site Security</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"On-Site Security"}>On-Site Security</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">P</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Patio & Balconies
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Patio & Balconies"}>Patio & Balconies</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Patio Or Balcony</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Patio Or Balcony"}>Patio Or Balcony</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Picnic Area</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Picnic Area"}>Picnic Area</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Planned community Activities</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Planned community Activities"}>Planned community Activities</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Playground </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Playground"}>Playground</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Pool</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Pool"}>Pool</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Public Transportation</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Public Transportation"}>Public Transportation</ToggleButton>
                                                        </ToggleButtonGroup>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">R</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Racquetball Court
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Racquetball Court"}>Racquetball Court</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Recycling Available</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Recycling Available"}>Recycling Available</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Retail Store Onsite</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Retail Store Onsite"}>Retail Store Onsite</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Rural Area</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Rural Area"}>Rural Area</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">S</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Section 8 Vouchers Accepted
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Section 8 Vouchers Accepted"}>Section 8 Vouchers Accepted</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Sewage</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Sewage"}>Sewage</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Smoke-Free Units Available</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Smoke-Free Units Available"}>Smoke-Free Units Available</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Spa/Hot Tub</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Spa/Hot Tub"}>Spa/Hot Tub</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Storage Space</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Storage Space"}>Storage Space</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">T</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Tennis Court
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Tennis Court"}>Tennis Court</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Trash</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Trash"}>Trash</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">V</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Valet Parking
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Valet Parking"}>Valet Parking</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">W</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Washer & Dryer Hook Ups
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Washer & Dryer Hook Ups"}>Washer & Dryer Hook Ups</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Water
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Water"}>Water</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Wireless Internet Available
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Wireless Internet Available"}>Wireless Internet Available</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <p className="font-weight700 fontSize14 colorBlue mt-19">Custom amenities you added</p>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue"></p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Custom Amenities
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Custom Amenities"}>Custom Amenities</ToggleButton>
                                                        </ToggleButtonGroup>


                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Custom Amenities
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Custom Amenities"}>Custom Amenities</ToggleButton>
                                                        </ToggleButtonGroup>


                                                    </div>
                                                </div>
                                            </div>
                                            <p className="font-weight700 fontSize14 mt-19 colorGreen ">+ Add More</p>
                                            <p><input className="form-control w284" type="text" placeholder="Custom Amenities" /></p>





                                        </div>
                                        <div className="premium-contact mt-64 unity-aminities" id="tab-8">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Unit Amenities</h3>
                                            <div className="row  mt-2r">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">A</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Air Conditioning</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Air Conditioning"}>Air Conditioning</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">All Appliances Included </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"All Appliances Included"}>All Appliances Included</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Appliances </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Appliances"}>Appliances</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">B</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Balcony</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Balcony"}>Balcony</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">C</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Cable Ready</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Cable Ready"}>Cable Ready</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Cable/Satellite Ready</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Cable/Satellite Ready"}>Cable/Satellite Ready</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Carpet</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Carpet"}>Carpet</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Carpeting</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Carpeting"}>Carpeting</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Ceiling Fan</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Ceiling Fan"}>Ceiling Fan</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Central Heat and Air</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Central Heat and Air"}>Central Heat and Air</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Crown Molding</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Crown Molding"}>Crown Molding</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">D</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Deck</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Deck"}>Deck</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Dishwasher</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Dishwasher"}>Dishwasher</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Double Vanities</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Double Vanities"}>Double Vanities</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">E</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Emergency Pull Cord</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Emergency Pull Cord"}>Emergency Pull Cord</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">F</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Fireplace</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Fireplace"}>Fireplace</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">G</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Garbage Disposal</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Garbage Disposal"}>Garbage Disposal</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Gas Fireplace</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Gas Fireplace"}>Gas Fireplace</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">H</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Handicap Access Units Available</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Handicap Access Units Available"}>Handicap Access Units Available</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Handicap Rails</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Handicap Rails"}>Handicap Rails</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Hardwood floors</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Hardwood floors"}>Hardwood floors</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">High Ceilings</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"High Ceilings"}>High Ceilings</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">High Speed Internet Available</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"High Speed Internet Available"}>High Speed Internet Available</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">I</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Ice Maker</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Ice Maker"}>Ice Maker</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">L</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Laundry Room</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Laundry Room"}>Laundry Room</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">M</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Microwave</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton value={"Microwave"}>Microwave</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">O</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Oversized Bathtub</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Oversized Bathtub"}>Oversized Bathtub</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">p</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Patio</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Patio"}>Patio</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Porch</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Porch"}>Porch</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Private Patio</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Private Patio"}>Private Patio</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">R</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Refrigerator</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Refrigerator"}>Refrigerator</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Refrigerator/Stove
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Refrigerator/Stove"}>Refrigerator/Stove</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">S</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Self Cleaning Oven </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Self Cleaning Oven"}>Self Cleaning Oven</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Stainless Steel Appliances
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Stainless Steel Appliances"}>Stainless Steel Appliances</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">StovE
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox"
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"StovE"}>StovE</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">T</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Tile Flooring </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Tile Flooring"}>Tile Flooring</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">V</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Vaulted Ceiling </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Vaulted Ceiling"}>Vaulted Ceiling</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">View
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"View"}>View</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">W</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Walk-In Closets </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Walk-In Closets"}>Walk-In Closets</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Walk-In Showers
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Walk-In Showers"}>Walk-In Showers</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Wall to Wall Carpeting</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Wall to Wall Carpeting"}>Wall to Wall Carpeting</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Wall Unit Air Conditioning </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Wall Unit Air Conditioning"}>Wall Unit Air Conditioning</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Washer and Dryer Connections in unit
                                                </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Washer and Dryer Connections in unit"}>Washer and Dryer Connections in unit</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Water Trash & Sewer Included</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, Included: e })} >
                                                            <ToggleButton  value={"Water Trash & Sewer Included"}>Water Trash & Sewer Included</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Window Coverings</label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, Coverings: e })} >
                                                            <ToggleButton  value={"Window Coverings"}>Window Coverings</ToggleButton>
                                                        </ToggleButtonGroup>

                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Wood Burning Fireplace </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, check1: e })} >
                                                            <ToggleButton  value={"Business"}>Business</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-2">
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pr-0 ">
                                                    <p className="mb-0 fontSize14 font-weight700 colorBlue">Y</p>
                                                </div>
                                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12 pl-0 ">
                                                    <div className="row">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yard </label>
                                            </div> */}
                                                        <ToggleButtonGroup type="checkbox" 
                                                            value={searchdata.check1}
                                                            onChange={(e) => setSearchdata({ ...searchdata, Yard: e })} >
                                                            <ToggleButton  value={"Yard"}>Yard</ToggleButton>
                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pet-details mt-64" id="tab-9">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Pet Details</h3>
                                            <div className="row  mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Pet Allowed</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="row pl-0 pr-0">
                                                        <div className="col-lg-12 pl-0 pr-0">
                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                                <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                                <ToggleButton value={"No"}>No</ToggleButton>
                                                                <ToggleButton value={"Service Animal Only"}>Service Animal Only</ToggleButton>
                                                                <ToggleButton value={"Call"}>Manager Disclaimer</ToggleButton>

                                                            </ToggleButtonGroup>
                                                            {/* <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio60" value="option60"
                                                        checked="" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio60">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio2">No</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Service Animal Only</label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Manager Disclaimer
                                                    </label>
                                                </div> */}
                                                        </div>
                                                        <div className="col-lg-3 mt-3 pl-0 pr-0">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="inlineFormInputGroup">Maximum Pet Weight </label>
                                                                <div className="input-group w-143 mb-2">
                                                                    <input type="text" className="w-109 form-control"
                                                                        id="inlineFormInputGroup" value="21" />
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">Ib</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 mt-3 pl-0 pr-0">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="inlineFormInputGroup">Maximum No. of Pets </label>
                                                                <div className="input-group w-143 mb-2">
                                                                    <input type="text" className="w-109 form-control"
                                                                        id="inlineFormInputGroup" value="2" />
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">Pets</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 mt-3 pl-0 pr-0">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="inlineFormInputGroup">Pet Deposit Amount </label>
                                                                <div className="input-group w-143 mb-2">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">$</div>
                                                                    </div>
                                                                    <input type="text" className="w-109 form-control"
                                                                        id="inlineFormInputGroup" value="2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 pl-0 pr-0">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="formGroupInput">Disclaimer Notes</label>
                                                                <textarea className="w-100" placeholder="Disclaimer Notes"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="parking-details	 mt-64" id="tab-10">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Parking Details </h3>
                                            <div className="row  mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 pr-0">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Parking Type </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0 pl-0">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            {/* <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio60" value="option60"
                                                        checked="" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio60">Common </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio2">Gated</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Covered </label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Off-Street

                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Structure</label>
                                                </div>
                                                <div className="form-check form-check-inline ml-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio3">Car Port
                                                    </label>
                                                </div> */}
                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                                <ToggleButton value={"Covered"}>Common</ToggleButton>
                                                                <ToggleButton value={"Off-Street"}>Gated</ToggleButton>
                                                                <ToggleButton value={"Covered"}>Covered</ToggleButton>
                                                                <ToggleButton value={"Off-Street"}>Off-Street</ToggleButton>
                                                                <ToggleButton value={"Structure"}>Structure</ToggleButton>
                                                                <ToggleButton value={"Car Port"}>Car Port</ToggleButton>

                                                            </ToggleButtonGroup>
                                                        </div>



                                                    </div>


                                                </div>
                                            </div>
                                            <div className="form-group d-flex align-items-center">
                                                <label className="col-sm-3 pl-0 pr-0 fontSize14 font-weight500 colorBlue"
                                                    for="formGroupInput">Parking Fee Amount </label>
                                                <div className="input-group w-143 mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">$</div>
                                                    </div>
                                                    <input type="text" className="w-109 form-control" id="inlineFormInputGroup"
                                                        value="2" />
                                                </div>
                                            </div>
                                            <div className="row  mb-20">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Assigned Parking

                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 pr-0">
                                                    <div className="row pl-0 pr-0">
                                                        <div className="col-lg-12 pl-0 pr-0">
                                                            {/* <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio60" value="option60"
                                                        checked="" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio60">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio"
                                                        name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label fontSize14 font-weight500 colorBlue"
                                                        for="inlineRadio2">No</label>
                                                </div> */}

                                                            <ToggleButtonGroup
                                                                name="value"
                                                                type="radio"
                                                                value={searchdata.radio}
                                                                onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                                <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                                <ToggleButton value={"No"}>No</ToggleButton>

                                                            </ToggleButtonGroup>
                                                        </div>



                                                        <div className="col-lg-12 pl-0 pr-0 mt-3">
                                                            <div className="form-group">
                                                                <label
                                                                    className="col-sm-12 pl-0 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                                    for="formGroupInput">Parking Comments
                                                                </label>
                                                                <textarea className="w-100" placeholder="Insert Parking Comments
                                    "></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>










                                        <div className="d-flex align-items-center mt-40 mb-0" id="tab-11">
                                            <h3 className="fontSize24 font-weight500  colorBlue mb-0">Blessed Rock Apartment Photos
                                            </h3>
                                            <p className="mb-0 colorGreen ml-auto fontSize18 font-weight700"><svg className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                                                    stroke="#1BC47D" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M7 10L12 15L17 10" stroke="#1BC47D" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 15V3" stroke="#1BC47D" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>Download All Photos </p>

                                        </div>
                                        <div className="listhub-tab mt-22 bgwhite sliderSection">

                                            <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">



                                                <div className="carousel-inner">
                                                    <div className="carousel-item active"> <img src="assets/img/sliderproduct.png"
                                                        alt="Hills" /> </div>
                                                    <div className="carousel-item"> <img src="assets/img/sliderproduct.png" alt="Hills" />
                                                    </div>
                                                    <div className="carousel-item"> <img src="assets/img/sliderproduct.png" alt="Hills" />
                                                    </div>
                                                    <div className="carousel-item"> <img src="assets/img/sliderproduct.png" alt="Hills" />
                                                    </div>
                                                </div>

                                                <a className="carousel-control-prev" href="#custCarousel"
                                                    data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a
                                                        className="carousel-control-next" href="#custCarousel" data-slide="next"> <span
                                                            className="carousel-control-next-icon"></span> </a>


                                                <ol className="carousel-indicators list-inline">
                                                    <li className="list-inline-item active"> <a id="carousel-selector-0"
                                                        className="selected" data-slide-to="0" data-target="#custCarousel">
                                                        <img
                                                            src="assets/img/sliderproduct.png" className="img-fluid" /> </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                                                            <img src="assets/img/sliderproduct.png" className="img-fluid" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2"
                                                        data-target="#custCarousel"> <img src="assets/img/sliderproduct.png"
                                                            className="img-fluid" /> </a> </li>
                                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3"
                                                        data-target="#custCarousel"> <img src="assets/img/sliderproduct.png"
                                                            className="img-fluid" /> </a> </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="BlessedRockApartment">
                                            <div className="col-lg-4">
                                                <div className="form-group">

                                                    <div className="logoSelect company-image"><span><img src="assets/img/upload-cloud.png" alt="" className="img-fluid" />
                                                        <p className="colorBlue mt-3  mb-3 fontSize14 font-weight700">Drag and
                                                            Drop<br />Image or <strong className="colorGreen">Browse</strong></p>
                                                    </span>
                                                        <input className="form-control-file" id="file-input" name="file-input"
                                                            type="file" />

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row  mt-2 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Star Rating </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        <div className="form-check form-check-inline">
                                                            {/* <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" /> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="32"
                                                                viewBox="0 0 128 32" fill="none">
                                                                <rect width="128" height="32" rx="16" fill="white" />
                                                                <path
                                                                    d="M19.9999 9.3335L22.0599 13.5068L26.6666 14.1802L23.3333 17.4268L24.1199 22.0135L19.9999 19.8468L15.8799 22.0135L16.6666 17.4268L13.3333 14.1802L17.9399 13.5068L19.9999 9.3335Z"
                                                                    fill="#A9AFB5" />
                                                                <path
                                                                    d="M41.9999 9.3335L44.0599 13.5068L48.6666 14.1802L45.3333 17.4268L46.1199 22.0135L41.9999 19.8468L37.8799 22.0135L38.6666 17.4268L35.3333 14.1802L39.9399 13.5068L41.9999 9.3335Z"
                                                                    fill="#A9AFB5" />
                                                                <path
                                                                    d="M63.9999 9.3335L66.0599 13.5068L70.6666 14.1802L67.3333 17.4268L68.1199 22.0135L63.9999 19.8468L59.8799 22.0135L60.6666 17.4268L57.3333 14.1802L61.9399 13.5068L63.9999 9.3335Z"
                                                                    fill="#A9AFB5" />
                                                                <path
                                                                    d="M85.9999 9.3335L88.0599 13.5068L92.6666 14.1802L89.3333 17.4268L90.1199 22.0135L85.9999 19.8468L81.8799 22.0135L82.6666 17.4268L79.3333 14.1802L83.9399 13.5068L85.9999 9.3335Z"
                                                                    fill="#A9AFB5" />
                                                                <path
                                                                    d="M108 9.3335L110.06 13.5068L114.667 14.1802L111.333 17.4268L112.12 22.0135L108 19.8468L103.88 22.0135L104.667 17.4268L101.333 14.1802L105.94 13.5068L108 9.3335Z"
                                                                    fill="#A9AFB5" />
                                                            </svg><label
                                                                className="ml-4 form-check-label fontSize14 font-weight400 colorBlue"
                                                                for="inlineRadio21">None</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-24">
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center mb-0">
                                                        <label
                                                            className=" pl-0  col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Rental Type</label>
                                                        {/* <select name="stateid" className="w249 selectpicker form-control">
                                                <option hidden="">Senior and Disabled</option>

                                            </select> */}
                                                        <DropdownButton
                                                            alignRight
                                                            title="Senior and Disabled"
                                                            id="dropdown-menu-align-right"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Community Program</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Affordable Housing </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Market Rate </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">HUD Community </label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Affordable Housing"}>Affordable Housing</ToggleButton>
                                                            <ToggleButton value={"Market Rate"}>Market Rate</ToggleButton>
                                                            <ToggleButton value={"HUD Community"}>HUD Community</ToggleButton>

                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Property-icons mt-64" id="tab-12">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Property Icons</h3>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Type</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Family </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">Seniors 55+</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio3" value="option3" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio3">Seniors 62+</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Family"}>Family</ToggleButton>
                                                            <ToggleButton value={"Seniors 55+"}>Seniors 55+</ToggleButton>
                                                            <ToggleButton value={"Seniors 62+"}>Seniors 62+</ToggleButton>

                                                        </ToggleButtonGroup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Handicap Accessible</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yes </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">No</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                            <ToggleButton value={"No"}>No</ToggleButton>

                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Pets</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yes </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">No</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                            <ToggleButton value={"No"}>No</ToggleButton>

                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Section 8</p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yes </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">No</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                            <ToggleButton value={"No"}>No</ToggleButton>

                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row  mt-24 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Structure Type </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yes </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">No</label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                            <ToggleButton value={"No"}>No</ToggleButton>

                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-24">
                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center mb-0">
                                                        <label
                                                            className=" pl-0  col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Structure Type </label>
                                                        {/* <select name="stateid" className="w249 selectpicker form-control">
                                                <option hidden="">Garden Type</option>

                                            </select> */}
                                                        <DropdownButton
                                                            alignRight
                                                            title="Garden Type"
                                                            id="dropdown-menu-align-right"
                                                            className="widthfull"
                                                            onSelect={(e) => {
                                                                setSearchdata({ ...searchdata, dropdown: e });
                                                            }}>
                                                            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="office-hours mt-64">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Office Hours</h3>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="fontSize14 font-weight700 colorBlue">Day</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Open at</th>
                                                        <th className="fontSize14 font-weight700 colorBlue">Close at</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Monday</td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>

                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Tuesday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Wednesday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Thursday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">09:00 AM</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="09:00 AM"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Friday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">by Appointment </option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="by Appointment"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">by Appointment </option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="by Appointment"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Saturday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">Closed</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Closed"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">Closed</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Closed"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontSize14 font-weight400 colorBlue">Sunday </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">Closed</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Closed"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                        <td className="fontSize14 font-weight400 colorBlue">
                                                            {/* <select name="stateid" className="selectpicker form-control mr-3">
                                                    <option value="1">Closed</option>
                                                </select> */}
                                                            <DropdownButton
                                                                alignRight
                                                                title="Closed"
                                                                id="dropdown-menu-align-right"
                                                                onSelect={(e) => {
                                                                    setSearchdata({ ...searchdata, dropdown: e });
                                                                }}>
                                                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="premium-contact mt-64">
                                            <h3 className="fontSize20 font-weight700 textblue mb-3">Facebook Page </h3>
                                            <div className="row mt-24">

                                                <div className="col-lg-12">
                                                    <div className="form-group d-flex align-items-center">
                                                        <label
                                                            className="pl-0 col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                            for="formGroupInput">Facebook URL
                                                        </label>
                                                        <input type="text" className="w-100 form-control"
                                                            placeholder="Facebook URL" />

                                                    </div>


                                                </div>

                                            </div>
                                            <div className="row  mt-2 align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
                                                    <p className="mb-0 fontSize14 font-weight500 colorBlue">Show on RHD?
                                                    </p>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                                                    <div className="">
                                                        {/* <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="" id="inlineRadio21"
                                                    value="option21" checked="" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio21">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="inlineRadio2" value="option2" />
                                                <label className="form-check-label fontSize14 font-weight400 colorBlue"
                                                    for="inlineRadio2">No </label>
                                            </div> */}
                                                        <ToggleButtonGroup
                                                            name="value"
                                                            type="radio"
                                                            value={searchdata.radio}
                                                            onChange={(e) => setSearchdata({ ...searchdata, radio: e })}>

                                                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                                                            <ToggleButton value={"No"}>No</ToggleButton>

                                                        </ToggleButtonGroup>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mlssection mt-64">

                                            <h3 className="fontSize20 font-weight700 textblue mb-3">MLS Listing</h3>
                                            <div className="form-group d-flex">
                                                <label
                                                    className="pl-0 col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                    for="formGroupInput"> MLS URL </label>
                                                <input type="text" className=" ml-auto form-control" placeholder="Facebook URL" />

                                            </div>
                                            <div className="form-group d-flex">
                                                <label
                                                    className="pl-0 col-sm-3 fill-email pull-left fontSize14 font-weight500 colorBlue"
                                                    for="formGroupInput">Notes </label>
                                                <textarea className=" ml-auto form-control" placeholder=""></textarea>

                                            </div>
                                            <button className="mt-64 w-100 prplrFilledBtn pt-17 pb-17 fontSize20 font-weight700">Submit
                                                Data
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Form>
        </>

    )
}
