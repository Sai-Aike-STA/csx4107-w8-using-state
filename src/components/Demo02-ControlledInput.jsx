import { useState } from 'react'

function Demo02ControlledInput() {
  // State is the single source of truth for the input and the output.
  const [firstname, setFirstname] = useState('')

  function onFirstnameChange(event) {
    // event.target is the input. Its value property contains the current text.
    setFirstname((previousFirstname) => event.target.value)
  }

  return (
    <section className="demo-section">
      <h2>Demo 02: Controlled Input State</h2>
      <p>The text below changes while the input value changes.</p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>
        <div className="input-form">
          <label htmlFor="firstname">First name</label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={onFirstnameChange}
            placeholder="Enter a first name"
          />
        </div>

        <p className="live-output">
          Current first name: <strong>{firstname || '(empty)'}</strong>
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
          This example is a <strong>controlled input</strong>. A controlled
          input gets its displayed value from React state. When the user types,
          an event handler saves the new value back into state.
        </p>

        <h3>Create state for the text</h3>
        <pre>
          <code>{`const [firstname, setFirstname] = useState('')`}</code>
        </pre>
        <p>
          The empty string is the initial state. This means the input starts
          empty. <code>firstname</code> holds the current text, and{' '}
          <code>setFirstname</code> changes that text.
        </p>

        <h3>Connect the input to state</h3>
        <pre>
          <code>{`<input
  value={firstname}
  onChange={onFirstnameChange}
/>`}</code>
        </pre>
        <p>
          The <code>value</code> prop tells the input what text to display. The
          value comes from <code>firstname</code> state.
        </p>
        <p>
          The <code>onChange</code> prop gives React a function to run whenever
          the user changes the input. A prop is a value passed to an element or
          component.
        </p>

        <h3>Read the change event</h3>
        <pre>
          <code>{`function onFirstnameChange(event) {
  setFirstname((previousFirstname) => event.target.value)
}`}</code>
        </pre>
        <p>
          React passes an event object to the function. This object contains
          details about the change:
        </p>
        <ul>
          <li>
            <code>event.target</code> is the input that changed.
          </li>
          <li>
            <code>event.target.value</code> is the text now inside that input.
          </li>
          <li>
            <code>setFirstname(...)</code> saves the text in state.
          </li>
        </ul>
        <p>
          The practice notes use the functional setter form. The parameter{' '}
          <code>previousFirstname</code> receives the old value. This example
          does not need the old value because the new value comes directly from
          the input event, but the functional form still works.
        </p>

        <h3>Use the same state in another place</h3>
        <pre>
          <code>{`<strong>{firstname || '(empty)'}</strong>`}</code>
        </pre>
        <p>
          The input and the output both read the same <code>firstname</code>
          state. This makes state the <strong>single source of truth</strong>.
          That term means one value is the main trusted copy of the data.
        </p>
        <p>
          The <code>||</code> operator uses <code>'(empty)'</code> when{' '}
          <code>firstname</code> is an empty string.
        </p>

        <h3>How one typed letter moves through the code</h3>
        <ol className="process-list">
          <li>The user types a letter.</li>
          <li>The input creates a change event.</li>
          <li>
            React calls <code>onFirstnameChange</code> with that event.
          </li>
          <li>
            The function reads <code>event.target.value</code>.
          </li>
          <li>The setter saves the new text in state.</li>
          <li>React renders again and updates both the input and the output.</li>
        </ol>

        <h3>Why state is needed here</h3>
        <p>
          The text must appear in the rendered UI and change as the user types.
          State is designed for data that changes the UI. A normal variable
          would not tell React to render again.
        </p>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo02ControlledInput
