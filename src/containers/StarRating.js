import React, { useState } from 'react'

const StarRating = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    console.log(rating);

    return (
        <>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            id="starbutton"
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "rated" : "nonrated"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
                {rating == 0 ? <label
                    className="ml-4 form-check-label fontSize14 font-weight400 colorBlue"
                    for="inlineRadio21">None</label> : ""}
            </div>
        </>
    )
}

export default StarRating
