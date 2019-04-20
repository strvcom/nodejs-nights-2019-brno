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

function create(authorId, article) {
  return Article.query().upsertGraphAndFetch({
    ...article,
    author_id: authorId,
  }, {
    relate: true,
    insertMissing: true
  }).eager('tags')
}

module.exports = {
  findAll,
  findById,
  create,
}
