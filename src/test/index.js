'use strict'

const { chance } = require('./chance')
const fakeUserMethods = require('./fake/user')
const fakeArticleMethods = require('./fake/article')

module.exports = {
  chance,
  ...fakeUserMethods,
  ...fakeArticleMethods,
}
