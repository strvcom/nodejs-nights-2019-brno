'use strict'

const request = require('supertest-koa-agent')
const { assert } = require('chai')
const sinon = require('sinon')
const app = require('../../src/app')
const { resetDb } = require('../../src/test/reset-db')
const testUtils = require('../../src/test')
const languageAnalysisService = require('../../src/services/language-service')

const sandbox = sinon.createSandbox()

describe('REST API: articles', () => {
  beforeEach(resetDb)

  describe('POST /articles', () => {
    let userToken

    beforeEach(async () => {
      const fakeUserWithTokeToken = await testUtils.createUserWithToken()
      userToken = fakeUserWithTokeToken.accessToken

      sandbox.stub(languageAnalysisService, 'analyzeSentiment')
        .returns(Promise.resolve(0))
    })

    it('responds with new created article if content is not rude', async () => {
      const articleData = testUtils.createArticleData()

      const res = await request(app)
        .post('/articles')
        .set('Authorization', `${userToken}`)
        .send(articleData)
        .expect(201)

      assert.deepNestedInclude(res.body, articleData)
    })

    it('responds with 403 when user doesn\'t provide valid access token', async () => {
      const articleData = testUtils.createArticleData()

      await request(app)
        .post('/articles')
        .set('Authorization', `${userToken.substr(1)}`)
        .send(articleData)
        .expect(401)
    })

    afterEach(() => sandbox.restore())
  })
})
