import './App.css'
import { useState } from "react"

function App() {
  const [firstName, setFirstName] = useState("")

  function handleChange(event) {
    console.log(event)
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
    </form>
  )
}

export default App
