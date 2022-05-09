import { getUserLat, getUserLon } from '../apis/location'

export const FETCH_LON_SUCCESS = 'FETCH_LON_SUCCESS'
export const FETCH_LAT_SUCCESS = 'FETCH_LAT_SUCCESS'

export function fetchLonSuccess(lon) {
  return {
    type: FETCH_LON_SUCCESS,
    lon,
  }
}

export function fetchLatSuccess(weather) {
  return {
    type: FETCH_LAT_SUCCESS,
    weather,
  }
}

export function fetchUserLon() {
  return (dispatch) => {
    return getUserLon().then((lon) => {
      dispatch(fetchLonSuccess(lon))
    })
  }
}
