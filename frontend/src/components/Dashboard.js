import ReactTooltip from 'react-tooltip'
import Chart from './Chart'

const Dashboard = ({ asset }) => {
  // destructuring id, asset left values: supply, maxSupply, vwap24Hr
  const { rank, symbol, name, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, explorer } = asset

  // const format_compact = Intl.NumberFormat("en", { notation: "compact" });
  const format_asset = Intl.NumberFormat('en', {
    maximumFractionDigits: 2, minimumFractionDigits: 2
  })

  return (<div>
<div className="dashboard">
        <div className="dash-details">
          <div className="dash-details-head">
            <img width="64px" src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={symbol} />
            <div>
              <h2>{name} ({symbol})</h2>
              <small><strong>Rank</strong> #{rank}</small>
            </div>
          </div>

          <div className="dash-details-price">
            <span data-tip={`$${priceUsd}`}>${format_asset.format(priceUsd)}</span>
            <div className={asset.changePercent24Hr > 0 ? 'green' : 'red'}>
              {Number(changePercent24Hr).toFixed(2)}%
            </div>

          </div>
          <div className="dash-details-vol">
            <div>
              <strong>Market Cap</strong>
              <span>
                {`$${format_asset.format(marketCapUsd)}`}
              </span>
            </div>
            <div>
              <strong>Volume 24h</strong>
              <span>${format_asset.format(volumeUsd24Hr)} </span>
            </div>
            <div>
              <strong>Explorer</strong>
              <small>
                <a href={explorer} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Go to
                </a>
              </small>
            </div>
          </div>
        </div>

        <div className="dash-chart">
          <Chart />
        </div>
      </div >

      <ReactTooltip />
    </div>)
}

export default Dashboard
