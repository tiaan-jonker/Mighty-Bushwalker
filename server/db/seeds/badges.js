exports.seed = function (knex) {
  return knex('badges')
    .del()
    .then(function () {
      return knex('badges').insert([
        {
          user_id: 1,
          badge_id: 1,
        },
      ])
    })
}