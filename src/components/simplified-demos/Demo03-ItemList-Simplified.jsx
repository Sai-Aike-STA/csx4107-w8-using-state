import { useState } from 'react'

const startingItems = [
  { name: 'pen', amount: 10 },
  { name: 'color pen', amount: 20 },
]

function Demo03ItemListSimplified() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState(startingItems)

  function addItem() {
    const newItem = { name, amount }

    // Spread copies the old items and adds the new item at the end.
    setItems((oldItems) => [...oldItems, newItem])
  }

  function modifyItem(itemIndex) {
    // map keeps the array length and changes only the matching item.
    setItems((oldItems) =>
      oldItems.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            amount: Number(item.amount) + 1,
          }
        }

        return item
      }),
    )
  }

  function deleteItem(itemIndex) {
    // filter keeps every item except the matching item.
    setItems((oldItems) =>
      oldItems.filter((item, index) => index !== itemIndex),
    )
  }

  function printHi() {
    return <p>Hi</p>
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 03: Item List</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>

        {printHi()}

        {isLoading ? (
          <p>Loading ...</p>
        ) : name === 'abc' ? (
          <p>Process 1</p>
        ) : (
          <p>Process 2</p>
        )}

        {isLoading && <p>Loading with &amp;&amp; ...</p>}

        <button
          type="button"
          onClick={() => setIsLoading((oldLoading) => !oldLoading)}
        >
          Toggle loading
        </button>

        <hr />

        <div className="input-form">
          <label htmlFor="simple-item-name">Name</label>
          <input
            id="simple-item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-form">
          <label htmlFor="simple-item-amount">Amount</label>
          <input
            id="simple-item-amount"
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <button type="button" onClick={addItem}>
          Add item
        </button>

        <table className="item-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>
                  <div className="button-row">
                    <button type="button" onClick={() => modifyItem(index)}>
                      Add 1
                    </button>
                    <button type="button" onClick={() => deleteItem(index)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <h3>The three array patterns</h3>

        <h4>Add with spread</h4>
        <pre>
          <code>{`[...oldItems, newItem]`}</code>
        </pre>
        <p>
          Spread means copy. It copies every old item and places the new item at
          the end. The new array is one item longer.
        </p>

        <h4>Modify with map</h4>
        <pre>
          <code>{`oldItems.map((item, index) =>
  index === itemIndex ? changedItem : item
)`}</code>
        </pre>
        <p>
          <code>map</code> checks every item. It returns the changed item at the
          matching index. It returns the old item at every other index. The new
          array has the same length.
        </p>

        <h4>Delete with filter</h4>
        <pre>
          <code>{`oldItems.filter(
  (item, index) => index !== itemIndex
)`}</code>
        </pre>
        <p>
          <code>filter</code> keeps items that pass its test. The matching index
          fails the test, so it is removed. The new array is one item shorter.
        </p>

        <h3>Why a new array is needed</h3>
        <p>
          React state should not be changed directly. Spread, <code>map</code>,
          and <code>filter</code> make new arrays. React sees the new array and
          updates the table.
        </p>

        <h3>Other code in this demo</h3>
        <ul>
          <li>
            <code>items.map(...)</code> turns item objects into table rows.
          </li>
          <li>A function such as `printHi` can return JSX.</li>
          <li>
            A ternary chooses between two pieces of JSX.
          </li>
          <li>
            <code>&amp;&amp;</code> shows JSX only when its condition is true.
          </li>
        </ul>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo03ItemListSimplified
