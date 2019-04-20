
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles_tags', table => {
    table.increments('id').primary()
    table.integer('article_id')
      .unsigned()
      .references('id')
      .inTable('articles')
    table
      .integer('tag_id')
      .unsigned()
      .references('id')
      .inTable('tags')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles_tags')
};
