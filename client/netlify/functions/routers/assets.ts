import axios from 'axios'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.coincap.io/v2/assets',
  }

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/get', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.coincap.io/v2/assets?search=${req.query.search || ''}&limit=${
      req.query.limit || ''
    }`,
  }

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/:id', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.coincap.io/v2/assets/${req.params.id}`,
  }

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/rates/:asset', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.coincap.io/v2/rates/${req.params.asset}`,
  }

  // console.log('✨ PriceUSD for converter: ', options.url)

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/:asset/history', (req, res) => {
  const t7dago = {
    start: new Date(new Date().getTime() - 1 * (24 * 60 * 60 * 1000)).valueOf(),
    end: new Date().getTime().valueOf(),
  }

  const options = {
    method: 'GET',
    url: `https://api.coincap.io/v2/assets/${req.params.asset}/history?interval=m5&start=${t7dago.start}&end=${t7dago.end}`,
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

export { router as assetsRouter }
