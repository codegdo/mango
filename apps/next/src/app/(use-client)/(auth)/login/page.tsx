'use client';
import { Metadata } from 'next';
import pageLayout from '../../page.layout';
import { Form } from '@/components';
import { useActions } from '@/hooks';

const metadata: Metadata = { title: 'Login', description: '' };

function Login() {
  const { loginSuccess } = useActions();

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

export default pageLayout(Login, {
  metadata,
  module: 'auth',
});
