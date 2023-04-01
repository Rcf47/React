import "./App.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount="(6)"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
