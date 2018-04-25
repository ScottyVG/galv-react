# React Components

By the time you complete this section, you will be able to:

- Create React components
- Reference other React components from within a component
- Use terse arrow function syntax to define components

## Create React Components

A React Component is a **function** that returns a **single React Element**.

The following defines a React Component called `Greeting`.

> NOTE: React Component names should be capitalized

```javascript
import React from 'react';

const Greeting = () => {
  return (
    <h1>Hello!</h1>
  )
}

export default Greeting
```

Here's a component called `Sidebar`:

```javascript
import React from 'react';

const Sidebar = () => {
  return (
    <ul>
      <li>
        <a href="http://www.theonion.com">The Onion</a>
      </li>
    </ul>
  )
}

export default Sidebar
```

Components cannot return `null` or Objects or Arrays.  They must return a single React element.

## Reference React Elements

React Components can themselves be used as _React Elements_ by wrapping them in self-closing HTML tags.

In order to use a React Component as a React Element, simply wrap it in a self-closing HTML tag. You can then use this tag anywhere you would otherwise use a React Element.

For example, to use the `Greeting` component from above as a React Element in order to render it:

```javascript
// in Greeting.js

import React from 'react';

const Greeting = () => {
  return (
    <h1>Hello!</h1>
  )
}

export default Greeting

// in some other component

import React from 'react';
import Greeting from './Greeting'

const Wrapper = () => {
  return (
    <div>
      <Greeting />
    </div>
  )
}

export default Wrapper
```

## Using Terse Syntax

If your Components have exactly one statement, which is a `return` statement, you can omit the `return` keyword:

```jsx
const Greeting = () => (
  <h1>Hello!</h1>
)

const Sidebar = () => (
  <ul>
    <li>
      <a href="http://www.theonion.com">The Onion</a>
    </li>
  </ul>
)

const App = () => (
  <div>
    <Greeting />
    <Sidebar />
  </div>
)
```

JavaScript has several ways of defining functions, and all of these are correct and equivalent:

```jsx
const Greeting = function () {
  return <h1>Hello!</h1>
}

const Greeting = () => <h1>Hello!</h1>

const Greeting = () => (<h1>Hello!</h1>)

const Greeting = () => (
  <h1>Hello!</h1>
)

const Greeting = () => {
  return <h1>Hello!</h1>
}
```

## Recipe

To create a React component:

1. Import React
1. Define a function that returns a single React element
1. Export the function with `export default`

> Generally speaking you should have 1 component per file.

To include a React component:

1. Import React
1. Define a function that returns a React element
1. Within that React element reference the other component by wrapping it in self-closing HTML tags

See [React Docs - Component API](https://facebook.github.io/react/docs/react-component.html) for more info.