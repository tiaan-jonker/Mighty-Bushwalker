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
