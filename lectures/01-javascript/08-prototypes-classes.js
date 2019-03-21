
// Classes are just syntax sugar for constructor functions

class Killer {
  kill() {
    console.log('Killing')
  }
}

class ShootingKiller extends Killer {
  shoot() {
    console.log('Shooting')
  }
}

console.log(Killer.__proto__ === Function.prototype)
console.log(Object.getOwnPropertyNames(Killer.prototype))

const john = new ShootingKiller()
john.shoot()

console.log(john.__proto__ === ShootingKiller.prototype)
console.log(john.__proto__.__proto__ === Killer.prototype)
console.log(john.__proto__.__proto__.__proto__ === Object.prototype)
