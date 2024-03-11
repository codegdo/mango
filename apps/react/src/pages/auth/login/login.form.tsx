import { Link } from "react-router-dom";

import { Form } from "@/components";
import { useActions } from "@/hooks";

function Login() {
  const { loginSuccess } = useActions();

  const handleClick = () => {
    loginSuccess({ session: { isAuthenticated: true } });
  }

  return (
    <div>
      <Form />
      <p>Login</p>
      <button type='button' onClick={handleClick}>Login</button>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

export default Login;