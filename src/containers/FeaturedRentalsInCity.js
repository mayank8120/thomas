import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { addDash, capitaliseFirstLetterOfWord } from './functions';
const FeaturedRentalsInCity = ({ latlngdata, page }) => {

    const [key, setKey] = useState('home');

    const [nearbycitiesdata, setnearbycitiesdata] = useState();
    const [loadmore, setloadmore] = useState(false);
    // console.log(latlngdata);

    let nearbycitiesurl;
    if (latlngdata == null || latlngdata == undefined) {
        nearbycitiesurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbycities?lat=&lng=`
    } else {
        nearbycitiesurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearbycities?lat=${latlngdata.lat}&lng=${latlngdata.lon}`
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbycitiesurl)
                .then(res => {
                    // console.log(res.data.data);
                    setnearbycitiesdata(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbycitiesurl]);

    // console.log(nearbycitiesdata);
    return (
        <>
            <section className="secPad featureSection basic">
                <div className="container">
                    <div className="sectionTitle">
                        {
                            page == 2 ?
                                <h2 className="font-weight700 colorBlue">
                                    Featured Low Income Senior Housing Rentals in {nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h2>
                                :
                                <h2 className="font-weight700 colorBlue">Featured Rentals in {nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h2>

                        }
                    </div>
                    <div className="row marginTop2">
                        <div className="col-lg-12">
                            <div>
                                <Tabs
                                    id="controlled-tab-example"
                                    defaultActiveKey="home"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3 sideWhiteGradient">

                                    <Tab eventKey="home" title="This City">
                                        <div className="listingBlock">
                                            <div className="row">
                                                <div className="col-lg-12 pl-0">
                                                    <ul className="noMarginPad list-style-type row">
                                                        <Link to={`/propertySearch/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : nearbycitiesdata[0].property_city}/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'CA' : nearbycitiesdata[0].property_state}`}>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">{nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h3>
                                                                <p className="mb-0 secondaryColor">Affordable Housing</p>
                                                            </li>
                                                        </Link>
                                                        <Link to={`/propertySearch/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : nearbycitiesdata[0].property_city}/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'CA' : nearbycitiesdata[0].property_state}&feature=senior`}>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">{nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h3>
                                                                <p className="mb-0 secondaryColor">Senior Housing</p>
                                                            </li>
                                                        </Link>
                                                        <Link to={`/propertySearch/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : nearbycitiesdata[0].property_city}/${nearbycitiesdata == undefined || nearbycitiesdata == null ? 'CA' : nearbycitiesdata[0].property_state}&feature=section`}>
                                                            <li>
                                                                <h3 className="font-weight500 mb-0">{nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h3>
                                                                <p className="mb-0 secondaryColor">Section 8 Housing</p>
                                                            </li>
                                                        </Link>
                                                        {/* <Link> */}
                                                        <li>
                                                            <h3 className="font-weight500 mb-0">{nearbycitiesdata == undefined || nearbycitiesdata == null ? 'Los Angeles' : capitaliseFirstLetterOfWord(nearbycitiesdata[0].property_city)}</h3>
                                                            <p className="mb-0 secondaryColor">Low Income Housing</p>
                                                        </li>
                                                        {/* </Link> */}
                                                    </ul>
                                                </div>

                                                {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <a className="loadMore transition">
                                                        Load More
                                                    </a>
                                                </div> */}


                                            </div>
                                        </div>
                                    </Tab>


                                    <Tab eventKey="Nearby Cities" title="Nearby Cities">
                                        <div className="listingBlock">
                                            <div className="row">
                                                <div className="col-lg-12 pl-0">
                                                    <ul className="noMarginPad list-style-type row ">


                                                        {
                                                            nearbycitiesdata == null || nearbycitiesdata == undefined ?
                                                                null :
                                                                (
                                                                    loadmore == true
                                                                        ?


                                                                        (nearbycitiesdata.map((data) => (
                                                                            <Link to={`/propertySearch/${data.property_city}/${data.property_state}`} className="col-lg-3 col-xs-6">
                                                                                <li >
                                                                                    <h3 className="font-weight500 mb-0">{capitaliseFirstLetterOfWord(data.property_city)}</h3>
                                                                                    <p className="mb-0 secondaryColor">Affordable Housing

                                                                                    </p>
                                                                                </li>
                                                                            </Link>
                                                                        )))
                                                                        :
                                                                        (nearbycitiesdata.slice(0, 16).map((data) => (
                                                                            <Link to={`/propertySearch/${data.property_city}/${data.property_state}`} className="col-lg-3 col-xs-6">
                                                                                <li>
                                                                                    <h3 className="font-weight500 mb-0">{capitaliseFirstLetterOfWord(data.property_city)}</h3>
                                                                                    <p className="mb-0 secondaryColor">Affordable Housing

                                                                                    </p>
                                                                                </li>
                                                                            </Link>
                                                                        )))
                                                                )
                                                        }
                                                    </ul>
                                                </div>

                                                <div className="col-lg-12">
                                                    <span className="loadMore transition"
                                                        onClick={() => {
                                                            setloadmore(!loadmore);
                                                        }} >
                                                        {
                                                            loadmore == true ?
                                                                'Load Less'
                                                                :
                                                                'Load More'
                                                        }
                                                    </span>
                                                </div>


                                            </div>
                                        </div>
                                    </Tab>



                                    <Tab eventKey="Nearby Housing" title="Nearby Housing Authorities">
                                        <div className="listingBlock">
                                            <div className="row">
                                                <div className="col-lg-12 pl-0">
                                                    <ul className="noMarginPad list-style-type row">


                                                        {
                                                            nearbycitiesdata == null || nearbycitiesdata == undefined ?
                                                                null :
                                                                (
                                                                    loadmore == true
                                                                        ?
                                                                        (
                                                                            nearbycitiesdata.map((data) => (
                                                                                <Link to={`/housing-authority-waiting-lists/${addDash(data.property_city)}-${data.property_state}`} className="col-lg-3 col-xs-6">
                                                                                    <li >
                                                                                        <h3 className="font-weight500 mb-0">{capitaliseFirstLetterOfWord(data.property_city)}</h3>
                                                                                        <p className="mb-0 secondaryColor">Housing Authorities
                                                                                        </p>
                                                                                    </li>
                                                                                </Link>
                                                                            ))
                                                                        )
                                                                        :
                                                                        (
                                                                            nearbycitiesdata.slice(0, 16).map((data) => (
                                                                                <Link to={`/housing-authority-waiting-lists/${addDash(data.property_city)}-${data.property_state}`} className="col-lg-3 col-xs-6">
                                                                                    <li >
                                                                                        <h3 className="font-weight500 mb-0">{capitaliseFirstLetterOfWord(data.property_city)}</h3>
                                                                                        <p className="mb-0 secondaryColor">Housing Authorities</p>
                                                                                    </li>
                                                                                </Link>
                                                                            ))
                                                                        )
                                                                )
                                                        }
                                                    </ul>
                                                </div>

                                                <div className="col-lg-12">
                                                    <span className="loadMore transition"
                                                        onClick={() => {
                                                            setloadmore(!loadmore);
                                                        }} >
                                                        {
                                                            loadmore == true ?
                                                                'Load Less'
                                                                :
                                                                'Load More'
                                                        }
                                                    </span>
                                                </div>


                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>







                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default FeaturedRentalsInCity