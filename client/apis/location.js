export function getUserLat() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude
    return lat
  })
}

export function getUserLon() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lon = position.coords.longitude
    return lon
  })
}
