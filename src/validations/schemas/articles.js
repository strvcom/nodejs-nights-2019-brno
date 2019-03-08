'use strict'

const articleId = {
  type: 'Object',
  required: true,
  properties: {
    id: { type: 'integer', required: true, min: 1, max: 100000 },
  },
}

const article = {
  type: 'Object',
  required: true,
  properties: {
    title: {
      type: 'string',
      required: true,
    },
    content: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      format: 'url',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
}

module.exports = {
  articleId,
  article,
}

