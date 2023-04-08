import { useState, useEffect } from 'react'
import { formatCurrency } from '@coingecko/cryptoformat'
import { LoadingSpinner } from '../components/loading'
import { Container, Heading } from '../components'
import { useQuery } from '@tanstack/react-query'

const format_asset = Intl.NumberFormat('en', {
  maximumSignificantDigits: 7,
})

const fetchPrice = async (asset: string) => {
  const res = await fetch(`/.netlify/functions/api/assets/rates/${asset}`)
  const { data } = await res.json()
  return data
}

const Converter = () => {
  const [amount, setAmount] = useState<number>(1)
  const [leftCoin, setLeftCoin] = useState('bitcoin')
  const [rightCoin, setRightCoin] = useState('united-states-dollar')

  const { data: leftPrice } = useQuery(['price', leftCoin], () => fetchPrice(leftCoin))
  const { data: rightPrice } = useQuery(['price', rightCoin], () => fetchPrice(rightCoin))

  useEffect(() => {
    document.title = 'Converter - CryptoView'
  }, [leftCoin, rightCoin])

  return (
    <Container>
      <Heading>Cryptocurrency Converter Calculator</Heading>

      <div id='converter'>
        <input
          className='set-amount'
          type='number'
          defaultValue={1}
          placeholder='Ingrese el monto al convertidor'
          onChange={(e) => setAmount(Number(e.target.value))}
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
              <strong>{format_asset.format(amount)}</strong> {leftPrice?.symbol} ={' '}
              <strong>
                {!rightPrice?.rateUsd ? (
                  <LoadingSpinner />
                ) : (
                  formatCurrency(
                    (amount * leftPrice?.rateUsd) / rightPrice?.rateUsd,
                    'USD',
                    'en',
                    true,
                  )
                )}
              </strong>{' '}
              {rightPrice?.symbol}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Converter
