import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { listTracks } from '../../../server/db/tracks'

function AllTrackMap({ tracks }) {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  }, [lat, long])

  const startPosition = [lat, long]

  const mapComponent = (
    <div>
      <div className="all-map-container">
        <MapContainer
          className="all-map"
          center={[lat, long]} // This will change - with the long and lat passed in from the track
          zoom={11}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://api.mapbox.com/styles/v1/clemenware/cl2sqqm2s000i14nzde71lqaj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2xlbWVud2FyZSIsImEiOiJjbDJzcWpsMG0wMHFnM2pvYXVmNTh0dnE3In0.Gi3RGqZv_HHyNk8Es6Aojw" />
          <Marker position={startPosition}>
            <Popup>Your Location</Popup>
          </Marker>
          {tracks.map((track) => (
            <Marker position={[track.lat, track.lon]} key={track.id}>
              <Popup>{track.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )

  return <>{lat !== 0 && long !== 0 ? mapComponent : null}</>
}

export default AllTrackMap
