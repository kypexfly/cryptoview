import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

// components
// import OtherCoins from '../components/OtherCoins'
import Dashboard from '../components/Dashboard'

const Asset = () => {
  const navigate = useNavigate()
  const { coinid } = useParams()
  const [asset, setAsset] = useState({})

  const fetchAsset = async () => {
    const response = await fetch(`/api/assets/${coinid}`)
    const json = await response.json()
    if (response.ok) {
      setAsset(json.data)
    }
  }

  useEffect(() => {
    fetchAsset()
    coinid && (document.title = coinid + ' - CryptoView' || 'CryptoView')
  }, [coinid])

  return (
    <div className="container">
      <div id="asset">
        <div className="breadcrum">
          <button onClick={() => navigate(-1)}>
            <i className="fa-regular fa-circle-left"></i> Go back
          </button>
          <div className="breadcrum-nav">
            / <Link to="/assets">Assets</Link> /{' '}
            <strong>
              <Link to={`/assets/${asset.id}`}>{asset.name}</Link>
            </strong>
          </div>
        </div>

        {!Object.keys(asset).length ? undefined : <Dashboard asset={asset} />}

        {/* <OtherCoins /> */}
      </div>
    </div>
  )
}

export default Asset
