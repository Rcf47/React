import './App.css'
import { useState } from "react"

function App() {
  const [firstName, setFirstName] = useState("")

  console.log(firstName)
  function handleChange(event) {
    setFirstName(event.target.value)
  }
  /**
      * Challenge: Track the applicant's last name as well
      */
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
    </form>
  )
}

export default App
