
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('email').unique()
    table.string('password')
    table.boolean('disabled')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
