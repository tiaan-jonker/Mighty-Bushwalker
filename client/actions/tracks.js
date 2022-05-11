import {
  updateStatus,
  updateTrackStatus,
} from '../components/track/trackHelper'
import { getUserTracks } from '../components/user/userHelper'
import { getCurrentDateString, checkForNewBadges } from './actionHelper'
import { updateUserStatus } from './user'

export const FETCH_MAP_TRACKS_PENDING = 'FETCH_MAP_TRACKS_PENDING'
export const FETCH_MAP_TRACKS_SUCCESS = 'FETCH_MAP_TRACKS_SUCCESS'
export const SET_TRACK_AS_COMPLETED = 'SET_TRACK_AS_COMPLETED'
export const SET_TRACK_AS_INCOMPLETE = 'SET_TRACK_AS_INCOMPLETE'
export const SET_TRACK_AS_SAVED = 'SET_TRACK_AS_SAVED'
export const SET_TRACK_AS_UNSAVED = 'SET_TRACK_AS_UNSAVED'
export const DISPLAY_ACHIEVEMENT_MODAL = 'DISPLAY_ACHIEVEMENT_MODAL'
export const CLOSE_ACHIEVEMENT_MODAL = 'CLOSE_ACHIEVEMENT_MODAL'
export const SET_TRACK_AS_HIKING = 'SET_TRACK_AS_HIKING'
export const SET_TRACK_AS_NOT_HIKING = 'SET_TRACK_AS_NOT_HIKING'

export function fetchMapAndTrackDataPending() {
  return {
    type: FETCH_MAP_TRACKS_PENDING,
  }
}

export function fetchMapAndTrackDataSuccess(tracks) {
  return {
    type: FETCH_MAP_TRACKS_SUCCESS,
    tracks,
  }
}

export function fetchMapAndTrackData() {
  return (dispatch) => {
    dispatch(fetchMapAndTrackDataPending())
    return getUserTracks().then((tracks) => {
      dispatch(fetchMapAndTrackDataSuccess(tracks))
      return null
    })
  }
}

export function setTrackAsCompleted(trackId, points) {
  return {
    type: SET_TRACK_AS_COMPLETED,
    points,
    trackId,
    lastCompletion: getCurrentDateString(),
  }
}
export function setTrackAsIncomplete(trackId) {
  return {
    type: SET_TRACK_AS_INCOMPLETE,
    trackId,
  }
}

export function setTrackAsSaved(trackId) {
  return {
    type: SET_TRACK_AS_SAVED,
    trackId,
  }
}

export function setTrackAsUnsaved(trackId) {
  return {
    type: SET_TRACK_AS_UNSAVED,
    trackId,
  }
}

export function setTrackAsHiking(trackId) {
  return {
    type: SET_TRACK_AS_HIKING,
    trackId,
  }
}
export function setTrackAsNotHiking(trackId) {
  return {
    type: SET_TRACK_AS_NOT_HIKING,
    trackId,
  }
}

export function displayAchievementModal(badges) {
  return {
    type: DISPLAY_ACHIEVEMENT_MODAL,
    badges,
  }
}

export function closeAchievementModal() {
  return {
    type: CLOSE_ACHIEVEMENT_MODAL,
  }
}

export function completeTrack(trackId, userId, points) {
  return (dispatch) => {
    dispatch(setTrackAsCompleted(trackId, points))
    return updateTrackStatus(trackId, userId, 'completed', points)
      .then(() => {
        return checkForNewBadges(userId)
      })
      .then((badges) => {
        badges.length > 0 ? dispatch(displayAchievementModal(badges)) : null
        return
      })
  }
}

export function saveTrack(trackId, userId) {
  return (dispatch) => {
    dispatch(setTrackAsSaved(trackId))
    return updateTrackStatus(trackId, userId, 'saved').then(() => {
      return null
    })
  }
}

export function hikeTrack(
  trackId,
  userId,
  { displayName, status, stayAnonymous }
) {
  return (dispatch) => {
    dispatch(setTrackAsHiking(trackId))
    return updateTrackStatus(trackId, userId, 'hiking')
      .then(() => {
        const displayNameData = stayAnonymous ? 'Anon' : displayName
        const statusData = stayAnonymous ? 'Mind your own business' : status
        dispatch(updateUserStatus(displayName, status))
        return updateStatus(userId, displayNameData, statusData)
      })
      .then(() => {
        return null
      })
  }
}

export function unhikeTrack(trackId, userId) {
  return (dispatch) => {
    dispatch(setTrackAsNotHiking(trackId))
    return updateTrackStatus(trackId, userId, 'hiked').then(() => {
      return null
    })
  }
}

export function closeModal() {
  return (dispatch) => {
    dispatch(closeAchievementModal())
    return null
  }
}
