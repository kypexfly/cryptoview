import { useEffect } from 'react'
import { Container } from '../components'

const About = () => {
  useEffect(() => {
    document.title = 'About - CryptoView'
  }, [])

  return (
    <Container className='container'>
      <h1 className='mb-3 border-b border-[#3e3e3e] pb-3 text-2xl font-bold'>About</h1>

      <div id='about'>
        <strong>CryptoView</strong> is a project that provides some tools that everyone can use for
        free. <a href='https://docs.coincap.io/'> CoinCap</a> and{' '}
        <a href='https://cryptopanic.com/'>CryptoPanic</a> APIs were used.
        <ul>
          <li>News feed from CryptoPanic</li>
          <li>Cryptocurrency Converter Calculator</li>
          <li>List of top cryptocurrencies</li>
        </ul>
      </div>
    </Container>
  )
}

export default About
