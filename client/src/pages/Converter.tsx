import { useState, useEffect } from 'react'
import { formatCurrency } from '@coingecko/cryptoformat'
import { LoadingSpinner } from '../components/loading'
import { Container, Heading } from '../components'

const Converter = () => {
  const [amount, setAmount] = useState(1)
  const [leftCoin, setLeftCoin] = useState('bitcoin')
  const [rightCoin, setRightCoin] = useState('united-states-dollar')
  const [leftPrice, setLeftPrice] = useState({})
  const [rightPrice, setRightPrice] = useState({})

  const fetchAssetRates = async (first, second) => {
    // updates both assets price at the same time to get realtime rate conversion

    setRightPrice({})

    fetch(`/api/assets/rates/${first}`)
      .then((res) => res.json())
      .then((json) => setLeftPrice(json.data))
      .catch((err) => console.log(err))

    fetch(`/api/assets/rates/${second}`)
      .then((res) => res.json())
      .then((json) => setRightPrice(json.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    document.title = 'Converter - CryptoView'

    fetchAssetRates(leftCoin, rightCoin)
  }, [leftCoin, rightCoin])

  const format_asset = Intl.NumberFormat('en', {
    maximumSignificantDigits: 7,
  })

  return (
    <Container>
      <Heading>Cryptocurrency Converter Calculator</Heading>

      <div id='converter'>
        <input
          className='set-amount'
          type='number'
          defaultValue={1}
          placeholder='Ingrese el monto al convertidor'
          onChange={(e) => setAmount(e.target.value)}
        />

        <div>
          <select name='leftSide' onChange={(e) => setLeftCoin(e.target.value)}>
            <option value='bitcoin'>Bitcoin (BTC)</option>
            <option value='ethereum'>Ethereum (ETH)</option>
            <option value='united-states-dollar'>United States Dollar (USD)</option>
            <option value='euro'>Euro (EUR)</option>
          </select>

          <select
            name='rightSide'
            defaultValue={'united-states-dollar'}
            onChange={(e) => setRightCoin(e.target.value)}
          >
            <option value='bitcoin'>Bitcoin (BTC)</option>
            <option value='ethereum'>Ethereum (ETH)</option>
            <option value='united-states-dollar'>United States Dollar (USD)</option>
            <option value='euro'>Euro (EUR)</option>
          </select>

          <div className='conversion-result'>
            <p style={{ fontSize: '20px' }}>
              <strong>{format_asset.format(amount, 'USD', 'en', true)}</strong> {leftPrice.symbol} ={' '}
              <strong>
                {!rightPrice.rateUsd ? (
                  <LoadingSpinner />
                ) : (
                  formatCurrency(
                    (amount * leftPrice.rateUsd) / rightPrice.rateUsd,
                    'USD',
                    'en',
                    true,
                  )
                )}
              </strong>{' '}
              {rightPrice.symbol}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Converter
