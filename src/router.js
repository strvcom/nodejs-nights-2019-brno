'use strict'

const Router = require('koa-router')
const articles = require('./articles')
const { validate } = require('./utils/validator')

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello World'
})

router.get('/articles', ctx => {
  ctx.body = articles
})

router.get('/articles/:id', ctx => {
  const article = articles.find(item => item.id === Number(ctx.params.id))

  if (!article) {
    ctx.status = 404
    return
  }

  ctx.body = article
})

router.post('/articles', ctx => {
  const schema = {
    type: 'Object',
    required: true,
    properties: {
      id: {
        type: 'integer',
        required: true,
      },
      title: {
        type: 'string',
        required: true,
      },
      content: {
        type: 'string',
        required: true,
      },
      image: {
        type: 'string',
        format: 'url',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  }

  const validation = validate(ctx.request.body, schema)

  if (!validation.valid) {
    ctx.status = 400
    ctx.body = {
      errors: validation.errors,
    }

    return
  }

  articles.push(ctx.request.body)

  ctx.body = articles
})

module.exports = router.routes()
