// import logo from './logo.svg';
import './App.css';
import Guess from './components/Guess'

// import Submit from './components/Submit'
// import Button from './components/Button'

function App() {
  return (
    <div className = "App">
      <h2>Number Guessing Game</h2>
      <p>I am thinking of a number between 1 and 100..</p>
      <p>Take a guess!</p>
      <Guess/>
    </div>
  )
}
export default App;

