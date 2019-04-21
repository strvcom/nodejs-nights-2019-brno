'use strict'

const path = require('path')
const config = require('./index')

module.exports = {
  client: 'pg',
  connection: config.db.uri,
  pool: {
    min: 1,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './../database/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './../database/seeds'),
  },
}
