import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputUpdate(event) {
    const { value, name } = event.target;

    setContact((prevDetail) => {
      if (name === "fName") {
        return {
          fName: value,
          lastName: prevDetail.lName,
          email: prevDetail.email
        };
      } else if (name === "lName") {
        return {
          fName: prevDetail.fName,
          lastName: value,
          email: prevDetail.email
        };
      } else if (name === "email") {
        return {
          fName: prevDetail.fName,
          lastName: prevDetail.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={inputUpdate} />
        <input name="lName" placeholder="Last Name" onChange={inputUpdate} />
        <input name="email" placeholder="Email" onChange={inputUpdate} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
