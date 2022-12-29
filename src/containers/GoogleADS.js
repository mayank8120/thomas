import React from 'react'
import { GOOGLEADSCLIENTID } from '../constants/constants'

const GoogleADS = ({ placeholderId, width, height, slotno }) => {

    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // });



    return (
        <div>
            <div id={`ezoic-pub-ad-placeholder-${placeholderId}`}>
                <ins class="adsbygoogle"
                    style={{
                        display: "inline-block"
                        // , width: `100%`, height: `100%`
                    }}
                    data-ad-client={GOOGLEADSCLIENTID}
                    data-ad-slot={slotno}></ins>

                {/* 
                <h1>hiiii</h1> */}

                {/* <ins class="adsbygoogle"
                    style={{ display: "inline-block", width: "728px", height: "90px" }}
                    data-ad-client="ca-pub-2836217214879103"
                    data-ad-slot="6662484805"></ins> */}
            </div>
        </div>
    )
}

export default GoogleADS