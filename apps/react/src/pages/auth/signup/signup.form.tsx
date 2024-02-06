import { Link } from "react-router-dom";

function Signup() {

  return (
    <div>
      <p>Signup</p>
      <Link to='/login'>Login</Link>
      <Link to='/nofound'>Not Found</Link>
    </div>
  );
}

export default Signup;