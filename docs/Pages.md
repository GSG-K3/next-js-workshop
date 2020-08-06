# pages

Next.js has a file-system based router built on the concept of pages. 
When a file is added to the pages directory it's automatically available as a route.
The files inside the pages directory can be used to define most common patterns.


## react-router-dom VS next.js Routing 
in react we used the react-router-dom to create pages and navigate between them 

![the react routing](https://user-images.githubusercontent.com/57558867/89289277-a19ed680-d65f-11ea-84d8-91ff7168343c.png)

in next.js it's different . a page is a react component exported from a file in the pages directory. Each page is associated with a route based on its file name.

**in `pages` every file is mapped to a path**


   ![pagessssssyes](https://user-images.githubusercontent.com/57558867/89456497-a2715e80-d76c-11ea-8f46-2c8bb72fa551.png)

   ![localohostbaby](https://user-images.githubusercontent.com/57558867/89462664-70fd9080-d776-11ea-95ef-64f84e8f5319.png)
   #### for example
   if we want to add a new page `contact-us` in react you need to 
   
   - make a component 
    
   - then add it in the app page inside the Router
    
   
   ```js
   <Route path = '/contact-us' component = {contact-us}/>
   ```
   but in next.js you only need to add a new file `contact-us` to your pages folder 
   
   ```
   pages/contact-us => "localhost:3000/contact-us"
   ```
   
 # Link
 in react we used react-route-dom Link to navigate between pages 
 ```js 
 <Link to="/">Home</Link>
 ```
 in next.js the link is used with a little difference 
 ```js
 <Link href="/"><a>Home</a></Link>
 ```
  **href** is the path inside `pages` directory. This is the only required prop.
 

# Create your first next.js app :sparkles:
- create a folder and open it with vs Code 

install package.json :
```
npm init -y
```
install next.js and react :
```
npm install next react react-dom
```
- Open package.json and add the following scripts:
```js 
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
- create a folder withthe name of `pages` 
- inside this folder create `index.js` file (this file represents our home page "/")
- inside the `index.js file` add the following code :

```js
function HomePage() {
  return <h1>Welcome to Next.js!</h1>
}

export default HomePage
```
- you can now run the project by using the command `npm run dev`  
- check the `localhost:3000`
- now create a file with the name of `about.js`
- inside this file add a function that returns any string , and don't forget to export this function 
- now check your `localhost:3000/about` *and make sure that the file name matches the path name*

  it's there :fire: just as easy as that
  
### for the Link let's add a button that returns us to home page 
#### in the about page :
- import Link 
```js
import Link from 'next/link'
```
- add a button element (and don't forget to add a parent element)
- add the Link element inside the button and link it to the home page 
```js
<button>
 <Link href = '/'>
   <a>
    go back
   </a>
 </Link>
</button>
```
- now you can click the button in the About page and go back to the home page :relieved:


  we will talk about **Index routes** and **Nested routes** later in this workshop and how Link them , but this should give you a general idea of how **next.js Routing** works.

  ps: you can also install next js by useing the command :
  ```
   npx create-next-app . 
  ```
  and it will download the necessary files 
