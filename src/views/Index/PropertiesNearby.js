import React, { useState, useEffect } from 'react'
// import imgone from '../../assets/img/popularCity1.png'
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { SliderItemWithDetail } from '../../containers/SliderItemWithDetail';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { addOrRemoveProp, getAllProp, toggleHeart } from '../../containers/functions';
import PropertyNearbyItem from './PropertyNearbyItem';

const PropertiesNearby = ({ propertynearby, titletext }) => {

    // console.log(propertynearby);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };





    let arr = JSON.parse(localStorage.getItem('savePropList'));

    useEffect(() => {

    }, [arr, propertynearby])




    return (
        <>

            <section className="secPad housingNearby">
                <div className="container">
                    <div className="sectionTitle">

                        {/* <h2 className="font-weight700 colorBlue">Properties Nearby</h2> */}
                        <h2 className="font-weight700 colorBlue">{titletext}</h2>
                    </div>
                    <div className="row marginTop">
                        <div className="col-lg-12">


                            {
                                propertynearby == null || propertynearby == undefined || propertynearby == [] || propertynearby == '' ?

                                    null
                                    :
                                    <Carousel
                                        responsive={responsive}
                                        infinite>
                                        {
                                            propertynearby.map((data) => (

                                                <PropertyNearbyItem data={data} />

                                            ))
                                        }
                                    </Carousel>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default PropertiesNearby