import { useState } from 'react'

function Demo02ControlledInputSimplified() {
  // State saves the text from the input.
  const [firstname, setFirstname] = useState('')

  function changeFirstname(event) {
    // event.target.value is the text currently inside the input.
    setFirstname((oldFirstname) => event.target.value)
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 02: Controlled Input</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>
        <div className="input-form">
          <label htmlFor="simple-firstname">First name</label>
          <input
            id="simple-firstname"
            type="text"
            value={firstname}
            onChange={changeFirstname}
          />
        </div>

        <p>Current first name: {firstname || '(empty)'}</p>
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
        <h3>What controlled input means</h3>
        <p>
          A controlled input gets its value from React state. State is the main
          saved copy of the text.
        </p>

        <pre>
          <code>{`<input
  value={firstname}
  onChange={changeFirstname}
/>`}</code>
        </pre>

        <ul>
          <li>
            <code>value</code> puts the state text in the input.
          </li>
          <li>
            <code>onChange</code> runs when the user types.
          </li>
          <li>
            <code>event.target.value</code> gives the new input text.
          </li>
          <li>
            <code>setFirstname</code> saves that text in state.
          </li>
        </ul>

        <h3>What happens after one letter is typed</h3>
        <ol>
          <li>The input creates a change event.</li>
          <li>The handler reads the input value.</li>
          <li>The setter saves the value.</li>
          <li>React renders again and shows the new text.</li>
        </ol>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo02ControlledInputSimplified
