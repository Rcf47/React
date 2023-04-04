import './App.css'
import { useState } from "react"

function App() {
  const [firstName, setFirstName] = useState("")

  console.log(firstName)
  function handleChange(event) {
    setFirstName(event.target.value)
  }
  /**
          * Challenge: update the firstName state on every keystroke
          */
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
