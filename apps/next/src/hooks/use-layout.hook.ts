'use client';
import { Params } from '@/app/layout';
import { AppState } from '@/stores';
import { useSelector } from 'react-redux';

export const useLayout = ({ module }: Params) => {
  const session = useSelector((state: AppState) => state.session);

  console.log('MODULE', module);

  // Define the HTML string with a placeholder for children
  const htmlString = `<div>
    <nav>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
      <a href="/logout">Logout</a>
    </nav>
    <div id="jsx_content"></div>
  </div>`;

  return htmlString;
};
