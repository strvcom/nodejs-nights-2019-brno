/* eslint-disable no-process-env */
'use strict'

module.exports = {
  logger: {
    stdout: true,
    minLevel: 'debug',
  },
  db: {
    uri: process.env.DB_URI
      || 'postgresql://postgres:testpasswd@localhost:5433/nodejsnights-db-tests',
  },
}
