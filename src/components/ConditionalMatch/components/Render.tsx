type RenderProps = {
  when: undefined | null | boolean;
  children: JSX.Element;
};

const Render = ({ when, children }: RenderProps): JSX.Element | null => {
  if (!when) {
    return null;
  }

  return children;
};

export { Render };
