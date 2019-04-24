'use strict'

const { start, knex } = require('../database')

describe('Test setup', () => {
  it('migrates database to latest version', async () => {
    await knex.migrate.latest()
  })

  it('connects to database', async () => {
    await start()
  })
})
