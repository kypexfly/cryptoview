"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
exports.app = app;
// Routes
const assets_1 = require("./routers/assets");
const news_1 = require("./routers/news");
const user_1 = require("./routers/user");
app.use(express_1.default.json());
app.get('/.netlify/functions/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to CryptoView!'
    });
});
// Router
app.use('/.netlify/functions/api/assets', assets_1.assetsRouter);
app.use('/.netlify/functions/api/news', news_1.newsRouter);
app.use('/.netlify/functions/api/user', user_1.userRouter);
const handler = (0, serverless_http_1.default)(app);
exports.handler = handler;
//# sourceMappingURL=api.js.map