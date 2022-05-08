import { combineReducers } from 'redux'

import user from './user'
import tracks from './tracks'
import weather from './weather'
import waiting from './waiting'

export default combineReducers({
  user,
  tracks,
  weather,
  waiting,
})
