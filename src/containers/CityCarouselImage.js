import React from 'react'

export const CityCarouselImage = ({ data }) => {
    const url = 'https://mdbcdn.b-cdn.net/img/new/slides/041.jpg'
    // console.log(data.imgurl);

    return (
        <div className="popularCitySliderText">
            <img src={require('../assets/img/popularCity1.png').default} />
            
            {/* <img src={url} /> */}

            <h3 className="font-weight700">{data.city}, {data.state}</h3>
        </div>
    )
}
