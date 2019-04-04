
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments('id').primary()
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};
