import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'About - CryptoView'
  }, [])

  return (
    <div>
      <div className='container'>
        <h1>About</h1>
        <hr />

        <div id='about'>
          <strong>CryptoView</strong> is a project that provides some tools that everyone can use
          for free. <a href='https://docs.coincap.io/'> CoinCap</a> and{' '}
          <a href='https://cryptopanic.com/'>CryptoPanic</a> APIs were used.
          <ul>
            <li>News feed from CryptoPanic</li>
            <li>Cryptocurrency Converter Calculator</li>
            <li>List of top cryptocurrencies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
