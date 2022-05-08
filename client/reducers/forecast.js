import { SET_FORECAST } from '../actions/forecast'

export default function forecast(state = [], action) {
  switch (action.type) {
    case SET_FORECAST:
      return action.forecast

    default:
      return state
  }
}
