import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
      setSuccess("");
    } else {
      const newUser = {
        name: name,
        email: email,
      };

      setUsers([...users, newUser]);

      setSuccess("Registration Successful!");
      setError("");

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p className="error">{error}</p>
        <p className="success">{success}</p>

        <div className="userBox">
          <h2>Registered Users</h2>

          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;