'use strict'

const assert = require('chai').assert
const cryptoUtility = require('./crypto')

describe('Unit test - Crypto', () => {
  describe('#hashPassword()', () => {
    it('converts plaintext to hash', async () => {
      const hashed = await cryptoUtility.hashPassword('plaintext')

      assert.notEqual(hashed, 'plaintext')
    })
  })
})
