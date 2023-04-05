import "./Meme.css";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMeme(data.data.memes))
  }, [])
  function getRandomMeme() {
    const randomInt = Math.floor(Math.random() * allMeme.length);
    const memesArray = allMeme;
    setMemeImage((prevAllMemeImages) => ({
      ...prevAllMemeImages,
      randomImage: memesArray[randomInt].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMemeImage(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      }
    })
  }
  return (
    <main>
      <div className="form--main">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          className="form--input"
          name="bottomText"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
