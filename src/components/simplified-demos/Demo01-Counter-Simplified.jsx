import { useState } from 'react'

function Demo01CounterSimplified() {
  // State is React's memory. The count starts at 0.
  const [count, setCount] = useState(0)

  function addOne() {
    // The new count uses the latest saved count.
    setCount((oldCount) => oldCount + 1)
  }

  function addTwiceWrong() {
    // Both lines use the same old count, so this adds only 1.
    setCount(count + 1)
    setCount(count + 1)
  }

  function addTwiceRight() {
    // Each function receives the result from the update before it.
    setCount((oldCount) => oldCount + 1)
    setCount((oldCount) => oldCount + 1)
  }

  function resetCount() {
    setCount(0)
  }

  function setSameValue() {
    // React can skip the render because the value did not change.
    setCount(count)
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 01: Counter</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>
        <p>Count: {count}</p>

        <div className="button-row">
          <button type="button" onClick={addOne}>
            Add 1
          </button>
          <button type="button" onClick={addTwiceWrong}>
            Add twice, direct
          </button>
          <button type="button" onClick={addTwiceRight}>
            Add twice, functional
          </button>
          <button type="button" onClick={resetCount}>
            Reset
          </button>
          <button type="button" onClick={setSameValue}>
            Set same value
          </button>
        </div>
      </div>
      {/* ========== WORKING DEMO ENDS HERE ========== */}

      <div className="demo-explanation-divider">
        <p>
          <strong>Demo ends here</strong>
        </p>
        <hr />
        <p>
          <strong>Simple explanation starts below</strong>
        </p>
      </div>

      {/* ========== SIMPLE EXPLANATION STARTS HERE ========== */}
      <div className="notes-box">
        <h3>Think of state as React&apos;s memory</h3>
        <pre>
          <code>{`const [count, setCount] = useState(0)`}</code>
        </pre>
        <ul>
          <li>
            <code>count</code> is the saved number.
          </li>
          <li>
            <code>setCount</code> changes the number.
          </li>
          <li>
            <code>0</code> is the starting number.
          </li>
        </ul>

        <h3>Changing state updates the page</h3>
        <p>
          Calling <code>setCount</code> asks React to render again. A render
          means React runs the component again and updates the page.
        </p>

        <h3>Use a functional update when the old value is needed</h3>
        <pre>
          <code>{`setCount((oldCount) => oldCount + 1)`}</code>
        </pre>
        <p>
          React may group updates together. This is called batching. The
          function receives the latest value, so two functional updates add 2
          correctly.
        </p>

        <h3>The main rule</h3>
        <p>
          Use state for a value that changes the UI. Do not put static values,
          calculated values, or DOM elements in state.
        </p>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo01CounterSimplified
