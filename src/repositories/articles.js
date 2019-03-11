'use strict'

const R = require('ramda')
const errors = require('../utils/errors')
const articles = require('./../database/articles.json')

function findAll() {
  return articles
}

function findById(id) {
  const article = R.find(R.propEq('id', id), articles)
  if (!article) {
    throw new errors.NotFoundError()
  }
  return article
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
