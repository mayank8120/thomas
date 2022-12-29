import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaSecretKey, captchaSiteKey } from '../../constants/constants';
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm'
import Footer from '../../containers/Footer'
import { isItNull } from '../../containers/functions';

export const ContactUs = () => {

    const [formdata, setformdata] = useState(
        {
            name: '', email: '', subject: '', formbody: ''
        }
    );

    const [captchaValue, setcaptchaValue] = useState();

    const [submission, setsubmission] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('helllo');

        // console.log(formdata);

        startCaptchaProcess();


        // if (captchaValue == true) {
        //     submitAllData();
        //     // console.log('12345');
        //     setformdata({ name: '', email: '', subject: '', formbody: '' });
        //     // 
        // }
    }


    const startCaptchaProcess = () => {
        if (!isItNull(formdata.formbody)) {
            // console.log("token startcaptchaprocess");
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
            script.addEventListener('load', loadCaptcha);
            document.body.appendChild(script);
        }
    }




    const loadCaptcha = () => {
        // console.log("token Enter loadcaptcha");
        window.grecaptcha.ready(_ => {
            window.grecaptcha
                .execute(captchaSiteKey, { action: 'sdrefs' })
                .then(token => {
                    // console.log(token, "token");

                    if (!isItNull(token)) {
                        var axios = require('axios');
                        var data = '';

                        var config = {
                            method: 'post',
                            url: `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/verifyCaptcha?secret=${captchaSecretKey}&response1=${token}`,
                            headers: {},
                            data: data
                        };

                        axios(config)
                            .then(function (response) {
                                if (response.data.success === true) {
                                    // console.log("Captcha Success");
                                    setcaptchaValue(true);


                                    // toggleModalThankYou();


                                    submitAllData();
                                    // console.log('12345');
                                    setformdata({ name: '', email: '', subject: '', formbody: '' });



                                    // toggleModalAvailability();
                                    // toggleModalSecondList();
                                    // submitAllData();

                                    // toggleModalThankYou();
                                    // setformdata({ property_id: propid, first_name: '', last_name: '', phone: '', email_address: '', move_date: '', message: message });

                                    // submitAllData();
                                } else {
                                    console.log("Captcha failed");
                                    setcaptchaValue(false);
                                }
                                // console.log(response.data.success, "token11");
                            })
                            .catch(function (error) {
                                console.log("Captcha error");
                                console.log(error);
                            });
                    }
                })
        });
    }


    function submitAllData() {

        let raw = JSON.stringify({
            "name": formdata.name,
            "email": formdata.email,
            "subject": formdata.subject,
            "formbody": formdata.formbody
        });




        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/text");



        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow',
        };

        fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/usercontact", requestOptions)
            .then(response => response.json())
            .then(result => {

                // console.log(result);
                setsubmission(true);


            }





            )
            .catch(error => console.log('error', error));


    }



    function captchaHandle(value) {
        // console.log('Captcha value:', value);
        setcaptchaValue(true);
    }

    function captchacheck() {
        if (captchaValue == undefined || captchaValue !== true) { setcaptchaValue(false) }
    }

    return (
        <>
            <section className="secPad24">
                <div className="container">
                    <div className="row">

                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <nav className="navbar resNavbarBread" aria-label="breadcrumb">
                                <ol className="breadcrumb font-weight500 mb-0">
                                    <li className="breadcrumb-item"><a href="" className="purpleText">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Terms Of Use</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-24 col-sm-24 col-lg-24">
                            <div className="row">

                                <div className="col-md-24 col-sm-24 col-lg-24">
                                    <h2 className='mt-0'>Contact Us</h2>
                                    {submission == true ?

                                        <div className="flash-success">
                                            Thank you for contacting us. We will respond to you as soon as possible.
                                        </div>
                                        :
                                        <>
                                            <p>Contact RentalHousingDeals.com, the online source for all the best rental
                                                housing deals. Our goal is to provide you with the highest level of customer
                                                service, and we welcome your comments and suggestions. If you have any
                                                questions about our service, or listing or billing questions, please contact
                                                our Customer Service department.</p>
                                            <p></p>
                                            <p>Simply email <a href="mailto:info@rentalhousingdeals.com" className="hvr">our Customer
                                                Service</a> team at or call (626) 281-8300 during the hours of 9AM to 5PM
                                                (Pacific Standard time). Our fax number is (626) 593-2112.</p>
                                            <p></p>
                                            <p>To advertise or partner with us, or if you have business inquiries or other
                                                questions, please fill out the form below or send email to <a href="mailto:info@rentalhousingdeals.com" className="hvr">info@rentalhousingdeals.com</a>.
                                                Thank you!</p>
                                            <p></p>
                                        </>
                                    }
                                </div>
                            </div>
                            {submission == true ? null :
                                <div className="form">
                                    <div className="row">
                                        <div className="col-md-12 col-xm-16 col-xs-24 col-lg-12">
                                            <form className="rentalForm" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">First Name</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="First Name"
                                                                value={formdata.name}
                                                                onChange={(e) => setformdata({ ...formdata, name: e.target.value })} required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">Email Address</label>
                                                            <input type="email" className="form-control"

                                                                placeholder="Email Address"
                                                                value={formdata.email}
                                                                onChange={(e) => setformdata({ ...formdata, email: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">subject</label>
                                                            <div className="posRel calnderIcon">
                                                                <input type="text" className="form-control"
                                                                    placeholder="subject"
                                                                    value={formdata.move_date}
                                                                    onChange={(e) => setformdata({ ...formdata, subject: e.target.value })} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label for="">Message</label>
                                                            <textarea className="form-control" rows="3"
                                                                placeholder="Message"
                                                                value={formdata.message}
                                                                onChange={(e) => setformdata({ ...formdata, formbody: e.target.value })} required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className='d-flex align-items-center'>
                                                            <div className="form-group mb-0">
                                                                {/* <div className="recaptcha_block">
                                                                    <ReCAPTCHA
                                                                        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                                                        onChange={captchaHandle} />
                                                                </div>
                                                                {
                                                                    captchaValue == false
                                                                        ?
                                                                        <span style={{ color: 'red' }}>Please Verify Captcha</span>
                                                                        :
                                                                        null

                                                                } */}
                                                                <div
                                                                    className="g-recaptcha"
                                                                    data-sitekey={'6Ld3X8ggAAAAAAKaJ5gDXpXHyJPQsE83lvQrI9Uh'}
                                                                    data-size="invisible"
                                                                ></div>
                                                                {captchaValue === false ? (
                                                                    <span style={{ color: "red" }}>
                                                                        Our System Found a bot on your browser
                                                                    </span>
                                                                ) : null}
                                                            </div>

                                                            <div className='ml-auto'>
                                                                <div className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                                                    <div className="Resnoauto">
                                                                        <button
                                                                            // onClick={captchacheck}
                                                                            className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center" type="submit">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            }
                        </div >
                    </div >
                </div >
            </section >
            <Footer />
        </>

    )
}
