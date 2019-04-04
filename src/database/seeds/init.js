const tagsData = require('./tags.json')
const usersData = require('./users.json')
const articlesData = require('./articles.json')
const articlesTagsData = require('./articles_tags.json')

exports.seed = function(knex, Promise) {
  return knex('articles_tags').del()
  .then(() => {
    return knex('tags').del();
  })
  .then(() => {
    return knex('articles').del();
  })
  .then(() => {
    return knex('users').del();
  })
  .then(() => {
    return knex('tags').insert(tagsData);
  })
  .then(() => {
    return knex('users').insert(usersData);
  })
  .then(() => {
    return knex('articles').insert(articlesData);
  })
  .then(() => {
    return knex('articles_tags').insert(articlesTagsData);
  })
};