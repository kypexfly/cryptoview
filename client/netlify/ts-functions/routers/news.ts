import axios from 'axios'
import express from 'express'

const router = express.Router()
// const requireAuth = require('../middleware/requireAuth')

// router.use(requireAuth)

router.get('/', (req, res) => {
  const {page, currencies, regions, kind} = req.query 
  let api_url =
    'https://cryptopanic.com/api/v1/posts/?auth_token=c696e7b458c6e01b7230f59a5047455f7774adfc&public=true'
  page && (api_url = api_url.concat('&page=', page as string))
  currencies && (api_url = api_url.concat('&currencies=', currencies as string))
  regions && (api_url = api_url.concat('&regions=', regions as string))
  kind && (api_url = api_url.concat('&kind=', kind as string))

  const options = {
    method: 'GET',
    url: api_url,
  }

  console.log(options.url)

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

export { router as newsRouter }
