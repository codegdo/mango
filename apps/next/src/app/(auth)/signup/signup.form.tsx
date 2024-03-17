'use client';
import { Form } from '@/components';
import { useAction } from '@/hooks';
import { ComponentProps } from '@/app/template.layout';

export default function Signup(props: ComponentProps) {
  const { loginSuccess } = useAction();

  console.log('SINGUP', props);

  return (
    <>
      SIGNUP
      <Form />
    </>
  );
}
