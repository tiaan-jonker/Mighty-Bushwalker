import request from 'superagent'
import requestor from '../../consume'

const baseUrl = '/api/v1'

export function getUser(id) {
  return request.get(`${baseUrl}/users/${id}`).then((res) => res.body)
}

export function getUserBadges(id) {
  return request.get(`${baseUrl}/badges/${id}`).then((res) => res.body)
}

export function getTrack(id, consume = requestor) {
  return consume(`/tracks/${id}`)
    .then((res) => {
      const track = res.body
      return track
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function updateTrackStatus(
  userId,
  trackId,
  update,
  consume = requestor
) {
  return consume(`/tracks/${update}`, 'patch', { userId, trackId })
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error.message)
    })
}
