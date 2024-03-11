'use client';
import { Form } from '@/components';
import { useActions } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';

export default function Signup(props: ComponentProps) {
  const { loginSuccess } = useActions();

  console.log('SINGUP', props);

  return (
    <>
      SIGNUP
      <Form />
    </>
  );
}
