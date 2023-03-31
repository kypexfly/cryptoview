import { lazy, Suspense, useEffect } from 'react'
import { Container, Heading } from '../components'
const AssetsTable = lazy(() => import('../components/AssetsTable'))

const CoinList = () => {
  useEffect(() => {
    document.title = 'Assets - CryptoView'
  }, [])

  return (
    <Container>
      <Heading>Crypto Market Capitalization</Heading>
      <Suspense>
        <AssetsTable />
      </Suspense>
    </Container>
  )
}

export default CoinList
