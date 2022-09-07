import NewsList from '../components/NewsList'
import { useAuthContext } from '../hooks/useAuthContext'

const { useEffect, useState } = require('react')

const News = () => {
  // const { user } = useAuthContext()
  const [news, setNews] = useState([])
  const [langs, setLangs] = useState('')
  const [numpage, setNumpage] = useState(1)

  const handleLang = async () => {
    const lang_param = [eng.lang, spa.lang, por.lang, fra.lang, rus.lang].filter(Boolean).join(',')
    setLangs(lang_param)
    const lang_url = '/api/news?regions='.concat(lang_param)
    setNews([])
    fetchNewsFeed(lang_url)
    setNumpage(1)
  }

  const useHandleParams = (enableState, langState) => {
    const [enable, setEnable] = useState(enableState)
    const [lang, setLang] = useState(langState)
    const afunct = (e) => {
      setEnable(!enable)
      setLang(lang ? '' : e.target.value)
    }

    return {
      enable,
      lang,
      afunct
    }
  }

  const eng = useHandleParams(1, 'en')
  const spa = useHandleParams()
  const por = useHandleParams()
  const fra = useHandleParams()
  const rus = useHandleParams()

  const fetchNewsFeed = async (api_path = '/api/news') => {
    const response = await fetch(api_path)

    const json = await response.json()

    if (response.ok) {
      setNews(json)
    }
  }

  const handleNext = async () => {
    if (news.next == null) return
    const next_url = '/api/news?'.concat(news.next.match('&page=.*'), '&regions=', langs)
    setNews([])
    fetchNewsFeed(next_url)
    setNumpage(numpage + 1)
  }

  const handlePrev = async () => {
    if (news.previous == null) return
    const prev_url = '/api/news?'.concat(news.previous.match('&page=.*'), '&regions=', langs)
    setNews([])
    fetchNewsFeed(prev_url)
    setNumpage(numpage + -1)
  }

  useEffect(() => {
    document.title = 'News - CryptoView'
    fetchNewsFeed()
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
                <span className='justify-between'>
                  <button className={eng.enable ? 'active' : undefined} onClick={eng.afunct} value="en">en</button>
                  <button className={spa.enable ? 'active' : undefined} onClick={spa.afunct} value="es">es</button>
                  <button className={por.enable ? 'active' : undefined} onClick={por.afunct} value="pt">pt</button>
                  <button className={fra.enable ? 'active' : undefined} onClick={fra.afunct} value="fr">fr</button>
                  <button className={rus.enable ? 'active' : undefined} onClick={rus.afunct} value="ru">ru</button>
                </span>

                <button
                  className='button'
                  onClick={handleLang}>
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
      </div>
    </div>
  )
}

export default News
