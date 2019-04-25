'use strict'

const config = require('../config')
const errors = require('../utils/errors')
const languageService = require('../services/language-service')

async function validateText(text) {
  if (!config.naturalLanguageValidation) {
    return
  }

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  }

  const results = await languageService
    .analyzeSentiment({ document })

  const sentiment = results[0].documentSentiment

  if (sentiment.score <= -0.25) {
    throw new errors.ValidationError('Article is rude')
  }
}

module.exports = {
  validateText,
}

