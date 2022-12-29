import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import img from '../assets/img/marker.png';


const markerIcoon = new L.Icon(
    {
        iconUrl: img,
        iconSize: [40, 50]
    }
)
const SinglePointMap = ({ propdata }) => {
    // console.log(propdata);
    return (
        <>
            <MapContainer center={[propdata.lat, propdata.lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[propdata.lat, propdata.lng]} icon={markerIcoon} >
                    {/* <Popup position>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                </Marker>
            </MapContainer>
        </>
    )
}

export default SinglePointMap
