require('dotenv').config()

// libraries
const express = require('express')
const mongoose = require('mongoose')

// --------------------------------------------------------------------
// ------------------------------ HEROKU ------------------------------
// Heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
// https://stackoverflow.com/questions/28706180/setting-the-port-for-node-js-server-on-heroku

// Serve static files from the React frontend app
// const path = require('path')
// app.use(express.static(path.join(__dirname, '../frontend/build')))
// --------------------------------------------------------------------
// --------------------------------------------------------------------

const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// start app-server-api

mongoose
  .set('strictQuery', true)
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`💚 Connected to DB and listening to port ${PORT}...`)
    })
  })
  .catch((err) => console.log(err))

// Routes
const assetsRoutes = require('./routers/assets')
const newsRoutes = require('./routers/news')
const userRoutes = require('./routers/user')

app.use('/api/assets', assetsRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/user', userRoutes)

// --------------------------------------------------------------------
// ------------------------------ HEROKU ------------------------------
// AFTER defining routes: Anything that doesn't match what's above, send back index.html;
// (the beginning slash ('/') in the string is important!)
// app.get('*', (req, res) => {
//   // eslint-disable-next-line n/no-path-concat
//   res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
// })
// --------------------------------------------------------------------
// --------------------------------------------------------------------
