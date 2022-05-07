import requestor from '../../consume'

export function getUser(id, consume = requestor) {
  return consume(`/users/${id}`)
    .then((res) => {
      const user = res.body
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

export function getCompletedUserTracks(id, consume = requestor) {
  return consume(`/tracks/completed/${id}`)
    .then((res) => {
      const completed = res.body
      return completed
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function getSavedUserTracks(id, consume = requestor) {
  return consume(`/tracks/saved/${id}`)
    .then((res) => {
      const completed = res.body
      return completed
    })
    .catch((error) => {
      console.log(error.message)
    })
}
