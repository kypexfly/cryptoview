import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faAsterisk } from '@fortawesome/free-solid-svg-icons'

type SizeProp =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'

export const LoadingSpinner = ({ size }: { size?: SizeProp }) => {
  return (
    <span role='status'>
      <FontAwesomeIcon icon={faAsterisk} size={size ?? 'sm'} color='lime' spin />
      <span className='sr-only'>Loading...</span>
    </span>
  )
}

export const LoadingPage = () => (
  <div className='absolute flex h-full w-full items-center justify-center'>
    <LoadingSpinner size='2xl' />
  </div>
)
