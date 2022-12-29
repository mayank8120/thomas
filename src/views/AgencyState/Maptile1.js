import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import img from '../../assets/img/marker.png'
import circleimg from '../../assets/img/hamap.png'
import L from 'leaflet'
import useSupercluster from "use-supercluster";
import { Link } from "react-router-dom";
import Feedback from "react-bootstrap/esm/Feedback";
import { addDash } from "../../containers/functions";



const markerIcoon = new L.Icon(
    {
        iconUrl: circleimg,
        iconSize: [52, 52]
    }
)



const icons = {};
const fetchIcon = (count, size) => {
    if (!icons[count]) {
        icons[count] = L.divIcon({
            html: `<div class="cluster-marker greencolor" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
        });
    }
    return icons[count];
};

const cuffs = new L.Icon({
    iconUrl: "/handcuffs.svg",
    iconSize: [24, 24],
});





const Maptile1 = ({ searchresultdata }) => {

    // console.log(searchresultdata);

    const maxZoom = 22;
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(0);
    const map = useMap();

    // get map bounds
    function updateMap() {
        const b = map.getBounds();
        setBounds([
            b.getSouthWest().lng,
            b.getSouthWest().lat,
            b.getNorthEast().lng,
            b.getNorthEast().lat,
        ]);
        setZoom(map.getZoom());
    }

    const onMove = useCallback(() => {
        updateMap();
    }, [map]);

    React.useEffect(() => {
        updateMap();
    }, [map]);

    useEffect(() => {
        map.on("move", onMove);
        return () => {
            map.off("move", onMove);
        };
    }, [map, onMove]);

    const points = searchresultdata.map((db) => ({
        type: "Feature",
        properties: {
            cluster: false, haid: db.ha_id,
            haname: db.HADetail[0].name,
            haaddress: db.HADetail[0].address,
            hacity: db.HADetail[0].city,
            hastate: db.HADetail[0].state,
            hazip: db.HADetail[0].zip,
            haimg: (db.HAPhotoDetail == undefined || db.HAPhotoDetail.length == 0 || db.HAPhotoDetail[0].path == '' || db.HAPhotoDetail[0].filename == '' ?
                `https://managers.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`
                :
                `https://managers.rentalhousingdeals.com/${db.HAPhotoDetail[0].path}/${db.HAPhotoDetail[0].filename}`
            )
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(db.HADetail[0].lng),
                parseFloat(db.HADetail[0].lat),
            ],
        },
    }));

    const { clusters, supercluster } = useSupercluster({
        points: points,
        bounds: bounds,
        zoom: zoom,
        options: { radius: 50, maxZoom: 22 },
    });


    // console.log(searchresultdata);
    return (
        <>
            {
                clusters.map((cluster) => {
                    // every cluster point has coordinates
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    // the point may be either a cluster or a crime point
                    const { cluster: isCluster, point_count: pointCount } =
                        cluster.properties;

                    // we have a cluster to render
                    if (isCluster) {
                        return (
                            <Marker
                                key={`cluster-${cluster.id}`}
                                position={[latitude, longitude]}
                                icon={fetchIcon(
                                    pointCount,
                                    10 + (pointCount / points.length) * 40
                                )}
                                eventHandlers={{
                                    click: () => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id),
                                            maxZoom
                                        );
                                        map.setView([latitude, longitude], expansionZoom, {
                                            animate: true,
                                        });
                                    },
                                }}
                            />
                        );
                    }

                    // we have a single point (crime) to render
                    return (
                        <Marker
                            // key={`crime-${cluster.properties.crimeId}`}
                            position={[latitude, longitude]}
                            icon={markerIcoon}>
                            <Popup position className="map-section-detail">
                                <>
                                    <div className="media">
                                        <a href={`/housing-authority-waiting-lists/${addDash(cluster.properties.haname).toLowerCase()}/${addDash(cluster.properties.hacity + " " + cluster.properties.hastate + " " + cluster.properties.hazip)}/${cluster.properties.haid.toLowerCase()}`}>

                                            <img className="mr-3" src={`${cluster.properties.haimg}`} alt="Image" />
                                            {/* {
                                                data.image == [] || data.image == null || data.image == '' ?
                                                    <img className="w-46 h-46" src={`https://www.rentalhousingdeals.com/images/l_thumbs/photos-unavailable.jpg`} alt="Image" />
                                                    :
                                                    <img className="w-46 h-46" src={`https://www.rentalhousingdeals.com/${data.image[0].path}/${data.image[0].filename}`} alt="Image" />
                                            } */}
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex align-items-top">
                                                <div className="headingSec">
                                                    <a href={`/housing-authority-waiting-lists/${addDash(cluster.properties.haname).toLowerCase()}/${addDash(cluster.properties.hacity + " " + cluster.properties.hastate + " " + cluster.properties.hazip)}/${cluster.properties.haid.toLowerCase()}`}>
                                                        <h5 className="mt-0 mb-0 fontSize16 font-weight700 colorBlue">
                                                            {cluster.properties.haname}
                                                            {/* {data.name} */}
                                                        </h5>
                                                    </a>
                                                    <p className="mb-0 secondaryColor fontSize14 font-weight600">
                                                        {/* {data.city}, {data.state} */}{cluster.properties.haaddress}, {cluster.properties.hacity}, {cluster.properties.hastat} {cluster.properties.hazip}
                                                    </p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </>
                            </Popup>

                        </Marker>


                    );
                })
            }
        </>
    )
}

export default Maptile1
