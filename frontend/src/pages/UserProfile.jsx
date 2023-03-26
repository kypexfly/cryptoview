import { useEffect } from 'react'

const UserProfile = () => {
  useEffect(() => {
    document.title = 'User Profile - CryptoView'
  }, [])

  return (
    <div className="container">
      User profile
    </div>
  )
}

export default UserProfile
