import { render, screen } from "@testing-library/react";

import { Render } from "./Render";

describe("Render", () => {
  it("renders nothing when the condition is falsy", () => {
    render(
      <Render when={false}>
        <div>Child</div>
      </Render>,
    );
    expect(screen.queryByText("Child")).not.toBeInTheDocument();
  });

  test("renders the child when the condition is truthy", () => {
    render(
      <Render when={true}>
        <div>Child</div>
      </Render>,
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
