import React from 'react'
import { GOOGLEADSCLIENTID } from '../constants/constants'

const GoogleADS = ({ placeholderId, width, height, slotno }) => {

    return (
        <div>
            <div id={`ezoic-pub-ad-placeholder-${placeholderId}`}>
                <ins class="adsbygoogle"
                    style={{
                        display: "inline-block"
                    }}
                    data-ad-client={GOOGLEADSCLIENTID}
                    data-ad-slot={slotno}></ins>
            </div>
        </div>
    )
}

export default GoogleADS