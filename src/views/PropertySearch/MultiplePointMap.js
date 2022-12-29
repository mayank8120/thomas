import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import Maptile from './Maptile';
import L from 'leaflet'
import Loader from '../../containers/Loader';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';
import { FIRSTAPI, SECONDAPI, THIRDAPI } from '../../constants/constants';
import { useHistory, useLocation } from 'react-router-dom';
import { isItNull, returnBigger, returnSmaller } from '../../containers/functions';
const MultiplePointMap = () => {

    // console.log(searchresultdata);

    // const [center, setcenter] = useState({ lat: 12.23423, lng: 23.23423 });
    // const ZOOM_LEVEL = 9;

    // const markerIcoon = new L.Icon(
    //     {
    //         iconUrl: img,
    //         iconSize: [40, 50]
    //     }
    // )


    let location = useLocation();






    const [searchresultdata, setsearchresultdata] = useState([]);
    const [APItype, setAPItype] = useState('');




    let history = useHistory();

    const mapchange = useSelector(
        (state) => state.mapState
    );

    const [lowerlat, setlowerlat] = useState('');
    const [lowerlng, setlowerlng] = useState('');
    const [upperlng, setupperlng] = useState('');
    const [upperlat, setupperlat] = useState('');







    // earlier center finding code 


    let propResult = useSelector((state) => state.search_result);
    // console.log(propResult);
    let searchApiUrl = `city=&state=&page=&feature=&minamtval=&maxamtval=&beds=&baths=}`


    useEffect(() => {

        setsearchresultdata([]);
        if (propResult.type == FIRSTAPI) {
            setAPItype(FIRSTAPI);
        } else if (propResult.type == SECONDAPI) {
            setAPItype(SECONDAPI)
        } else if (propResult.type == THIRDAPI) {
            setAPItype(THIRDAPI);
        }
        setsearchresultdata(propResult.data);


    }, [searchApiUrl, propResult]);











    let searchParameters = new URLSearchParams(location.search);

    useEffect(() => {
        if (lowerlat == '' || upperlat == '' || lowerlng == '' || upperlng == '') {
            if (APItype === SECONDAPI || APItype === THIRDAPI) {
                setlowerlat(searchParameters.get('minlat'));
                setupperlat(searchParameters.get('maxlat'));
                setlowerlng(searchParameters.get('minlng'));
                setupperlng(searchParameters.get('maxlng'));
            }
        }
    }, [searchParameters]);












    async function loop() {
        let llat = +100, llng = +200, ulat = -100, ulng = -200;
        // console.log(searchresultdata, "LLL");
        await searchresultdata.forEach(element => {

            if (isItNull(element.property.lat) || isItNull(element.property.lng)) {

            } else {


                if (element.property.lat < llat) {
                    llat = element.property.lat;
                }
                if (element.property.lng < llng) {
                    llng = element.property.lng
                }
                if (element.property.lat > ulat) {
                    ulat = element.property.lat;
                }
                if (element.property.lng > ulng) {
                    ulng = element.property.lng;
                }
            }
        })
        setlowerlat(llat < ulat ? llat : ulat);
        setupperlat(llat > ulat ? llat : ulat);
        setlowerlng(llng < ulng ? llng : ulng);
        setupperlng(llng > ulng ? llng : ulng);

        // if (llat == 100) {
        // } else {
        //     pushToLatLngPropertyPage(llat < ulat ? llat : ulat, llat > ulat ? llat : ulat, llng < ulng ? llng : ulng, llng > ulng ? llng : ulng);
        // }
    }






    useEffect(() => {
        if (searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == 'No Record Found') {

        } else {

            // if (mapchange == false) {

            // console.log(searchresultdata, "PPPP");

            if (APItype == FIRSTAPI) {
                loop();
            }




            // console.log(lowerlat, upperlat, "LLLLLLLL");

            // if (upperlng == '') {
            // } else {
            //     pushToLatLngPropertyPage(lowerlat, upperlat, lowerlng, upperlng);
            // }

            // if (searchresultdata == true) {
            //     console.log(searchresultdata);
            // }
            // console.log(searchresultdata);



        }
        // }

    }, [searchresultdata, mapchange, upperlng]);


    // let returnBigger = (val1, val2) => {
    //     let B;

    //     let val11 = parseFloat(val1);
    //     let val22 = parseFloat(val2);



    //     console.log(val11, val22);
    //     if (val11 >= val22) {
    //         B = val11;
    //     } else {
    //         B = val22;
    //     }

    //     console.log(B, "BIGG");
    //     return B;
    // }

    // let returnSmaller = (val1, val2) => {
    //     let S;
    //     let val11 = parseFloat(val1);
    //     let val22 = parseFloat(val2);

    //     if (val11 <= val22) {
    //         S = val11;
    //     } else {
    //         S = val22;
    //     }
    //     return S;
    // }

    let pushToLatLngPropertyPage = (minlat, maxlat, minlng, maxlng) => {
        history.push(`/propertySearch?minlat=${returnSmaller(minlat, maxlat)}&maxlat=${returnBigger(minlat, maxlat)}&minlng=${returnSmaller(minlng, maxlng)}&maxlng=${returnBigger(minlng, maxlng)}`);
    }

    useEffect(() => {
        if ((lowerlat == '' || lowerlng == '' || upperlng == '' || upperlat == '') && (APItype == SECONDAPI || APItype == THIRDAPI)) {
            // console.log("THEY ARE EMPTY");
        } else if (APItype == FIRSTAPI) {
            // console.log("THEY ARE FULLL");
            // pushToLatLngPropertyPage(lowerlat, upperlat, lowerlng, upperlng);
        }
    }, [lowerlat, upperlat])





    let streetmap = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

    return (
        <>

            <div className="row">
                <div className="col">
                    {
                        searchresultdata == undefined || searchresultdata.length == 0 || searchresultdata == null ?

                            <Loader />
                            :
                            searchresultdata == 'No Record Found' ?

                                <h1>{searchresultdata}</h1>
                                :
                                (
                                    // mapchange == false ?

                                    <>
                                        {
                                            lowerlat == '' || lowerlng == '' || upperlng == '' || upperlat == ''
                                                ?
                                                null
                                                :
                                                <MapContainer center={
                                                    [(parseFloat(lowerlat) + parseFloat(upperlat)) / 2, (parseFloat(lowerlng) + parseFloat(upperlng)) / 2]
                                                } zoom={12} scrollWheelZoom={true}>
                                                    <TileLayer
                                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                        url={streetmap} />
                                                    <Maptile />
                                                    {/* {
                                                        ((lowerlat == '' || lowerlng == '' || upperlng == '' || upperlat == '') && (APItype == SECONDAPI || APItype == THIRDAPI))
                                                            ?
                                                            null :
                                                            (APItype == FIRSTAPI) ? pushToLatLngPropertyPage(lowerlat, upperlat, lowerlng, upperlng) : null
                                                    } */}
                                                </MapContainer>

                                        }

                                    </>
                                    // :
                                    // <MapContainer center={[33.0, -117.0]} zoom={12} scrollWheelZoom={true}>
                                    //     <TileLayer
                                    //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    //         url={streetmap} />
                                    //     <Maptile
                                    //     // searchresultdata={searchresultdata}
                                    //     />
                                    // </MapContainer>
                                )
                    }



                </div>
            </div>
        </>
    )
}

export default MultiplePointMap
