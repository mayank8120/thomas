import React from 'react'
import loadimg from '../assets/img/loader.gif'

const Loader = () => {
    return (
        <>
            <div className="test">
                <img src={loadimg} alt="Loading..." />
            </div>

        </>
    )
}

export default Loader
