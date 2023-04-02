"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsRouter = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.newsRouter = router;
// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)
router.get('/', (req, res) => {
    const { page, currencies, regions, kind } = req.query;
    let api_url = 'https://cryptopanic.com/api/v1/posts/?auth_token=c696e7b458c6e01b7230f59a5047455f7774adfc&public=true';
    page && (api_url = api_url.concat('&page=', page));
    currencies && (api_url = api_url.concat('&currencies=', currencies));
    regions && (api_url = api_url.concat('&regions=', regions));
    kind && (api_url = api_url.concat('&kind=', kind));
    const options = {
        method: 'GET',
        url: api_url,
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
//# sourceMappingURL=news.js.map