import './App.css'
import CounterDemo01 from './components/CounterDemo-01.jsx'
import RegisterDemo02 from './components/RegisterDemo-02.jsx'
import State from './State.jsx'

function App() {
  return (
    <main>
      <header className="page-header">
        <p className="eyebrow">CSX4107 Web Dev, Week 8 Practice</p>
        <h1>React State Demos</h1>
        <p>
          Each explained example has a working demo first and detailed notes
          after a clear divider.
        </p>
      </header>

      <section className="practice-area">
        <h2>Notebook practice area</h2>
        <p>This small input is separate from the explained demos below.</p>
        <State />
      </section>

        <br/>
      <h2 className="reference-heading">Explained reference demos</h2>
      <CounterDemo01 />
      <RegisterDemo02 />
    </main>
  )
}

export default App
