import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import useSortableData from '../hooks/useSortableData'

// https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const CoinList = () => {
  // states
  const [assets, setAssets] = useState([])
  // const [sortConfig, setSortConfig] = useState(null)

  // fetch
  const fetchTopCoins = async () => {
    const response = await fetch('/api/assets')
    const json = await response.json()

    if (response.ok) {
      setAssets(json.data)
    }
  }

  // useEffect
  useEffect(() => {
    document.title = 'Assets - CryptoView'
    fetchTopCoins()
  }, [])

  const { items, requestSort, sortConfig } = useSortableData(assets)

  // others
  const format_compact = Intl.NumberFormat('en', { notation: 'compact' })
  const format_asset = Intl.NumberFormat('en', { maximumSignificantDigits: 7 })

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  return (
    <div id="assets">
      <div className="container">
        <h1>Crypto Market Capitalization</h1>
        <hr />
        <p className="right">
          <strong>Last update:</strong> {new Date().toLocaleTimeString()} <br />{' '}
          <strong>UTC</strong>: {new Date().toUTCString()}
        </p>
        <br />

        <table className="coin-table">
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>
                <button
                  type="button"
                  className={getClassNamesFor('priceUsd')}
                  onClick={() => requestSort('priceUsd')}
                >
                  Price (USD)
                </button>
              </td>
              <td>Supply</td>
              <td>Max. Supply</td>
              <td>
                <button
                  type="button"
                  className={getClassNamesFor('marketCapUsd')}
                  onClick={() => requestSort('marketCapUsd')}
                >
                  Market Cap
                </button>
              </td>

              <td>
                <button
                  type="button"
                  className={getClassNamesFor('changePercent24Hr')}
                  onClick={() => requestSort('changePercent24Hr')}
                >
                  Change 24h
                </button>
              </td>
            </tr>
          </thead>

          <tbody>
            {!assets.length
              ? (<tr className="coin-load">
                <td colSpan="100%" className="center">
                  <div className="loading">
                    <span>
                      <i className="fas fa-sync fa-spin"></i> Loading...
                    </span>
                  </div>
                </td>
              </tr>)
              : (items.map((asset, index) => (
                <tr key={index}>
                  <td className="center">{asset.rank}</td>
                  <td>
                    <img
                      className="asset-icon"
                      loading="lazy"
                      src={`https://assets.coincap.io/assets/icons/${String(
                        asset.symbol
                      ).toLowerCase()}@2x.png`}
                      alt={asset.symbol}
                    />
                    <div>
                      <Link to={`/assets/${asset.id}`}>
                        <strong>{asset.name}</strong>
                        <p>
                          <small className="text-gray">{asset.symbol}</small>
                        </p>
                      </Link>
                    </div>
                  </td>
                  <td>${format_asset.format(asset.priceUsd)}</td>
                  <td>{Number(asset.supply).toLocaleString()}</td>
                  <td>
                    {asset.maxSupply > 0
                      ? Number(asset.maxSupply).toLocaleString()
                      : '-'}
                  </td>
                  <td className="center">
                    $
                    {format_compact.format(asset.marketCapUsd).toLocaleString()}
                  </td>
                  <td
                    className={
                      asset.changePercent24Hr > 0
                        ? 'green center'
                        : 'red center'
                    }
                  >
                    {Number(asset.changePercent24Hr)
                      .toFixed(2)
                      .toLocaleString()}
                    %
                  </td>
                </tr>)))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinList
