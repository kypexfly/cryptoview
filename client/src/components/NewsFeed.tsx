import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { formatDistance } from 'date-fns'
import { LoadingPage } from './loading'

interface NewsFeedProps {
  news: unknown
  isLoading: boolean
  limit?: number
}

const NewsFeed = ({ news, isLoading, limit = 20 }: NewsFeedProps) => {
  if (isLoading)
    return (
      <div className='relative h-[100vh]'>
        <LoadingPage />
      </div>
    )

  return (
    <div className='flex flex-col overflow-auto rounded-md border border-[#3e3e3e] bg-[#27272b] p-3 leading-tight'>
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
  const isNew = (get_minutes_ago ? Number(get_minutes_ago[1]) : undefined) < 10

  return (
    <div
      className={`flex flex-col border-b border-l-2 border-b-[#3e3e3e] border-l-transparent p-3 last:border-none sm:flex-row ${
        isNew && 'border-l-orange-300'
      }`}
    >
      <div className='sm:basis-24 sm:self-center pr-3 text-xs text-gray-500'>{time_ago}</div>

      <div className='flex-1'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <span className='text-gray-400 hover:text-gray-300'>{title}</span>
          <span className='text-xs'>
            {' '}
            <FontAwesomeIcon icon={faLink} /> {domain}
          </span>
        </a>

        <div className='inline-flex w-full flex-wrap items-center'>
          <span className={`mr-1 rounded text-xs font-bold ${kind === 'media' && 'price-green'}`}>
            ({kind})
          </span>
          {currencies &&
            currencies.map((currency, index) => (
              <span className='mr-1 rounded bg-indigo-600 px-2 text-xs font-bold' key={index}>
                {currency.code}
              </span>
            ))}
          <span className='grow'>
            <a href={url} className='flex items-center justify-end gap-1 text-sm text-gray-500'>
              Discuss on <img width={15} src='/images/cryptopanic.ico' alt='cryptopanic' />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
