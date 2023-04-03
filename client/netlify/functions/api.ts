import express from 'express'
import serverless from 'serverless-http'

const app = express();

// Routes
import { assetsRouter } from './routers/assets'
import { newsRouter } from './routers/news';
import { userRouter } from './routers/user';

app.use(express.json());

app.get('/.netlify/functions/api', (req, res) => {
  res.status(200).json({
    message: 'Welcome to CryptoView!'
  })
})

// Router
app.use('/.netlify/functions/api/assets', assetsRouter);  
app.use('/.netlify/functions/api/news', newsRouter); 
app.use('/.netlify/functions/api/user', userRouter); 

const handler = serverless(app)

export {
  app,
  handler
}