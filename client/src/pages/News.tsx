import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { NewsFeed } from '../components'

const News = () => {
  useEffect(() => {
    document.title = 'News - CryptoView'
  }, [])

  const [page, setPage] = useState(1)
  const [langs, setLangs] = useState({
    en: false,
    es: false,
    pt: false,
    fr: false,
    ru: false,
  })

  const handleLangSelect = (e) => {
    setLangs((prev) => ({
      ...prev,
      [e.target.value]: !prev[e.target.value],
    }))
  }

  const fetchNews = (page = 1) => fetch('/api/news?page=' + page).then((res) => res.json())

  const {
    data: news,
    isLoading,
    isPreviousData,
  } = useQuery({
    queryKey: ['news', page],
    queryFn: () => fetchNews(page),
    keepPreviousData: true,
  })

  return (
    <div>
      <div className='container'>
        <h1>Crypto News</h1>
        <hr />

        <div id='news'>
          <div className='feed-options boxed'>
            <div className='sticky'>
              <div>
                <h4>Language</h4>
                <span className='btn-lang justify-between'>
                  <button
                    className={langs.en ? 'active' : undefined}
                    onClick={handleLangSelect}
                    value='en'
                  >
                    en
                  </button>
                  <button
                    className={langs.es ? 'active' : undefined}
                    onClick={handleLangSelect}
                    value='es'
                  >
                    es
                  </button>
                  <button
                    className={langs.pt ? 'active' : undefined}
                    onClick={handleLangSelect}
                    value='pt'
                  >
                    pt
                  </button>
                  <button
                    className={langs.fr ? 'active' : undefined}
                    onClick={handleLangSelect}
                    value='fr'
                  >
                    fr
                  </button>
                  <button
                    className={langs.ru ? 'active' : undefined}
                    onClick={handleLangSelect}
                    value='ru'
                  >
                    ru
                  </button>
                </span>

                {/* <button className='button' onClick={handleLang}>
                  Save
                </button> */}
              </div>
              <div>
                <h4>Page {page} / 10</h4>
                <div>
                  <button
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    disabled={page === 1}
                  >
                    prev
                  </button>
                  <button
                    onClick={() => {
                      if (!isPreviousData && news.next) {
                        setPage((old) => old + 1)
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <NewsFeed news={news} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default News
