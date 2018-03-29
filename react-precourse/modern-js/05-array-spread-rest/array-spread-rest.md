# Array Spread / Rest

By the end of this lesson you will:

1. Combine arrays using the spread operator
1. Convert between the spread operator and `concat`
1. Create new arrays with added, changed and removed elements without mutating the source

## Add an item (push)

```js
const items = [1, 2, 3]

const clone = [
  ...items,
  4,
]

// items => [1,2,3]
// clone => [1,2,3,4]
```

## Add to the beginning (unshift)

```js
const items = [1, 2, 3]

const clone = [
  4,
  ...items,
]

// items => [1,2,3]
// clone => [4,1,2,3]
```

## Change an item

```js
const items = [1, 2, 3]

const index = items.indexOf(2)

const clone = [
  ...items.slice(0, index),
  77,
  ...items.slice(index + 1),
]

// items => [1,2,3]
// clone => [1,77,3]
```

## Remove an item (anywhere)

```js
const items = [1, 2, 3]

const clone = items.filter(item => item !== 2)

// items => [1,2,3]
// clone => [1,3]
```

## Remove the last item (pop)

```js
const items = [1, 2, 3]

const clone = items.slice(0, -1)

// items => [1,2,3]
// clone => [1,2]
```

## Remove the first item (shift)

```js
const items = [1, 2, 3]

const clone = items.slice(1)

// items => [1,2,3]
// clone => [2,3]
```