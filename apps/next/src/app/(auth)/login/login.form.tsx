'use client';
import { Form } from '@/components';
import { useAction, useFetch, useServer } from '@/hooks';
import { ComponentProps } from '@/components/template/template.layout';
import { signupAction } from './login.action';

export default function Login(props: ComponentProps) {
  const { loginSuccess } = useAction();
  const { query } = useFetch();
  const { action } = useServer(signupAction);

  console.log(props?.data, props?.route);

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    //await query('/auth/login', { body: '{}' });
    const result = await query('/auth/login', { body: '{}' });
    //const result = await loginAction('/auth/login', { body: '{}' });
    console.log(result);
  };

  const handleSignup = async () => {
    const result = await action();
    //const result = await query('/auth/signup');
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
