import "./Meme.css";
import memesData from "../src/memesData.js"

function Meme() {
  function getRandomInt() {
    return Math.floor(Math.random() * (memesData.data.memes.length - 1) + 1)
  }
  function addMemeOnClick() {
    console.log(memesData.data.memes[getRandomInt()].url)
  }

  return (
    <main>
      <div className="form--main">
        <input type="text" placeholder="Shut up" className="form--input" />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
        />
        <button className="form--button" onClick={addMemeOnClick}>Get a new meme image 🖼</button>
      </div>
    </main>
  );
}

export default Meme;
