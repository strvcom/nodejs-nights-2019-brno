'use strict'

const language = require('@google-cloud/language')

const client = new language.LanguageServiceClient()

const analyzeSentiment = ({ document }) => client.analyzeSentiment({ document })

module.exports = {
  analyzeSentiment,
}
