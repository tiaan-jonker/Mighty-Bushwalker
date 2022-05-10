import { FETCH_LON_SUCCESS } from '../actions/userLocation'

export default function userLon(state = [], action) {
  switch (action.type) {
    case FETCH_LON_SUCCESS:
      return action.lon

    default:
      return state
  }
}
