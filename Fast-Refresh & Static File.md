# Fast Refresh

Fast Refresh is a new hot reloading experience that gives you instantaneous feedback on edits made to your React components. It is now **enabled by default** for all projects on Next.js 9.4 or newer.

With Next.js Fast Refresh enabled, most edits should be visible within a second, **without losing component state**.


## How It Works :memo: 

* If you edit a file that only exports React component(s), Fast Refresh will update the code only for that file, and re-render your component, **without losing component state**. You can edit anything in that file, including styles, rendering logic, event handlers, or effects.

* If you edit a file with exports that aren't React components, Fast Refresh will re-run both that file, and the other files importing it. So if **index.js** and **Modal.js** import **index.css**, editing **index.css** will update both components.

### Syntax Errors :keyboard: 
* If you make a syntax error during development, you can fix it and save the file again. The error will disappear automatically, so you won't need to reload the app. **You will not lose component state**.



![](https://i.imgur.com/C40E51F.gif)

 > :arrow_upper_right: An editing session featuring compiler and runtime errors (with quick recovery), and edits that preserve state.

---

# Static File Serving

Next.js can serve static files, like images, under a folder called **public** in the root directory. Files inside **public** can then be referenced by your code starting from the base URL `(' / ')`.

For example, if you add an image to `public/my-image.png`, the following code will access the image: :memo:

```js
function MyImage() {
  return <img src="/my-image.png" alt="my image" />
}

export default MyImage
```

This folder is also useful for `'robots.txt'`, Google Site Verification, and any other static files (including `'.html'`) !

 
> Note: Don't name the public directory anything else. The name cannot be changed and is the only directory used to serve static assets.

> Note: Be sure to not have a static file with the same name as a file in the `'pages/'` directory, as this will result in an error.






