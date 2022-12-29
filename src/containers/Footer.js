import React, { useState, useEffect } from 'react'
import Modal from "react-modal";

const Footer = () => {



    const [isOpenSignUp, setIsOpenSignUp] = useState(false);

    function toggleModalSignUp() {
        setIsOpenSignUp(!isOpenSignUp);
    }

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
    return (

        <>
            <section className="secPad footerSec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="footerList">
                                <h3 className="font-weight700">Discover</h3>
                                <ul className="noMarginPad">
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/housing-authority-waitlists'>Locate Housing Authority</a></li>
                                    <li><a href='/senior-housing'>Senior Housing</a></li>
                                    <li>Low Income Housing</li>
                                    <li><a href='/section-8-housing'>Section 8 Housing</a></li>
                                    <li>Rental Calculator</li>
                                    <li><a href='https://managers.rentalhousingdeals.com/index.php/site/login'>My Rentals</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="footerList">
                                <h3 className="font-weight700">Company</h3>
                                <ul className="noMarginPad">
                                    <li><a href='/about'>About Us</a></li>
                                    <li><a href='/terms'>Terms of Use</a></li>
                                    <li><a href='/privacy'>Privacy Policy</a></li>
                                    <li><a href='/advertise-with-us'>Advertise with Rentalhousingdeals.com</a></li>
                                    <li><a href='/equal-opportunity-housing'>Equal Opportunity Housing</a></li>
                                    <li><a href='/sitemap'>Site Map</a></li>
                                    <li><a href='/income-based-housing-faq'>Housing FAQ</a></li>
                                    <li><a href='/contact'>Contact</a></li>
                                    <li><a href='/disclaimer'>Disclaimer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="footerList">
                                <h3 className="font-weight700">Join Us On</h3>
                                <ul className="noMarginPad iconSocial">
                                    <li>
                                        <a href="https://www.facebook.com/RentalHousingDeals/">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/RHDeals">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCDwnHpJ7DhtDI97nVKmNhZQ">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footerBottom">
                        <div className="col-md-6 pl-0">
                            <div className="leftSide">
                                <p className="mb-0">&#169; {new Date().getFullYear()} Rentalhousingdeals, Inc. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6 pr-0">
                            <div className="rightSide text-right">
                                <ul className="noMarginPad">
                                    <li>
                                        <a href="">

                                            <img src={require('../assets/img/bottomFooter1.svg').default} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={require('../assets/img/bottomFooter2.svg').default} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

                    {/* <div class="register_as_tour_header3">
        <div class="register_as_tour_header_contan3">

            <p style="margin:0 auto;text-align: center"><img src="//www.rentalhousingdeals.com//images/logo.jpg"></p>

            <div class="reg_bold" >

                <div style="float:left;font-size:16px;color:#727272;width:600px;">
                    <span>Rental Calculator</span>
                </div>

            </div>
            <div class="clear"></div>

            
            <div id="ha_main" class="span-24">

                <div id="ha_article_container" class="span-24">

                    <div id="article_body">

                        <div >The&nbsp;<a href="https://portal.hud.gov/portal/page/portal/HUD" >U.S. Department of Housing and Urban Development (HUD)</a>&nbsp;recommends that you should pay no more than 30 percent of your annual income on housing. However, an estimated 12 million renters and homeowners now pay more than 50 percent of their annual incomes on housing. How much are you spending?</span></div>
                        <div style="border:1px solid #cccccc;border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; background-color: #f6f2f3;padding:10px">
                            <form name="calculator" style="margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; vertical-align: baseline;">
                                <table class="paget1" style="margin:15px 0px 25px 50px">
                                    <tbody>
                                        <tr class="pagehr1">
                                            <td colspan="4" style="font-size:13px;padding-left:25px;color:#555555">Please enter your&nbsp;MONTHLY&nbsp;gross income <br>(income before taxes... numbers only)</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">$&nbsp;<input class="form-text" maxlength="15" name="income" size="15" type="text" style="border-radius: 5px;
                                                                          border: 1px solid #cccccc;
                                                                          width: 300px;
                                                                          height: 25px;
                                                                          margin-top: 15px;">&nbsp; <a class="calculatesubmit" href="javascript:void(0)" onclick="calculator.rent.value=~~(calculator.income.value.replace(/[^\d\.\-\ ]/g, '')*0.3);"><button type="button" class="btn large blue bt-block" style="margin-bottom: 2px;padding:5px 10px 5px 10px; font-size:17px;width:135px;font-weight: bold"> Calculate</button></a></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="paget1" style="margin:15px 0px 10px 50px">
                                    <tbody>
                                        <tr>
                                            <td colspan="4" style="font-size:13px;padding-left:25px;color:#555555">You should not be paying more than</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">$&nbsp;<input class="form-text" maxlength="15" name="rent" size="15" type="text" style="border-radius: 5px;
                                                                          border: 1px solid #cccccc;
                                                                          width: 300px;
                                                                          height: 25px;
                                                                          margin-top: 15px;">&nbsp;<span style="font-size:13px;padding-left:10px;color:#555555">on your rent or mortgage each month.</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"="">&nbsp;</p>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"=""><b>Why does it matter?</b></p>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"="">According to HUD, spending more than 30 percent of your income on housing makes it more difficult to afford necessities such as food, transportation and health care. To live in a budget with higher housing costs, you will need to cut unnecessary expenses.</p>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"=""><b>Are you looking for affordable rental housing?</b></p>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"="">Now that you know your rent goals, find housing that you can afford.</p>

                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);"=""><b>Already have housing?</b></p>


                        <p style="margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-family: " helvetica="" neue",helvetica,arial,sans-serif;="" font-size:="" 13px;="" vertical-align:="" baseline;="" color:="" rgb(85,="" 85,="" 85);" = "" > If you already have housing and are paying more than 30 percent, learn how to track your expenses and stick to your budget.</p >

                    </div >
                </div >
            </div >
        </div >
    </div > */}


                </div >

                <div className="signUp text-center padLow">
                    <p className="mb-0">Already have an account?</p>
                    <span className="purpleText fontSize14 font-weight700 curserPointer" onClick={() => {
                        // toggleModalLogin();
                        // toggleModalSignUp();
                    }} >Login</span>
                </div>


            </Modal >

        </>
    )
}
export default Footer