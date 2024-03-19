import { useEffect, useRef } from "react";

export const useTitle = (title: string) => {
  const isDocumentDefined = typeof document !== 'undefined';
  const originalTitle = useRef<string | null>(isDocumentDefined ? '' : null);

  useEffect(() => {
    if (!isDocumentDefined || !document) return;

    if (document.title !== title) document.title = title;

    // Capture the initial value of originalTitle.current
    const initialOriginalTitle = originalTitle.current;

    return () => {
      if (initialOriginalTitle && document.title !== initialOriginalTitle) {
        document.title = initialOriginalTitle;
      }
    };
  }, [title, isDocumentDefined]);
};
