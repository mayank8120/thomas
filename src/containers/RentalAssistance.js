import React from 'react'
import { Link } from 'react-router-dom'
import GoogleADS from './GoogleADS'

const RentalAssistance = () => {
    return (
        <>
            <div className="housingAuthority brdrRadius4 itemWebsite">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="fontSize18 colorBlue">Rental Assistance Options</h2>
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <a href="/income-limits">Income Limits</a>
                            </li>
                            <li>
                                <a href="publicHousing">Public Housing (PH)</a>
                            </li>
                            <li>
                                <a href="/housing-choice-voucher">Housing Choice Voucher (HCV)</a>
                            </li>
                            <li>
                                <a href="/low-income-housing-choice">Low Income Housing Tax Credit (LIHTC)</a>
                            </li>
                            <li>
                                <a href="/rural-development-rental-assistance">Rural Development (RD) / Rental Assistance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fontSize18 colorBlue  btttm">Rental Assistance Tools</h2>
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <a href="">Income Calculator</a>
                            </li>
                            <li>
                                <a href="/enterprise-income-verification">Enterprise Income Verification (EIV)</a>
                            </li>
                            <li>
                                <a href="/a-good-place-to-live">“A Good Place to Live” Brochure</a>
                            </li>
                            <li>
                                <a href="/payment-standards">Payment Standards</a>
                            </li>
                            <li>
                                <a href="/inspections">Inspections</a>
                            </li>
                            <li>
                                <a href="/fair-market-rents">Fair Market Rents</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
            </div>
            <div className="housingAuthority brdrRadius4 itemWebsite">
                <h2 className="fontSize18 colorBlue">Find Housing Authorities in Every State in the U.S.</h2>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/housing-authority-waiting-lists/AL`}>Alaska</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/AL`}>Alabama</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/AZ`}>Arizona</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/CA`}>California</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/CO`}>Colorado</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/CT`}>Connecticut</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/DE`}>Delaware</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/FL`}>Florida</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/GA`}>Georgia</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/HI`}>Hawaii</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/ID`}>Idaho</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/IL`}>Illinois</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/housing-authority-waiting-lists/IN`}>Indiana</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/IA`}>Iowa</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/KS`}>Kansas</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/KY`}>Kentucky</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/LA`}>Louisiana</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/ME`}>Maine</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MD`}>Maryland</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MA`}>Massachusetts</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MI`}>Michigan</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MN`}>Minnesota</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MS`}>Mississippi</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MO`}>Missouri</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/housing-authority-waiting-lists/MT`}>Montana</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NE`}>Nebraska</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NV`}>Nevada</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NJ`}>New Jersey</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NM`}>New Mexico</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NY`}>New York</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/NC`}>North Carolina</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/ND`}>North Dakota</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/OH`}>Ohio</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/OK`}>Oklahoma</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/OR`}>Oregon</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/PA`}>Pennsylvania</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 coll-xs-6">
                        <ul className="noMarginPad listStyleNone housingListt">
                            <li>
                                <Link to={`/housing-authority-waiting-lists/RI`}>Rhode Island</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/SC`}>South Carolina</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/SD`}>South Dakota</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/TN`}>Tennessee</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/TX`}>Texas</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/UT`}>Utah</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/VT`}>Vermont</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/VA`}>Virginia</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/WA`}>Washington</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/WV`}>West Virginia</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/WI`}>Wisconsin</Link>
                            </li>
                            <li>
                                <Link to={`/housing-authority-waiting-lists/WY`}>Wyoming</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentalAssistance