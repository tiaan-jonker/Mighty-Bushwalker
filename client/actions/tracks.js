import { getAllTracks } from '../components/tracks/tracksHelper'

export const FETCH_MAP_TRACKS_PENDING = 'FETCH_MAP_TRACKS_PENDING'
export const FETCH_MAP_TRACKS_SUCCESS = 'FETCH_MAP_TRACKS_SUCCESS'

export function fetchMapAndTrackDataPending() {
  return {
    type: FETCH_MAP_TRACKS_PENDING,
  }
}

export function fetchMapAndTrackDataSuccess(tracks) {
  return {
    type: FETCH_MAP_TRACKS_SUCCESS,
    tracks,
  }
}

export function fetchMapAndProductData() {
  return (dispatch) => {
    dispatch(fetchMapAndTrackDataPending())
    return getAllTracks().then((tracks) => {
      dispatch(fetchMapAndTrackDataSuccess(tracks))
      return null
    })
  }
}
