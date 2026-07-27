# Web Dev Week 8

This is a practice repo for week8 of CSX4107 Web Dev. It is not an assignment submission.  
Practice: **Using State**

Local repo name: `csx4107-w8-using-state`

GitHub repository: https://github.com/Sai-Aike-STA/csx4107-w8-using-state

Link to hosted site: https://sai-aike-sta.github.io/csx4107-w8-using-state/

## What this repo demonstrates

The app contains four explained examples:

1. `Demo01-Counter.jsx` shows how `useState` remembers a number and how a setter updates the UI.
2. `Demo02-ControlledInput.jsx` shows a controlled input whose value is stored in state.
3. `Demo03-ItemList.jsx` shows how to add with the spread operator, modify with `map`, delete with `filter`, and render an array.
4. `Demo04-UseEffect.jsx` shows the three dependency rules, category filtering, side effects, cleanup, and the correct async pattern.

Each example has a working demo followed by notes that explain the important code, similar to the Week 5 jQuery reference demos.

## Simplified demo versions

Beginner-friendly versions are available in `src/components/simplified-demos`:

1. `Demo01-Counter-Simplified.jsx`
2. `Demo02-ControlledInput-Simplified.jsx`
3. `Demo03-ItemList-Simplified.jsx`
4. `Demo04-UseEffect-Simplified.jsx`

These files cover the same main concepts as the full demos, but they use simpler comments, shorter explanations, smaller code examples, and easier vocabulary. Technical terms are still included and explained in beginner-friendly language.

The main app renders the full demos. The simplified versions are alternative study files with shorter beginner-friendly explanations.

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

Pushing to `main` runs the GitHub Actions workflow and deploys the built `dist` directory to GitHub Pages.
