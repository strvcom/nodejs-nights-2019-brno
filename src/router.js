'use strict'

const Router = require('koa-router')
const articles = require('./articles')

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
  articles.push(ctx.request.body)

  ctx.body = articles
})

router.delete('/articles/:id', ctx => {
  const articleIndex = articles.findIndex(item => item.id === Number(ctx.params.id))

  if (articleIndex === -1) {
    ctx.status = 404
    return
  }

  articles.splice(articleIndex, 1)

  ctx.body = articles
})


module.exports = router.routes()
