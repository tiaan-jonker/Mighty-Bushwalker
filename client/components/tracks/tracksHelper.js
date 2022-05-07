import requestor from '../../consume'

export function getAllTracks(consume = requestor) {
  return consume(`/tracks`)
    .then((res) => {
      const tracks = res.body
      return tracks
    })
    .catch((err) => console.error(err))
}

export function calculateDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
  var R = 6371 // Radius of the earth in km
  // var dLat = deg2rad(lat2 - lat1) // deg2rad below
  // var dLon = deg2rad(lon2 - lon1)

  // var a =
  //   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //   Math.cos(deg2rad(lat1)) *
  //     Math.cos(deg2rad(lat2)) *
  //     Math.sin(dLon / 2) *
  //     Math.sin(dLon / 2)
  // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  // var d = R * c // Distance in km

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
