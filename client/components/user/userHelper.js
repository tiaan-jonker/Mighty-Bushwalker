import requestor from '../../consume'

// export function getUser(id) {
//   return request.get(`${baseUrl}/users/${id}`).then((res) => res.body)
// }

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
