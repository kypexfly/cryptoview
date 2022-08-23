import { useEffect, useState } from "react";

const CoinList = () => {
  const [assets, setAssets] = useState([]);

  const FetchTopCoins = async () => {
    const response = await fetch("/api/assets");
    const json = await response.json();

    if (response.ok) {
      setAssets(json.data.slice(0, 25));
    }
  };

  useEffect(() => {
    FetchTopCoins();
  }, []);

  let format_compact = Intl.NumberFormat("en", { notation: "compact" });
  let format_asset = Intl.NumberFormat("en", { maximumSignificantDigits: 5 });

  return (
    <div>
      <h1 className="center">Crypto Market Capitalization</h1>

      <br />
      
      <p>Last update: {new Date().toLocaleTimeString()}</p>
      <br/>

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
            <tr>
              <td colSpan="100%" className="center">
                  <span><i className="fas fa-sync fa-spin"></i> Loading...</span>
              </td>
            </tr>
          ) : (
            assets.map((asset) => (
              <tr key={asset.id}>
                <td className="center">{asset.rank}</td>
                <td>
                  <img
                    className="asset-icon"
                    src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}
                    alt={asset.symbol}
                  />
                  <div>
                    <a href={`/assets/${asset.symbol.toLowerCase()}`}>
                      <strong>{asset.name}</strong>
                      <p>
                        <small className="text-gray">{asset.symbol}</small>
                      </p>
                    </a>
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
  );
};

export default CoinList;
