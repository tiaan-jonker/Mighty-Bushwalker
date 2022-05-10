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
  trackId,
  userId,
  update, // use the type of update i.e saved / completed, this directs to the correct route
  points, // for route completion this is used, otherwise leave parameter empty
  consume = requestor
) {
  console.log('reached trachupdater')
  return consume(`/tracks/${update}`, 'patch', { userId, trackId, points })
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function checkIfDateIsNotToday(completionDate) {
  const current = new Date()
  const currentDateString = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`
  return currentDateString !== completionDate
}
