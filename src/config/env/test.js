/* eslint-disable no-process-env */
'use strict'

module.exports = {
  logger: {
    stdout: true,
    minLevel: 'debug',
  },
  db: {
    uri: process.env.DB_URI || 'postgres://postgres:pgpassword@localhost:5433/nodejsnights-db-tests'
  },
}
