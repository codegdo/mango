import { useAction } from '@/hooks'
import { Link } from 'react-router-dom'

function Welcome() {
  const { logoutSuccess } = useAction()

  const handleClick = () => {
    logoutSuccess({ session: { isAuthenticated: false } })
  }

  return (
    <div>
      Welcome
      <button type='button' onClick={handleClick}>
        Logout
      </button>
      <Link to='/somelink'>Some Link</Link>
    </div>
  )
}

export default Welcome
