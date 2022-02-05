import React, { useState } from "react";

import "./index.css";

const url = "http://localhost:5000";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const object = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dob: dob,
  };

  async function postApi() {
    const response = await fetch(`${url}/users`, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(object),
    });

    const data = await response.json();
    console.log(data);
  }

  function handleClick(e) {
    e.preventDefault();
    postApi();
    setFirstName("");
    setLastName("");
    setEmail("");
    setDob("");
  }

  return (
    <div className="app">
      <div className="main-header">
        <h2>Please enter your details here:</h2>
      </div>
      <div className="form-submit">
        <form onSubmit={handleClick}>
          <input
            className="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
            placeholder="First Name...."
          />

          <input
            className="lastname"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
            placeholder="Last Name...."
          />
          <input
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Email Address...."
          />
          <input
            className="dob"
            onChange={(e) => setDob(e.target.value)}
            type="text"
            value={dob}
            placeholder="Date of Birth...."
          />
          <button className="btn-submit">Submit</button>
        </form>

        {/* {api.map((e, index)=>{
        return <UnorderList key={index} firstname={e.firstname} lastname={e.lastname} email={e.email} dob={e.dob}/>
      })} */}
      </div>
    </div>
  );
}
