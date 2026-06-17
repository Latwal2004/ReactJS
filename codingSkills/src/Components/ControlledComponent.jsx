import React, { useState } from 'react';

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br /><br />

      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>

      <button>Submit</button>

      <button
        onClick={() => {
          setName("");
          setEmail("");
          setPassword("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ControlledComponent;