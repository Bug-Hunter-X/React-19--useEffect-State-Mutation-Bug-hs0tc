# React 19: useEffect State Mutation Bug

This repository demonstrates a common error in React 19 when working with the `useEffect` hook: directly modifying state variables instead of using their corresponding setter functions.

## Bug Description
The bug occurs when we attempt to update the state variable `count` directly within the `useEffect` hook.  This bypasses React's state update mechanism, preventing React from re-rendering the component and reflecting the change in the UI. The code in `bug.js` demonstrates this incorrect approach.

## Solution
The correct way to update state variables is to always utilize the setter function (e.g., `setCount`).  The `bugSolution.js` file showcases the corrected code.  This ensures React is aware of the state change and triggers the necessary re-render.

## How to Reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the unexpected behavior in `bug.js` compared to the correct behavior in `bugSolution.js`.