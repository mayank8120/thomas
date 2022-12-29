import React from 'react'

// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { CityCarouselImage } from './CityCarouselImage';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
// import '../assets'
const PopularCities = ({ titletext }) => {


    const database = [
        {
            city: "Los Angeles",
            state: "CA",
            imgurl: "popularCity1.png"
        },
        {
            city: "New York",
            state: "NY",
            imgurl: "popularCity2.png"
        },
        {
            city: "Boston",
            state: "MA",
            imgurl: "popularCity3.png"
        },
        {
            city: "Columbus",
            state: "OH",
            imgurl: "popularCity4.png"
        },
        {
            city: "Phoenix",
            state: "AZ",
            imgurl: "popularCity5.png"
        },
        {
            city: "Atlanta",
            state: "GA",
            imgurl: "popularCity6.png"
        },
        {
            city: "Chicago",
            state: "IL ",
            imgurl: "popularCity7.png"
        },
        {
            city: "Miami",
            state: "FL",
            imgurl: "popularCity8.png"
        },
        {
            city: "San Diego",
            state: "CA",
            imgurl: "popularCity9.png"
        },
        {
            city: "San Francisco",
            state: "CA",
            imgurl: "popularCity10.png"
        },
        {
            city: "Nashville",
            state: "TN ",
            imgurl: "popularCity11.png"
        },
        {
            city: "Seattle",
            state: "WA",
            imgurl: "popularCity12.png"
        },
        {
            city: "Philadelphia",
            state: "PA",
            imgurl: "popularCity13.png"
        },
        {
            city: "Dallas",
            state: "TX",
            imgurl: "popularCity14.png"
        },
        {
            city: "Austin",
            state: "TX",
            imgurl: "popularCity15.png"
        },
        {
            city: "New Orleans",
            state: "LA",
            imgurl: "popularCity16.png"
        },
        {
            city: "San Antonio",
            state: "TX",
            imgurl: "popularCity17.png"
        }

    ]

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

    return (
        <section className="secPad popularCities">
            <div className="container">
                <div className="sectionTitle">

                    <h2 className="font-weight700 colorBlue">{titletext}</h2>
                    {/* <h2 className="font-weight700 colorBlue">Popular Cities</h2> */}
                </div>
                <div className="row marginTop">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Carousel
                            responsive={responsive}
                            infinite>
                            {
                                database.map((data) => (
                                    <Link key={data.city} to={`/propertySearch/${data.city}/${data.state}`}>
                                        <div className="popularCitySliderText">
                                            <img src={require(`../assets/img/${data.imgurl}`).default} />
                                            <h3 className="font-weight700">{data.city}, {data.state}</h3>
                                        </div>
                                    </Link>
                                ))
                            }
                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default PopularCities