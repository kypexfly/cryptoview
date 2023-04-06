import axios from 'axios'
import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  axios
    .get('https://api.coincap.io/v2/assets')
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/get', (req: Request, res: Response) => {
  const url = `https://api.coincap.io/v2/assets?search=${req.query.search || ''}&limit=${
    req.query.limit || ''
  }`

  axios
    .get(url)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/:id', (req: Request, res: Response) => {
  const url = `https://api.coincap.io/v2/assets/${req.params.id}`

  axios
    .get(url)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/rates/:asset', (req: Request, res: Response) => {
  const url = `https://api.coincap.io/v2/rates/${req.params.asset}`

  // console.log('✨ PriceUSD for converter: ', options.url)

  axios
    .get(url)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      res.status(400).json(error)
    })
})

router.get('/:asset/history', (req: Request, res: Response) => {
  const t7dago = {
    start: new Date(new Date().getTime() - 1 * (24 * 60 * 60 * 1000)).valueOf(),
    end: new Date().getTime().valueOf(),
  }

  const url = `https://api.coincap.io/v2/assets/${req.params.asset}/history?interval=m5&start=${t7dago.start}&end=${t7dago.end}`

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

export { router as assetsRouter }
