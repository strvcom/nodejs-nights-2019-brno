
// Inspect prototype chain of an object

const parent = {
  name: 'Parent'
}

const child = Object.create(parent, {
  age: {
    value: 18,
    enumerable: true,
  },
})

for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key)
  }
}

console.log(child.toString())
console.log(child.age)
console.log(child.name)
console.log(child.unknown)

// Inspect prototype chain of an object

console.log(parent.__proto__ === Object.prototype)
console.log(Object.getOwnPropertyNames(Object.prototype))
console.log(Object.getPrototypeOf(child))
console.log(child.__proto__.__proto__ === Object.prototype)
console.log(Object.getPrototypeOf(child) === parent)

// Inspect prototype chain of a function

function test() {
}

console.log(Object.getPrototypeOf(test) === Function.prototype)
console.log(Object.getOwnPropertyNames(Function.prototype))
console.log(Function.__proto__.__proto__ === Object.prototype)
