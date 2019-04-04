'use strict'

const errors = require('../utils/errors')
const Article = require('../database/models/article')

function findAll() {
  return Article.query().eager('tags')
}

async function findById(id) {
  const article = await Article.query().where('id', id).eager('tags').first()

  if (!article) {
    throw new errors.NotFoundError
  }

  return article
}

function create(article) {
  return Article.query().insertGraphAndFetch(article).eager('tags')
}

module.exports = {
  findAll,
  findById,
  create,
}
