import { useEffect } from 'react'
import NewsList from '../components/NewsList'
import { useNewsFeed } from '../hooks/useNewsFeed'

const News = () => {
  const { news, langs, numpage, handlePrev, handleNext, handleLang, handleLangSelect } = useNewsFeed()

  useEffect(() => {
    document.title = 'News - CryptoView'
  }, [])

  return (
    <div>
      <div className='container'>

        <h1>Crypto News</h1>
        <hr />

        <div id="news">
          <div className="feed-options boxed">
            <div className='sticky'>
              <div>
                <h4>Language</h4>
                <span className='btn-lang justify-between'>
                  <button className={langs.en ? 'active' : undefined} onClick={handleLangSelect} value="en">en</button>
                  <button className={langs.es ? 'active' : undefined} onClick={handleLangSelect} value="es">es</button>
                  <button className={langs.pt ? 'active' : undefined} onClick={handleLangSelect} value="pt">pt</button>
                  <button className={langs.fr ? 'active' : undefined} onClick={handleLangSelect} value="fr">fr</button>
                  <button className={langs.ru ? 'active' : undefined} onClick={handleLangSelect} value="ru">ru</button>
                </span>

                <button
                  className='button'
                  onClick={handleLang}
                >
                  Save
                </button>

              </div>
              <div>
                <h4>Page {numpage} / 10</h4>
                <div>
                  <button onClick={handlePrev} disabled={(news.previous == null) ? 1 : 0} >prev</button>
                  <button onClick={handleNext} disabled={(news.next == null) ? 1 : 0}>next</button>
                </div>
              </div>
            </div>

          </div>

          <div className="feed-list">
            {!news.results
              ? (<div className='loading'><span><i className="fas fa-sync fa-spin"></i> Loading...</span></div>)
              : news.results.map((anew, index) => (
                <NewsList anew={anew} key={index} />
              ))}
          </div>

        </div>
      </div >
    </div >
  )
}

export default News
