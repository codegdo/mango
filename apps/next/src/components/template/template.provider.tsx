'use client'
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import { TemplateApp } from './template.app';

export function TemplateProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <TemplateApp>
        {children}
      </TemplateApp>
    </Provider>
  )
}