import React from 'react'
import PropertiesNearby from '../Index/PropertiesNearby'
import ComparePropertyItem from './ComparePropertyItem'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import SimilarPropertiesCompare from './SimilarPropertiesCompare';
import Footer from '../../containers/Footer';
// import '../../'

export const CompareProperties = () => {
    document.title = "Compare Properties - Rental Housing Deals"

    return (
        <>

            {/* <!--detail Page--> */}
            <section className="mt-54">


                <div className="container3">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <nav className="navbar resNavbarBread breadleftmargin" aria-label="breadcrumb">
                            <ol className="breadcrumb font-weight500 mb-0">
                                <li className="breadcrumb-item fontSize14 "><a href="/" className="purpleText">Home</a></li>
                                <li className="breadcrumb-item fontSize14 active"><a href="/housing-authority-waitlists" className="logoBlue">Compare Properties</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3 className="font-weight700 mb-0 fontSize24 colorBlue mt-3">Compare Properties</h3>
                        </div>
                    </div>
                    <div className="row mt-32">



                        {/* <div className="emptyBlocks"></div>

                        <article>
                            <h1 className="title">Swan</h1>
                            <p>Swansithin the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are
                                considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the
                                true swans. Swans usually mate for life, although “divorce” sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.</p>
                            <p>Swansithin the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are
                                considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the
                                true swans. Swans usually mate for life, although “divorce” sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.</p>

                        </article>

                        <div className="emptyBlocks"></div> */}






                        {/* <Carousel className="proudPartnerSlider sliderNav brandNav"
                            plugins={[
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 3,
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


                            <ComparePropertyItem />
                            <ComparePropertyItem />
                            <ComparePropertyItem />



                        </Carousel> */}




                        <ComparePropertyItem />
                        <ComparePropertyItem />
                        <ComparePropertyItem />



                    </div>
                </div>
            </section>




            <section className="secPad housingNearby companre-slider">
                <div className="container3">
                    <div className="sectionTitle">
                        <h2 className="font-weight700 colorBlue">Similar Nearby Apartments for Rent </h2>
                    </div>


                    <SimilarPropertiesCompare />

                    {/* <div className="row marginTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="owl-carousel owl-theme housing_Nearby sliderNav">
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby1.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing
                                        </div>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>

                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1</b>Bd</li>
                                                    <li><b>1</b>Ba</li>
                                                    <li><b>880</b>Sq.Ft</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">

                                                <p className=" mb-0 boldTag greenText fontSize16">$1,200</p>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby2.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1-2</b>Bd</li>
                                                    <li><b>1-3</b>Ba</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">

                                                <p className=" mb-0 boldTag greenText fontSize16">$1,200</p>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby3.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing
                                        </div>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>

                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1</b>Bd</li>
                                                    <li><b>1</b>Ba</li>
                                                    <li><b>880</b>Sq.Ft</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">
                                                <p className="mr-auto fontSize16 mb-0 colorBlue font-weight700">$1,200-1,800</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby4.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1-2</b>Bd</li>
                                                    <li><b>1-3</b>Ba</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">
                                                <p className="mr-auto fontSize16 mb-0 colorBlue font-weight700">$1,200-1,800</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby1.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing
                                        </div>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>

                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1</b>Bd</li>
                                                    <li><b>1</b>Ba</li>
                                                    <li><b>880</b>Sq.Ft</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">

                                                <p className=" mb-0 boldTag greenText fontSize16">$1,200</p>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby2.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1-2</b>Bd</li>
                                                    <li><b>1-3</b>Ba</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">
                                                <p className="mr-auto fontSize16 mb-0 colorBlue font-weight700">$1,200-1,800</p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby3.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTagName brdrRadius4 colorWhite font-weight700">Affordable Housing
                                        </div>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Blessed Rock Apartments</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1</b>Bd</li>
                                                    <li><b>1</b>Ba</li>
                                                    <li><b>880</b>Sq.Ft</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">

                                                <p className=" mb-0 boldTag greenText fontSize16">$1,200</p>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="sliderItem">
                                        <img src={require('../../assets/img/housingNearby4.png').default} />
                                        <a data-toggle="modal" data-target="#exampleModalCenter" className="likeTag transition"><i
                                            className="far fa-heart"></i></a>
                                        <div className="sliderTextArea">
                                            <div className="d-flex align-items-top">
                                                <div>
                                                    <h4 className="font-weight700 mb-0">Arcadia Apartment</h4>
                                                    <p className="mb-0">2882 Tyler St El Monte, CA 91157</p>
                                                </div>
                                            </div>
                                            <div className="sliderListing">
                                                <ul className="clearfix d-flex align-items-center">
                                                    <li><b>1-2</b>Bd</li>
                                                    <li><b>1-3</b>Ba</li>

                                                </ul>
                                            </div>
                                            <div className="d-flex mt-3">

                                                <p className=" mb-0 boldTag greenText fontSize16">$1,200</p>
                                                <div className="ml-auto">
                                                    <a href="#"><img src={require('../../assets/img/priceTag.png').default} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="pupleLineBtn responsive15 itemWebsite mb-5">
                        <a href="#" className="w-100 transition font-weight500">Load More</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
