import React from 'react'
// import '../assets'

export const SliderItemWithDetail = (data) => {
    // console.log(data);
    return (

        <div className="sliderItem">
            <img src={require('../assets/img/housingNearby1.png').default} />
            <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i className="far fa-heart"></i></a>
            <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div>
            <div className="sliderTextArea">
                <div className="d-flex align-items-top">
                    <div>
                        <h4 className="font-weight700 mb-0">{data.property_title}</h4>
                        <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                    </div>
                    <div className="ml-auto">

                        <a href="#"><img src={require('../assets/img/priceTag.png').default} /></a>
                    </div>
                </div>
                <div className="sliderListing">
                    <ul className="clearfix d-flex align-items-center">
                        <li><b>1</b>Bd</li>
                        <li><b>1</b>Ba</li>
                        <li><b>880</b>Sq.Ft</li>
                        <li className="ml-auto boldTag greenText fontSize16">$1,200</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
