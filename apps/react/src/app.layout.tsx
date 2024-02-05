import { FC, ReactNode, Suspense, useMemo } from 'react';
import htmlReactParser, { HTMLReactParserOptions } from 'html-react-parser';
import { ContextProps } from './types';
import { systemBase } from './layouts';

interface IProps extends ContextProps {
  component: FC<ContextProps>;
}

export function Layout({ component: Component, ...props }: IProps) {
  // Assume template is a string representing your HTML template
  //const template = "<div><div id='jsx_content'></div></div>";
  const template = systemBase;

  /// Memoize the options objects
  const mainContentOptions: HTMLReactParserOptions = useMemo(
    () => ({
      replace: (domNode) => {
        if (domNode && 'attribs' in domNode) {
          if (domNode.attribs.id === 'jsx_content') {
            return <Component {...props} />;
          }
        }
        return domNode;
      },
    }),
    [Component, props]
  );

  // HTMLReactParserOptions for parsing the fallback content
  const fallbackOptions: HTMLReactParserOptions = useMemo(
    () => ({
      replace: (domNode) => {
        if (domNode && 'attribs' in domNode) {
          if (domNode.attribs.id === 'jsx_content') {
            return <div>...loading</div>;
          }
        }
        return domNode;
      },
    }),
    []
  );

  // Parse the main content and fallback content separately
  const parsedTemplate: ReactNode = htmlReactParser(
    template,
    mainContentOptions
  );
  const fallbackTemplate: ReactNode = htmlReactParser(
    template,
    fallbackOptions
  );

  return <Suspense fallback={fallbackTemplate}>{parsedTemplate}</Suspense>;
}
