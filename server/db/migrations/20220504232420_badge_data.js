exports.up = function (knex) {
  return knex.schema.createTable('badge_data', (table) => {
    table.integer('id')
    table.string('name')
    table.string('image')
    table.string('criteria')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('badge_data')
}
