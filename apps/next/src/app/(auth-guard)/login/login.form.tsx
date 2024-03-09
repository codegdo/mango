'use client';
import { Form } from '@/components';
import { useActions } from '@/hooks';
import templateLayout from '../../template.layout';

interface IProps { }

function Login(props: IProps) {
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

export default templateLayout(Login, {
  module: 'auth',
});
