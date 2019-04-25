'use strict'

const { knex, start } = require('../database')

describe('Test setup', () => {
  describe('Database', () => {
    it('successfully migrates database to latest version', async () => {
      await knex.migrate.latest()
    })

    it('successfully starts connection to db', async () => {
      await start()
    })
  })
})
