## What is Next.js?

[Next.js](https://nextjs.org/) is a special JavaScript framework to build a modern React applications with a server-side rendering. based on that main feature it makes our life much easier by reducing page loading time and by having page-based routing system, not to mention its positive impact on SEO ranking. 


### Why Next.js?

An importenat question raises here, even after what we mentioned above why should I even care about Next.js? isn't the oridanrly React app is enough for me?

:bulb: Brilliant question! 

![gif size](https://media0.giphy.com/media/3orieQia6GvN7j0o2k/giphy.gif)

It would be absolutely enough for learning purposes, however, when it comes to real life complex projects and big companies; using Next.js will definitly make a difference. Here is how you can tell🤙

- **Next.js is built around six core principles:**

  1. **Zero Configuration**: 
by setting up your next.js app you'll gain an **automatic code splitting**, **file-system based** routing and **hot code reloading**. Say bye for these sad long loading days!

     <img src="https://media1.giphy.com/media/l4FGs5dbisGxm5b9e/giphy.gif" width="250" height="200">
     
      -But wait a minute! what do you mean exactly by these weird terminologies? 🤨<br/>
      =Here we GOO :fire:
        + **Automatic code splitting:**
is were your browser load/([lazy-load](https://reactjs.org/docs/code-splitting.html)) only what the user needs right now. no need for dozens of folders to be loaded here.
        + **File-system based routing**:
        This is one of the exceptional cool features that next.js provide to have an Auto Routing. For the purpose of simplicity :point_right:  you would love working with on this in depth on [Routing section](./Pages.md). just keep it in mind till then.
        + **Hot code reloading**:
           As simple as it is :cyclone:, whenever you make changes at files, next.js will automatically apply the changes in your browser.  for more see [HMR](https://webpack.js.org/concepts/hot-module-replacement/)  
        
      
  2. **Automatic server rendering:**
 Next.js generates HTML for each page in server-side , instead of having it all done by client-side JavaScript, each generated HTML is associated with minimal JavaScript code necessary for that page, we will explain more about this topic in [data fetching and pre-rendering](./rendering-and-Data-fetching.md) section.
 
  3. **SEO Compatibility**
SEO (Search Engine Optimization) gives a good ranking on Google and offer visibility to your website. Next.js allows you to utilise server-side rendering, which makes Search engines discover your React websites much easier.


  4. **Optimized Prefetching**
  Next.js automatically prefetches the code for the linked page in the background. By the time you click on the link, the code of the destination page will already be loaded in the background, and the page transition will be near-instant!

  5. **Easy Deployment**
 You can deploy your next.js app quickly like a pro  :sunglasses: using any hosting platform like (Vercel, Heroku, etc...)
 
  6. **CSS-in-JS**: 
 Next.js offers built-in support for styling using CSS-in-JS.(writing CSS in your React compoenent directly). The benefits of this feature are that it is component friendly, intuitive, automated and scalable.
