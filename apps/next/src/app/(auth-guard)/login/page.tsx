import React from 'react';
import { Metadata } from 'next';
import Login from './login.form';
import TemplateLayout, { PageProps } from '@/app/template.layout';

export const metadata: Metadata = {
  title: 'Login',
  description: '',
};

async function getData(params: any) {
  return { hello: 'hello' };
}

export default async function LoginPage(props: PageProps) {
  const data = await getData(props.params);
  console.log(props);
  return (
    <TemplateLayout
      {...props}
      component={Login}
      route={{ module: 'auth', view: 'login' }}
      data={data}
    />
  );
}
