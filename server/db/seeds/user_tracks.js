const { generateUserTrackDataSeed } = require('../dbHelpers')

exports.seed = function (knex) {
  return knex('user_tracks')
    .del()
    .then(function () {
      return knex('user_tracks').insert(generateUserTrackDataSeed())
    })
}
