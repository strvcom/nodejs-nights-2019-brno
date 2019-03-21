'use strict'

// const person = new Object()

const computedFieldName = `name-${Math.random()}`
const person = {
  // Field
  firstName: 'John',
  last: 'Doe',
  // Nested object
  address: {
    street: 'Rohanske'
  },
  // Method
  sayHello() {
    console.log('Hello')
  },
  // Getter
  get something() {
    return 'something'
  },
}

Object.defineProperty(person, 'age', {
  value: 18,
  // Whether it is read-only
  writable: false,
  // Whether it can be deleted or the configuration changed
  configurable: true,
  // Whether it will be visible in for-in loop
  enumerable: true,
})

const keys = Object.keys(person)

// delete person.first
// Reflect.deleteProperty(person, 'first')

// const clone = Object.assign({}, person)
// const clone2 = {
//   ...person,
// }

for (const fieldName in person) {
  console.log(fieldName)
}

console.log(person.age)
