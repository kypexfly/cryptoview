import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='border-t border-[#3e3e3e] bg-[#27272b] py-9 text-center'>
      <p className='my-3'>
        <strong>CryptoView</strong>. All rights reserved 2022.
      </p>
      <a href='https://github.com/kypexfly/cryptoview' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='lg' color='gray' />
      </a>
    </footer>
  )
}

export default Footer
