import React from 'react'

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { SliderItemWithDetail } from './SliderItemWithDetail';


export const PropertiesNearby3 = () => {
    return (
        <section className="secPad housingNearby">
            <div className="container pl-0">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">Properties Nearby</h2>
                </div>
                <div className="row marginTop">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0 pl-0">

                        <Carousel className="proudPartnerSlider sliderNav brandNav "
                            plugins={[
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2.5,
                                        arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                                        arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                                        addArrowClickHandler: true,
                                    }
                                },

                            ]}
                            breakpoints={{
                                737: {
                                    plugins: [
                                        'infinite',
                                        'arrows',
                                        {
                                            resolve: slidesToShowPlugin,
                                            options: {
                                                numberOfSlides: 1.5,
                                                arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                                                arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                                                addArrowClickHandler: true,
                                            }
                                        },
                                    ]
                                },
                                900: {
                                    plugins: [
                                        'infinite',
                                        {
                                            resolve: slidesToShowPlugin,
                                            options: {
                                                numberOfSlides: 2,
                                                arrowLeft: false,
                                                arrowRight: false,
                                                addArrowClickHandler: false,
                                            }
                                        },
                                    ]
                                }
                            }}>

                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />
                            <SliderItemWithDetail />


                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    )
}
