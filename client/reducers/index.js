import { combineReducers } from 'redux'

import user from './user'
import tracks from './tracks'
import weather from './weather'
import weatherIcon from './weatherIcon'
import forecast from './forecast'
import waiting from './waiting'

export default combineReducers({
  user,
  tracks,
  weather,
  forecast,
  weatherIcon,
  waiting,
})
