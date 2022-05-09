import { fetchForecastWeatherData } from '../apis/weather'

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_PENDING = 'FETCH_FORECAST_PENDING'

export function fetchForecastPending() {
  return {
    type: FETCH_FORECAST_PENDING,
  }
}

export function fetchForecastSuccess(forecast) {
  return {
    type: FETCH_FORECAST_SUCCESS,
    forecast,
  }
}

export function fetchForecast() {
  return (dispatch) => {
    return fetchForecastWeatherData().then((forecast) => {
      dispatch(fetchForecastSuccess(forecast))
      return null
    })
  }
}
