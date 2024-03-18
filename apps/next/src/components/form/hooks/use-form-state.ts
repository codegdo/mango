'use client'
import { useRef } from "react";

export interface FormProps {}

export const useFormState = (props: FormProps) => {
  const ref = useRef();

  return {
    ref: ref.current
  }
}