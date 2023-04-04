import './App.css'
import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" })

  console.log(formData)
  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
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
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  )
}

export default App
