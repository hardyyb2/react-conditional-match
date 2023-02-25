import { Children, useMemo } from "react";
import { Render } from "./components/Render";

interface ConditionalMatchProps {
  fallback: JSX.Element;
  children?: JSX.Element | JSX.Element[];
}

const ConditionalMatch = ({ fallback, children }: ConditionalMatchProps): JSX.Element => {
  const matchedChild = useMemo(() => {
    let childToRender: JSX.Element | null = null;

    Children.forEach(children, (child) => {
      if (childToRender) return child;

      if (child?.props?.when) {
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
