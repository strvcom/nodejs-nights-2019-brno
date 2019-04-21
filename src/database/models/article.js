'use strict'
/* eslint-disable global-require */

const { Model } = require('objection')

class Article extends Model {
  static get tableName() {
    return 'articles'
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.HasOneRelation,
        modelClass: require('./user'),
        join: {
          from: 'articles.author_id',
          to: 'users.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./tag'),
        join: {
          from: 'articles.id',
          through: {
            from: 'articles_tags.article_id',
            to: 'articles_tags.tag_id',
          },
          to: 'tags.id',
        },
      },
    }
  }
}

module.exports = Article
