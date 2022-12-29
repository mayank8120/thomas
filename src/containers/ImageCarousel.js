import React from 'react'


import imgone from '../assets/img/popularCity1.png'
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    
    return (
        <>
            <Carousel className="proudPartnerSlider"
                responsive={responsive}
                infinite>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider1.png').default} /></div>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider2.png').default} /></div>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider3.png').default} /></div>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider4.png').default} /></div>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider5.png').default} /></div>
                <div className="text-center"> <img src={require('../assets/img/proudPartnerSlider6.png').default} /></div>
            </Carousel>
        </>

    )
}
export default ImageCarousel