import { useState, useEffect } from 'react'

const usePriceFeed = () => {
  const [assets, setAssets] = useState([])
  const fetchCryptoData = () => {
    fetch('https://api.coincap.io/v2/assets?limit=50')
      .then((res) => res.json())
      .then((json) => setAssets(json.data))
  }

  useEffect(() => {
    fetchCryptoData()

    setInterval(() => {
      console.log('Price updated:')
      fetchCryptoData()
    }, 25 * 1000)
  }, [])

  return { assets }
}

export default usePriceFeed
