'use strict'

const chai = require('chai')
const crypto = require('./crypto')

const assert = chai.assert

describe('Utils', () => {
  describe('Crypto', () => {
    it('#comparePassword hashes plaintext', async () => {
      const hashed = await crypto.hashPassword('plaintext')

      assert.notEqual(hashed, 'plaintext')
    })
  })
})
