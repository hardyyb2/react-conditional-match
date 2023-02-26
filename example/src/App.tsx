import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className='w-full / grid place-items-center gap-y-8 / text-2xl'>
      <div className='flex gap-4'>
        <button className='btn btn-secondary' onClick={handleDecrement}>
          - decrement
        </button>
        <button className='btn btn-primary' onClick={handleIncrement}>
          + increment
        </button>
      </div>
      <ConditionalMatch fallback={<div>{count} is greater than 10</div>}>
        <ConditionalMatch.Render when={count < 5}>{count} is less than 5</ConditionalMatch.Render>
        <ConditionalMatch.Render when={count === 5}>{count} is equal to 5</ConditionalMatch.Render>
        <ConditionalMatch.Render when={count > 5 && count < 10}>{count} is equal to 5</ConditionalMatch.Render>

        <div>Will not render since its not a `Render` component</div>
      </ConditionalMatch>
    </div>
  );
}

export default App;
