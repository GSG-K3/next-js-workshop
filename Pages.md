# pages
![pagess](https://user-images.githubusercontent.com/57558867/89291685-a6fe2000-d663-11ea-8549-3086c52c99a1.png)

pages is a directory but it's not like the other directories

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

### try it by yourself 
- clone this repo 
- run these commands :
```
cd next-js-workshop
cd example
cd pages example 
```
install dependencies 
```
npm install
```
install nextjs and react 
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
- you can now run the project by using the command `npm run dev` 
- inside the pages folder you can find the `index.js` file that is the default path and will include our home page 

```
pages/index.js = "/"
```
inside the `index.js file` add the following code :

```js
function HomePage() {
  return <h1>Welcome to Next.js!</h1>
}

export default HomePage
```
- check the `localhost:3000`
- now create a folder with the name of `about.js`
- inside this folder add a function that returns any string , and don't forget to export this function 
- now check your `localhost:3000/about` *and make sure that the file name matches the path name*

  it's there :fire: just as easy as that
  
  
  we will talk about *Index routes* and *Nested routes* later in this workshop , but this should give you a general idea of how next.js Routing works.
