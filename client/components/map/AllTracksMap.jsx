import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const startPosition = [-36.212791, 175.402013]

function AllTrackMap() {
  return (
    <>
      <div className="map-container">
        <MapContainer
          className="map"
          center={[-36.217476, 175.393967]} // This will change - with the long and lat passed in from the track
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://api.mapbox.com/styles/v1/clemenware/cl2sqqm2s000i14nzde71lqaj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2xlbWVud2FyZSIsImEiOiJjbDJzcWpsMG0wMHFnM2pvYXVmNTh0dnE3In0.Gi3RGqZv_HHyNk8Es6Aojw" />
          <Marker position={startPosition}>
            <Popup>Track</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default AllTrackMap
