import { useEffect, useState } from 'react'

export const useNewsFeed = () => {
  const [news, setNews] = useState([])
  const [langs, setLangs] = useState({ en: false, es: false, pt: false, fr: false, ru: false })
  const [numpage, setNumpage] = useState(1)

  const fetchNewsFeed = async (api_path = '/api/news') => {
    const response = await fetch(api_path)

    const json = await response.json()

    if (response.ok) {
      setNews(json)
    }
  }

  useEffect(() => {
    setLangs(JSON.parse(localStorage.getItem('newsLangs')) ? JSON.parse(localStorage.getItem('newsLangs')) : langs)
    const lang_param = Object.keys(langs).filter(key => langs[key] === true).join(',')
    const url = '/api/news?'.concat('&regions=', lang_param)
    fetchNewsFeed(url)
  }, [])

  const handlePrev = async () => {
    if (news.previous == null) return
    const lang_param = Object.keys(langs).filter(key => langs[key] === true).join(',')
    const prev_url = '/api/news?'.concat(news.previous.match('&page=.*'), '&regions=', lang_param)
    setNews([])
    fetchNewsFeed(prev_url)
    setNumpage(numpage + -1)
  }

  const handleNext = async () => {
    if (news.next == null) return
    const lang_param = Object.keys(langs).filter(key => langs[key] === true).join(',')
    const next_url = '/api/news?'.concat(news.next.match('&page=.*'), '&regions=', lang_param)
    setNews([])
    fetchNewsFeed(next_url)
    setNumpage(numpage + 1)
  }

  const handleLang = async () => {
    const lang_param = Object.keys(langs).filter(key => langs[key] === true).join(',')
    const lang_url = '/api/news?regions='.concat(lang_param)
    setNews([])
    fetchNewsFeed(lang_url)
    setNumpage(1)
    localStorage.setItem('newsLangs', JSON.stringify(langs))
  }

  const handleLangSelect = (e) => {
    setLangs({
      ...langs,
      [e.target.value]: !langs[e.target.value]
    })
  }

  return { news, langs, numpage, handlePrev, handleNext, handleLang, handleLangSelect }
}
