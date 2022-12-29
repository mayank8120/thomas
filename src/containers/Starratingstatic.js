import React, { useState } from 'react'

const Starratingstatic = ({ rating }) => {
    // const rating = 3;

    // console.log(rating);

    return (
        <>
            <div className="star-rating noMarginPad listStyleNone d-flex align-items-center starLink ">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <span
                            id="starbutton"
                            type="button"
                            key={index}
                            className={index <= (rating) ? "rated" : "nonrated"}
                        >
                            {
                                index <= (rating) ?
                                    <img src={require('../assets/img/starRatecolor.svg').default} className="twentyfourbytwentyfour" />
                                    :
                                    <img src={require('../assets/img/starRatecolorGrey.svg').default} className="twentyfourbytwentyfour" />
                            }
                            {/* <span className="star">&#9733;</span> */}
                        </span>
                    );
                })}
                {/* {rating == 0 ? <label
                    className="ml-4 form-check-label fontSize14 font-weight400 colorBlue"
                    for="inlineRadio21">None</label> : ""} */}
            </div>
        </>
    )
}

export default Starratingstatic
