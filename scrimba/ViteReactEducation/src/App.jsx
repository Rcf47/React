import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
    isFriendly: true,
  });

  console.log(formData);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  /**
   * Challenge: Add a textarea for "comments" to the form
   * Make sure to update state when it changes.
   */ return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.textarea}
        name="textarea"
        onChange={handleChange}
        placeholder="comment"
      />
      <input
        type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        name="isFriendly"
        checked={formData.isFriendly}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
    </form>
  );
}

export default App;
