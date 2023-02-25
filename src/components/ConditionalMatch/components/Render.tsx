type RenderProps = {
  when: undefined | null | false;
  children: JSX.Element;
};

const Render = ({ when, children }: RenderProps): JSX.Element | null => {
  if (!when) {
    return null;
  }

  return children;
};

export { Render };
