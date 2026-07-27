import './App.css'
import Demo01Counter from './components/Demo01-Counter.jsx'
import Demo02ControlledInput from './components/Demo02-ControlledInput.jsx'
import Demo03ItemList from './components/Demo03-ItemList.jsx'
import Demo04UseEffect from './components/Demo04-UseEffect.jsx'
import State from './State.jsx'
import Demo01CounterSimplified from "./components/simplified-demos/Demo01-Counter-Simplified.jsx";
import Demo02ControlledInputSimplified from "./components/simplified-demos/Demo02-ControlledInput-Simplified.jsx";
import Demo03ItemListSimplified from "./components/simplified-demos/Demo03-ItemList-Simplified.jsx";
// import Demo04UseEffectSimplified from './components/simplified-demos/Demo04-UseEffect-Simplified.jsx'

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
      <Demo01Counter />
      <Demo02ControlledInput />
      <Demo03ItemList />
      <Demo04UseEffect />

        {/*<h1> Simplified versions</h1>*/}
        {/*<Demo01CounterSimplified/>*/}
        {/*<Demo02ControlledInputSimplified />*/}
        {/*<Demo03ItemListSimplified />*/}
        {/*<Demo04UseEffectSimplified />*/}
    </main>
  )
}

export default App
