'use client';
import { Metadata } from 'next';
import layoutTemplate from '../../layout.template';

const metadata: Metadata = { title: 'Signup', description: '' };

function Signup() {
  return <main>SIGNUP</main>;
}

export default layoutTemplate(Signup, {
  metadata,
});
