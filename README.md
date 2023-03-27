# CryptoView
CryptoView is a project that uses [CoinCap](https://docs.coincap.io/) and [CryptoPanic](https://cryptopanic.com/developers/api/) APIs. It provides some tools that everyone can use:

* News feed from CryptoPanic
* Cryptocurrency Converter Calculator
* List of top cryptocurrencies

## Analyze bundle size

* Run `npx webpack-bundle-analyzer ./build/bundle-stats.json`
OR
* Run `npm run analyze`

## To do

* Migrate to serverless backend
* Migrate to react/tanstack query
* Reduce bundle size (plotly)
* Add features for signed in users
    * Favorite cryptocurrencies (?)
    * ...


## Ideas to improve this project
* ~~https://stackoverflow.com/questions/36504768/deploy-the-backend-and-frontend-on-the-same-heroku-app-dyno~~ Heroku is not free anymore
* https://stackoverflow.com/questions/42761068/paginate-javascript-array (should be done in backend)