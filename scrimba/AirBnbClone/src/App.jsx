import "./App.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../src/data.js"

function App() {
  const cardData = data.map(card => (
    <Card
      key={card.id}
      item={card}
    />
  ))
  return (
    <>
      <Navbar />
      <Main />
      <section className="card__list">
        {cardData}
      </section>
    </>
  );
}

export default App;
