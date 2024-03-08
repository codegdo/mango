'use client';

import { AppState } from '@/stores';
import { useSelector } from 'react-redux';

interface Params {
  module?: string
}

export const useLayout = ({ module }: Params) => {
  const session = useSelector((state: AppState) => state.session);

  console.log('MODULE CLIENT', module);

  // Define the HTML string with a placeholder for children
  const htmlString = `<div>
    <nav>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <a href="/logout">Logout</a>
    </nav>
    <div id="jsx_content"></div>
  </div>`;

  return htmlString;
};
