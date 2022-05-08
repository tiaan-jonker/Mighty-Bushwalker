import { combineReducers } from 'redux'

import user from './user'
import tracks from './tracks'
import waiting from './waiting'

export default combineReducers({
  user,
  tracks,
  waiting,
})
