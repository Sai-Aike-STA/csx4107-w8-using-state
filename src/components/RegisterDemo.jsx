import { useState } from 'react'

function RegisterDemo() {
  // State stores the input value and keeps the page output in sync.
  const [firstname, setFirstname] = useState('')

  function onFirstnameChange(event) {
    setFirstname(event.target.value)
  }

  return (
    <section className="demo-section">
      <h2>Demo 02: Controlled Input State</h2>
      <p>The text below changes while the input value changes.</p>

      <div className="demo-box">
        <h3>Working demo</h3>
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

      <div className="notes-box">
        <h3>Main idea</h3>
        <p>
          This is a controlled input. React state is the source of the input
          value and the displayed output.
        </p>

        <h3>Store the value</h3>
        <pre>
          <code>{`const [firstname, setFirstname] = useState('')`}</code>
        </pre>
        <p>The empty string makes the input empty on the first render.</p>

        <h3>Connect the input to state</h3>
        <pre>
          <code>{`<input
  value={firstname}
  onChange={onFirstnameChange}
/>`}</code>
        </pre>
        <p>
          <code>value</code> reads from state. <code>onChange</code> runs every
          time the input changes.
        </p>

        <h3>Save each new value</h3>
        <pre>
          <code>{`function onFirstnameChange(event) {
  setFirstname(event.target.value)
}`}</code>
        </pre>
        <p>
          <code>event.target</code> is the input element. Its{' '}
          <code>value</code> contains the current text. The setter stores that
          text and causes a new render.
        </p>
      </div>
    </section>
  )
}

export default RegisterDemo
