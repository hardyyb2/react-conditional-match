import { Fragment, ReactNode } from "react";

type RenderProps<T> = {
  /** The condition to determine whether to render the children */
  when: T | undefined | null | boolean;
  /** The children to render if the condition is true */
  children: ReactNode;
};

export const Render = <T,>({ children, when }: RenderProps<T>): JSX.Element | null =>
  when ? <Fragment>{children}</Fragment> : null;
