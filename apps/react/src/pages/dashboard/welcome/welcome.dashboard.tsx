import { Link } from 'react-router-dom';

function Welcome() {
  return <div>Welcome <Link to='/login'>Login</Link> <Link to='/somelink'>Some Link</Link></div>;
}

export default Welcome;