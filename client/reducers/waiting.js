import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_PENDING,
} from '../actions/weather'

export default function waiting(state = false, action) {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return true

    case FETCH_WEATHER_SUCCESS:
      return false

    default:
      return state
  }
}
