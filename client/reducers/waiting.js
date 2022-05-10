import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_PENDING,
} from '../actions/weather'
import {
  FETCH_MAP_TRACKS_SUCCESS,
  FETCH_MAP_TRACKS_PENDING,
} from '../actions/tracks'

export default function waiting(state = false, action) {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
    case FETCH_MAP_TRACKS_PENDING:
      return true

    case FETCH_WEATHER_SUCCESS:
    case FETCH_MAP_TRACKS_SUCCESS:
      return false

    default:
      return state
  }
}
