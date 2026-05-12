import { useState } from "react";

export default function GreetingForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(name.trim());
  }

  const isEmpty = name.trim() === "";

  return (
    <section>
      <h2>Exercise 2: Controlled Inputs & Greeting</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" disabled={isEmpty}>
          Submit
        </button>
      </form>
      {submitted ? <p>Hello, {submitted}!</p> : <p>Type a name to continue.</p>}
    </section>
  );
}
