import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Asset = () => {

    const { coinid } = useParams()
    const [asset, setAsset] = useState({})

    const fetchAsset = async () => {
        const response = await fetch(`/api/assets/${coinid}`);
        const json = await response.json();
        if (response.ok) {
            setAsset(json.data);
        }
    }

    useEffect(() => {
        fetchAsset()
    }, [])

    const { id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr, explorer } = asset

    return (
        <div>
            {!Object.keys(asset).length ? (<div className='loading'><span><i className="fas fa-sync fa-spin"></i> Loading...</span></div>) :
                (
                    <div>
                        <div><strong>icon:</strong> <img loading="lazy" src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={symbol} /></div>
                        <div><strong>id:</strong> {id}</div>
                        <div><strong>rank:</strong> {rank}</div>
                        <div><strong>symbol:</strong> {symbol}</div>
                        <div><strong>name:</strong> {name}</div>
                        <div><strong>supply:</strong> {supply}</div>
                        <div><strong>maxSupply:</strong> {maxSupply}</div>
                        <div><strong>marketCapUsd:</strong> {marketCapUsd}</div>
                        <div><strong>volumeUsd24Hr:</strong> {volumeUsd24Hr}</div>
                        <div><strong>priceUsd:</strong> {priceUsd}</div>
                        <div><strong>changePercent24Hr:</strong> {changePercent24Hr}</div>
                        <div><strong>vwap24Hr:</strong> {vwap24Hr}</div>
                        <div><strong>explorer:</strong> <a href={explorer} target="_blank" rel="noopener noreferrer">{explorer}</a></div>
                    </div>
                )}


        </div>
    );
}

export default Asset;