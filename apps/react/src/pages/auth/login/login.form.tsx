import { useActions } from "@/hooks";
import { Link } from "react-router-dom";

function Login() {
  const { loginSuccess } = useActions();

  const handleClick = () => {
    loginSuccess({ session: { isAuthenticated: true } });
  }

  return (
    <div>
      <p>Login <button type='button' onClick={handleClick}>Login</button></p>
      <Link to='/signup'>Signup</Link>
      <Link to='/welcome'>Welcome</Link>
    </div>
  );
}

export default Login;