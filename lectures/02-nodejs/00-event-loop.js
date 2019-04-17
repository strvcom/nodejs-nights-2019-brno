const fs = require('fs')

setTimeout(() => {
  console.log('setTimeout 0')
}, 0)
//
setTimeout(() => {
  console.log('setTimeout 1000')
}, 1000)

function syncFn() {
  console.log('fn()')
}

setImmediate(() => {
    console.log('setImmediate')
})

process.nextTick(() => {
  console.log('nextTick')
})

syncFn()

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout')
  }, 0)
  setImmediate(() => {
    console.log('setImmediate')
  })
  process.nextTick(() => {
      console.log('nextTick')
  })
})
