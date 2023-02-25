import React, { Children, useMemo } from "react";
import { Render } from "./components/Render";

interface ConditionalMatchProps {
  /** The fallback element to render if no children match the condition */
  fallback: JSX.Element;
  /** The children to search for a matching condition */
  children?: JSX.Element | JSX.Element[] | null;
  /**  Whether to render all matching children (if true) or only the first matching child (if false) */
  multiMatch?: boolean;
}

const ConditionalMatch = ({ fallback, children = null, multiMatch = false }: ConditionalMatchProps): JSX.Element => {
  const matchedChildren = useMemo(() => {
    const childrenToRender: JSX.Element[] = [];

    Children.forEach(children, (child) => {
      if (!multiMatch && childrenToRender?.length >= 1) {
        return child;
      }

      if (child?.props?.when) {
        childrenToRender.push(child);
      }

      return child;
    });

    return childrenToRender;
  }, [children, multiMatch]);

  if (matchedChildren?.length) {
    return <React.Fragment>{matchedChildren}</React.Fragment>;
  }

  return fallback;
};

const ConditionalMatchCompound = Object.assign(ConditionalMatch, {
  Render,
});

export { ConditionalMatchCompound as ConditionalMatch };
