import React, { useEffect, useState } from 'react'
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import ImageSliderCarouselItem from './ImageSliderCarouselItem'

import { Carousel, CarouselItem } from 'react-bootstrap';


const ImageSliderCarousel = ({ propimages, type }) => {



    const database = [
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "Los Angeles",
            state: "AK",
            imgurl: "../assets/img/popularCity1.png"
        },
        {
            city: "DFSJSD",
            state: "MP",
            imgurl: "../assets/img/popularCity1.png"
        }
    ]

    // console.log(propimages.length);

    useEffect(() => {

    }, [propimages])
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (

        <>
            {
                propimages == null || propimages.length == 0 ?
                    (
                        type == 'general' ?
                            <img className='imgadjust'
                                // src={`https://www.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`}
                                // {`https://www.rentalhousingdeals.com/${data.photo}`}
                                src={require(`../../assets/img/equalhousinglogo.jpg`).default}
                            />
                            :
                            // <img src={`https://www.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`} />
                            <img
                                // src={`https://www.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`}
                                // {`https://www.rentalhousingdeals.com/${data.photo}`}
                                src={require(`../../assets/img/equalhousinglogo.jpg`).default}
                            />
                    )



                    :


                    // <Carousel className="proudPartnerSlider sliderNav brandNav "
                    //     plugins={[
                    //         'infinite',
                    //         'arrows',
                    //         {
                    //             resolve: slidesToShowPlugin,
                    //             options: {
                    //                 numberOfSlides: 1,
                    //                 arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                    //                 arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                    //                 addArrowClickHandler: true,
                    //             }
                    //         },
                    //     ]
                    //     }>

                    //     {

                    //         (propimages.map((data) => (

                    //             <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />

                    //         )))

                    //     }




                    // </Carousel>

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            (propimages.map((data) => (
                                <CarouselItem>
                                    <img
                                        className="d-block w-100"
                                        src={`https://managers.rentalhousingdeals.com/${data.photo}`}
                                        alt="First slide"
                                    />
                                </CarouselItem>
                            )))
                        }
                    </Carousel>

            }
            {/* <Carousel className="proudPartnerSlider sliderNav brandNav "
                plugins={[
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 1,
                            arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                            arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                            addArrowClickHandler: true,
                        }
                    },
                ]
                }>

              





                {

                    (propimages.map((data) => (
                        // <ImageSliderCarouselItem data={data} />
                        // {console.log()}
                        // console.log()
                        <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />

                        // <img src={`https://www.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />
                    )))

                }




            </Carousel> */}

        </>
    )
}

export default ImageSliderCarousel
