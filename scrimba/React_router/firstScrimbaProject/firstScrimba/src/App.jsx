import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
