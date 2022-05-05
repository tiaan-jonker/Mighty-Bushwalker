exports.seed = function (knex) {
  return knex('saved_tracks')
    .del()
    .then(function () {
      return knex('saved_tracks').insert([
        {
          user_id: 1,
          track_id: 1,
        },
      ])
    })
}