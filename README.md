# Web Dev Week 8

This is a practice repo for week8 of CSX4107 Web Dev. It is not an assignment submission.  
Practice: **Using State**

Local repo name: `csx4107-w8-using-state`

## What this repo demonstrates

The app contains three explained examples:

1. `Demo01-Counter.jsx` shows how `useState` remembers a number and how a setter updates the UI.
2. `Demo02-ControlledInput.jsx` shows a controlled input whose value is stored in state.
3. `Demo03-ItemList.jsx` shows how to add with the spread operator, modify with `map`, delete with `filter`, and render an array.

Each example has a working demo followed by notes that explain the important code, similar to the Week 5 jQuery reference demos.

## Main state pattern

```jsx
const [value, setValue] = useState(initialValue)
```

- `value` is the current state.
- `setValue` changes the state and asks React to render again.
- `initialValue` is used on the first render.

When a new value depends on the previous value, a functional update is used:

```jsx
setCount((previousCount) => previousCount + 1)
```

## Run the practice app

```bash
npm install
npm run dev
```

## Build the static app

```bash
npm run build
```
