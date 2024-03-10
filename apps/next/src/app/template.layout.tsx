'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import htmlReactParser, { DOMNode } from 'html-react-parser';

import { useTemplate } from '@/hooks';
import { ButtonLogout } from '@/components';

interface KeyValue {
  [key: string]: string;
}

export interface PageProps {
  params: KeyValue;
  searchParams: KeyValue;
}

export interface Route {
  module?: string;
  view?: string;
}

export interface ComponentProps extends PageProps {
  route: Route;
  data?: any;
}

interface IProps {
  component: React.FC<ComponentProps>;
  route: Route;
  data?: any;
  params: KeyValue;
  searchParams: KeyValue;
}

export default function TemplateLayout({
  component: Component,
  route,
  data,
  ...props
}: IProps) {
  console.log('TEMPLATE LAYOUT PROPS', props);
  const templateContent = useTemplate(route);

  //const currentPage = usePathname();
  const parsedContent = htmlReactParser(templateContent, {
    replace: (domNode) => {
      if (
        domNode &&
        'attribs' in domNode &&
        domNode.attribs.id === 'jsx_content'
      ) {
        return <Component route={route} data={data} {...props} />;
      }

      if (domNode && 'attribs' in domNode && domNode.name === 'a') {
        const href = domNode.attribs.href || '';
        const textContent = extractTextContent(domNode);

        return href === '/logout' ? (
          <ButtonLogout />
        ) : (
          <Link href={href}>{textContent}</Link>
        );
      }

      // if (
      //   domNode &&
      //   'attribs' in domNode &&
      //   domNode.attribs['cz-shortcut-listen']
      // ) {
      //   delete domNode.attribs['cz-shortcut-listen']; // Remove the attribute
      // }

      return domNode;
    },
  });

  return <>{parsedContent}</>;
}

// Helper function to get text content safely
const extractTextContent = (domNode: DOMNode): string => {
  if (
    domNode &&
    'children' in domNode &&
    domNode.children[0] &&
    'data' in domNode.children[0] &&
    domNode.children[0].data
  ) {
    return domNode.children[0].data;
  }
  return '';
};
