exports.seed = function (knex) {
  return knex('completed_tracks')
    .del()
    .then(function () {
      return knex('completed_tracks').insert([
        {
          user_id: 1,
          track_id: 1,
        },
      ])
    })
}
