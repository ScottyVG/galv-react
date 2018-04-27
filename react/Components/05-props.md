# Props

By the time you complete this lesson, you will be able to:

- Pass data as `props` into React Components
- Render dynamic values in JSX
- Reference props using destructured function parameters

## Props

When you render a React Component, you can pass it data via `props`.

For example, imagine you have the following component:

```javascript
const Hello = (props) => (
  <span>Hello {props.name}</span>
);
```

You can render that component like this:

```jsx
<Hello name="Anne" /> // => produces <span>Hello Anne</span>

<Hello name="bert" /> // => produces <span>Hello Bert</span>
```

Pay attention to `Hello { props.name }` <-- anything inside curly braces (`{}`) gets evaluated as JavaScript.

So `Hello { props.name }!` is like writing the following JS:

```js
"Hello " + props.name + "!"
```

You can use any number of *props*, like so:

```javascript
// if you define a component like this...
const UserInformation = (props) => (
  <span>Hello {props.firstName} {props.lastName}. You live in {props.city}, {props.state}</span>
);

// and you render it like this...
<UserInformation firstName="Rowan" lastName="Wyatt" city="Oakland" state="California" />

// the resulting DOM will look like this...
<span>Hello Rowan Wyatt. You live in Oakland, California</span>
```

## Using Destructured Parameters

[Object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Pulling_fields_from_objects_passed_as_function_parameter) can be used for a cleaner syntax.

```javascript
// original component...
const UserInformation = (props) => (
  <span>Hello {props.firstName} {props.lastName}. You live in {props.city}, {props.state}</span>
);

// with destructuring...
const UserInformation = ({firstName, lastName, city, state}) => (
  <span>Hello {firstName} {lastName}. You live in {city}, {state}.</span>
);

// you'd call it the same way either way
<UserInformation firstName="Rowan" lastName="Wyatt" city="Oakland" state="California" />
```

> NOTE: if you need a refresher, see [our lesson on destructuring](/modern-javascript/destructuring-parameters.md)

Using destructured function parameters is a best practice in React apps, and you should do this by default.

The reason is that it gives others developers (and future you) more information about what data you need to pass to that component.  Otherwise developers have to scan the entire component to look for `props...`.

### Formatting

You'll often see destructured parameters listed on separate lines, like so:

```jsx
const UserInformation = ({
  firstName,
  lastName,
  city,
  state
}) => (
  <span>Hello {firstName} {lastName}. You live in {city}, {state}.</span>
);
```