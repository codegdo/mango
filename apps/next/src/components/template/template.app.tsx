'use client'

import { PropsWithChildren, useEffect } from "react"

export function TemplateApp({ children }: PropsWithChildren) {

  useEffect(() => {
    console.log('APP INITIAL LOAD');
  }, []);

  return (
    <>
      {children}
    </>
  )
}