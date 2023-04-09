import "./App.css";
import { useState } from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";

function App() {
  const [arrayDie, setArrayDie] = useState(allowNewDice(10));
  function randomInt() {
    return Math.ceil(Math.random() * 6);
  }

  function allowNewDice(numberItem) {
    let objInt = [];
    for (let i = 0; i < numberItem; i++) {
      objInt[i] = {
        id: nanoid(),
        value: randomInt(),
        isHeld: true,
      };
    }
    return objInt;
  }

  function handleClick() {
    setArrayDie(allowNewDice(10));
  }
  function handleActive(event) {
    setArrayDie(prevArrayDie => [...prevArrayDie, event.target.isHeld = !event.target.isHeld])
  }

  let dieArray = arrayDie.map((item) => (
    <Die key={item.id} value={item.value} active={item.isHeld} />
  ));

  return (
    <main className="board">
      <div className="wrapper">{dieArray}</div>
      <button onClick={handleClick} className="Roll-button">
        Roll
      </button>
    </main>
  );
}

export default App;
