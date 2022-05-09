import {
  DISPLAY_ACHIEVEMENT_MODAL,
  CLOSE_ACHIEVEMENT_MODAL,
} from '../actions/tracks'

const initialState = {
  display: false,
  badges: [],
}

export default function userLat(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ACHIEVEMENT_MODAL:
      return { display: true, badges: action.badges }

    case CLOSE_ACHIEVEMENT_MODAL:
      return { display: false, badges: [] }

    default:
      return state
  }
}
