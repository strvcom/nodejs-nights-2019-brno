'use strict'

const articleRepository = require('./../repositories/articles')
const { validateText } = require('./text-analysis')

function getAll() {
  return articleRepository.findAll()
}

function getById(input) {
  return articleRepository.findById(input.id)
}

async function create(authorId, input) {
  await validateText(input.content)

  return articleRepository.create(authorId, input)
}

module.exports = {
  getAll,
  getById,
  create,
}
