import { FETCH_WEATHER_ICON } from '../actions/weather'

export default function weatherIcon(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER_ICON:
      return action.description

    default:
      return state
  }
}
