import React, { useState } from 'react'

const Form = () => {

    const [formData, setformData] = useState({ name: '', companyName: '', emailid: '', phone: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(formData);
        // toggleModal();
        setformData({ name: '', companyName: '', emailid: '', phone: '' })
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" className="form-control" id=""
                            aria-describedby="emailHelp" placeholder="Enter your full name"
                            value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} required />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Company Name</label>
                        <input type="text" className="form-control" id=""
                            aria-describedby="emailHelp" placeholder="Enter company name"

                            value={formData.companyName} onChange={(e) => setformData({ ...formData, companyName: e.target.value })} required />
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email Address</label>
                        <input type="email" className="form-control" id=""
                            aria-describedby="emailHelp" placeholder="Enter Email address"
                            value={formData.emailid} onChange={(e) => setformData({ ...formData, emailid: e.target.value })} required />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="number" className="form-control" id=""
                            aria-describedby="emailHelp" placeholder="Enter phone number"
                            value={formData.phone} onChange={(e) => setformData({ ...formData, phone: e.target.value })} required />
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div
                        className="d-flex align-items-center availSec responsive15 flex-wrap p-0">
                        <div className="Resnoauto w-100">
                            <button type="submit" className="brdrRadius4 transition w-100" >Submit</button>
                        </div>
                    </div>
                </div>
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
                                    <span aria-hidden="true">×</span>
                                </button>
                                <h5 className="modal-title fontSize16 font-weight400 ml-22"
                                    id="exampleModalLongTitle" style={{ color: "#fff" }}>Title
                                </h5>
                            </div>
                            <div className="modal-body rentalForm availBodyBlock">
                                <div className="thankyouBlock text-center">

                                    {require('../../assets/img/searchHome3.png').default}


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
                </div> */}


            </div>
        </form>
    )
}

export default Form