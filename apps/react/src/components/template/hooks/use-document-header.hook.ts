import { useEffect } from "react";

export const useDocumentHeader = (
  querySelector: string,
  updateFn: (element: Element) => void
): void => {
  useEffect(() => {
    const documentDefined = typeof document !== 'undefined';

    if (!documentDefined) return;

    const elements = document.querySelectorAll(querySelector);

    elements.forEach((element: Element) => {
      updateFn(element);
    });

  }, [querySelector, updateFn]);
};

// Function to add a new tag to the document header
export const useAddTagToDocumentHeader = (
  tagType: string,
  updateFn: (element: HTMLElement) => void
): void => {
  useEffect(() => {
    const documentDefined = typeof document !== 'undefined';
    if (!documentDefined) return;

    const existingTag = document.querySelector(tagType);

    if (existingTag) {
      updateFn(existingTag as HTMLElement);
    } else {
      const newTag = document.createElement(tagType);
      updateFn(newTag);
      document.head.appendChild(newTag);
    }
  }, []);
};


/*
import { useEffect } from "react";

const useDocumentHeader = (
  querySelector: string,
  updateFn: (element: Element) => void
): void => {
  useEffect(() => {
    const documentDefined = typeof document !== 'undefined';
    if (!documentDefined) return;

    const elements = document.querySelectorAll(querySelector);
    elements.forEach((element: Element) => {
      updateFn(element);
    });
  }, [querySelector, updateFn]);
};

export default useDocumentHeader;
*/