import { Link } from 'react-router-dom';

import { Form } from '@/components';
import { useFetch } from '@/hooks';

function Login() {
  //const { loginSuccess } = useAction();
  const { query, mutation } = useFetch();

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    const result = await mutation('/auth/login', { body: '{}' });
    console.log(result);
  };

  const handleSignup = async () => {
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
