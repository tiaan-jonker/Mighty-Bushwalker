exports.up = function (knex) {
  return knex.schema.createTable('badges', (table) => {
    table.integer('user_id').references('users.id')
    table.integer('badge_id').references('badge_data.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('badges')
}
