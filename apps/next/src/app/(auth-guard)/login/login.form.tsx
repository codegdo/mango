'use client';
import { Form } from '@/components';
import { useActions } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';

export default function Login(props: ComponentProps) {
  const { loginSuccess } = useActions();

  console.log(props?.data, props?.route);

  const handleClick = () => {
    loginSuccess({ session: { isAuthenticated: true } });
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
