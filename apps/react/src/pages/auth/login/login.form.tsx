import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <p>Login <button type='button'>Login</button></p>
      <Link to='/signup'>Signup</Link>
      <Link to='/welcome'>Welcome</Link>
    </div>
  );
}

export default Login;