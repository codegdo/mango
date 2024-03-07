'use client'
import { Provider } from 'react-redux';
import { store } from '@/stores';

export default function TemplateProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}