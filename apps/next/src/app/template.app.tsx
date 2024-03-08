'use client'

import { useEffect } from "react"

export default function TemplateApp({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log('APP INITIAL LOAD');
  }, []);

  return (
    <>
      {children}
    </>
  )
}