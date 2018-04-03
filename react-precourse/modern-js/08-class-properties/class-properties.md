# Class Properties

By the end of this lesson you will:

1. Define classes and instance methods
1. Define static methods on classes
1. Define static properties on classes
1. Define constructors
1. Bind event handler methods in constructors

## A basic class

```js
class Car {

  constructor() {
    this.miles = 0
  }

  drive(miles) {
    this.miles += miles
  }

  report() {
    return `The car has driven ${this.miles} miles`
  }

}

const myCar = new Car()
myCar.drive(10)
myCar.drive(3)
console.log(myCar.report())

// => The car has driven 13 miles
```

## Binding Methods

Sometimes a method from a class get passed around as functions (such as when being used as event handlers), and it will not work as you would expect:

```js
class Clock {
  constructor() {
    this.seconds = 0
  }

  tick() {
    this.seconds++
    console.log(`this.seconds === ${this.seconds}`)
  }
}

const clock = new Clock()

setTimeout(clock.tick, 1000)

// this.seconds === NaN
```

In that case you need to bind the methods to the instance of the class, which you can do with arrow functions:


```js
class Clock {
  constructor() {
    this.seconds = 0
  }

  tick = () => {
    this.seconds++
    console.log(`this.seconds = ${this.seconds}`)
  }
}

const clock = new Clock()

setTimeout(clock.tick, 1000)

// this.seconds === 1
```

- [http://babeljs.io/docs/plugins/transform-class-properties/](http://babeljs.io/docs/plugins/transform-class-properties/)

## Async Methods

```js
const fetch = (path) => (
  new Promise((resolve, reject) => {
    setTimeout( () => resolve(`You fetched ${path}`), 200 )
  })
)

class API {

  async request(path) {
    const response = await fetch(path)
    return { response }
  }

  async getUsers() {
    return await this.request('/users')
  }

}

const api = new API()
api.getUsers().then(users => console.log(users))

// => { response: 'You fetched /users' }
```