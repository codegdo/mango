'use client';
import React from 'react';
import htmlReactParser, { DOMNode } from 'html-react-parser';
import Link from 'next/link';

import { useLayout } from '@/hooks';
import { ButtonLogout } from '@/components';
import Layout, { Params } from '../layout';
import { usePathname } from 'next/navigation';

const pageLayout = (
  Component: React.ComponentType<any>,
  params: Params
): React.FC => {
  const WrappedComponent: React.FC = (props) => {
    const layoutContent = useLayout(params);
    const currentPage = usePathname();

    const parsedContent = htmlReactParser(layoutContent, {
      replace: (domNode) => {
        if (
          domNode &&
          'attribs' in domNode &&
          domNode.attribs.id === 'jsx_content'
        ) {
          return <Component {...props} />;
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

        if (
          domNode &&
          'attribs' in domNode &&
          domNode.attribs['cz-shortcut-listen']
        ) {
          delete domNode.attribs['cz-shortcut-listen']; // Remove the attribute
        }

        return domNode;
      },
    });

    console.log('PAGE LAYOUT', currentPage);

    return <Layout params={params}>{parsedContent}</Layout>;
  };

  return WrappedComponent;
};

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

export default pageLayout;
