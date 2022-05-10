import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_PENDING,
} from '../actions/weather'
import waitingReducer from './waiting'

describe('waiting reducer', () => {
  it('returns true on "FETCH_WEATHER_PENDING"', () => {
    const action = {
      type: FETCH_WEATHER_PENDING,
    }
    const newState = waitingReducer(false, action)
    expect(newState).toBeTruthy()
  })

  it('returns false on "FETCH_WEATHER_SUCCESS"', () => {
    const action = {
      type: FETCH_WEATHER_SUCCESS,
    }
    const newState = waitingReducer(true, action)
    expect(newState).toBeFalsy()
  })
})
