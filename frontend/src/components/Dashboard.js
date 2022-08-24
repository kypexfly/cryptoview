import { useNavigate } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
import Chart from './Chart';


const Dashboard = ({ asset }) => {


    const navigate = useNavigate()
    const { id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr, explorer } = asset


    // const format_compact = Intl.NumberFormat("en", { notation: "compact" });
    const format_asset = Intl.NumberFormat("en", {
        maximumFractionDigits: 2, minimumFractionDigits: 2,
    });

    return (
        <div>
            <div className="breadcrum">
                <button onClick={() => navigate(-1)}><i className="fa-regular fa-circle-left"></i> Go back</button>
                <div className='breadcrum-nav'>
                    <a href="/assets">Assets</a> / <strong><a href={`/assets/${id}`}>{name}</a></strong>
                </div>
            </div>

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
                        <div className={asset.changePercent24Hr > 0 ? "green" : "red"}>
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
                {/*
            <div>
            <div><strong>rank:</strong> {rank}</div>
            <div><strong>symbol:</strong> {symbol}</div>
            <div><strong>name:</strong> {name}</div>
            <div><strong>supply:</strong> {supply}</div>
            <div><strong>maxSupply:</strong> {maxSupply}</div>
            <div><strong>marketCapUsd:</strong> {marketCapUsd}</div>
            <div><strong>volumeUsd24Hr:</strong> {volumeUsd24Hr}</div>
            <div><strong>priceUsd:</strong> {priceUsd}</div>
            
            <div><strong>vwap24Hr:</strong> {vwap24Hr}</div>
            <div><strong>explorer:</strong> <a href={explorer} target="_blank" rel="noopener noreferrer">{explorer}</a></div> */}
            </div >

            <ReactTooltip />

        </div>
    );
}

export default Dashboard;