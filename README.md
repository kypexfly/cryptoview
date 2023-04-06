# CryptoView
💫 Manage your favorite crypto assets, read news and more. 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

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

* Migrate to serverless backend (Netlify/Vercel functions)
* Add Typescript types to components
* Add features for signed in users
    * Favorite cryptocurrencies (?)
    * etc...
* ~~Migrate from Webpack to Vite~~
* ~~Migrate to react/tanstack query~~
* ~~Migrate to TailwindCSS~~
* ~~Reduce bundle size (plotly)~~

## 💻 Analyze bundle size

* Run `npx vite-bundle-visualizer`, then open `stats.html` in browser.
