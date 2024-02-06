import { FC, ReactNode, Suspense, useMemo } from 'react';
import htmlReactParser from 'html-react-parser';
import { ContextProps } from './types';
import { systemBase } from './layouts';

interface LayoutProps extends ContextProps {
  component: FC<ContextProps>;
}

export const Layout: FC<LayoutProps> = ({ component: Component, ...props }) => {
  const template = systemBase;

  const generateContentTemplate = (fallback: boolean): ReactNode => {
    return htmlReactParser(template, {
      replace: (domNode) => {
        if (domNode && 'attribs' in domNode && domNode.attribs.id === 'jsx_content') {
          return fallback ? <div>...loading</div> : <Component {...props} />;
        }
        return domNode;
      },
    });
  };

  const contentTemplate: ReactNode = useMemo(() => generateContentTemplate(false), [Component, props, template]);
  const fallbackTemplate: ReactNode = useMemo(() => generateContentTemplate(true), [template]);

  return <Suspense fallback={fallbackTemplate}>{contentTemplate}</Suspense>;
};
