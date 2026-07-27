import { useState } from 'react'

function CounterDemo() {
  // State stores the count between renders. The initial value is 0.
  const [count, setCount] = useState(0)

  function increaseCounter() {
    // The functional update safely uses the latest state value.
    setCount((previousCount) => previousCount + 1)
  }

  function decreaseCounter() {
    setCount((previousCount) => previousCount - 1)
  }

  function resetCounter() {
    setCount(0)
  }

  return (
    <section className="demo-section">
      <h2>Demo 01: Counter State</h2>
      <p>The buttons update a number that React remembers.</p>

      <div className="demo-box">
        <h3>Working demo</h3>
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
        </div>
      </div>

      <div className="notes-box">
        <h3>Main idea</h3>
        <p>
          A normal variable is recreated when a component renders. State keeps
          its value between renders and lets React update the page.
        </p>

        <h3>Create state</h3>
        <pre>
          <code>{`const [count, setCount] = useState(0)`}</code>
        </pre>
        <p>
          <code>count</code> is the current value. <code>setCount</code> is the
          function that changes it. <code>0</code> is the initial value.
        </p>

        <h3>Update from the previous value</h3>
        <pre>
          <code>{`setCount((previousCount) => previousCount + 1)`}</code>
        </pre>
        <p>
          React may batch several state updates. A functional update receives
          the latest value, so it is the safe form when the new value depends on
          the old value.
        </p>

        <h3>What happens after the setter runs</h3>
        <p>
          React stores the new count, runs the component again, and updates the
          part of the page that displays <code>count</code>.
        </p>
      </div>
    </section>
  )
}

export default CounterDemo
