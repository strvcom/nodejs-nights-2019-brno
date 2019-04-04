
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.integer('author_id')
      .unsigned()
      .references('id')
      .inTable('users')
    table.string('title')
    table.text('content')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
