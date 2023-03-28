import { formatCurrency } from '@coingecko/cryptoformat'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const CryptoPriceFeed = () => {
  const { data, isLoading } = useQuery(['priceFeed'], () =>
    fetch('https://api.coincap.io/v2/assets?limit=50')
      .then((res) => res.json())
      .then((res) => res.data),
  )

  if (isLoading) return null

  return (
    <div id='pricefeed'>
      {data.map((asset) => (
        <Link to={`/assets/${asset.id}`} className='pricebox' data-tip={asset.name} key={asset.id}>
          <img
            className='asset-icon'
            loading='lazy'
            src={`https://assets.coincap.io/assets/icons/${String(
              asset.symbol,
            ).toLowerCase()}@2x.png`}
            alt={asset.symbol}
          />
          <div className='price-data'>
            <p className='price-title'>
              {asset.symbol}{' '}
              <small className={asset.changePercent24Hr > 0 ? 'price-green' : 'red'}>
                ({`${Number(asset.changePercent24Hr).toFixed(2)}%`})
              </small>
            </p>
            <p className='price-usd'>{formatCurrency(asset.priceUsd, 'USD', 'en')}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CryptoPriceFeed
