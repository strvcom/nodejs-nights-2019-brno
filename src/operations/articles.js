'use strict'

const articleRepository = require('./../repositories/articles')

function getAll() {
  return articleRepository.findAll()
}

function getById(input) {
  return articleRepository.findById(input.id)
}

function create(input) {
  return articleRepository.create(input)
}

module.exports = {
  getAll,
  getById,
  create,
}
