import request from 'superagent'

const baseUrl = '/api/v1'

export function getUser(id) {
  return request.get(`${baseUrl}/users/${id}`).then((res) => res.body)
}

export function getUserTracks(id) {
  return request.get(`${baseUrl}/users/${id}`).then((res) => res.body)
}

export function getUserBadges(id) {
  return request.get(`${baseUrl}/badges/${id}`).then((res) => res.body)
}
