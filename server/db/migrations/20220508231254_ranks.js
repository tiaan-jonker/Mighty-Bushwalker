exports.up = function (knex) {
  return knex.schema.createTable('ranks', (table) => {
    table.integer('xp')
    table.string('rank_name')
    table.integer('rank_number')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('ranks')
}
