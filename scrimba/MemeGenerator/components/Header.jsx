import trollface from "../src/assets/Troll Face.png"
import "./Header.css"

function Header() {
  return (
    <nav className="nav--menu">
      <div className="nav--logo-wrapper">
        <img src={trollface} className="nav--logo" />
        <h1 className="nav--header">MemeGenerator</h1>
      </div>
      <p className="nav--text">React Course - Project 3</p>
    </nav >
  );
}

export default Header;
