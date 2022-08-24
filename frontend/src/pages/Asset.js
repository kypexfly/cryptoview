import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

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
        coinid && (document.title = (coinid + " - CryptoView") || "CryptoView")
    }, [])

    return (
        <div className="container">
            {!Object.keys(asset).length ?
                (<div className='loading'><span><i className="fas fa-sync fa-spin"></i> Loading...</span></div>) :
                <Dashboard asset={asset} />}
        </div>
    );
}

export default Asset;