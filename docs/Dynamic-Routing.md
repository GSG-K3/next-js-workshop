
# Dynamic Routing

In pages section we have discussed the static route and how we can implement a predefined paths in our website directly. However, defining routes by using this sort of static routes is not always enough for complex applications. Here where Next.js give that feature of adding brackets to a file name like`[user].js` and simply a dynamic route will be generated.

![](https://media1.giphy.com/media/Ln2dAW9oycjgmTpjX9/giphy.gif?cid=ecf05e470180b01d9677c9e89f77dae4feb08e99f06c3d07&rid=giphy.gif)

##  First: Where do I start? 🤔

Let's start by folowing these steps. In your terminal write down these commands: :musical_keyboard: 
1. `git clone https://github.com/GSG-K3/next-js-workshop.git`
2. `cd next-js-workshop/example/dynamic-routing ` 
3. `npm i`
4. `npm run dev`

---
## Second: How to implement Routes?

1. Inside `pages` folder, create another `meals` folder that has `[meal].js` file. By that you got this dynamic route:  `/meals/:meal`.

    Any route like `/meals/pizza`, `/meals/mlukhya`, etc. will be matched by `pages/meals/[meal].js`. The matched path parameter will be sent as a `query` parameter to the page.

2. Import [useRouter](https://nextjs.org/docs/api-reference/next/router) hook at the top of your `[meal].js` file, so we can get the query ("parameters of the dynamic route").
3. Create a functional component as below.


```jsx
import { useRouter } from 'next/router';

const Meal = () => {
  const router = useRouter();
  const {meal}=router.query;
  
  return <h1>You ain't eating "{meal}" 😏</h1>;
};
export default Meal;
```

**PS**: you can create a class Component as well, but remember you need to use [withRouter](https://nextjs.org/docs/api-reference/next/router#router-object) instead of [useRouter](https://nextjs.org/docs/api-reference/next/router) or wrap your class in a function component. 

4. Now when you browse `http://localhost:3000/meals/pizza` you can change the meal name with whatever you want to see the effect.

   ![](https://media1.giphy.com/media/LM3SWzSrvkol8ipW3w/giphy.gif)


#### Dynamic route segments
Implementing dynamic routes can be applied on a file , folder or by [catch all](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes) as below :point_down:
- `pages/[meals].js → /:meal (/pizza)`
- `pages/[category]/meal.js → /:category/meal (/dessert/meal)`
- `pages/meals/[...all].js → /meals/* (/meals/id/title/ingredients`)

> **Note:** Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API.

---
## Third: How to create dynamic links?

When linking to a route with dynamic path segments you have to provide href and as to make sure the router knows which JavaScript file to load.

- `href` - The name of the `page` in the pages directory.
- `as` - The url that will be shown in the browser.

In our case we have a list of meals images on home page taken from an array with a fixed data in `assets/data`.

1. import `Link` from `next/link`.
2. Then, add a link around `img` with meal name as a url parameter like this:

``` jsx
   <Link href='/meals/[meal]' as={`/meals/${meal.name}`}>
            <img src={meal.imageUrl} />
    </Link>
```
At the end your code in `pages/index.js` should be similar to the following:

<details>
  <summary ><mark>  Click to view the code!</mark></summary>


```jsx
import data from '../assets/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {data.map((meal) => (
        <div key={meal.id}>
          <Link href='/meals/[meal]' as={`/meals/${meal.name}`}>
            <img src={meal.imageUrl} />
          </Link>
        </div>
      ))}
    </div>
  );
}


```
</details>

## Client-Side Navigations
`next/link` should be able to cover most of your routing needs, but you can also do client-side navigations without it using `next/router`.

Let's do a basic page navigation with useRouter:
1. add a button inside `[meal].js` file.
2. use `router.push` to back to home page whenever the user clicks on the button as follows:

```jsx
  <button onClick={() => router.push('/')}>
        Back To Home
      </button>
```

---
# API Routes 

API routes provide a straightforward solution to build your API with Next.js.

Any file inside the folder`pages/api` is mapped to `/api/*` and will be treated as an API endpoint instead of a page.
- For example, create an `api` folder inside pages, with a file named `hola.js`, then add the following on it:

```javascript
export default (req, res) => {
  res.statusCode = 200;
  res.send('<h1>HOLAAA!!!</h1>');
};

```
Now browse `http://localhost:3000/api/hola` <br>
**GREAT! Now you made your first API using Next.js**

![](https://media1.tenor.com/images/d56d60bcc0df5e2e9f0828a28577ed8e/tenor.gif?itemid=12345145)
- To handle different HTTP methods in an API route, you can use req.method in your request handler, like so:
```javascript
export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

### Dynamic API Routes
API routes support dynamic routes, and follow the same file naming rules used for pages.

For example, the API route `pages/api/meals/[meal].js` has the following code:
```javascript
export default (req, res) => {
  const {
    query: { meal },
  } = req

  res.end(`Meal Name: ${meal}`)
}
```
Now, a request to `/api/meals/crepe` will respond with the text: `Meal Name: crepe`.

---
# Bonus

As a bonus you can provide each meal with a gif & quote as you see here :sunglasses: 


![](https://media0.giphy.com/media/d8cjCw4bXGOKCQlJrg/giphy.gif)

 **Hint**: you can use the data inserted in `/assets/data.js` file
<details>
  <summary><mark>Click to view Solution!</mark></summary>

```jsx
import { useRouter } from 'next/router';
import data from '../assets/data';

const Meal = () => {
  const router = useRouter();
  // check if the meal from Query exists in data file
  const result = data.filter((meal) => router.query.meal === meal.name);
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {result.length ? (
        <div>
          <img src={result[0].gif} />
          <h2>"{result[0].quote}"</h2>
        </div>
      ) : (
        <div>
          <h2>{router.query.meal}</h2>
          <img src='https://media1.tenor.com/images/923340f1c1385970b953ad2a88be83fb/tenor.gif?itemid=9361819' />
        </div>
      )}

      <button onClick={() => router.push('/')}>
        Back To Home
      </button>
    </div>
  );
};

export default Meal;

```
</details>
