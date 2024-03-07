'use client';
import { Form } from '@/components';
import { useActions } from '@/hooks';
import templateLayout from '../../template.layout';

interface IProps { }

function Signup(props: IProps) {
  const { loginSuccess } = useActions();

  console.log('SINGUP', props);

  return (
    <>
      SIGNUP
      <Form />
    </>
  );
}

export default templateLayout(Signup, {
  module: 'auth',
});
