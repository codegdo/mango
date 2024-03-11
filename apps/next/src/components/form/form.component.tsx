import { FormProps, useFormState } from "./hooks";

export function Form(props: FormProps) {
  const state = useFormState(props);
  return (
    <form>
      FORM
      <button type='button'>Login</button>
    </form>
  );
}
