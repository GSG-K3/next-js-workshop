
# Pre-rendering 
is the most important feature in next.js , This means that Next.js generates HTML for each page in server side , instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO. Each generated HTML is associated with minimal JavaScript code necessary for that page.

The main difference between React and  Next.js is where the render happens

    - in React the render happens on browser
    - in Next Js the render happens on Server 


# React Rendering Vs Next.js Rendering 


![no-pre-rendering](https://user-images.githubusercontent.com/7718220/89286863-98ac0600-d65b-11ea-82b2-44fc229c26bb.png)

![pre-rendering](https://user-images.githubusercontent.com/7718220/89287169-1f60e300-d65c-11ea-8996-03d3f6d3856e.png)


# Rre-rendering Types

Next.js has two type  of pre-rendering: 

    - Static Generation 
    - Server-side Rendering.
    
The difference is in when it generates the HTML for a page.

- Static Generation is the pre-rendering method that generates the HTML at build time, and reused Html page  on each request.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.
 
 ![static-generation](https://user-images.githubusercontent.com/7718220/89292420-06106480-d665-11ea-96f0-f65b460fc4ef.png)


![server-side-rendering](https://user-images.githubusercontent.com/7718220/89292476-16284400-d665-11ea-9de4-9654c2ce7c57.png)


# When to Use Static Generation VS Server-side Rendering

Next js recommend using Static Generation (with and without data , we will take about it later)  which makes it much faster than having a server render the page on every request.
#### Static Generation used with : 
    - Static html pages
    - the pages that contains a data that doesn't change frequently

#### You can use Static Generation for many types of pages, including:

    - Marketing pages
    - Blog posts
    - Help and documentation
    
On the other hand, Server-side Rendering is a good idea if your a page shows frequently updated data , and the page content changes on every request,
In that case, you can use Server-Side Rendering. It will be slower, but the pre-rendered page will always be up-to-date.

# Working with Data Fetching

Data Ferching related with Pre-rendering , we talked about Pre-rendering (Static Generation and Server-side Rendering) , and we’ll talk in depths about data fetching strategies for each case .
We’ll talk about the three unique Next.js functions you can use to fetch data for pre-rendering:

 - #### `getStaticProps` : using with Static Generation to Fetch data at build time.
 - #### `getStaticPaths` : using with Static Generation in dynamic routes to define a list of paths that have to be rendered to HTML at build time.
 - #### `getServerSideProps` : using with Server-side Rendering to  Fetch data on each request.

 ###### we will take in depths about this unique Next.js functions

# Static Generation types

![static-generation-without-data](https://user-images.githubusercontent.com/7718220/89324424-ee9aa100-d68f-11ea-9aab-764b93d3783f.png)


![static-generation-with-data](https://user-images.githubusercontent.com/7718220/89324469-0114da80-d690-11ea-8aaf-570ee06937b0.png)

# `getStaticProps` Function

#### `getStaticProps` tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

to run `getStaticProps` we must export an `async function` called `getStaticProps` from a page, the data return from functions will uaing as props by Next.js in pre-render of page at build time.

In the following example we will export `async function getStaticProps` to fetch all post from [json place holder](https://jsonplaceholder.typicode.com/posts).
the Function take `context` parameter and return `posts` as props to using in component to build post List 
           
```js
import axios from 'axios';
import Link from 'next/link';

// get all post from json place holder Api to build Post Link List
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context) {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
  // will be passed to the page component as props
    props: { posts: res.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 second
    revalidate: 10, // In seconds
  };
}

// React Hooks Component take props and build List of Post 
const Index = (props) => {

  // check if props contains posts object    
  if (!props.posts) {
    return ( <h1>There is no any Post</h1> );
  }
  
  return (
      <div>
        <h1>Welcome Blog Posts Next Js App </h1>
        // Build List of Posts 
        <ul>
          {props.posts.map((post, index) => {
            return (
              <li key={index}>
               <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Index;

```

by using `revalidate`  the list of blog posts will be re-validated once per 10 second; if you add a new blog post it will be available almost immediately, without having to re-build your app or make a new deployment.



# When should I use `getStaticProps` ?

- The data required to render the page is available at build time ahead of a user’s request.
- The data comes from extarnal sources external sources Like API.
- The data can be publicly cached (not user-specific).
- The page must be pre-rendered (for SEO) and be very fast.




# Statically Generates both HTML and JSON
#### When a page with `getStaticProps` is pre-rendered at build time, in addition to the HTML file, Next.js generates a JSON file holding the result of running getStaticProps.

This JSON file will be used in client-side routing through `next/link` or `next/router` to page . When you navigate to a page that’s pre-rendered using getStaticProps, Next.js fetches this JSON file (pre-computed at build time) and uses it as the props for the page component. This means that client-side page transitions will not call getStaticProps as only the exported JSON is used.



# `getStaticPaths` (Static Generation)

`getStaticPaths` using with page has dynamic routes, this function is define a list of all paths that have to be rendered to HTML at build time.

to run `getStaticPaths` we must  export an `async function` called `getStaticPaths` from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by `getStaticPaths`.

```js

export async function getStaticPaths() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts');
  
  //to build path of all post
  const paths = res.data.map((post) => {
    return `/posts/${post.id}`;
  });
  // return all paths to build html file 
  return { paths, fallback: true };
}

```

#### The `getStaticPaths` function  must return The `paths` and `fallback` key 

# paths
The paths key determines which paths will be pre-rendered

For example, suppose that you have a page that uses dynamic routes named `/posts/[id].js`. If you export `getStaticPaths` from this page and return the following for paths:

```js
// note thant the proporty in params same name with 
return {
  paths: [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    ....
  ],
}
```

Then Next.js will statically generate `posts/1` ,  `posts/2` , `posts/3` , `posts/4` , ... at build time using the page component in `pages/posts/[id].js`.

 **note that the Name of property id  in params same name with dynamic routes named**
> [id].js -->  { params: { id: '1' } }

> [pid].js --> { params: { pid: '1' } }
