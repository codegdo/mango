import { FC, ReactNode, Suspense, useMemo } from 'react';
import htmlReactParser from 'html-react-parser';
import { ContextRouteProps } from './types';
import { systemBase } from './layouts';
//import { useTitle } from './hooks';
import { useAddTagToDocumentHeader, useDocumentHeader } from './hooks';

interface LayoutProps extends ContextRouteProps {
  component: FC<ContextRouteProps>;
}

export const Layout: FC<LayoutProps> = ({ component: Component, ...props }) => {
  const template = systemBase;
  const title = props.title || '';

  //useTitle(title);

  // Update the content of the title tag
  useDocumentHeader('title', (element: Element) => {
    element.textContent = title;
  });

  const generateTemplate = (fallback: boolean): ReactNode => {
    return htmlReactParser(template, {
      replace: (domNode) => {
        if (domNode && 'attribs' in domNode && domNode.attribs.id === 'jsx_content') {
          return fallback ? <div>...loading</div> : <Component {...props} />;
        }
        return domNode;
      },
    });
  };

  const contentTemplate: ReactNode = useMemo(() => generateTemplate(false), [Component, props, template]);
  const fallbackTemplate: ReactNode = useMemo(() => generateTemplate(true), [template]);

  return <Suspense fallback={fallbackTemplate}>{contentTemplate}</Suspense>;
};
