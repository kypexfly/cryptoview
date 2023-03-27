import NewsList from './NewsList'
import { useNewsFeed } from '../hooks/useNewsFeed'
// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CoinNews = ({ symbol }) => {
  const [news, setNews] = useState([])
  // const { coinid } = useParams()

  const fetchCoinNews = () => {
    fetch(`/api/news/?currencies=${symbol}`)
      .then((res) => res.json())
      .then((json) => setNews(json))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchCoinNews()
  }, [symbol])

  return (
    <div className='feed-list'>
      {!news.results ? (
        <div className='loading'>
          <span>
            <i className='fas fa-sync fa-spin'></i> Loading...
          </span>
        </div>
      ) : (
        news.results.slice(0, 10).map((anew, index) => <NewsList anew={anew} key={index} />)
      )}
    </div>
  )
}

export default CoinNews
