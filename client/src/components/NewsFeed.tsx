import { formatDistance } from 'date-fns'

const NewsFeed = ({ news, isLoading, limit = 20 }) => {
  if (isLoading)
    return (
      <div className='feed-list'>
        <div>Loading...</div>
      </div>
    )

  return (
    <div className='feed-list'>
      {news.results.slice(0, limit).map((singleNews, index) => (
        <NewsList singleNews={singleNews} key={index} />
      ))}
    </div>
  )
}

const NewsList = ({ singleNews }) => {
  const { published_at, url, title, kind, domain, currencies } = singleNews
  const time_ago = formatDistance(new Date(published_at), new Date(), { addSuffix: false })
  const get_minutes_ago = time_ago.match('([0-9]*) minutes$')

  return (
    <div
      className={
        (get_minutes_ago ? get_minutes_ago[1] : undefined) < 10 ? 'feed-row new' : 'feed-row'
      }
    >
      <div className='feed-datetime'>{time_ago}</div>

      <div className='feed-title'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <span>{title}</span>{' '}
          <small>
            <i className='fa-solid fa-link'></i> {domain}
          </small>
        </a>

        <div className='feed-details'>
          <span className={`feed-title-kind ${kind === 'media' && 'price-green'}`}>({kind})</span>
          {currencies &&
            currencies.map((currency, index) => (
              <span className='badge' key={index}>
                {currency.code}
              </span>
            ))}
          <span className='cryptopanic'>
            <small>
              <a href={url}>
                Discuss on <img width={15} src='/images/cryptopanic.ico' alt='cryptopanic' />
              </a>
            </small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed