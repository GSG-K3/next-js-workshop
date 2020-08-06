# Environment Variables

Next.js comes with built-in support for environment variables, which allows you to do the following:

* Use `.env.local` to load environment variables
* Expose environment variables to the browser


## Loading Environment Variables

Next.js has built-in support for loading environment variables from `.env.local` into `process.env`.

### Setting env vars locally
When developing locally, Next.js will load environment variables from a file called `.env.local` at the root of our project.

#### An example 
Create ` .env.local` and fill it with this content:

```js
GREETING="Hello GazaSkyGeeks"
```
This creates an environment variable called `GREETING` which contains the string `"Hello GazaSkyGeeks"`. Note that you need to restart Next.js to apply the changes.

We can now add
```js
console.log('Greeting',process.env.GREETING)
```
to any component and open that in the browser. I added it to `pages/index.js`.

![](https://i.imgur.com/Qncy0v2.jpg)

> The environment variable is not yet defined on the client, so undefined gets logged instead.
> 
You’ll notice that the browser will log `undefined`. This happens since the environment variable is only defined on our server so far.

If you check the server log, you should a **“Loaded env from .env.local”** message. This shows you that your `.env.local` file was indeed loaded successfully. You should also see `"Hello GazaSkyGeeks"`. This gets logged when the page gets rendered on the server. So far, so good.

![](https://i.imgur.com/u8fsBBw.png)

Any environment variables defined this way will be available to the server and API routes when developing locally.


When developing locally, Next.js will load environment variables from a file called **.env.local** at the root of our project. Any environment variables defined this way will be available to the server and API routes when developing locally.


---

 ## Exposing Environment Variables to the Browser
 By default all environment variables loaded through `.env.local` are only available in the Node.js environment, meaning they won't be exposed to the browser.


 If we want to use those variables at the client-side, then we need to prefix the variable with **`NEXT_PUBLIC_`**. This will allow us to use those variables anywhere in our code.
 
 #### An example 


in our `.env.local` file add `NEXT_PUBLIC_`

```js
NEXT_PUBLIC_GREETING="Hello GazaSkyGeeks"
```
This creates an environment variable called `GREETING` which contains the string `"Hello GazaSkyGeeks"`.  Allowing you to use it anywhere in your code. The value will be inlined into JavaScript sent to the browser because of the `NEXT_PUBLIC_` prefix.

We can now add 
```js
console.log('Greeting',process.env.NEXT_PUBLIC_GREETING)
```

to any component and open that in the browser. I added it to `pages/index.js`.

![](https://i.imgur.com/tnwT3bu.png)
> The environment variable is exposed to the browser.
 

## Default Environment Variables
In general only one `.env.local` file is needed. However, sometimes you might want to add some defaults for the 
**`development (next dev)`** or **`production (next start)`** environment.

Next.js allows you to set defaults in `.env` (all environments), `.env.development` (development environment), and `.env.production` (production environment).

`.env.local` always overrides the defaults set.

> Note: `.env`, `.env.development`, and `.env.production` files should be included in your repository as they define defaults. `.env*.local` should be added to `.gitignore`, as those files are intended to be ignored. `.env.local` is where secrets can be stored.
> 



