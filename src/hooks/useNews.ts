import { useEffect, useState } from 'react'
import { objectKeysToString } from '../utils/objectKeysToString'

export const useNews = () => {
  const [page, setPage] = useState<number>(1)
  const [langs, setLangs] = useState<{}>({
    en: true,
    es: false,
    pt: false,
    fr: false,
    ru: false,
  })
  const [regions, setRegions] = useState<string>('')

  // console.log(langs)

  useEffect(() => {
    const loadLangs = localStorage.getItem('newsLangs')
      ? JSON.parse(localStorage.getItem('newsLangs'))
      : langs

    setPage(1)
    setLangs(loadLangs)
    setRegions(objectKeysToString(loadLangs))
  }, [])

  const handleSaveLang = () => {
    if (Object.values(langs).every((lang) => lang === false)) {
      const tempLangs = { en: true, es: false, pt: false, fr: false, ru: false }
      setLangs(tempLangs)
      setRegions(objectKeysToString(tempLangs))
      setPage(1)
      localStorage.setItem('newsLangs', JSON.stringify(tempLangs))
      return
    }

    setRegions(objectKeysToString(langs))
    setPage(1)
    localStorage.setItem('newsLangs', JSON.stringify(langs))
  }

  const handleLangSelect = (e) => {
    setLangs((prev) => ({
      ...prev,
      [e.target.value]: !prev[e.target.value],
    }))
  }

  return {
    page,
    langs,
    regions,
    handleLangSelect,
    handleSaveLang,
    setPage,
  }
}
