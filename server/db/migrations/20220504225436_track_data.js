exports.up = function (knex) {
  return knex.schema.createTable('track_data', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('length')
    table.string('duration')
    table.string('route_type')
    table.string('location')
    table.string('location_coords')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('track_data')
}
