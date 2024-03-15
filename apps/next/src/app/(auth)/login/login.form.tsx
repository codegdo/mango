'use client';
import { Form } from '@/components';
import { useActions, useFetch } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';
import { signupAction } from './login.action';

export default function Login(props: ComponentProps) {
  const { loginSuccess } = useActions();
  const { query } = useFetch();

  console.log(props?.data, props?.route);

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    //await query('/auth/login', { body: '{}' });
    const result = await query('/auth/login', { body: '{}' });
    //const result = await loginAction('/auth/login', { body: '{}' });
    console.log(result);
  };

  const handleSignup = async () => {
    const result = await signupAction('/auth/signup');
    console.log(result);
  };

  return (
    <>
      <button type='button' onClick={handleClick}>
        Login
      </button>
      <button type='button' onClick={handleSignup}>
        GET SIGNUP
      </button>
      <Form />
    </>
  );
}
