//Don't forget to restart your server after any changes on the code
//This is  a Custome Server for more, check that link https://nextjs.org/docs/advanced-features/custom-server

const express= require('express')
const next= require('next')

//check if this is in development or production mode
const dev= process.env.NODE_ENV!=='production';
const app= next({dev});

const handleRequest= app.getRequestHandler();

// app.prepare() is a sync,calling at each request.
app.prepare()
  .then(()=>{
    const server = express();

    server.get('/user/:name', (req, res)=>{
      app.render(req, res, '/user' ,{name:req.params.name})  
      })

    server.get('/github/:user', (req, res)=>{
        app.render(req, res, '/github' ,{user:req.params.user})
        })

    server.get('/github/:user/:repo', (req, res)=>{
        app.render(req, res,'/github/repo' ,{user:req.params.user, repo:req.params.repo})
          })

    server.get('*', (req, res)=>{
    return handleRequest(req, res);
    })

    server.listen(3000, err=>{
      if(err) throw err;
      console.log('Ready on http://localhost:3000 ');
    })

  })
  .catch(err=>{
    console.error(err.stack);
    //there's an Error
    process.exit(1)
})
