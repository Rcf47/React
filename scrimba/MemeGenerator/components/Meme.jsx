import "./Meme.css";

function Meme() {
  return (
    <main>
      <form className="form--main">
        <input type="text" placeholder="Shut up" className="form--input" />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
