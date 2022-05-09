import { SET_USER, CLEAR_USER } from '../actions/user'
import { SET_TRACK_AS_COMPLETED } from '../actions/tracks'

const emptyUser = {
  id: null,
  name: '',
  email: '',
}

export default function user(state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser

    case SET_TRACK_AS_COMPLETED:
      return { ...state, xp: state.xp + action.points }

    default:
      return state
  }
}
