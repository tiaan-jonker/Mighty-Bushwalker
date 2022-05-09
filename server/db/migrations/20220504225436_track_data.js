exports.up = function (knex) {
  return knex.schema.createTable('track_data', (table) => {
    table.increments('id').primary()
    table.string('asset_id')
    table.string('name')
    table.integer('days')
    table.float('hours')
    table.float('length')
    table.boolean('return')
    table.string('difficulty')
    table.integer('points')
    table.float('lon')
    table.float('lat')
    table.string('line')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('track_data')
}
