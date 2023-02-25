# Conditional Match

A lightweight and flexible React component for conditional rendering that supports multiple matches and fallbacks.

## Features

- **Supports multiple matches**: Use the <code>ConditionalMatch </code>component to render multiple children based on the conditions you define. The component will render all children that match the condition.
- **Supports fallback**: Use the "fallback" prop to provide a fallback for when none of the children match the condition.
- **Lightweight and flexible**: The ConditionalMatch component is small and can be easily integrated into any React project. Use it to implement complex rendering logic without having to write complex conditional logic with ternaries or if-else blocks.

## Installation

## Usage

To use the ConditionalMatch component in your React project, you need to import it and use it in your JSX code.

```typescript
import React, { useState } from "react";
import { ConditionalMatch } from "conditional-match";

const MyComponent = () => {
  const [val, setVal] = useState(2);

  return (
    <ConditionalMatch fallback={<div>No matches found.</div>}>
      <ConditionalMatch.Render when={val < 5}>{val} is less than 5</ConditionalMatch.Render>
      <ConditionalMatch.Render when={val === 5}>{val} is equal than 5 </ConditionalMatch.Render>
      <ConditionalMatch.Render when={val > 5}>{val} is greater than 5 </ConditionalMatch.Render>
    </ConditionalMatch>
  );
};
```
