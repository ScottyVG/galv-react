# Shopping Cart: Header / Footer

## Getting Started

To get started, generate a `create-react-app` app with the following command in the directory of your choice: `create-react-app shopping-cart`

Once it is done installing all of the dependencies, `cd` into `shopping-cart` and then run `npm start`.

If the app is installed correctly, you should see this:

![](/images/shopping-cart/cra-initial.png)

## Removing preset styles in `create-react-app`

Before moving on any further, you will need to go in and remove all of the code from `/src/index.css` and `/src/App.css` in order to make sure that there aren't any pre-existing styles affecting the app.

## Adding Bootstrap 4 for styling

It is 100% an option to just add a link tag in the `/public/index.html` file containing the CDN for Bootstrap 4, but it's not considered a "standard practice". The more generally-accepted way to do it is to install the npm package and import the CSS file into `/src/index.js`.

To install the npm package for Bootstrap, run `npm install --save bootstrap`. That will install the most recent version of Bootstrap, which at the time of writing this is v4. After that is done installing, navigate to `/src/index.js` and add the following code to the bottom of the list of imports: `import 'bootstrap/dist/css/bootstrap.min.css'`

Now you are ready to add things to the page!

## Create a Header component

Create a _functional_ component named `CartHeader` that renders the following HTML:

```html
<nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Shopping Cart</a>
</nav>
```

NOTE: In JSX, you need to use `className` instead of `class` 😉

Your screen should now look like this:

![](/images/shopping-cart/cart-header-only.png)

## Create a Footer

Create a component named `CartFooter` that renders the following HTML:

```html
<nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">&copy; 2018</a>
</nav>
```

Your screen should now look like this:

![](/images/shopping-cart/cart-header-footer.png)

## Create a CartItems component

Create a Component named `CartItems` that renders the following HTML:

```html
<div className="container">
  <h1>Items</h1>
</div>
```

Your screen should now look like this:

![](/images/shopping-cart/cart-header-footer-items.png)

## Push it to Github

From here, all you need to do is create a repository called `shopping-cart` and push it to Github!

### !challenge
* type: project
* id: 8f9a05ed-73e2-4fdf-9450-13978af649b9
* title: ShoppingCart Template

##### !question
### Submit your work

Enter the URL to your components directory:
##### !end-question

##### !placeholder
https://github.com/<your-name>/shopping-cart
##### !end-placeholder

##### !explanation
🎊 Yay! 🎉
##### !end-explanation
### !end-challenge

### !instructor
Solution is TBA
### !end-instructor