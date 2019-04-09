'use strict'

const errors = require('../utils/errors')
const articleRepository = require('./../repositories/articles')

function getAll() {
  return articleRepository.findAll()
}

function getById(input) {
  const article = articleRepository.findById(input.id)
  if (!article) {
    throw new errors.NotFoundError()
  }
  return article
}

function create(input) {
  return articleRepository.create(input)
}

module.exports = {
  getAll,
  getById,
  create,
}
