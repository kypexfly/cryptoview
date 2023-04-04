import axios from 'axios'
import express, {Request, Response } from 'express'

const router = express.Router()
// const requireAuth = require('../middleware/requireAuth')

// router.use(requireAuth)

router.get('/', (req:Request, res:Response) => {
  const {page, currencies, regions, kind} = req.query 
  let url =
    'https://cryptopanic.com/api/v1/posts/?auth_token=c696e7b458c6e01b7230f59a5047455f7774adfc&public=true'
  page && (url = url.concat('&page=', page as string))
  currencies && (url = url.concat('&currencies=', currencies as string))
  regions && (url = url.concat('&regions=', regions as string))
  kind && (url = url.concat('&kind=', kind as string))

  // console.log(url)

  axios
    .get(url)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

export { router as newsRouter }
