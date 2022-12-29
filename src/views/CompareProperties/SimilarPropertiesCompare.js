import React from 'react'
import { SliderItemWithDetail } from '../../containers/SliderItemWithDetail'

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const SimilarPropertiesCompare = () => {


    const database = [
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 3,
            id_rating: 0,
            id_user: 1,
            lat: "61.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "Aasc Housasding I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: ""
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 3,
            id_rating: 0,
            id_user: 1,
            lat: "61.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "Aasasdc Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: ""
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 3,
            id_rating: 0,
            id_user: 1,
            lat: "61.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "23Aasasdesfcweac Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: ""
        },
        {
            additional_information: "",
            created_at: "2021-09-13T05:49:29.000000Z",
            description: "",
            facebook_page_url: null,
            fax: "",
            fb_btn_show: 0,
            id_property: 3,
            id_rating: 0,
            id_user: 1,
            lat: "61.2113800000000000",
            lng: "-149.8762750000000000",
            managed_by: "",
            manager_id: 0,
            page_views: 2217,
            phone: "907-677-0940",
            prog_type: "",
            property_address: "420 East 11th Avenue",
            property_city: "ANCHORAGE",
            property_county: "Anchorage",
            property_description: "",
            property_state: "AK",
            property_title: "33Aasc Housing I",
            property_type: "general",
            property_zip: "99501",
            rent_type: "",
            sq_ft: "",
            status: "Approved",
            tag_line: "",
            updated_at: "-000001-11-30T00:00:00.000000Z",
            url: ""
        }
    ]



    return (

        <section className="secPad housingNearby">
            <div className="container3">
                {/* <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">Properties Nearby</h2>
                </div> */}
                <div className="row marginTop">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                        <Carousel className="proudPartnerSlider sliderNav brandNav"
                            plugins={[
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 4,
                                        arrowLeft: <button><i className="fal fa-angle-left"></i></button>,
                                        arrowRight: <button><i className="fal fa-angle-right"></i></button>,
                                        addArrowClickHandler: true,
                                    }
                                },

                            ]}
                            breakpoints={{
                                1366: {
                                    plugins: [
                                        'infinite',
                                        'arrows',
                                        {
                                            resolve: slidesToShowPlugin,
                                            options: {
                                                numberOfSlides: 4,
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
                                                numberOfSlides: 1.5,
                                                arrowLeft: false,
                                                arrowRight: false,
                                                addArrowClickHandler: false,
                                            }
                                        },
                                    ]
                                }
                            }}>


                            {database.map((data) => (
                                // <SliderItemWithDetail
                                <SliderItemWithDetail data={data} />
                            ))}



                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimilarPropertiesCompare
