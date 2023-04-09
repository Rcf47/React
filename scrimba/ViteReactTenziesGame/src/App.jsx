import "./App.css";
import { useEffect, useState } from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";

function App() {
  const [arrayDie, setArrayDie] = useState(generateDiceArray(10));
  const [winCondition, setWinCondition] = useState(false);

  useEffect(() => {
    const allHeld = arrayDie.every((die) => die.isHeld);
    const allValue = arrayDie.every((die) => die.value === arrayDie[0].value);
    if (allHeld && allValue) {
      setWinCondition(true);
      console.log("you are great");
    }
  }, [arrayDie]);

  function randomInt() {
    return Math.ceil(Math.random() * 6);
  }

  function getNewDice() {
    return {
      id: nanoid(),
      value: randomInt(),
      isHeld: false,
    };
  }
  function generateDiceArray(numberItem) {
    let objInt = [];
    for (let i = 0; i < numberItem; i++) {
      objInt.push(getNewDice());
    }
    return objInt;
  }

  function handleClick() {
    setArrayDie((previousDiceArray) =>
      previousDiceArray.map((item) =>
        item.isHeld === true ? item : getNewDice()
      )
    );
  }
  function holdDice(id) {
    setArrayDie((previousDiceArray) =>
      previousDiceArray.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  }

  let dieArray = arrayDie.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
    />
  ));

  return (
    <main className="board">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="wrapper">{dieArray}</div>
      <button onClick={handleClick} className="Roll-button">
        Roll
      </button>
    </main>
  );
}

export default App;
