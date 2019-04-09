'use strict'

const errors = require('../utils/errors')
const articleRepository = require('./../repositories/articles')
const { validateText } = require('./text-analysis')

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

async function create(input) {
  await validateText(input.content)

  return articleRepository.create(input)
}

module.exports = {
  getAll,
  getById,
  create,
}
