# Object Spread / Rest

Objectives
- Copy Objects with Object.assign
- Copy Objects with Spread and Rest
- Remove Properties with Destructuring / Rest

By the end of this lesson you will:

1. Create copies of objects using the spread operator
1. Translate between the spread operator and `Object.assign`
1. Create new objects with added, changed and deleted properties without mutating the source object

## Object.assign Refresher

Recall that Object.assign copies properties from one object to another.

```js
const user = { username: 'angelica' }
const admin = { admin: true }

Object.assign(user, admin)

console.log(user)

// => { username: 'angelica', admin: true }
```

`Object.assign` can be used to create shallow copies of objects, like so:

```js
const user = { username: 'angelica' }

const adminUser = Object.assign({}, user, { admin: true })

console.log(user)
// => { username: 'angelica' }

console.log(adminUser)
// => { username: 'angelica', admin: true }
```

The pattern is:

- Call `Object.assign`
- Pass it an empty object
- Pass it the object you want to copy
- Optionally pass it any other objects whose properties you'd like to assign to your new object

This patterns is so common that JavaScript now has a way to do it with Object literal syntax and the spread operator (`...`):

```js
const user = { username: 'angelica' }

const adminUser = {
  ...user,
  admin: true
}
```

You can use this in various ways to make add, delete and change properties on new copies of objects.

## Add Properties

```js
const clock = {
  hours: 13,
  minutes: 40,
}

const clone = {
  ...clock,
  seconds: 46,
}

// clock => { hours: 13, minutes: 40 }
// clone => { hours: 13, minutes: 40, seconds: 46 }
```

## Change Properties

```js
const clock = {
  hours: 13,
  minutes: 40,
  seconds: 23,
}

const clone = {
  ...clock,
  minutes: 12,
}

// clock => { hours: 13, minutes: 40, seconds: 23 }
// clone => { hours: 13, minutes: 12, seconds: 23 }
```

## Delete Properties

```js
const clock = {
  hours: 13,
  minutes: 40,
  seconds: 23,
}

const { seconds, ...clone } = clock

// clock => { hours: 13, minutes: 40, seconds: 23 }
// clone => { hours: 13, minutes: 12 }
```