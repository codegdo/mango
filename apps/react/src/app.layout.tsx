import { FC, Suspense } from "react";
import { ContextProps } from "./types";

interface IProps extends ContextProps {
  component: FC<ContextProps>;
}

export function Layout({ component: Component, ...props }: IProps) {
  return (
    <Suspense fallback={'...loading'}>
      <Component {...props} />
    </Suspense>
  );
}