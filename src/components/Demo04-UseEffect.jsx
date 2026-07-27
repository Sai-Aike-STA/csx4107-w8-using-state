import { useEffect, useState } from 'react'

const items = [
  { id: 1, name: 'Mechanical Keyboard', price: 89.99, category: 'Hardware' },
  { id: 2, name: '27-inch 4K Monitor', price: 329, category: 'Hardware' },
  { id: 3, name: 'Wireless Mouse', price: 39.5, category: 'Hardware' },
  {
    id: 4,
    name: 'USB-C Docking Station',
    price: 124.99,
    category: 'Hardware',
  },
  { id: 5, name: 'IDE Pro License', price: 149, category: 'Software' },
  { id: 6, name: 'Antivirus Suite', price: 59.99, category: 'Software' },
  {
    id: 7,
    name: 'Project Management Tool',
    price: 12.99,
    category: 'Software',
  },
  {
    id: 8,
    name: 'Cloud Storage Subscription',
    price: 9.99,
    category: 'Software',
  },
  { id: 9, name: 'Wi-Fi 6 Router', price: 179.99, category: 'Networking' },
  {
    id: 10,
    name: '24-Port Gigabit Switch',
    price: 239,
    category: 'Networking',
  },
  {
    id: 11,
    name: 'Cat6 Ethernet Cable (10m)',
    price: 14.99,
    category: 'Networking',
  },
  {
    id: 12,
    name: 'Dual-Band Access Point',
    price: 129.99,
    category: 'Networking',
  },
]

const categories = ['Hardware', 'Software', 'Networking']

function Demo04UseEffect() {
  const [catSelect, setCatSelect] = useState(-1)
  const [displayItems, setDisplayItems] = useState(items)
  const [renderButtonCount, setRenderButtonCount] = useState(0)
  const [timerMessage, setTimerMessage] = useState('Waiting for timer...')

  // No dependency array means this effect runs after every render.
  useEffect(() => {
    console.log('Effect with no array: the component rendered.')
  })

  // An empty array means this effect is set up after the initial render.
  useEffect(() => {
    console.log('Effect with []: the component mounted.')

    const timerId = setTimeout(() => {
      setTimerMessage('The three-second timer finished.')
    }, 3000)

    // React calls this cleanup before the component is removed.
    return () => {
      clearTimeout(timerId)
      console.log('Cleanup: the timer was cleared.')
    }
  }, [])

  // This effect runs initially and whenever catSelect changes.
  useEffect(() => {
    console.log('Effect with [catSelect]: the category changed.')

    switch (catSelect) {
      case -1:
        setDisplayItems(items)
        break
      case 0:
        setDisplayItems(
          items.filter((item) => item.category === 'Hardware'),
        )
        break
      case 1:
        setDisplayItems(
          items.filter((item) => item.category === 'Software'),
        )
        break
      case 2:
        setDisplayItems(
          items.filter((item) => item.category === 'Networking'),
        )
        break
      default:
        setDisplayItems(items)
        break
    }

    // document.title is outside React, so changing it is a side effect.
    const oldTitle = document.title
    const selectedName =
      catSelect === -1 ? 'All Items' : categories[catSelect]
    document.title = `${selectedName} | useEffect Demo`

    return () => {
      document.title = oldTitle
    }
  }, [catSelect])

  function onSelectChange(event) {
    // Select values are strings, so Number converts the value to a number.
    setCatSelect(Number(event.target.value))
  }

  return (
    <section className="demo-section">
      <h2>Demo 04: useEffect</h2>
      <p>
        This demo follows the professor&apos;s category-filter example and also
        demonstrates dependency rules and cleanup.
      </p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>

        <label htmlFor="effect-categories">Category </label>
        <select
          id="effect-categories"
          value={catSelect}
          onChange={onSelectChange}
        >
          <option value="-1">All categories</option>
          {categories.map((category, index) => (
            <option key={category} value={index}>
              {category}
            </option>
          ))}
        </select>

        <p>{timerMessage}</p>

        <button
          type="button"
          onClick={() =>
            setRenderButtonCount((oldCount) => oldCount + 1)
          }
        >
          Cause another render
        </button>
        <p>Render button clicks: {renderButtonCount}</p>

        <p>
          Open the browser console to compare the three effect messages.
        </p>

        <ul>
          {displayItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - {item.category}
            </li>
          ))}
        </ul>
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
        <h3>What useEffect does</h3>
        <p>
          <code>useEffect</code> is a React Hook that runs code after a
          component renders. A Hook is a React function that gives a component
          a React feature.
        </p>
        <p>
          Effects are used to synchronize a component with an external system.
          An external system is something outside React&apos;s normal rendering
          work.
        </p>

        <h3>What a side effect means</h3>
        <p>
          A side effect is work that affects something outside the current
          component function. Common examples include:
        </p>
        <ul>
          <li>fetching data from an API,</li>
          <li>changing a browser DOM value such as `document.title`,</li>
          <li>adding an event listener or subscription,</li>
          <li>starting a timeout or interval, and</li>
          <li>connecting to a library outside React.</li>
        </ul>

        <h3>The two useEffect arguments</h3>
        <pre>
          <code>{`useEffect(() => {
  // Effect code runs after rendering.
}, [dependencies])`}</code>
        </pre>
        <ol>
          <li>
            The first argument is a callback function containing the effect
            code.
          </li>
          <li>
            The optional second argument is the dependency array. It controls
            when React runs the effect again.
          </li>
        </ol>

        <h3>Rule 1: No dependency array</h3>
        <pre>
          <code>{`useEffect(() => {
  console.log('The component rendered.')
})`}</code>
        </pre>
        <p>
          This runs after every render. It should be used carefully. If it
          updates state every time, it can create an infinite render loop.
        </p>

        <h3>Rule 2: Empty dependency array</h3>
        <pre>
          <code>{`useEffect(() => {
  console.log('The component mounted.')
}, [])`}</code>
        </pre>
        <p>
          This is set up after the initial render. Mount means the component was
          added to the page.
        </p>
        <p>
          In development, React Strict Mode may set up, clean up, and set up the
          effect again. This development check can make the console message
          appear twice. The production behavior is one setup after mounting.
        </p>

        <h3>Rule 3: Dependency values</h3>
        <pre>
          <code>{`useEffect(() => {
  // This runs initially and after catSelect changes.
}, [catSelect])`}</code>
        </pre>
        <p>
          React runs this effect after the initial render. It runs again only
          when <code>catSelect</code> has a different value.
        </p>

        <h3>The professor&apos;s category filter</h3>
        <pre>
          <code>{`useEffect(() => {
  switch (catSelect) {
    case -1:
      setDisplayItems(items)
      break
    case 0:
      setDisplayItems(
        items.filter(
          (item) => item.category === 'Hardware'
        )
      )
      break
    // Software and Networking follow the same pattern.
  }
}, [catSelect])`}</code>
        </pre>
        <p>
          Selecting a category changes <code>catSelect</code> state. That state
          is a dependency, so the effect runs. The effect filters the original
          array and saves the matching items in <code>displayItems</code> state.
        </p>
        <p>
          <code>filter</code> returns a new array containing only items that
          pass its test.
        </p>

        <h3>Changing document.title</h3>
        <pre>
          <code>{`document.title = 'Hardware | useEffect Demo'`}</code>
        </pre>
        <p>
          The browser document is outside React. Updating its title is a side
          effect. The demo changes the browser-tab title when the selected
          category changes.
        </p>

        <h3>Cleanup</h3>
        <pre>
          <code>{`useEffect(() => {
  const timerId = setTimeout(() => {
    console.log('Timer finished')
  }, 3000)

  return () => {
    clearTimeout(timerId)
  }
}, [])`}</code>
        </pre>
        <p>
          An effect can return a cleanup function. React calls cleanup before
          the component is removed. React also calls the previous cleanup
          before running the same effect again because a dependency changed.
        </p>
        <p>
          Cleanup prevents old timers, listeners, subscriptions, or connections
          from continuing after they are no longer needed.
        </p>

        <h3>Why the effect callback should not be async</h3>
        <pre>
          <code>{`// Do not write this:
useEffect(async () => {
  const data = await loadData()
}, [])

// Put the async function inside the effect:
useEffect(() => {
  async function getData() {
    const data = await loadData()
    console.log(data)
  }

  getData()
}, [])`}</code>
        </pre>
        <p>
          An async function always returns a Promise. React expects the effect
          callback to return either nothing or a cleanup function, not a
          Promise.
        </p>
        <p>
          <code>await</code> pauses only the async function that contains it. If
          another async function is called without <code>await</code>, later
          code continues without waiting for that function to finish.
        </p>

        <h3>Simple way to remember useEffect</h3>
        <ol>
          <li>React renders the component.</li>
          <li>React checks the effect dependencies.</li>
          <li>React runs effects that need to run.</li>
          <li>Before an effect is replaced or removed, React runs its cleanup.</li>
        </ol>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo04UseEffect
