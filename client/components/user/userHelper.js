import requestor from '../../consume'

export function getUser(id, consume = requestor) {
  return consume(`/users/${id}`)
    .then((res) => {
      const user = res.body[0]
      return user
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function getUserBadges(id, consume = requestor) {
  return consume(`/badges/${id}`)
    .then((res) => {
      const badges = res.body
      return badges
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function getUserTracks(id, consume = requestor) {
  return consume(`/tracks/userTracks/${id}`)
    .then((res) => {
      const completed = res.body
      return completed
    })
    .catch((error) => {
      console.log(error.message)
    })
}
