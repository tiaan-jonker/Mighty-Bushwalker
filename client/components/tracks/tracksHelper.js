import requestor from '../../consume'

export function getAllTracks(consume = requestor) {
  return consume(`/tracks`)
    .then((res) => {
      const tracks = res.body
      return tracks
    })
    .catch((err) => console.error(err))
}
