# 🎥 Babel

Objectives
- Compile and Run JavaScript Files
- Install and Configure Babel Plugins

<iframe src="https://player.vimeo.com/video/229205187?byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

[Babel](https://babeljs.io/) is a JavaScript compiler that has plugins that allow your to write next-generation JavaScript, and have it work on all browsers today.

## Babel CLI

In order to quickly and easily run code examples in Node on your local machine, you can install Babel CLI:

[https://babeljs.io/docs/usage/cli/](https://babeljs.io/docs/usage/cli/)

## Walkthrough

### Step 1: Create Project

Create a new directory, cd into it and create a package.json file

```
mkdir playground
cd !$
yarn init -y
```

### Step 2: babel-cli

```
yarn add babel-cli
```

### Step 3: install plugins

```
yarn add babel-plugin-transform-class-properties
yarn add babel-plugin-transform-es2015-modules-commonjs
yarn add babel-plugin-transform-object-rest-spread
yarn add babel-plugin-transform-async-to-generator
```

### Step 4: .babelrc

Create a file named `.babelrc` and add the following lines:

```json
{
  "plugins": [
    "babel-plugin-transform-object-rest-spread",
    "babel-plugin-transform-class-properties",
    "babel-plugin-transform-es2015-modules-commonjs",
    "babel-plugin-transform-async-to-generator",
  ]
}
```

### Step 5: babel-node

Run files with `babel-node` like so:

```
yarn run babel-node -s -- path-to-file.js
```