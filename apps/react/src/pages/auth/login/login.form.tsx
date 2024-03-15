import { Link } from "react-router-dom";

import { Form } from "@/components";
import { useActions, useFetch } from "@/hooks";

function Login() {
  const { loginSuccess } = useActions();
  const { query } = useFetch();

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    const result = await query('/auth/login', { body: '{}' });
    console.log(result);
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