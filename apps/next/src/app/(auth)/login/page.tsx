'use client';
import { Metadata } from 'next';
import layoutTemplate from '../../layout.template';

const metadata: Metadata = { title: 'Login', description: '' };

function Login() {
  return <main>LOGIN</main>;
}

export default layoutTemplate(Login, {
  metadata,
});
