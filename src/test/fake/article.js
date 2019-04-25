'use strict'

const { chance } = require('../chance')

const createArticleData = () => ({
  title: chance.name(),
  content: chance.paragraph(),
  image: chance.url(),
  tags: [],
})

module.exports = {
  createArticleData,
}
