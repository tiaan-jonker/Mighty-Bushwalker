exports.up = function (knex) {
  return knex.schema.createTable('track_data', (table) => {
    table.increments('id').primary()
    table.string('assetId')
    table.string('name')
    table.integer('days')
    table.float('hours')
    table.float('length')
    table.boolean('return')
    table.string('difficulty')
    table.float('lon')
    table.float('lat')
    table.string('line')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('track_data')
}
