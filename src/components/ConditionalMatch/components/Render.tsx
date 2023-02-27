import React from "react";

type RenderProps<T> = {
  /** The condition to determine whether to render the children */
  when: T | undefined | null | boolean;
  /** The children to render if the condition is true */
  children: React.ReactNode;
};

function Render<T>({ children, when }: RenderProps<T>): JSX.Element | null {
  if (!when) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export { Render };
