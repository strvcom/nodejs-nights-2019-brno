'use strict'

const { Model } = require('objection')

class Tag extends Model {
  static get tableName() {
    return 'tags'
  }
}

module.exports = Tag
