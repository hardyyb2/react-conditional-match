import React from "react";

import { Render } from "./components/Render";

interface ConditionalMatchProps {
  fallback: JSX.Element;
  children: JSX.Element;
}

const ConditionalMatch = ({
  fallback,
  children,
}: ConditionalMatchProps): JSX.Element => {
  const matchedChild = React.useMemo(() => {
    let childToRender: JSX.Element | null = null;

    React.Children.forEach(children, (child) => {
      if (childToRender) return child;

      if (child.props?.when) {
        childToRender = child;
      }

      return child;
    });

    return childToRender;
  }, [children]);

  return matchedChild ?? fallback;
};

const ConditionalMatchCompound = Object.assign(ConditionalMatch, {
  Render,
});

export { ConditionalMatchCompound as ConditionalMatch };
