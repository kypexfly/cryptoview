import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
export const LoadingSpinner = () => {
  return (
    <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
  )
}

