import './App.css'
import CounterDemo from './components/CounterDemo.jsx'
import RegisterDemo from './components/RegisterDemo.jsx'

function App() {
  return (
    <main>
      <header className="page-header">
        <p className="eyebrow">CSX4107 Web Dev, Week 8 Practice</p>
        <h1>React State Demos</h1>
        <p>
          Each section has a working example first and an explanation of the
          important code below it.
        </p>
      </header>

      <CounterDemo />
      <RegisterDemo />
    </main>
  )
}

export default App
