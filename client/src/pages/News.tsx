import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Container, Heading, NewsFeed } from '../components'

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
    isFetching,
  } = useQuery({
    queryKey: ['news', page],
    queryFn: () => fetchNews(page),
    keepPreviousData: true,
  })

  return (
    <Container>
      <div className='container'>
        <Heading>Crypto News</Heading>

        <div className='grid gap-3 lg:grid-cols-[1fr_3fr]'>
          <div className='feed-options boxed'>
            <div className='sticky top-10'>
              <div>
                <Heading as='h4'>Language</Heading>
                <span className='flex justify-between gap-1'>
                  <button
                    className={`${langs.en && 'active'} flex-1`}
                    onClick={handleLangSelect}
                    value='en'
                  >
                    en
                  </button>
                  <button
                    className={`${langs.es && 'active'} flex-1`}
                    onClick={handleLangSelect}
                    value='es'
                  >
                    es
                  </button>
                  <button
                    className={`${langs.pt && 'active'} flex-1`}
                    onClick={handleLangSelect}
                    value='pt'
                  >
                    pt
                  </button>
                  <button
                    className={`${langs.fr && 'active'} flex-1`}
                    onClick={handleLangSelect}
                    value='fr'
                  >
                    fr
                  </button>
                  <button
                    className={`${langs.ru && 'active'} flex-1`}
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
                <Heading as='h4' className='mt-6'>Page {page} / 10</Heading>
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
                    disabled={isPreviousData || !news?.next}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <NewsFeed news={news} isLoading={isLoading} />
        </div>
      </div>
    </Container>
  )
}

export default News
