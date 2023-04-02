"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsRouter = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.assetsRouter = router;
router.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.coincap.io/v2/assets',
    };
    axios_1.default
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
router.get('/get', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.coincap.io/v2/assets?search=${req.query.search || ''}&limit=${req.query.limit || ''}`,
    };
    axios_1.default
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
router.get('/:id', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.coincap.io/v2/assets/${req.params.id}`,
    };
    axios_1.default
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
router.get('/rates/:asset', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.coincap.io/v2/rates/${req.params.asset}`,
    };
    // console.log('✨ PriceUSD for converter: ', options.url)
    axios_1.default
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
router.get('/:asset/history', (req, res) => {
    const t7dago = {
        start: new Date(new Date().getTime() - 1 * (24 * 60 * 60 * 1000)).valueOf(),
        end: new Date().getTime().valueOf(),
    };
    const options = {
        method: 'GET',
        url: `https://api.coincap.io/v2/assets/${req.params.asset}/history?interval=m5&start=${t7dago.start}&end=${t7dago.end}`,
    };
    console.log(options.url);
    axios_1.default
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
//# sourceMappingURL=assets.js.map