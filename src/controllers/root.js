'use strict'

const pkg = require('../../package.json')
const buildInfo = require('../../build-info.json')

function root(ctx) {
  ctx.body = {
    version: pkg.version,
    name: pkg.name,
    commitHash: buildInfo.commitHash,
  }
}

module.exports = {
  root,
}
