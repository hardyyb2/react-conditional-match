type RenderProps = {
  /** The condition to determine whether to render the children */
  when: undefined | null | boolean;
  /** The children to render if the condition is true */
  children: JSX.Element;
};

const Render = ({ when, children }: RenderProps): JSX.Element | null => {
  if (!when) {
    return null;
  }

  return children;
};

export { Render };
