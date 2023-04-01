import "./App.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import Data from "../src/data.js"

function App() {
  const cardData = Data.map(card => (
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
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
