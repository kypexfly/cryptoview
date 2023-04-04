import express from 'express'
import serverless from 'serverless-http'

const app = express()

// Routes
import { userRouter } from './routers/user';

app.use(express.json());

// Router
app.use('/.netlify/functions/user', userRouter); 

const handler = serverless(app)

export {
  handler
}