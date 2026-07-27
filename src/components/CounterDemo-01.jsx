import { useState } from 'react'

function CounterDemo01() {
  // useState gives the component a value that lasts between renders.
  // A render happens when React runs the component to create or update the UI.
  const [count, setCount] = useState(0)

  function increaseCounter() {
    // The updater function receives the latest count and returns the next count.
    setCount((previousCount) => previousCount + 1)
  }

  function decreaseCounter() {
    setCount((previousCount) => previousCount - 1)
  }

  function resetCounter() {
    // A direct value is enough because reset does not depend on the old count.
    setCount(0)
  }

  function increaseTwiceWithDirectValues() {
    // Both lines read the same count from the current render.
    setCount(count + 1)
    setCount(count + 1)
  }

  function increaseTwiceWithUpdaterFunctions() {
    // Each updater receives the result of the update before it.
    setCount((previousCount) => previousCount + 1)
    setCount((previousCount) => previousCount + 1)
  }

  function setSameCount() {
    // React skips the re-render because the old and new values are equal.
    setCount(count)
  }

  return (
    <section className="demo-section">
      <h2>Demo 01: Counter State</h2>
      <p>The buttons update a number that React remembers.</p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>
        <p className="counter-value">{count}</p>

        <div className="button-row">
          <button type="button" onClick={increaseCounter}>
            Increase
          </button>
          <button type="button" onClick={decreaseCounter}>
            Decrease
          </button>
          <button type="button" className="secondary" onClick={resetCounter}>
            Reset
          </button>
          <button type="button" onClick={increaseTwiceWithDirectValues}>
            Direct +1 twice
          </button>
          <button type="button" onClick={increaseTwiceWithUpdaterFunctions}>
            Functional +1 twice
          </button>
          <button type="button" onClick={setSameCount}>
            Set the same value
          </button>
        </div>
        <p>
          Compare the two “twice” buttons. Direct +1 twice adds only 1.
          Functional +1 twice adds 2.
        </p>
      </div>
      {/* ========== WORKING DEMO ENDS HERE ========== */}

      <div className="demo-explanation-divider">
        <p>
          <strong>Working demo ends here</strong>
        </p>
        <hr />
        <p>
          <strong>Code explanation starts below</strong>
        </p>
      </div>

      {/* ========== CODE EXPLANATION STARTS HERE ========== */}
      <div className="notes-box">
        <h3>Code explanation starts here</h3>
        <p>
          This example uses state because the count changes over time and the
          new count must appear on the page.
        </p>

        <h3>What state means</h3>
        <p>
          State is data that belongs to a component and can change while the
          app is running. React remembers state between renders. A{' '}
          <strong>render</strong> happens when React runs the component function
          to work out what the UI should show.
        </p>
        <p>
          A normal local variable does not work for this job. It is created
          again each time the component function runs. Changing a normal
          variable also does not tell React to update the page.
        </p>

        <h3>Create state with the useState Hook</h3>
        <pre>
          <code>{`const [count, setCount] = useState(0)`}</code>
        </pre>
        <p>
          <code>useState</code> is a React <strong>Hook</strong>. A Hook is a
          React function that adds a feature, such as state, to a component.
        </p>
        <p>
          <code>useState(0)</code> returns an array with two items. The square
          bracket syntax takes those items out of the array:
        </p>
        <ul>
          <li>
            <code>count</code> is the current state value.
          </li>
          <li>
            <code>setCount</code> is the setter function that changes it.
          </li>
          <li>
            <code>0</code> is the initial value used on the first render.
          </li>
        </ul>
        <p>
          React uses the initial value only when the state is first created. A
          later render reads the saved state instead of starting at{' '}
          <code>0</code> again.
        </p>

        <h3>Connect a click to a function</h3>
        <pre>
          <code>{`<button onClick={increaseCounter}>
  Increase
</button>`}</code>
        </pre>
        <p>
          <code>onClick</code> is an event prop. An <strong>event</strong> is an
          action such as a click or a key press. React calls{' '}
          <code>increaseCounter</code> after the button is clicked.
        </p>
        <p>
          The code passes the function as <code>{'{increaseCounter}'}</code>. It
          does not write <code>increaseCounter()</code>, because that would call
          the function immediately during the render.
        </p>

        <h3>Update state from its previous value</h3>
        <pre>
          <code>{`setCount((previousCount) => previousCount + 1)`}</code>
        </pre>
        <p>
          The new count depends on the old count, so the setter receives an{' '}
          <strong>updater function</strong>. React gives the latest saved count
          to that function. The function returns the next count.
        </p>
        <p>
          React can <strong>batch</strong> state updates. Batching means React
          groups several updates before it renders. The updater function stays
          correct even when updates are batched.
        </p>

        <h3>Why two direct updates only add one</h3>
        <pre>
          <code>{`setCount(count + 1)
setCount(count + 1)`}</code>
        </pre>
        <p>
          A state setter schedules an update. It does not change{' '}
          <code>count</code> inside the code that is already running. Both lines
          read the same <code>count</code> from the current render and request
          the same next value.
        </p>
        <p>
          The notes describe the setter as asynchronous. In simple terms, this
          means the setter requests a future render instead of changing the
          current render&apos;s variable immediately.
        </p>
        <p>
          React batches the two requests. Since both request the same value,
          the final result is only one higher.
        </p>

        <h3>Why two functional updates add two</h3>
        <pre>
          <code>{`setCount((previousCount) => previousCount + 1)
setCount((previousCount) => previousCount + 1)`}</code>
        </pre>
        <p>
          React puts updater functions in order. The first updater adds one.
          The second updater receives that new result and adds one again.
        </p>

        <h3>Set a value directly</h3>
        <pre>
          <code>{`setCount(0)`}</code>
        </pre>
        <p>
          Reset always needs the value <code>0</code>. It does not need the old
          count, so it can pass the new value directly.
        </p>

        <h3>Setting the same value</h3>
        <pre>
          <code>{`setCount(count)`}</code>
        </pre>
        <p>
          React compares the old value and the requested new value with{' '}
          <code>Object.is</code>. <code>Object.is</code> is a JavaScript
          comparison method. If the values are the same, React can skip the
          re-render because the UI result would not change.
        </p>

        <h3>Other values that belong in state</h3>
        <p>State is useful for changing data such as:</p>
        <ul>
          <li>the currently logged-in user,</li>
          <li>form input text,</li>
          <li>a light or dark theme mode,</li>
          <li>a list loaded from an API, and</li>
          <li>any other value that changes the rendered UI.</li>
        </ul>
        <p>
          An API is a service that another program can request data from.
        </p>

        <h3>Values that should not be state</h3>
        <p>State should not contain:</p>
        <ul>
          <li>static data that never changes,</li>
          <li>values that can be calculated from existing state,</li>
          <li>values that can be calculated from props, or</li>
          <li>DOM elements, which should normally use a ref.</li>
        </ul>
        <p>
          A calculated value is also called a <strong>derived value</strong>.
          Saving the same information twice can let the copies become
          different, so the value should usually be calculated when needed.
        </p>

        <h3>Create and bind another state value</h3>
        <pre>
          <code>{`const [username, setUserName] = useState('user1')

return <p>{username}</p>`}</code>
        </pre>
        <p>
          A component can call <code>useState</code> more than once. JSX uses
          curly braces to insert a JavaScript value into the returned UI. This
          is called binding the value to the UI.
        </p>

        <h3>How one click moves through the code</h3>
        <ol className="process-list">
          <li>The user clicks the Increase button.</li>
          <li>
            React calls the <code>increaseCounter</code> event handler.
          </li>
          <li>The updater receives the latest count and returns count plus one.</li>
          <li>React saves the new state value.</li>
          <li>React renders the component again with the new count.</li>
          <li>The number on the page changes.</li>
        </ol>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default CounterDemo01
