import React from 'react'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

const startPosition = [-36.212791, 175.402013]

const line = [
  [175.393967, -36.217476],
  [175.394135, -36.217336],
  [175.394144, -36.216849],
  [175.394307, -36.216587],
  [175.394451, -36.216667],
  [175.394442, -36.21626],
  [175.394757, -36.216216],
  [175.395235, -36.216514],
  [175.396154, -36.216449],
  [175.396974, -36.215722],
  [175.397939, -36.215416],
  [175.398254, -36.215169],
  [175.398741, -36.215372],
  [175.399309, -36.215183],
  [175.399498, -36.215082],
  [175.399534, -36.214798],
  [175.399994, -36.214543],
  [175.400201, -36.213802],
  [175.40113, -36.213205],
  [175.401382, -36.212827],
  [175.401851, -36.212893],
  [175.402013, -36.212791],
  [175.402941, -36.214333],
  [175.402653, -36.2149],
  [175.403437, -36.216434],
  [175.403392, -36.216929],
  [175.404329, -36.217489],
  [175.404573, -36.218085],
  [175.405109, -36.21836],
  [175.405726, -36.218739],
  [175.406294, -36.220448],
  [175.407042, -36.221437],
  [175.406862, -36.221764],
  [175.407106, -36.222382],
  [175.407989, -36.222804],
  [175.408947, -36.223653],
  [175.408864, -36.224253],
  [175.40931, -36.224698],
  [175.409396, -36.225006],
  [175.40889, -36.225945],
  [175.408871, -36.226998],
  [175.409125, -36.227639],
  [175.410134, -36.22801],
  [175.410594, -36.22833],
  [175.410837, -36.228984],
  [175.411982, -36.229501],
  [175.412012, -36.230638],
  [175.411298, -36.230775],
]

const pathLine = line.map((set) => {
  return set.reverse()
})

function TrackMap() {
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
          <Marker position={startPosition}></Marker>
          <Polyline pathOptions={{ color: 'yellowgreen' }} positions={pathLine}>
            <Popup>Aotea Track</Popup>
          </Polyline>
        </MapContainer>
      </div>
    </>
  )
}

export default TrackMap
