import React from 'react'
// import imgone from '../../assets/img/popularCity1.png'
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { SliderItemWithDetail } from '../../containers/SliderItemWithDetail';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addDash } from '../../containers/functions';

const PropertiesNearby3 = ({ propertynearby, titletext }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5
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


    const nearbyProperty =
        [
            {
                "id_property": 1111,
                "prog_type": "affordablehousing",
                "property_title": "Casa Victoria Co-op Senior Apartments",
                "property_address": "34445 Corregidor",
                "property_city": "Cathedral City",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92234",
                "beds": "1",
                "baths": "1.0",
                "rent_from": 0,
                "rent_to": 0,
                "square_feet_from": 540,
                "square_feet_to": 540,
                "photo": "images/107/casavictoria.jpg",
                "distance": 2.4900080254599097
            },
            {
                "id_property": 1144,
                "prog_type": "",
                "property_title": "Casa Maria Apartments",
                "property_address": "51950 Tyler Ave.",
                "property_city": "Coachella",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92236",
                "beds": "1",
                "baths": "1",
                "rent_from": 841,
                "rent_to": 954,
                "square_feet_from": 500,
                "square_feet_to": 500,
                "photo": "images/291/Casamaria1.jpg",
                "distance": 20.03344048403796
            },
            {
                "id_property": 1146,
                "prog_type": "affordablehousing",
                "property_title": "Coachella Valley II Apartments",
                "property_address": "51 Mecca St.",
                "property_city": "Coachella",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92236",
                "beds": "1",
                "baths": "1",
                "rent_from": 694,
                "rent_to": 712,
                "square_feet_from": 0,
                "square_feet_to": 0,
                "photo": "images/291/Coachella1.jpg",
                "distance": 19.840110584282108
            },
            {
                "id_property": 2016,
                "prog_type": "affordablehousing",
                "property_title": "Vista Serena Co-op Senior Apartments",
                "property_address": "1201 East Vista Chino Road",
                "property_city": "Palm Springs",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92262",
                "beds": "1",
                "baths": "1.0",
                "rent_from": 0,
                "rent_to": 0,
                "square_feet_from": 540,
                "square_feet_to": 540,
                "photo": "images/107/serena.jpg",
                "distance": 3.8916993284485155
            },
            {
                "id_property": 2019,
                "prog_type": "affordablehousing",
                "property_title": "Seminole Gardens Apartments",
                "property_address": "2607 S. Linden Way",
                "property_city": "Palm Springs",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92264",
                "beds": "2",
                "baths": "1",
                "rent_from": 0,
                "rent_to": 0,
                "square_feet_from": 763,
                "square_feet_to": 763,
                "photo": "uploaded/Semgar2.jpg",
                "distance": 0
            },
            {
                "id_property": 2021,
                "prog_type": "affordablehousing",
                "property_title": "Vista Del Monte Co-op Senior Apartments",
                "property_address": "1207 East Vista Chino Road",
                "property_city": "Palm Springs",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92262",
                "beds": "1",
                "baths": "1.0",
                "rent_from": 0,
                "rent_to": 0,
                "square_feet_from": 540,
                "square_feet_to": 540,
                "photo": "images/107/delmonte.jpg",
                "distance": 3.872272540184942
            },
            {
                "id_property": 32959,
                "prog_type": "affordablehousing",
                "property_title": "Coachella Valley Apartments",
                "property_address": "84914 Bagdad Ave",
                "property_city": "Coachella",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92236",
                "beds": "2",
                "baths": "1.5",
                "rent_from": 655,
                "rent_to": 792,
                "square_feet_from": 950,
                "square_feet_to": 950,
                "photo": "uploaded/coachsign.jpg",
                "distance": 19.959307924327423
            },
            {
                "id_property": 35202,
                "prog_type": "affordablehousing",
                "property_title": "Waldorf Manor",
                "property_address": "11190 Mesquite Ave.",
                "property_city": "Desert Hot Springs",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92240",
                "beds": "0",
                "baths": "1",
                "rent_from": 401,
                "rent_to": 401,
                "square_feet_from": 273,
                "square_feet_to": 273,
                "photo": "uploaded/Waldorf-Manor-336x215.jpg",
                "distance": 11.978845072513735
            },
            {
                "id_property": 37888,
                "prog_type": "affordablehousing",
                "property_title": "SEASONS Senior Apartments at La Quinta",
                "property_address": "50915 Rainbow Court",
                "property_city": "La Quinta",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92253",
                "beds": "1",
                "baths": "1",
                "rent_from": 679,
                "rent_to": 866,
                "square_feet_from": 609,
                "square_feet_to": 609,
                "photo": "uploaded/prop_1555360669_la_quinta.jpg",
                "distance": 14.03179516041769
            },
            {
                "id_property": 37890,
                "prog_type": "affordablehousing",
                "property_title": "SEASONS Senior Apartments at Miraflores",
                "property_address": "47747 Gertrude Way",
                "property_city": "La Quinta",
                "property_state": "CA",
                "property_type": "premium",
                "property_zip": "92253",
                "beds": "1",
                "baths": "1",
                "rent_from": 679,
                "rent_to": 679,
                "square_feet_from": 700,
                "square_feet_to": 700,
                "photo": "uploaded/prop_1555361484_miraflores.jpg",
                "distance": 14.691879037190345
            }
        ]
    //[
    //     {
    //         "id_property": 2512,
    //         "prog_type": "affordablehousing",
    //         "property_title": "Valley Vista",
    //         "property_address": "",
    //         "property_city": "San Ramon",
    //         "property_state": "CA",
    //         "property_type": "premium",
    //         "property_zip": "94583",
    //         "beds": "1",
    //         "baths": "1",
    //         "rent_from": 0,
    //         "rent_to": 0,
    //         "square_feet_from": 0,
    //         "square_feet_to": 0,
    //         "photo": "uploaded/Valley Vista 6.jpg",
    //         "distance": 8.83073780511531
    //     },
    //     {
    //         "id_property": 1018,
    //         "prog_type": "Wien Manor",
    //         "property_title": "505 S CORCORAN AVE",
    //         "property_address": "",
    //         "property_city": "AVENAL",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93204",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 16.583150734183324
    //     },
    //     {
    //         "id_property": 1148,
    //         "prog_type": "Pleasant Valley Pines",
    //         "property_title": "141 S 3rd St Apt 127",
    //         "property_address": "",
    //         "property_city": "Coalinga",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93210",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 0.9816553709247628
    //     },
    //     {
    //         "id_property": 1149,
    //         "prog_type": "West Hills",
    //         "property_title": "500 PACIFIC ST",
    //         "property_address": "",
    //         "property_city": "COALINGA",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93210",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 0
    //     },
    //     {
    //         "id_property": 1150,
    //         "prog_type": "Westwood I",
    //         "property_title": "301 W Polk ST",
    //         "property_address": "",
    //         "property_city": "COALINGA",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93210",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 0.2590733261437587
    //     },
    //     {
    //         "id_property": 1406,
    //         "prog_type": "Huron Plaza",
    //         "property_title": "P.O. Box 1078",
    //         "property_address": "",
    //         "property_city": "HURON",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93234",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 15.656938889820413
    //     },
    //     {
    //         "id_property": 1407,
    //         "prog_type": "Parkside Apts",
    //         "property_title": "36200 N GIFFEN AVE",
    //         "property_address": "",
    //         "property_city": "HURON",
    //         "property_state": "CA",
    //         "property_type": "general",
    //         "property_zip": "93234",
    //         "beds": null,
    //         "baths": null,
    //         "rent_from": null,
    //         "rent_to": null,
    //         "square_feet_from": null,
    //         "square_feet_to": null,
    //         "photo": null,
    //         "distance": 16.257275404654607
    //     }
    // ]


    return (
        <>

            <section className="secPad housingNearby proprty3">
                <div className="container p-0">
                    <div className="sectionTitle">
                        <h2 className="font-weight700 colorBlue">{titletext}</h2>
                    </div>
                    <div className="row marginTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                            {
                                propertynearby == null || propertynearby == undefined || propertynearby == [] || propertynearby == '' || propertynearby.length == 0 ?

                                    <Carousel
                                        responsive={responsive}
                                        infinite >
                                        {
                                            nearbyProperty.map((data) => (

                                                <div className="sliderItem">
                                                    {
                                                        data.photo == null || data.photo == '' || data.photo == undefined ?

                                                            <a href={`/apartments-for-rent/${addDash(data.property_title.toLowerCase())}-${addDash(data.property_city.toLowerCase())}-${addDash(data.property_state.toLowerCase())}-${data.property_zip}/${data.id_property}`}>
                                                                <img src={require('../../assets/img/equalhousinglogo.jpg').default} />
                                                            </a>
                                                            // <h1>jelsdkfl</h1>
                                                            :
                                                            <img src={`https://managers.rentalhousingdeals.com/${data.photo}`} />
                                                    }
                                                    {/* <img src={`https://www.rentalhousingdeals.com/${data.photo}`} /> */}
                                                    <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i className="far fa-heart"></i></a>


                                                    {
                                                        data.prog_type == "affordablehousing" ? <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div> : null
                                                    }

                                                    <div className="sliderTextArea">
                                                        <div className="d-flex align-items-top">


                                                            <div>

                                                                <a className='blackcolor' href={`/apartments-for-rent/${addDash(data.property_title.toLowerCase())}-${addDash(data.property_city.toLowerCase())}-${addDash(data.property_state.toLowerCase())}-${data.property_zip}/${data.id_property}`}>

                                                                    <h4 className="font-weight700 mb-0 blackcolor">{data.property_title}</h4>

                                                                </a>
                                                                <p className="mb-0">{data.property_address} {data.property_city}, {data.property_state} {data.property_zip}</p>
                                                            </div>
                                                            {/* <div className="ml-auto">

                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div> */}
                                                        </div>
                                                        <div className="sliderListing">
                                                            <ul className="clearfix d-flex align-items-center">
                                                                <li><b>
                                                                    {data.beds == 0 || data.beds == '' || data.beds == null ? 'N/A' : data.beds}
                                                                </b>Bd</li>
                                                                <li><b>
                                                                    {data.baths == 0 || data.baths == '' || data.baths == null ? 'N/A' : data.baths}
                                                                </b>Ba</li>
                                                                <li><b>
                                                                    {/* {data.square_feet_from} */}
                                                                    {
                                                                        (data.square_feet_from == 0 && data.square_feet_to == 0) || (data.square_feet_from == '' && data.square_feet_to == '') || (data.square_feet_from == null && data.square_feet_to == null)
                                                                            ?
                                                                            'N/A'
                                                                            :

                                                                            (data.square_feet_from == data.square_feet_to ?
                                                                                `${data.square_feet_from}`
                                                                                :
                                                                                `${data.square_feet_from} - ${data.square_feet_to}`
                                                                            )
                                                                    }
                                                                </b>Sq.Ft</li>

                                                            </ul>
                                                            <div className="ml-auto boldTag greenText fontSize16">
                                                                {
                                                                    (data.rent_from == 0 && data.rent_to == 0) || (data.rent_from == '' && data.rent_to == '') || (data.rent_from == null && data.rent_to == null)
                                                                        ?
                                                                        '$ N/A'
                                                                        :

                                                                        (data.rent_from == data.rent_to ?
                                                                            `$ ${data.rent_from}`
                                                                            :
                                                                            `$ ${data.rent_from} - ${data.rent_to}`
                                                                        )
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </Carousel>
                                    :

                                    <Carousel
                                        responsive={responsive}
                                        infinite>
                                        {
                                            propertynearby.map((data) => (

                                                <div className="sliderItem">
                                                    {
                                                        data.photo == null || data.photo == '' || data.photo == undefined ?
                                                            <img src={require('../../assets/img/equalhousinglogo.jpg').default} />
                                                            // <h1>jelsdkfl</h1>
                                                            :
                                                            <img src={`https://managers.rentalhousingdeals.com/${data.photo}`} />
                                                    }
                                                    {/* <img src={`https://www.rentalhousingdeals.com/${data.photo}`} /> */}
                                                    <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i className="far fa-heart"></i></a>


                                                    {
                                                        data.prog_type == "affordablehousing" ? <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div> : null
                                                    }

                                                    <div className="sliderTextArea">
                                                        <div className="d-flex align-items-top">
                                                            <div>
                                                                <h4 className="font-weight700 mb-0">{data.property_title}</h4>
                                                                <p className="mb-0">{data.property_address} {data.property_city}, {data.property_state} {data.property_zip}</p>
                                                            </div>

                                                        </div>
                                                        <div className="sliderListing">
                                                            <ul className="clearfix d-flex align-items-center">
                                                                <li><b>
                                                                    {data.beds == 0 || data.beds == '' || data.beds == null ? 'N/A' : data.beds}
                                                                </b>Bd</li>
                                                                <li><b>
                                                                    {data.baths == 0 || data.baths == '' || data.baths == null ? 'N/A' : data.baths}
                                                                </b>Ba</li>
                                                                <li><b>
                                                                    {/* {data.square_feet_from} */}
                                                                    {
                                                                        (data.square_feet_from == 0 && data.square_feet_to == 0) || (data.square_feet_from == '' && data.square_feet_to == '') || (data.square_feet_from == null && data.square_feet_to == null)
                                                                            ?
                                                                            'N/A'
                                                                            :

                                                                            (data.square_feet_from == data.square_feet_to ?
                                                                                `${data.square_feet_from}`
                                                                                :
                                                                                `${data.square_feet_from} - ${data.square_feet_to}`
                                                                            )
                                                                    }
                                                                </b>Sq.Ft</li>
                                                                <li className="ml-auto boldTag greenText fontSize16">
                                                                    {
                                                                        (data.rent_from == 0 && data.rent_to == 0) || (data.rent_from == '' && data.rent_to == '') || (data.rent_from == null && data.rent_to == null)
                                                                            ?
                                                                            '$ N/A'
                                                                            :

                                                                            (data.rent_from == data.rent_to ?
                                                                                `$ ${data.rent_from}`
                                                                                :
                                                                                `$ ${data.rent_from} - ${data.rent_to}`
                                                                            )
                                                                    }

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Carousel>


                            }

                            {/* <Carousel
                                responsive={responsive}
                                infinite
                            >
                                {
                                    propertynearby.map((data) => (

                                        <div className="sliderItem">
                                            <img src={`https://www.rentalhousingdeals.com/${data.photo}`} />
                                            <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i className="far fa-heart"></i></a>


                                            {
                                                data.prog_type == "affordablehousing" ? <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div> : null
                                            }

                                            <div className="sliderTextArea">
                                                <div className="d-flex align-items-top">
                                                    <div>
                                                        <h4 className="font-weight700 mb-0">{data.property_title}</h4>
                                                        <p className="mb-0">{data.property_address} {data.property_city}, {data.property_state} {data.property_zip}</p>
                                                    </div>
                                                  
                                                </div>
                                                <div className="sliderListing">
                                                    <ul className="clearfix d-flex align-items-center">
                                                        <li><b>
                                                            {data.beds == 0 || data.beds == '' || data.beds == null ? 'N/A' : data.beds}
                                                        </b>Bd</li>
                                                        <li><b>
                                                            {data.baths == 0 || data.baths == '' || data.baths == null ? 'N/A' : data.baths}
                                                        </b>Ba</li>
                                                        <li><b>
                                                            {
                                                                (data.square_feet_from == 0 && data.square_feet_to == 0) || (data.square_feet_from == '' && data.square_feet_to == '') || (data.square_feet_from == null && data.square_feet_to == null)
                                                                    ?
                                                                    'N/A'
                                                                    :

                                                                    (data.square_feet_from == data.square_feet_to ?
                                                                        `${data.square_feet_from}`
                                                                        :
                                                                        `${data.square_feet_from} - ${data.square_feet_to}`
                                                                    )
                                                            }
                                                        </b>Sq.Ft</li>
                                                        <li className="ml-auto boldTag greenText fontSize16">
                                                            {
                                                                (data.rent_from == 0 && data.rent_to == 0) || (data.rent_from == '' && data.rent_to == '') || (data.rent_from == null && data.rent_to == null)
                                                                    ?
                                                                    '$ N/A'
                                                                    :

                                                                    (data.rent_from == data.rent_to ?
                                                                        `$ ${data.rent_from}`
                                                                        :
                                                                        `$ ${data.rent_from} - ${data.rent_to}`
                                                                    )
                                                            }

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </Carousel> */}

                            {/* <Carousel className="proudPartnerSlider sliderNav brandNav"
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



                           

                            {
                                nearbyProperty.map((data) => (

                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby1.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i className="far fa-heart"></i></a>


                                        {
                                            data.prog_type == "affordablehousing" ? <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing</div> : null
                                        }

                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">{data.property_title}</h4>
                                                    <p className="mb-0">{data.property_address} {data.property_city}, {data.property_state} {data.property_zip}</p>
                                                </div>
                                                <div className="ml-auto">

                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>{data.beds}</b>Bd</li>
                                                    <li><b>{data.baths}</b>Ba</li>
                                                    <li><b>{data.square_feet_from}</b>Sq.Ft</li>
                                                    <li className="ml-auto boldTag greenText fontSize16">${data.rent_from} - {data.rent_to}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                   
                                ))
                            }



                           



                          







                        </Carousel> */}

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default PropertiesNearby3