'use client';
import { Metadata } from 'next';
import pageLayout from '../../page.layout';

const metadata: Metadata = { title: 'Login', description: '' };

function Login() {
  return <main>LOGIN</main>;
}

export default pageLayout(Login, {
  metadata,
});
