import { useState } from "react";
import "./App.css";
import { ConditionalMatch } from "@dx-kit/react-conditional-match";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConditionalMatch fallback={<div>fallback</div>}>
      <ConditionalMatch.Render when={false}>
        <div>Child 1</div>
      </ConditionalMatch.Render>
      <ConditionalMatch.Render when={false}>
        <div>Child 2</div>
      </ConditionalMatch.Render>
      <div>Will not render</div>
    </ConditionalMatch>
  );
}

export default App;
