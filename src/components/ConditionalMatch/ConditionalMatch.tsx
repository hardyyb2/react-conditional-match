import { Children, Fragment, ReactNode, useMemo } from "react";

import { Render } from "./components/Render";

export interface ConditionalMatchProps {
  /** The fallback element to render if no children match the condition */
  fallback: ReactNode;
  /** The children to search for a matching condition */
  children?: JSX.Element | JSX.Element[] | null;
  /**  Whether to render all matching children (if true) or only the first matching child (if false) */
  multiMatch?: boolean;
}

const ConditionalMatch = ({ fallback, children = null, multiMatch = false }: ConditionalMatchProps): JSX.Element => {
  const matchedChildren = useMemo(() => {
    const childrenToRender: JSX.Element[] = [];

    Children.forEach(children, (child) => {
      if (child?.type !== Render || (!multiMatch && childrenToRender?.length >= 1) || !child?.props?.when) {
        return;
      }
      childrenToRender.push(child);
    });

    return childrenToRender;
  }, [children, multiMatch]);

  return <Fragment>{matchedChildren?.length ? matchedChildren : fallback}</Fragment>;
};

ConditionalMatch.Render = Render;
export { ConditionalMatch };
