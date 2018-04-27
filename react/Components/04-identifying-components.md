# Identifying Components

By the end of this lesson you should be able to:

1. Take a wireframe or design and identify possible components
1. Identify list components

## Overview

React Apps start with an `<App />` component, which is generally pretty empty.  It normally contains just a few top-level components such as these:

![](/images/components/top-level-components.png)

Then once you have those, you go through the same process you might go through when building a CSS styleguide:

![](/images/components/sub-components.png)

So this component tree might look like:

- `<App>`
  - `<Header>`
    - `...`
    - `<Dropdown>`
    - `<Dropdown>`
    - `<Dropdown>`
    - `...`
  - `<Sidebar>`
    - `...`
    - `<ForwardButton>`
    - `<LinkList>`
      - `<Link>`
    - `...`
  - `<Content>`
    - `...`
    - `<Dropdown>`
    - `<ForwardButton>`
    - `...`

A few things to think about:

- Generally speaking when you have a list there are 2 components:
  - the outer component that contains items
  - the individual item components
- If it's an item in a styleguide, it's probably a component