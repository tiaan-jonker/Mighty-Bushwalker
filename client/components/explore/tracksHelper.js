export function calculateDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
  var R = 6371 // Radius of the earth in km
  const x =
    (deg2rad(lon2) - deg2rad(lon1)) *
    Math.cos((deg2rad(lat1) + deg2rad(lat2)) / 2)
  const y = deg2rad(lat2) - deg2rad(lat1)
  const d = Math.sqrt(x * x + y * y) * R
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

export async function updateTracksData(tracks) {
  const tracksWithPosition = await getDistanceAway(tracks)
  const tracksUpdated = categoriseTrackLength(tracksWithPosition)
  const unsavedTracks = tracksUpdated.filter(
    (track) => !track.completed && !track.saved
  )

  unsavedTracks.sort((a, b) => {
    return a.distanceAway - b.distanceAway
  })
  console.log(unsavedTracks)

  return unsavedTracks
}

// categorise track length as short medium or long
function categoriseTrackLength(tracks) {
  const updatedTracks = tracks.map((track) => {
    let lengthCategory = 'Long'
    if (track.length < 5) {
      lengthCategory = 'Short'
    } else if (track.length < 12) {
      lengthCategory = 'Medium'
    }

    return { ...track, lengthCategory }
  })
  return updatedTracks
}

function getDistanceAway(tracks) {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const coords = position.coords
      const updatedTracks = tracks.map((track) => {
        const distanceAway = calculateDistanceBetweenPoints(
          coords.latitude,
          coords.longitude,
          track.lat,
          track.lon
        ).toFixed(1)

        return { ...track, distanceAway }
      })
      resolve(updatedTracks)
    })
  })
}
