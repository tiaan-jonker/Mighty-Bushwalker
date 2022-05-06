exports.seed = function (knex) {
  const amountOfUsers = 2
  const amountOfTracks = 20

  const userTracks = []

  for (let i = 1; i < amountOfUsers + 1; i++) {
    for (let j = 1; j < amountOfTracks + 1; j++) {
      userTracks.push({
        user_id: i,
        track_id: j,
        completed: 0,
        saved: 0,
      })
    }
  }
  return knex('user_tracks')
    .del()
    .then(function () {
      return knex('user_tracks').insert(userTracks)
    })
}
