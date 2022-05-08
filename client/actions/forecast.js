import { fetchForecastWeatherData } from '../apis/weather'

export const SET_FORECAST = 'SET_FORECAST'

export function setForecast(forecast) {
  return {
    type: SET_FORECAST,
    forecast,
  }
}

export function fetchForecast() {
  return (dispatch) => {
    return fetchForecastWeatherData().then((forecast) => {
      dispatch(setForecast(forecast))
      return null
    })
  }
}
