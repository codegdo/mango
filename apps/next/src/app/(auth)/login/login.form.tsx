'use client';
import { Form } from '@/components';
import { useActions, useFetch } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';
import { loginAction } from './login.action';

export default function Login(props: ComponentProps) {
  const { loginSuccess } = useActions();
  const { query } = useFetch(loginAction);

  console.log(props?.data, props?.route);

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });
    const result = await query();
    console.log(result);
  };

  return (
    <>
      <button type='button' onClick={handleClick}>
        Login
      </button>
      <Form />
    </>
  );
}
