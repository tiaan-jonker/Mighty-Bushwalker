import { FETCH_MAP_TRACKS_SUCCESS } from '../actions/tracks'

function tracks(state = [], action) {
  switch (action.type) {
    case FETCH_MAP_TRACKS_SUCCESS:
      return action.tracks
    default:
      return state
  }
}

export default tracks
