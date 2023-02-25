import React from "react";
import { render, screen } from "@testing-library/react";

import { ConditionalMatch } from "./ConditionalMatch";

describe("ConditionalMatch", () => {
  it("renders fallback when no children are passed", () => {
    render(<ConditionalMatch fallback={<div>Fallback</div>} />);
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("does not render non 'Render' children ", () => {
    render(
      <ConditionalMatch fallback={<div>Fallback</div>}>
        <div>Child1</div>
      </ConditionalMatch>,
    );
    expect(screen.queryByText("Child1")).not.toBeInTheDocument();
  });

  it("renders fallback when no child matches the condition", () => {
    render(
      <ConditionalMatch fallback={<div>Fallback</div>}>
        <ConditionalMatch.Render when={false}>
          <div>Child 1</div>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={false}>
          <div>Child 2</div>
        </ConditionalMatch.Render>
      </ConditionalMatch>,
    );
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("renders first child that matches the condition", () => {
    render(
      <ConditionalMatch fallback={<div>Fallback</div>}>
        <ConditionalMatch.Render when={false}>
          <div>Child 1</div>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={true}>
          <div>Child 2</div>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={true}>
          <div>Child 3</div>
        </ConditionalMatch.Render>
      </ConditionalMatch>,
    );
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("updates when the condition of a child changes", () => {
    const { rerender } = render(
      <ConditionalMatch fallback={<div>Fallback</div>}>
        <ConditionalMatch.Render when={false}>
          <div>Child 1</div>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={true}>
          <div>Child 2</div>
        </ConditionalMatch.Render>
      </ConditionalMatch>,
    );
    expect(screen.getByText("Child 2")).toBeInTheDocument();

    rerender(
      <ConditionalMatch fallback={<div>Fallback</div>}>
        <ConditionalMatch.Render when={true}>
          <div>Child 1</div>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={false}>
          <div>Child 2</div>
        </ConditionalMatch.Render>
      </ConditionalMatch>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
  });
});
