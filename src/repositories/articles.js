'use strict'

const R = require('ramda')
const errors = require('../utils/errors')
const articles = require('./../database/articles.json')

function findAll() {
  return articles
}

function findById(id) {
  const dog = R.find(R.propEq('id', id), articles)
  if (!dog) {
    throw new errors.NotFoundError()
  }
  return dog
}

function create(article) {
  article.id = articles.length + 1
  articles.push(article)
  return article
}

module.exports = {
  findAll,
  findById,
  create,
}
