import React, { useState } from 'react'

import Modal from "react-modal";





const CheckAvailabilityAgencyDetail = () => {


    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    // const [searchdata, setSearchdata] = useState({ searchstring: '' });
    const [checkAvailability, setcheckAvailability] = useState({ name: '', phone: '', emailid: '', date: '', messagetxt: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(checkAvailability);
        toggleModal();
        setcheckAvailability({ name: '', phone: '', emailid: '', date: '', messagetxt: '' })
    }


    return (
        <div className="checkAvailability">

            <div className="sideFormBlock">
                <div className="SectionBlock responsive15 availabilitySection">
                    <div className="d-flex align-items-center">
                        <h2 className="colorBlue font-weight700 fontSize18">Check Availability</h2>
                    </div>
                    <form className="rentalForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id=""
                                        aria-describedby="emailHelp" placeholder="Enter name"
                                        value={checkAvailability.name} onChange={(e) => setcheckAvailability({ ...checkAvailability, name: e.target.value })} required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Phone Number</label>
                                    <input type="number" className="form-control" id=""
                                        aria-describedby="emailHelp" placeholder="Phone Number"
                                        value={checkAvailability.phone} onChange={(e) => setcheckAvailability({ ...checkAvailability, phone: e.target.value })} required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email Address</label>
                                    <input type="email" className="form-control" id=""
                                        aria-describedby="emailHelp"
                                        placeholder="Email Address"
                                        value={checkAvailability.emailid} onChange={(e) => setcheckAvailability({ ...checkAvailability, emailid: e.target.value })} required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Move In Date</label>
                                    <div className="posRel calnderIcon">
                                        <input type="date" className="form-control" id=""
                                            aria-describedby="emailHelp"
                                            placeholder="Choose Move In Date"
                                            value={checkAvailability.date} onChange={(e) => setcheckAvailability({ ...checkAvailability, date: e.target.value })} required />
                                        <span><img src={require('../../assets/img/calander.png').default} /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={checkAvailability.messagetxt} onChange={(e) => setcheckAvailability({ ...checkAvailability, messagetxt: e.target.value })} required
                                        placeholder="Hi, I am interested in Blessed Rock Apartments. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!"></textarea>
                                </div>
                            </div>


                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div
                                    className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                                    <div className="Resnoauto w-100">
                                        <button data-toggle="modal" data-target="#exampleModal3" className="brdrRadius4 transition w-100" type="submit" >  <img src={require('../../assets/img/mail.svg').default} />Check Availability</button>
                                    </div>
                                </div>
                            </div>


                            {/* <Modal isOpen={isOpen}
                                onRequestClose={toggleModal}>

                                <div className="modal fade rentalModal availabilityModal" id="exampleModal3"
                                    tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered widthModal"
                                        role="document">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex align-items-center">
                                                <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                    id="exampleModalLongTitle" style="color: #fff;">Title
                                                </h5>
                                            </div>
                                            <div className="modal-body rentalForm availBodyBlock">
                                                <div className="thankyouBlock text-center">
                                                    <img src="assets/img/thankYou.png" />
                                                    <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                    <p className="fontSize18 font-weight400 secondaryColor">
                                                        Thanks for submitting your inquiry!<br />
                                                        Your message has been sent</p>
                                                    <a href="#" className="doneBtn brdrRadius4">Done</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                




                            </Modal>

 */}









                            {/* <!--Modal--> */}


                            {/* <div className="modal fade rentalModal availabilityModal" id="exampleModal3"
                                tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered widthModal"
                                    role="document">
                                    <div className="modal-content">
                                        <div className="modal-header d-flex align-items-center">
                                            <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                                id="exampleModalLongTitle" style={{ color: "#fff" }}>Title
                                            </h5>
                                        </div>
                                        <div className="modal-body rentalForm availBodyBlock">
                                            <div className="thankyouBlock text-center">
                                                <img src={require('../../assets/img/thankYou.png').default} />
                                                <h1 className="font-weight700 colorBlue">Thank You</h1>
                                                <p className="fontSize18 font-weight400 secondaryColor">
                                                    Thanks for submitting your inquiry!<br />
                                                    Your message has been sent</p>
                                                <a href="" className="doneBtn brdrRadius4">Done</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         */}

                        </div>
                    </form>
                </div>
            </div>

            <Modal isOpen={isOpen}
                onRequestClose={toggleModal}>
                {/* <div className="modal-content"> */}
                <div className="modal-header newlatter text-center">

                    <img src={require('../../assets/img/logo-modal.png').default} className="" />

                    <button type="button" className="close ml-auto newlatter" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>


                <div className="modal-body">

                    <div className="modal-body rentalForm availBodyBlock text-center">


                        <h3 className="font-weight700 fontSize24">Thanks for submitting your inquiry!</h3>
                        <p className="font-weight400 fontSize16 ">
                            Your message has been sent</p>
                        {/* <button onClick={() => {
        toggleModalThankYou();
    }} className=" brdrRadius4 ml-auto asd">Done</button> */}
                    </div>

                    <a className="recommendsection" href="https://secure.rspcdn.com/xprr/red/PID/921/SID/thankyou,detailspg" target="_blank" onClick={toggleModal}>

                        <h3>Recommended Step:</h3>
                        <p className="fontSize16 font-weight400 para">Landlords oftern favour applicants with high score. Do you know your credit score? Click below to see yours for free!
                        </p>

                        <button className="transition">SEE SCORES NOW</button>

                    </a>

                </div>



                {/* </div> */}
            </Modal>


        </div>


    )
}
export default CheckAvailabilityAgencyDetail