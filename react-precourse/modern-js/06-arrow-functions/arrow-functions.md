# Arrow Functions

By the end of this lesson you will:

1. Translate between arrow functions to standard functions
1. Write arrow functions in multiple ways:
  - with or without parenthesis around parameters
  - with or without curly braces around function bodies
  - with or without parenthesis around function bodies
1. Write async arrow functions
1. Assign arrow functions to variables or object properties

## Named functions

These are the standard, ES5-style functions:

```js
function canDrive (person) {
  if (person.age > 15) {
    return true
  } else {
    return false
  }
}
```

## Arrow function

This is the most verbose arrow function syntax:

```js
const canDrive = (person) => {
  if (person.age > 15) {
    return true
  } else {
    return false
  }
}
```

If there's only one argument, you can omit the parenthesis around the parameters:

```js
const canDrive = person => {
  if (person.age > 15) {
    return true
  } else {
    return false
  }
}
```

If the only statement is a return statement, you can change the curly braces to parenthesis, and most of the time you don't even need those:

```js
const canDrive = person => {
  return person.age > 15
}

// becomes...
const canDrive = person => (
  person.age > 15
)

// or...
const canDrive = person =>
  person.age > 15

// and even works with multiline statements like this ternary...
const canDrive = person =>
  person.age > 15 ?
    true :
    false
```

And it can also work on the same line:

```js
const canDrive = person => person.age > 15
```

## Higher Order Functions

You can declare higher-order functions with terse arrow syntax as well:

```js
function combine(a) {
  return function (b) {
    return [a, b]
  }
}
```

becomes...

```js
const combine = a => b => [a, b]
```

And you could call either one with:

```js
combine(1)(2)
// => [1, 2]
```

## Async arrow functions

```js
async function getData(value) {
  // do stuff
}
```

```js
const getData = async value => {
  // do stuff
}
```

## Common uses

```js
items.map(item => console.log(`The item is ${item}`))

items.map( (item, i) => console.log(`The item is ${item} and the index is ${i}`))
```