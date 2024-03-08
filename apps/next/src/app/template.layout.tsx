'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import htmlReactParser, { DOMNode } from 'html-react-parser';

import { useLayout } from '@/hooks';
import { ButtonLogout } from '@/components';

interface Params {
  module?: string;
  view?: string;
}

const templateLayout = (
  Component: React.FC<any>,
  params: Params
): React.FC => {

  const Template: React.FC = (props) => {
    const layoutContent = useLayout(params);
    //const currentPage = usePathname();

    const parsedContent = htmlReactParser(layoutContent, {
      replace: (domNode) => {
        if (
          domNode &&
          'attribs' in domNode &&
          domNode.attribs.id === 'jsx_content'
        ) {
          return <Component {...props} {...params} />;
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

    return <>{parsedContent}</>;
  };

  return Template;
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

export default templateLayout;
