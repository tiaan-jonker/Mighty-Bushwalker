import { SET_LAT_SUCCESS } from '../actions/userLocation'

export default function userLat(state = [], action) {
  switch (action.type) {
    case SET_LAT_SUCCESS:
      return action.lat

    default:
      return state
  }
}
