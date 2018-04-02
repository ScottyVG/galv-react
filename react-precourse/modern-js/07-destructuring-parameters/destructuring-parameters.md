# Destructuring Parameters

By the end of this lesson you will:

1. Use destructuring in function parameters

## Examples

Instead of this:

```js
function (properties) {
  return `Hello ${properties.firstName} ${properties.lastName}`
}
```

you can write:

```js
function ({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`
}
```

And you can put them on separate lines:

```js
function ({
  firstName,
  lastName
}) {
  return `Hello ${firstName} ${lastName}`
}
```

And it works with arrow functions:

```js
({
  firstName,
  lastName
}) => `Hello ${firstName} ${lastName}`
```