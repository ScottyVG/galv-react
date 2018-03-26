# Object Literals

## Shorthand Properties

Instead of this:

```js
const id = 2
const name = 'eliza'

const person = {
  id: id,
  name: name,
}
```

You can now write:

```js
const id = 2
const name = 'eliza'

const person = {
  id,
  name,
}
```

## Computed Property Names

Instead of this:

```js
function (id, name) {
  const result = {}
  result[id] = { id, name }
  return result
}
```

You can use computed properties in Object literals, like so:

```js
function (id, name) {
  return {
    [id]: { id, name }
  }
}
```

Notice the `[id]` bracket syntax in the object literal.