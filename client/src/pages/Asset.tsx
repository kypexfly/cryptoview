import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Heading, NewsFeed, OtherCoins } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons'

// components
import Dashboard from '../components/Dashboard'

const Asset = () => {
  const navigate = useNavigate()
  const { coinid } = useParams()

  useEffect(() => {
    coinid && (document.title = coinid + ' - CryptoView' || 'CryptoView')
  }, [coinid])

  // Initial data
  const {
    data: asset,
    isLoading: loadingAsset,
    isError,
  } = useQuery({
    queryKey: ['assets', coinid],
    queryFn: () => fetch('/api/assets/' + coinid).then((res) => res.json().then((res) => res.data)),
  })

  // Search news from asset
  const fetchNewsFromSymbol = (page = 1, symbol) =>
    fetch(`/api/news?page=${page}?currencies=${symbol}`).then((res) => res.json())

  const { data: news, isLoading: loadingNews } = useQuery({
    queryKey: ['news', asset?.symbol],
    queryFn: () => fetchNewsFromSymbol(1, asset.symbol),
    enabled: asset && Object.keys(asset).length > 0,
  })

  if (loadingAsset) return null
  if (isError) return <div>Asset not found</div>

  return (
    <Container>
      <div className='breadcrum'>
        <button onClick={() => navigate(-1)}>
          {<FontAwesomeIcon icon={faCircleLeft} />} Go back
        </button>
        <div className='breadcrum-nav'>
          / <Link to='/assets'>Assets</Link> /{' '}
          <strong>
            <Link to={`/assets/${asset.id}`}>{asset.name}</Link>
          </strong>
        </div>
      </div>

      <Dashboard asset={asset} />

      <Heading>
        Latest {asset.name} News
      </Heading>

      <NewsFeed news={news} isLoading={loadingNews} limit={10} />
      {/* <OtherCoins /> */}
    </Container>
  )
}

export default Asset
