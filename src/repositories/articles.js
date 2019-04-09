'use strict'

const R = require('ramda')
const articles = require('./../database/articles.json')

function findAll() {
  return articles
}

function findById(id) {
  return R.find(R.propEq('id', id), articles)
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
