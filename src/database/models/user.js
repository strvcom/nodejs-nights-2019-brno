const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      articles: {
        relation: Model.HasManyRelation,
        modelClass: require('./article'),
        join: {
          from: 'users.id',
          to: 'articles.author_id'
        }
      },
    };
  }
}

module.exports = User