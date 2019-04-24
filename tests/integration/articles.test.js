'use strict'

const request = require('supertest-koa-agent')
const app = require('../../src/app')
const { createUser } = require('../../src/test/fake/user')
const { resetDb } = require('../../src/test/reset-db')

describe('REST API: articles', () => {
  let userWithAccessToken

  beforeEach(resetDb)

  describe('POST /articles', async () => {
    userWithAccessToken = await createUser()

    await request(app)
      .post('/articles')
      .send({
        title: 'title',
        content: 'not rude',
        image: 'image',
        tags: [],
      })
      .set('Authorization', userWithAccessToken.accessToken)
      .expect(201)

    
  })
})
