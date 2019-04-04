'use strict'

const errors = require('../utils/errors')
const User = require('../database/models/user')

function findAll() {
  return User.query()
}

async function findById(id) {
  const user = await User.query().where('id', id).first()

  if (!user) {
    throw new errors.NotFoundError()
  }

  return user
}

async function findByEmail(email) {
  const user = await User.query().where('email', email).first()

  if (!user) {
    throw new errors.NotFoundError()
  }

  return user
}

function create(user) {
  user.id = users.length + 1
  users.push(user)
  return user
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
}
