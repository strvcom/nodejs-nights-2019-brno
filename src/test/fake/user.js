'use strict'

const R = require('ramda')
const { chance } = require('../chance')
const User = require('../../database/models/user')
const crypto = require('../../utils/crypto')

const createUserData = () => ({
  name: chance.name(),
  email: chance.email(),
  password: chance.string({ length: 12 }),
  disabled: false,
})

const createUser = userData => {
  const defaultData = createUserData()
  const mergedUserData = R.mergeDeepRight(defaultData, userData || {})
  return User.query().insertAndFetch(mergedUserData)
}

const createUserWithToken = async userData => {
  const user = await createUser(userData)
  const accessToken = await crypto.generateAccessToken(user.id)
  return {
    user,
    accessToken,
  }
}


module.exports = {
  createUser,
  createUserWithToken,
}
