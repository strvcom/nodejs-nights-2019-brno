'use strict'

const { knex } = require('../database')

const query = "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public';"

const ignoreTableNames = [
  'migrations',
  'migrations_lock',
]

module.exports = {
  resetDb: async () => {
    const tableNames = (await knex.raw(query))
      .rows
      .map(table => table.tablename)
      .filter(tableName => !ignoreTableNames.includes(tableName))
      .map(tableName => `"${tableName}"`)

    if (tableNames && tableNames.length) {
      // RESTART IDENTITY
      // -> Automatically restart sequences owned by columns of the truncated table(s).
      // CASCADE
      // -> Automatically truncate all tables that have foreign-key references to
      //    any of the named tables, or to any tables added to the group due to CASCADE.
      await knex.raw(`
        TRUNCATE ${tableNames.join()} 
        RESTART IDENTITY 
        CASCADE`)
    }
  },
}
