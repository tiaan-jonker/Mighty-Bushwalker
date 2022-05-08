import { fetchWeatherData } from '../apis/weather'

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING'
export const FETCH_WEATHER_ICON = 'FETCH_WEATHER_ICON'

export function fetchWeatherPending() {
  return {
    type: FETCH_WEATHER_PENDING,
  }
}

export function fetchWeatherSuccess(weather) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    weather,
  }
}

export function fetchWeatherIcon(description) {
  return {
    type: FETCH_WEATHER_ICON,
    description,
  }
}

export function fetchWeather() {
  return (dispatch) => {
    dispatch(fetchWeatherPending())
    return fetchWeatherData().then((weather) => {
      dispatch(fetchWeatherSuccess(weather))
      dispatch(fetchWeatherIcon(weather.description))
      return null
    })
  }
}
