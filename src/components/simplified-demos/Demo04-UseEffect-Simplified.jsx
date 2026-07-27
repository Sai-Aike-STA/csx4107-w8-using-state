import { useEffect, useState } from 'react'

const simpleItems = [
  { id: 1, name: 'Keyboard', category: 'Hardware' },
  { id: 2, name: 'Monitor', category: 'Hardware' },
  { id: 3, name: 'IDE License', category: 'Software' },
  { id: 4, name: 'Antivirus', category: 'Software' },
  { id: 5, name: 'Router', category: 'Networking' },
  { id: 6, name: 'Network Switch', category: 'Networking' },
]

const simpleCategories = ['Hardware', 'Software', 'Networking']

function Demo04UseEffectSimplified() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [shownItems, setShownItems] = useState(simpleItems)
  const [timerText, setTimerText] = useState('Timer is waiting...')

  // No array: this runs after every render.
  useEffect(() => {
    console.log('The simplified component rendered.')
  })

  // Empty array: this is set up after the first render.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimerText('Timer finished.')
    }, 3000)

    // Cleanup stops the timer when it is no longer needed.
    return () => clearTimeout(timerId)
  }, [])

  // Dependency array: this runs when selectedCategory changes.
  useEffect(() => {
    if (selectedCategory === 'All') {
      setShownItems(simpleItems)
    } else {
      setShownItems(
        simpleItems.filter(
          (item) => item.category === selectedCategory,
        ),
      )
    }
  }, [selectedCategory])

  return (
    <section className="demo-section">
      <h2>Simplified Demo 04: useEffect</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="All">All categories</option>
          {simpleCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <p>{timerText}</p>

        <ul>
          {shownItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
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
        <h3>Think of useEffect as “after render” code</h3>
        <pre>
          <code>{`useEffect(() => {
  // Code runs after rendering.
}, [dependencies])`}</code>
        </pre>
        <p>
          A side effect is work outside React&apos;s normal UI calculation.
          Examples are API requests, browser changes, listeners, and timers.
        </p>

        <h3>The three dependency rules</h3>
        <ul>
          <li>No array means after every render.</li>
          <li>
            <code>[]</code> means after the component is first added.
          </li>
          <li>
            <code>[value]</code> means initially and when that value changes.
          </li>
        </ul>

        <h3>Why the category list changes</h3>
        <p>
          The selected category is in the dependency array. When it changes,
          the effect uses <code>filter</code> to create the displayed list.
        </p>

        <h3>Cleanup</h3>
        <pre>
          <code>{`return () => clearTimeout(timerId)`}</code>
        </pre>
        <p>
          Cleanup stops work that the effect started. Timers, listeners, and
          subscriptions commonly need cleanup.
        </p>

        <h3>Async rule</h3>
        <p>
          The effect callback should not be <code>async</code>. Create an async
          function inside the effect, then call that function.
        </p>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo04UseEffectSimplified
