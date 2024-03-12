'use client';
import { Form } from '@/components';
import { useActions, useFetch } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';
//import { loginAction } from './login.action';
import { http } from '@/helpers';

export default function Login(props: ComponentProps) {
  const { loginSuccess } = useActions();
  const { query } = useFetch();

  console.log(props?.data, props?.route);

  const handleClick = async () => {
    //loginSuccess({ session: { isAuthenticated: true } });

    const result = await query({ url: '/todos/1' });

    //const result = await query(loginAction);
    //const result1 = await loginAction();
    //const result = await props?.actions?.loginAction();
    //await props?.actions?.loginAction();
    //await props?.actions?.loginAction();
    //const baseUrl = process.env.BASE_URL;
    //const result = await http.get(`https://jsonplaceholder.typicode.com/todos/1`);
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
