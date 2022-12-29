// import e from 'cors';
import React, { useState, useEffect } from 'react'

import { Accordion } from 'react-bootstrap'

const AffordabilityCal = () => {
    const [costAfford, setcostAfford] = useState({ cost: null });
    const [calculateshow, setcalculateshow] = useState(false);


    const [whyclick, setwhyclick] = useState(false);
    // const [checkAvailability, setcheckAvailability] = useState({ name: '', phone: '', emailid: '', date: '', messagetxt: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // setcostAfford({ cost: '' })
        setcalculateshow(true);
    }
    return (

        <>



            <Accordion defaultActiveKey="0" className="accordionBoxInfo calculatorForm losAngeles">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex align-items-center">
                                <button className="btn btn-link font-weight700 colorBlue">
                                    Affordability Calculator
                                </button>
                                <span className="ml-auto">
                                    <img src={require('../../assets/img/upArrow.png').default} />
                                </span>
                            </h5>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='acc0margin'>
                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree"
                            data-parent="#accordion3">
                            <div className="card-body ">
                                <p className="colorBlue">Please enter your MONTHLY gross income
                                    (income before taxes, number only)</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center rentalForm">
                                        <div className="form-group mb-0 input-icon">
                                            <input type="number" className="form-control" placeholder="" value={costAfford.cost} onChange={(e) => {
                                                setcostAfford({ ...costAfford, cost: e.target.value })
                                            }} required />
                                            <i>$</i>
                                        </div>
                                        <button className="calculteBtn brdrRadius4 colorWhite" type="submit">Calculate</button>
                                    </div>

                                </form>
                                {
                                    calculateshow == true ?

                                        (
                                            costAfford.cost == 0 || costAfford.cost == '' || costAfford.cost == null ?
                                                null
                                                :
                                                <div><p className="fontSize16 secondaryColor mb-0 mt-1">You should not be paying more
                                                    than <b>${(0.3 * costAfford.cost).toFixed(2)} </b> on your rent morgage each month.</p>
                                                    <span className="purpleText font-weight700" onClick={() => { setwhyclick(true) }}>Why?</span>

                                                    {
                                                        whyclick == true ?
                                                            <>
                                                                <p>According to HUD, spending more than 30 percent of your income on housing makes it more difficult to afford necessities such as food, transportation and health care. To live in a budget with higher housing costs, you will need to cut unnecessary expenses.</p>

                                                                <p>Are you looking for affordable rental housing?</p>

                                                                <p>Now that you know your rent goals, find housing that you can afford.</p>

                                                                <p>Already have housing?</p>

                                                                <p>If you already have housing and are paying more than 30 percent, learn how to track your expenses and stick to your budget.</p>
                                                            </>
                                                            :
                                                            null
                                                    }

                                                </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}


export default AffordabilityCal