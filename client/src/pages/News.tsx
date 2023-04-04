import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Container, Heading, NewsFeed } from '../components'
import { useNews } from '../hooks/useNews'
import clsx from 'clsx'

const News = () => {
  useEffect(() => {
    document.title = 'News - CryptoView'
  }, [])

  const { page, regions, langs, handleLangSelect, handleSaveLang, setPage } = useNews()

  const fetchNews = (page = 1) =>
    fetch(`/.netlify/functions/api/news?page=${page}&regions=${regions ?? 'en'}`).then((res) => res.json())

  const {
    data: news,
    isLoading,
    isPreviousData,
  } = useQuery({
    queryKey: ['news', page, regions],
    queryFn: () => fetchNews(page),
    keepPreviousData: true,
    enabled: regions.length > 0
  })

  return (
    <Container className='min-h-[100vh]'>
      <div className='container'>
        <Heading>Crypto News</Heading>

        <div className='grid gap-3 lg:grid-cols-[1fr_3fr]'>
          <div className='feed-options boxed'>
            <div className='sticky top-10'>
              <div>
                <Heading as='h4'>Language</Heading>
                <span className='flex justify-between gap-1'>
                  {Object.keys(langs).map((lang) => (
                    <button
                      className={clsx('flex-1', langs[lang] && 'active')}
                      onClick={handleLangSelect}
                      key={lang}
                      value={lang}
                    >
                      {lang}
                    </button>
                  ))}
                </span>

                <button className='button' onClick={handleSaveLang}>
                  Save language preference
                </button>
              </div>

              <div>
                <Heading as='h4' className='mt-6'>
                  Page {page} / 10
                </Heading>
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
