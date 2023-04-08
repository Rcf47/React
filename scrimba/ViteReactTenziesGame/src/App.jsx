import './App.css'
import { useState } from "react"
import Die from '../components/Die'

function App() {
  const [arrayDie, setArrayDie] = useState(allowNewDice(10))
  function randomInt() {
    return Math.ceil(Math.random() * 6)
  }
  function allowNewDice(numberItem) {
    let arrayInt = [];
    for (let i = 0; i < numberItem; i++) {
      arrayInt[i] = randomInt()
    }
    return arrayInt
  }
  let dieArray = arrayDie.map(item => <Die value={item} />)
  return (
    <main className='board'>
      <div className="wrapper">
        {dieArray}
      </div>

    </main>
  )
}

export default App
