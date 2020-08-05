# pages

pages is a directory but it's not like the other directories

![pagess](https://user-images.githubusercontent.com/57558867/89291685-a6fe2000-d663-11ea-8549-3086c52c99a1.png)

Next.js has a file-system based router built on the concept of pages, When a file is added to the pages directory it's automatically available as a route,
The files inside the pages directory can be used to define most common patterns.


## react-router-dom VS next.js Routing 
in react we used the react-router-dom to create pages and navigate between them 

![the react routing](https://user-images.githubusercontent.com/57558867/89289277-a19ed680-d65f-11ea-84d8-91ff7168343c.png)

in next.js it's different , //about it ..

in `pages` every file is mapped to a bath


![pagessssssyes](https://user-images.githubusercontent.com/57558867/89456497-a2715e80-d76c-11ea-8f46-2c8bb72fa551.png)

![localhostpages](https://user-images.githubusercontent.com/57558867/89456493-a1403180-d76c-11ea-8ed8-4f9d3ec62331.png)

// some examples....

`pages/index` = `"/"`

`pages/about/index.js` = `"/about"`
### try it by yourself 
- clone this repo 
- cd in to the next-js-workshop then cd example then pages-example 
- run the command npm install
- run the command 
```
npm install next react react-dom
```
- Open package.json and add the following scripts:
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
- you can now run the project by using the command `npm run dev` 
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
