'use strict'

const { validate } = require('./../validations')
const operations = require('./../operations/articles')
const schemas = require('./../validations/schemas/articles')

async function getAll(ctx) {
  ctx.body = await operations.getAll()
}

async function getById(ctx) {
  const input = {
    id: parseInt(ctx.params.id),
  }
  validate(schemas.articleId, input)
  ctx.body = await operations.getById(input)
}

async function create(ctx) {
  validate(schemas.article, ctx.request.body)
  ctx.body = await operations.create(ctx.request.body)
}

module.exports = {
  getAll,
  getById,
  create,
}
