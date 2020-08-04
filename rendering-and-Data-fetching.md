
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
