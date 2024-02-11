'use client';
import { Metadata } from 'next';
import pageLayout from '../../page.layout';

const metadata: Metadata = { title: 'Signup', description: '' };

function Signup() {
  return <>SIGNUP</>;
}

export default pageLayout(Signup, {
  metadata,
});
