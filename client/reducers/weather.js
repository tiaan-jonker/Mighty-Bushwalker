import { FETCH_WEATHER_SUCCESS } from '../actions/weather'

export default function weather(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return action.weather

    default:
      return state
  }
}
