const axios = require('axios')
const express = require('express')
const router = express.Router()
// const requireAuth = require('../middleware/requireAuth')

// router.use(requireAuth)

router.get('/', (req, res) => {
  let api_url =
    'https://cryptopanic.com/api/v1/posts/?auth_token=c696e7b458c6e01b7230f59a5047455f7774adfc&public=true'
  req.query.page && (api_url = api_url.concat('&page=', req.query.page))
  req.query.currencies && (api_url = api_url.concat('&currencies=', req.query.currencies))
  req.query.regions && (api_url = api_url.concat('&regions=', req.query.regions))
  req.query.kind && (api_url = api_url.concat('&kind=', req.query.kind))

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

module.exports = router
