'use strict'


describe('Demo', () => {
  before(() => {
    console.log('before')
  })

  after(() => {
    console.log('after')
  })


  beforeEach(() => {
    console.log('beforeEach')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  it('works in test 1', () => {
    console.log('Hello from test 1')
  })

  it('works in test 2', () => {
    console.log('Hello from test 2')
  })
})
