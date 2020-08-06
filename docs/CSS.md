# Built-In CSS Support
Next.js allows you to import CSS files from a JavaScript file. 
*  ### Adding a Global Stylesheet
Applications can now directly import `.css` files as global stylesheets.
You can place the global CSS file anywhere and use any name. So let’s do the following:

* Create a top-level `styles` directory and create `global.css` inside.
* Add the following content. It resets some styles.

 ```css
 html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  background-color: rgb(121, 233, 241);  
}
.about-title{
  color: white;
  font-size: 50px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

```

To load global CSS files, create a file called `_app.js `under `pages` and add the following content:
 ```js 
 import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

This `MyApp`component is the top-level component which will be common across all the different pages. You can use this `MyApp` component to keep state when navigating between pages

 ![](https://i.imgur.com/ucO5bpe.png)


In development, expressing stylesheets this way allows your styles to be automatically updated on the page as you edit them. 
In production, all CSS files will be automatically concatenated into a single minified `.css(globals.css)` file. 

* ### Adding Component-Level CSS
Leveraging the **.module.css** convention, locally scoped CSS can be imported and used anywhere in your application.

CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same CSS class name in different files without worrying about collisions.
* Create a top-level directory called components.
* Inside, create a file called `Button.js` and `Button.modul.css` with the following content:

 ![](https://i.imgur.com/ZeJOby5.png)<br>
*  Add some styles for `Button`. To do so, we’ll use CSS Modules, which lets you import CSS files in a React component.
* Create  CSS classe for Butto that will be useful across multiple components.
create `components/Button.modul.css`
```css
.button {
    color: white;
    background-color: blueviolet;
  }
```



Then, create `components/Button.js`, importing and using the above CSS file:
```js
import styles from './Button.module.css'

export default function Button() {
  return (
    <button
      type="button"
      
      className={styles.button}
    >
     Button
    </button>
  )
}
```
Then, import `Button` in `about.js` and make it the outermost component.
```js
import Button from './components/Button.js'
function About() {
  return (
    <div>

      <h1 className='about-title'> About page </h1>
      <Button />
      
    </div>
  )
}
export default About
```
![](https://i.imgur.com/7mFys6n.png)


* ### CSS-in-JS
We bundle styled-jsx to provide support for isolated scoped CSS. The aim is to support "shadow CSS" similar to Web Components, which unfortunately do not support server-rendering and are JS-only.

The simplest one is inline styles:
```js
import Button from './components/Button.js'
function About() {
  return (
    <div>

      <h1 className='about-title'> About page </h1>
       <Button />
      <p style={{ color: 'white', fontSize: '30px' }}>CSS-in-JS</p>
      

    </div>
  )
}
export default About
```
![](https://i.imgur.com/bQh7uu0.png)

A component using **styled-jsx** looks like this:
```jsx
import Button from './components/Button.js'
function About() {
  return (
    <div>

      <h1 className='about-title'> About page </h1>
     
   
      <p className='jsxClass'>Hello world</p> 
      
      <style jsx>{`
        .jsxClass{
          color: red;
        }
       
        
      `}</style>

    </div>
  )
}
export default About
```
This is using a library called **styled-jsx**. It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected).
Next.js has built-in support for styled-jsx.

![](https://i.imgur.com/1lTY3Co.png)

