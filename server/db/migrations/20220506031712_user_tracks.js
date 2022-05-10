exports.up = function (knex) {
  return knex.schema.createTable('user_tracks', (table) => {
    table.integer('user_id').references('users.id')
    table.integer('track_id').references('track_data.id')
    table.integer('completed')
    table.integer('saved')
    table.integer('hiking')
    table.date('last_completion')
    table.integer('total_completions')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_tracks')
}
