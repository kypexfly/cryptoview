import { useEffect, useState } from "react";

const CoinList = () => {
  const [assets, setAssets] = useState([]);

  const FetchTopCoins = async () => {
    const response = await fetch("/api/assets");
    const json = await response.json();

    if (response.ok) {
      setAssets(json.data);
    }
  };

  useEffect(() => {
    FetchTopCoins();
  }, []);

  return (
    <div>

<h1>Crypto Market Capitalization</h1>

<br />
<p>Top 100 cryptocurrencies:</p>
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
          {assets &&
            assets.map((asset) => (
              <tr key={asset.id}>
                <td style={{textAlign: "center"}}>{asset.rank}</td>
                <td>
                <img className="asset-icon" src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} alt={asset.symbol} />
                  <p>
                  <strong>{asset.name}</strong> 
                  <p><small class="text-gray">{asset.symbol}</small></p>
                  </p>
                </td>
                <td>${Number(asset.priceUsd).toLocaleString()}</td>
                <td>{Number(asset.supply).toLocaleString()}</td>
                <td>{asset.maxSupply> 0 ? Number(asset.maxSupply).toLocaleString() : "-"}</td>
                <td>${Number(asset.marketCapUsd).toLocaleString()}</td>
                <td style={{textAlign: "center"}} className={asset.changePercent24Hr > 0 ? "green" : "red"}>
                    {Number(asset.changePercent24Hr).toFixed(2).toLocaleString()}%
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
