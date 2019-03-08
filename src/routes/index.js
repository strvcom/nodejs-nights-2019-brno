'use strict'

const Router = require('koa-router')
const { handleErrors, handleNotFound } = require('../middleware/errors')
const { authenticate } = require('../middleware/authentication')
const articles = require('../controllers/articles')
const users = require('../controllers/users')

const router = new Router()
router.use(handleErrors)

/* PUBLIC ROUTES */

router.post('/session/user', users.login)
router.post('/users', users.signUp)

/* PRIVATE ROUTES */

router.get('/articles', authenticate, articles.getAll)
router.get('/articles/:id', authenticate, articles.getById)
router.post('/articles', authenticate, articles.create)

router.use(handleNotFound)

module.exports = router.routes()
