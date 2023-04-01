import "./App.css";
import "./index.css"
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../src/data.js"

function App() {
  const cardData = data.map(card => (
    <Card
      key={card.id}
      {...card}
    />
  ))
  return (
    <>
      <Navbar />
      <Main />
      <section className="card-list" >
        {cardData}
      </section>
    </>
  );
}

export default App;
