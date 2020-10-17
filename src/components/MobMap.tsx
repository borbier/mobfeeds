/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import GoogleMapReact from 'google-map-react';
import markerIcon from '../assets/google_default_marker.png'

const apiKey = process.env.REACT_APP_MAPS_API_KEY

export default ({mobLocations}:any) => {
    const centerCoord = mobLocations[0].coord

    return (
        <div css={{ fontSize: '3em', margin: '30px 0' }}>
            จุดชุมนุม (กำลังทำจ้า)
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={centerCoord}
                    defaultZoom={14}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, mobLocations)}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}

const renderMarkers = (map: any, maps: any, locations: Array<any>) => {
    const [iconWidth,iconHeight] = [28, 40]
    
    locations.map(loc => {
        new maps.Marker({
            position: loc.coord,
            map,
            title: loc.description,
            icon: {
                url: markerIcon,
                scaledSize: new maps.Size(iconWidth, iconHeight),
                labelOrigin: new maps.Point(iconWidth/2, iconHeight+8)
            },
            label: {
                text: loc.description,
                color: "#801a00",
                fontWeight: "bold",
                fontSize: "16px",
            }
        });
    })
}