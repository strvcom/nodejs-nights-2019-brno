'use strict'

const { Model } = require('objection')
const knexLib = require('knex')
const config = require('../config/knexfile')

const knex = knexLib(config)
const start = async () => {
  try {
    // We test if connection was successful
    await knex.raw("SELECT 'test connection';")

    Model.knex(knex)
  } catch (err) {
    throw err
  }
}

module.exports = {
  start,
  knex,
}
