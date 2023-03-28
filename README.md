# CryptoView
💫 Manage your favorite crypto assets, read news and more. 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Screenshot](./client/public/app_screenshot.png)

## 📋 Description 

CryptoView is a project that uses [CoinCap](https://docs.coincap.io/) and [CryptoPanic](https://cryptopanic.com/developers/api/) APIs. It provides some tools that everyone can use.

* News feed from CryptoPanic
* Cryptocurrency Converter Calculator
* List of top cryptocurrencies

## 🔩 Tools
* React.js
* Express.js
* Plotly.js
* Turnstone
* React Router DOM
* ESLint + Prettier

## 🪄 Test
* Run app locally
```
git clone https://github.com/kypexfly/cryptoviewapp.git
cd cryptoviewapp
npm install
npm run app
```
* Previously, add `.env` file to `./server` following the `.env.example` file.
```
PORT=4000
MONG_URI=""
JWTSECRET=""
```

Live demo: Not available until migration to serverless.

## 🧪 Possible improvements / To Do

* Migrate to serverless backend
* Migrate to react/tanstack query
* Reduce bundle size (plotly)
* Add features for signed in users
    * Favorite cryptocurrencies (?)
    * ...

## 💻 Analyze bundle size

* Run `npm build` & `npx webpack-bundle-analyzer ./build/bundle-stats.json`
OR
* Run `npm run analyze`
