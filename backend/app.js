require("dotenv").config()

// libraries
const express = require("express");
const axios = require("axios");
const path = require('path')
const mongoose = require("mongoose")

// routes
const assetsRoutes = require("./routers/assets.js")
const newsRoutes = require("./routers/news.js")


// Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. 
// Heroku adds the port to the env, so you can pull it from there. 
// Switch your listen to this: .listen(process.env.PORT || 5000)
// That way it'll still listen to port 5000 when you test locally, but it will also work on Heroku. 

app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// start app-server-api

mongoose.connect(process.env.MONG_URI)
  .then(() => {
    app.listen((port = process.env.PORT || 4000), () => {
      console.log(`💚 Connected to database and listening to port ${port}...`);
    })
  })
  .catch(err => console.log(err));



// Assets route

app.use("/api/assets", assetsRoutes)
app.use("/api/news", newsRoutes)


// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})
