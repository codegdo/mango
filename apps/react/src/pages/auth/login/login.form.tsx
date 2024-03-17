import { Link } from 'react-router-dom';

import { Form } from '@/components';
import { useFetch } from '@/hooks';

function Login() {
  //const { loginSuccess } = useAction();
  const { query } = useFetch();

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    const result = await query('/auth/login', { body: '{}' });
    console.log(result);
  };

  const handleSignup = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    const result = await query('/auth/signup');
    console.log(result);
  };

  return (
    <div>
      <Form />
      <p>Login</p>
      <button type="button" onClick={handleClick}>
        Login
      </button>
      <button type="button" onClick={handleSignup}>
        Signup
      </button>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
