import "./Meme.css";
import memesData from "../src/memesData.js"
import { useState } from "react";

function Meme() {
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getRandomMeme() {
    const randomInt = Math.floor(Math.random() * memesData.data.memes.length)
    const memesArray = allMemeImages.data.memes
    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: memesArray[randomInt].url
    }))

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
        <button className="form--button" onClick={getRandomMeme}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}

export default Meme;
