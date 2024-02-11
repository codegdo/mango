'use client';
import { AppState } from '@/stores';
import { useSelector } from 'react-redux';

export const useLayout = () => {
  const session = useSelector((state: AppState) => state.session);

  // Define the HTML string with a placeholder for children
  const htmlString = `<div>
    <nav>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
    </nav>
    <div id="jsx_content"></div>
  </div>`;

  return htmlString;
};
