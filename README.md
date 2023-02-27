# Conditional Match

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dx-kit/react-conditional-match@latest)](https://bundlephobia.com/package/@dx-kit/react-conditional-match)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight and flexible React component for conditional rendering that supports multiple matches and fallbacks.

[DEMO](https://stackblitz.com/edit/vitejs-vite-sz2s9x)

## Features

- **Supports multiple matches**: Use the <code>ConditionalMatch </code>component to render multiple children based on the conditions you define. The component will render all children that match the condition.
- **Supports fallback**: Use the "fallback" prop to provide a fallback for when none of the children match the condition.
- **Lightweight and flexible**: The ConditionalMatch component is small and can be easily integrated into any React project. Use it to implement complex rendering logic without having to write complex conditional logic with ternaries or if-else blocks.

## Installation

You can install the <code>@dx-kit/react-conditional-match</code> component using npm or yarn or pnpm:

```
npm i @dx-kit/react-conditional-match
```

or

```
yarn add @dx-kit/react-conditional-match
```

or

```
pnpm i @dx-kit/react-conditional-match
```

## Usage

> **See more examples here** - [https://stackblitz.com/edit/vitejs-vite-sz2s9x](https://stackblitz.com/edit/vitejs-vite-sz2s9x)

To use the ConditionalMatch component in your React project, you need to import it and use it in your JSX code.

```typescript
import React, { useState } from "react";
import { ConditionalMatch } from "@dx-kit/react-conditional-match";

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

In this example, the ConditionalMatch component will render the first child that matches one of the conditions. If none of the children match the condition, the component will render the fallback element.

### Usage compared with _if-else_ and _ternary_

| if-else                          | ternary                          | ConditionalMatch                                    |
| -------------------------------- | -------------------------------- | --------------------------------------------------- |
| ![if-else](./assets/if-else.png) | ![ternary](./assets/ternary.png) | ![ConditionalMatch](./assets/conditional-match.png) |

## Props

### _ConditionalMatch_

| Prop name  | Type                                   | Default value | Description                                                               |
| ---------- | -------------------------------------- | ------------- | ------------------------------------------------------------------------- |
| fallback   | `React.ReactNode`                      | -             | The fallback element to render if no children match the condition         |
| children   | `JSX.Element \| JSX.Element[] \| null` | `null`        | The children to search for a matching condition                           |
| multiMatch | `boolean`                              | `false`       | Whether to render all matching children (if true) or only the first match |

### _Render_

| Prop name | Type                                | Description                                               |
| --------- | ----------------------------------- | --------------------------------------------------------- |
| when      | `T \| undefined \| null \| boolean` | The condition to determine whether to render the children |
| children  | `React.ReactNode`                   | The children to render if the condition is true           |

## Contributing

If you find a bug or have an idea for a new feature, feel free to submit an issue or pull request on the GitHub repository: [https://github.com/hardyyb2/dx-kit.git](https://github.com/hardyyb2/dx-kit.git)
