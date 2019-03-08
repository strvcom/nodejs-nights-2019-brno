'use strict'

const { validate } = require('../validations')
const operations = require('../operations/users')
const schemas = require('../validations/schemas/users')

async function authenticate(ctx, next) {
  if (!ctx) {
    throw new Error('Context is missing in authenticateToken function!')
  }

  if (!ctx.header.authorization) {
    return null
  }

  const input = { jwtToken: ctx.header.authorization }
  validate(schemas.jwtToken, input)

  const data = await operations.verifyTokenPayload(input)
  if (ctx.response && data.loginTimeout) {
    ctx.set('Login-timeout', data.loginTimeout)
  }
  ctx.state.user = data.user
  return next()
}

module.exports = {
  authenticate,
}
