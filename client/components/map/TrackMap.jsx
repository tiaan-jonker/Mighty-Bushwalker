import React, { useState, useEffect } from 'react'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

function TrackMap(props) {
  const { name, lat, lon, line } = props.track
  const [trackData, setTrackData] = useState({
    lat: 0,
    lon: 0,
    name: '',
    line: [],
  })

  let pathLine = []
  if (line && line[0].length == 2) {
    pathLine = [line]
  } else {
    pathLine = line
  }

  useEffect(() => {
    if (lat) {
      const testCoord = pathLine[0][0][0]
      console.log(testCoord)
      if (testCoord > 0) {
        const newLine = pathLine.map((set) => {
          return set.map((coord) => {
            return coord.reverse()
          })
        })

        setTrackData({
          line: newLine,
          lat,
          lon,
          name,
        })
      } else {
        setTrackData({
          line: pathLine,
          lat,
          lon,
          name,
        })
      }
    }
  }, [lat, lon, name, line])

  const startPosition = [trackData.lat, trackData.lon]
  const mapComponent = (
    <>
      <div className="map-container">
        <MapContainer
          className="map"
          center={startPosition}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://api.mapbox.com/styles/v1/clemenware/cl2sqqm2s000i14nzde71lqaj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2xlbWVud2FyZSIsImEiOiJjbDJzcWpsMG0wMHFnM2pvYXVmNTh0dnE3In0.Gi3RGqZv_HHyNk8Es6Aojw" />
          <Marker position={startPosition}>
            <Popup>{trackData.name}</Popup>
          </Marker>
          {trackData.line.map((path, index) => {
            return (
              <Polyline
                key={index}
                pathOptions={{ color: 'var(--primary-green)' }}
                positions={path}
              ></Polyline>
            )
          })}
        </MapContainer>
      </div>
    </>
  )
  return <>{trackData.lat !== 0 && trackData.lon !== 0 ? mapComponent : null}</>
}

export default TrackMap
