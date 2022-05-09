import { FETCH_FORECAST_SUCCESS } from '../actions/forecast'

export default function forecast(state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST_SUCCESS:
      return action.forecast

    default:
      return state
  }
}
