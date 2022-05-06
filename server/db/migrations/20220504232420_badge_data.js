exports.up = function (knex) {
  return knex.schema.createTable('badge_data', (table) => {
    table.integer('id')
    table.string('name')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('badge_data')
}
