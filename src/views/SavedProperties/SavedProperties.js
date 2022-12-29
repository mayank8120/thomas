import React, { useEffect, useState } from 'react'
import Footer from '../../containers/Footer'
import { arrayToString, createEmptyArrays } from '../../containers/functions';
import { PropertySearchItem } from '../PropertySearch/PropertySearchItem';
import SavedHa from './SavedHa';
import { SavedPropertyItem } from './SavedPropertyItem'


const SavedProperties = () => {
    document.title = "Favourites - Rental Housing Deals"


    // console.log(arrayToString(0));

    let arr = JSON.parse(localStorage.getItem('saveHAList'));
    let arr1 = JSON.parse(localStorage.getItem('savePropList'));



    if (arr == null || arr == '' || arr == undefined) {
        let newArr = [];
        localStorage.setItem('saveHAList', JSON.stringify(newArr));

    }

    if (arr1 == null || arr1 == '' || arr1 == undefined) {
        let newArr = [];
        localStorage.setItem('savePropList', JSON.stringify(newArr));
    }


    let propsURL = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/favprops?stateArray=${arrayToString(0)}`;



    const [propertyList, setpropertyList] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };



    console.log(JSON.parse(localStorage.getItem('savePropList')));
    console.log(JSON.parse(localStorage.getItem('saveHAList')));

    useEffect(() => {

        const fetchData = async () => {

            await fetch(`${propsURL}`, requestOptions)
                .then(response => response.json())
                .then(res => {
                    if (res.error == true) {
                    } else {
                        setpropertyList(res.data);
                    }
                })
                .catch(error => console.log('error', error));
        };
        fetchData();
    }, [propsURL, arr1]);

    // localStorage.removeItem("savePropList");
    // localStorage.removeItem("saveHAList");










    let haURL = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/favHAdetails?HAarray=${arrayToString(1)}`


    const [haList, sethaList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            await fetch(`${haURL}`, requestOptions)
                .then(response => response.json())
                .then(res => {
                    if (res.error == true) {
                        // setpropertyList(res.message);
                        // //console.log(res);
                    } else {
                        sethaList(res.data);
                        // //console.log(res);
                    }
                })
                .catch(error => console.log('error', error));
        };
        fetchData();
    }, [haURL, arr]);

    // localStorage.removeItem("saveHAList");






    return (
        <>
            <section className="secPad16 savedProperty pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="savedPropertyBlock savedPropertySection">
                                <h2 clas="colorBlue font-weight700">My Favorites</h2>
                                <ul className="nav nav-tabs savedPropertyTab itemMobile" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">Properties</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                            aria-controls="profile" aria-selected="false">Housing Authorities</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="tabCont propertyList">



                                            <h3 className="mb-0 colorBlue itemWebsite">Saved Properties</h3>

                                            <ul className="noMarginPad listStyleNone">
                                                {


                                                    arr1 == null || arr1 == '' || arr1.length == 0 ?
                                                        <li className="listingBlock2">

                                                            <h1>No Properties Saved. Please save the propeties.</h1>
                                                        </li>
                                                        :
                                                        propertyList.map((data) => {
                                                            return (
                                                                <li className="listingBlock2">
                                                                    <SavedPropertyItem post={data} />
                                                                </li>

                                                            );
                                                        })

                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel"
                                        aria-labelledby="profile-tab">
                                        <div className="tabCont propertyList mtEight">
                                            <h3 className="mb-0 colorBlue itemWebsite">Saved Housing Authorities</h3>
                                            <div className="agencyStateList">
                                                <div className="propertyListState propertyListScroll boxscroll4 favouritesBox">
                                                    <ul className="noMarginPad listStyleNone marginExtraBlock">



                                                        {


                                                            arr == null || arr == '' || arr.length == 0 ?
                                                                <li className="listingBlock2">
                                                                    <h1>No Housing authorities Saved. Please save the housing authorities.</h1>
                                                                </li>
                                                                :



                                                                haList.map((data) => {
                                                                    return (
                                                                        // {
                                                                        //     
                                                                        <li className="listingBlock2">
                                                                            {data.HADetail == null || data.HADetail == '' || data.HADetail == undefined ?
                                                                                null :

                                                                                <SavedHa data={data} />

                                                                            }
                                                                        </li>
                                                                        // }


                                                                    );
                                                                })

                                                        }


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SavedProperties