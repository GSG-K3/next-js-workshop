# pages

Next.js has a file-system based router built on the concept of pages, When a file is added to the pages directory it's automatically available as a route,
The files inside the pages directory can be used to define most common patterns.

pages is a directory but it's not like other directories

![pagess](https://user-images.githubusercontent.com/57558867/89291685-a6fe2000-d663-11ea-8549-3086c52c99a1.png)


## REACT-ROUTER-DOM VS NEXT.JS ROUTING 
in react we had use the react-router-dom to create pages and navigate between them 

![the react routing](https://user-images.githubusercontent.com/57558867/89289277-a19ed680-d65f-11ea-84d8-91ff7168343c.png)

in next.js it's different , //about it ..

![pages](https://user-images.githubusercontent.com/57558867/89280625-8d53dd00-d651-11ea-972f-ce9687afbaa8.png)

// some examples....

`pages/index` = `"/"`

`pages/about/index.js` = `"/about"`
### try it by yourself 
- clone this repo 
- cd in to the next-js-workshop then cd example then pages-example 
- run the command npm install
- run the command npm install next react react-dom
- Open package.json and add the following scripts:
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
- creat a folder with the name `pages`
- inside this folder add a file with the name `index.js`
- inside this file add this code 
```
function HomePage() {
  return <h1>Welcome to Next.js!</h1>
}

export default HomePage
```
- check the `localhost:3000`
- now create a folder with the name of `about.js`
- inside this folder add a function that returns any string and don't forget to export this function 
- now check your `localhost:3000/about` 

it's there :) 
