const { Model } = require('objection')
const Knex = require('knex')
const config = require('../config/knexfile')

const start = async () => {
  const knex = Knex(config)

  try {
    // We test if connection was successful
    await knex.raw("SELECT 'test connection';")

    Model.knex(knex)
  } catch (err) {
    throw err
  }
}

module.exports.start = start