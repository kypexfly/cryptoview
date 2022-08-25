import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const CoinList = ({ title }) => {

  const [assets, setAssets] = useState([]);

  const fetchTopCoins = async () => {
    const response = await fetch("/api/assets");
    const json = await response.json();

    if (response.ok) {
      setAssets(json.data.slice(0, 20));
    }
  };

  useEffect(() => {
    document.title = title || "CryptoView"
    fetchTopCoins();
  }, []);

  let format_compact = Intl.NumberFormat("en", { notation: "compact" });
  let format_asset = Intl.NumberFormat("en", { maximumSignificantDigits: 7 });

  return (
    <div id="assets">
      <section className="landing">
        <div className="container">
          <div className="landbox">
            {/* <h1>Welcome to CryptoView!</h1> */}
          </div>
        </div>
      </section>
      <div className="container">
        <h1>Crypto Market Capitalization</h1>

        <p>Last update: {new Date().toLocaleTimeString()}</p>
        <br />

        <table className="coin-table">
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Price (USD)</td>
              <td>Supply</td>
              <td>Max. Supply</td>
              <td>Market Cap</td>
              <td>Change 24h</td>
            </tr>
          </thead>

          <tbody>
            {!assets.length ? (
              <tr className="coin-load">
                <td colSpan="100%" className="center">
                  <div className="loading"><i className="fas fa-sync fa-spin"></i> Loading...</div>
                </td>
              </tr>
            ) : (
              assets.map((asset) => (
                <tr key={asset.id}>
                  <td className="center">{asset.rank}</td>
                  <td>
                    <img
                      className="asset-icon"
                      loading="lazy"
                      src={`https://assets.coincap.io/assets/icons/${String(asset.symbol).toLowerCase()}@2x.png`}
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
                      : "-"}
                  </td>
                  <td className="center">
                    ${format_compact.format(asset.marketCapUsd).toLocaleString()}
                  </td>
                  <td
                    className={asset.changePercent24Hr > 0 ? "green center" : "red center"}
                  >
                    {Number(asset.changePercent24Hr).toFixed(2).toLocaleString()}%
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
