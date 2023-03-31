import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon icon={faCircleNotch} size={size ?? 'sm'} color='gray' spin />
      <span className='sr-only'>Loading...</span>
    </span>
  )
}

export const LoadingPage = () => (
  <div className='absolute flex h-full w-full items-center justify-center'>
    <LoadingSpinner size='xl' />
  </div>
)
