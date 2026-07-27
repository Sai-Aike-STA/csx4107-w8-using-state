import { useState } from 'react'

function Demo03ItemList() {
  // This static array supplies the first value for the items state.
  const initItems = [
    {
      name: 'pen',
      amount: 10,
    },
    {
      name: 'color pen',
      amount: 20,
    },
  ]

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState(initItems)

  function onNameChange(event) {
    setName(event.target.value)
  }

  function onAmountChange(event) {
    setAmount(event.target.value)
  }

  function addItem() {
    // Property shorthand uses the state variable names as the property names.
    const newItem = {
      name,
      amount,
    }

    // A new array is created instead of changing the old state array.
    setItems(previousItems => {
      return [...previousItems, newItem]
    })
  }

  function modifyItem(targetIndex) {
    // map creates a new array and visits every existing item.
    setItems((previousItems) => {
      return previousItems.map((currentItem, currentIndex) => {
        if (currentIndex === targetIndex) {
          // A new object replaces only the item at the matching index.
          return {
            ...currentItem,
            amount: Number(currentItem.amount) + 1,
          }
        }

        // Every item at a different index stays unchanged.
        return currentItem
      })
    })
  }

  function deleteItem(targetIndex) {
    // filter creates a new array without the item at the matching index.
    setItems((previousItems) => {
      return previousItems.filter(
        (currentItem, currentIndex) => currentIndex !== targetIndex,
      )
    })
  }

  function toggleLoading() {
    setIsLoading((previousLoading) => !previousLoading)
  }

  function printHi() {
    // A normal function can create and return JSX.
    return <p>Hi</p>
  }

  return (
    <section className="demo-section">
      <h2>Demo 03: Add, Modify, and Delete List Items</h2>
      <p>
        This demo follows the item-list example used during the class
        explanation.
      </p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>

        {printHi()}

        <h4>Conditional rendering with a ternary operator</h4>
        {isLoading ? (
          <p>Loading ...</p>
        ) : name === 'abc' ? (
          <p>Process 1</p>
        ) : (
          <p>Process 2</p>
        )}

        <h4>Conditional rendering with the AND operator</h4>
        {isLoading && <p>Loading ...</p>}

        <button type="button" onClick={toggleLoading}>
          Toggle loading
        </button>

        <hr />

        <div className="input-form">
          <label htmlFor="item-name">Name</label>
          <input
            type="text"
            name="name"
            id="item-name"
            value={name}
            onChange={onNameChange}
          />
        </div>

        <div className="input-form">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={onAmountChange}
          />
        </div>

        <button type="button" onClick={addItem}>
          Add
        </button>

        <hr />

        <p>Current name: {name || '(empty)'}</p>

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
                      Add 1 to amount
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
          The main concept is an array of objects stored in state. Each object
          is one table item. React state arrays should not be changed directly.
          Each operation creates a new array:
        </p>
        <table className="item-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Array tool</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Add</td>
              <td>Spread operator</td>
              <td>Copies old items and appends one new item</td>
            </tr>
            <tr>
              <td>Modify</td>
              <td>map</td>
              <td>Replaces one item and keeps the same array length</td>
            </tr>
            <tr>
              <td>Delete</td>
              <td>filter</td>
              <td>Removes one item and makes a shorter array</td>
            </tr>
          </tbody>
        </table>

        <h3>Create the initial item array</h3>
        <pre>
          <code>{`const initItems = [
  { name: 'pen', amount: 10 },
  { name: 'color pen', amount: 20 },
]`}</code>
        </pre>
        <p>
          An array is an ordered list of values. Each value in this array is an
          object. An object groups related properties. Here, each item has a{' '}
          <code>name</code> and an <code>amount</code>.
        </p>
        <p>
          <code>initItems</code> is normal static data. It does not need to be
          state because it never changes. It is only used to give the items
          state its first value.
        </p>

        <h3>Create the state values</h3>
        <pre>
          <code>{`const [name, setName] = useState('')
const [amount, setAmount] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [items, setItems] = useState(initItems)`}</code>
        </pre>
        <ul>
          <li>
            <code>name</code> stores the name input text.
          </li>
          <li>
            <code>amount</code> stores the amount input text.
          </li>
          <li>
            <code>isLoading</code> stores a boolean. A boolean is either{' '}
            <code>true</code> or <code>false</code>.
          </li>
          <li>
            <code>items</code> stores the array displayed in the table.
          </li>
        </ul>

        <h3>Control both inputs with state</h3>
        <pre>
          <code>{`function onNameChange(event) {
  setName(event.target.value)
}

<input
  value={name}
  onChange={onNameChange}
/>`}</code>
        </pre>
        <p>
          The amount input follows the same pattern. The input value comes from
          state. Its change handler reads <code>event.target.value</code> and
          saves the current text.
        </p>
        <p>
          Even when the user types digits, a text input returns a string. This
          example keeps that string because it follows the class code.
        </p>

        <h3>Create a new object from the input state</h3>
        <pre>
          <code>{`const newItem = {
  name,
  amount,
}`}</code>
        </pre>
        <p>
          This uses object property shorthand. Writing <code>name</code> inside
          the object means <code>name: name</code>. The same rule applies to{' '}
          <code>amount</code>.
        </p>

        <h3>Do not change a state array directly</h3>
        <p>
          State should be treated as immutable. <strong>Immutable</strong>{' '}
          means the existing value should not be changed in place. Code should
          not use <code>items.push(newItem)</code> on the state array.
        </p>
        <p>
          Changing the old array directly can make React miss the update
          because the array is still the same object in memory.
        </p>

        <h3>Create a new array with the spread operator</h3>
        <pre>
          <code>{`setItems((previousItems) => {
  return [...previousItems, newItem]
})`}</code>
        </pre>
        <p>
          The setter uses a functional update because the next array depends on
          the previous array.
        </p>
        <p>
          The three dots are the <strong>spread operator</strong>. They copy all
          items from <code>previousItems</code> into a new array. The code then
          places <code>newItem</code> at the end.
        </p>
        <p>
          The old array is not changed. React receives a new array object, so it
          can detect the state change and render the new row.
        </p>

        <h3>Modify one item with map</h3>
        <pre>
          <code>{`function modifyItem(targetIndex) {
  setItems((previousItems) => {
    return previousItems.map((currentItem, currentIndex) => {
      if (currentIndex === targetIndex) {
        return {
          ...currentItem,
          amount: Number(currentItem.amount) + 1,
        }
      }

      return currentItem
    })
  })
}`}</code>
        </pre>
        <p>
          <code>map</code> always returns a new array with the same number of
          items. It visits every item and asks what value should go into the new
          array at that position.
        </p>
        <p>
          <code>targetIndex</code> is the row that the user clicked.{' '}
          <code>currentIndex</code> is the row that <code>map</code> is
          currently visiting.
        </p>
        <p>
          When the indexes match, the function returns a new object. The object
          spread <code>...currentItem</code> copies the existing properties.
          The following <code>amount</code> property replaces only the old
          amount.
        </p>
        <p>
          When the indexes do not match, the function returns{' '}
          <code>currentItem</code> unchanged. This is why only one row is
          modified.
        </p>
        <p>
          Input values are strings, so <code>Number(...)</code> converts the
          amount before adding <code>1</code>. Without this conversion, the{' '}
          <code>+</code> operator could join strings instead of adding numbers.
        </p>

        <h3>How this matches the professor&apos;s screenshot</h3>
        <pre>
          <code>{`setHobbies((previousHobbies) => {
  return previousHobbies.map((value, currentIndex) => {
    if (currentIndex === targetIndex) {
      return event.target.checked
    }

    return value
  })
})`}</code>
        </pre>
        <p>
          The screenshot modifies an array of checkbox values. At the matching
          index, it returns the new checked value. At every other index, it
          returns the old value.
        </p>
        <p>
          The item-list code uses the same pattern. The only difference is that
          each item is an object, so the matching position returns a new
          modified object instead of a boolean.
        </p>

        <h3>Delete one item with filter</h3>
        <pre>
          <code>{`function deleteItem(targetIndex) {
  setItems((previousItems) => {
    return previousItems.filter(
      (currentItem, currentIndex) =>
        currentIndex !== targetIndex
    )
  })
}`}</code>
        </pre>
        <p>
          <code>filter</code> creates a new array and keeps only values that
          pass its test. The test returns <code>true</code> for indexes that are
          not the target, so those items stay.
        </p>
        <p>
          The test returns <code>false</code> for the target index, so that item
          is left out of the new array. The old state array is not changed.
        </p>

        <h3>The three important state-array patterns</h3>
        <pre>
          <code>{`// ADD: old items plus one new item
setItems((previousItems) => [
  ...previousItems,
  newItem,
])

// MODIFY: replace the matching item
setItems((previousItems) =>
  previousItems.map((item, index) =>
    index === targetIndex ? modifiedItem : item
  )
)

// DELETE: keep every item except the matching item
setItems((previousItems) =>
  previousItems.filter(
    (item, index) => index !== targetIndex
  )
)`}</code>
        </pre>
        <p>
          These patterns all use a functional setter because the next array
          depends on the previous array. They all return a new array instead of
          changing the existing state array.
        </p>

        <h3>Render every item with map</h3>
        <pre>
          <code>{`items.map((item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.amount}</td>
  </tr>
))`}</code>
        </pre>
        <p>
          <code>map</code> visits each object in the items array and returns one
          table row. <code>item</code> is the current object.{' '}
          <code>index</code> is its position in the array.
        </p>
        <p>
          The <code>key</code> prop helps React identify each row between
          renders. This class example uses the array index as the key.
        </p>

        <h3>Return JSX from a function</h3>
        <pre>
          <code>{`function printHi() {
  return <p>Hi</p>
}

return <div>{printHi()}</div>`}</code>
        </pre>
        <p>
          JSX is the HTML-like syntax used by React. A normal function can
          return JSX. Calling that function inside curly braces inserts its JSX
          into the rendered output.
        </p>

        <h3>Conditional rendering with a ternary operator</h3>
        <pre>
          <code>{`isLoading ? (
  <p>Loading ...</p>
) : name === 'abc' ? (
  <p>Process 1</p>
) : (
  <p>Process 2</p>
)`}</code>
        </pre>
        <p>
          Conditional rendering means choosing which JSX to show. A ternary
          operator has a condition, a result for true, and a result for false.
        </p>
        <p>
          This code uses a second ternary inside the false part. This is called
          a nested ternary. When loading is false, the code checks whether the
          name is exactly <code>'abc'</code>.
        </p>

        <h3>Conditional rendering with the AND operator</h3>
        <pre>
          <code>{`isLoading && <p>Loading ...</p>`}</code>
        </pre>
        <p>
          The <code>&amp;&amp;</code> operator renders the JSX on its right only
          when the condition on its left is true. When{' '}
          <code>isLoading</code> is false, this expression renders nothing.
        </p>

        <h3>How adding one item moves through the code</h3>
        <ol>
          <li>The user types a name and amount.</li>
          <li>The change handlers save both input values in state.</li>
          <li>The user clicks Add.</li>
          <li>
            The handler creates <code>newItem</code> from the two state values.
          </li>
          <li>The state setter receives the previous items array.</li>
          <li>The spread operator creates a new array with the new item.</li>
          <li>React renders again because the items state changed.</li>
          <li>
            <code>map</code> creates a table row for every item in the new
            array.
          </li>
        </ol>

        <h3>How modifying one item moves through the code</h3>
        <ol>
          <li>The user clicks Add 1 to amount on one row.</li>
          <li>The click passes that row&apos;s index to `modifyItem`.</li>
          <li>The state setter receives the previous items array.</li>
          <li>`map` visits every item and index.</li>
          <li>The matching index returns a new object with a new amount.</li>
          <li>Every other index returns its original item.</li>
          <li>React renders the new array with one modified row.</li>
        </ol>

        <h3>How deleting one item moves through the code</h3>
        <ol>
          <li>The user clicks Delete on one row.</li>
          <li>The click passes that row&apos;s index to `deleteItem`.</li>
          <li>The state setter receives the previous items array.</li>
          <li>`filter` visits every item and index.</li>
          <li>The matching index fails the test and is left out.</li>
          <li>Every other item passes the test and stays.</li>
          <li>React renders the shorter array.</li>
        </ol>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo03ItemList
