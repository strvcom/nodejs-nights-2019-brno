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
  const article = {
    title: ctx.request.body.title,
    content: ctx.request.body.content,
    image: ctx.request.body.image,
    tags: ctx.request.body.tags,
  }
  validate(schemas.article, article)
  ctx.body = await operations.create(ctx.state.user.id, ctx.request.body)
  ctx.status = 201
}

module.exports = {
  getAll,
  getById,
  create,
}
