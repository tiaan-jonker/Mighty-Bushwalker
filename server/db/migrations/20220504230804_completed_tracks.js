exports.up = function (knex) {
  return knex.schema.createTable('completed_tracks', (table) => {
    table.integer('user_id').references('users.id')
    table.integer('track_id').references('track_data.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('completed_tracks')
}
