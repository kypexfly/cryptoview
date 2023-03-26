import { formatCurrency } from '@coingecko/cryptoformat'
import { Link } from 'react-router-dom'
import usePriceFeed from '../hooks/usePriceFeed'

const CryptoPriceFeed = () => {
  const { assets } = usePriceFeed()
  return (<>
    <div id="pricefeed">
      {assets && assets.map((asset) => (
        <Link to={`/assets/${asset.id}`} className="pricebox" data-tip={asset.name} key={asset.id}>
          <img
            className="asset-icon"
            loading="lazy"
            src={`https://assets.coincap.io/assets/icons/${String(asset.symbol).toLowerCase()}@2x.png`}
            alt={asset.symbol}
          />
          <div className='price-data'>
            <p className='price-title'>{asset.symbol} <small className={asset.changePercent24Hr > 0 ? 'price-green' : 'red'}>({`${Number(asset.changePercent24Hr).toFixed(2)}%`})</small></p>
            <p className='price-usd'>{formatCurrency(asset.priceUsd, 'USD', 'en')}</p>
          </div>
        </Link>
      ))}
    </div>
  </>
  )
}

export default CryptoPriceFeed
