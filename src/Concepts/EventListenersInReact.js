import React, { useState } from "react";

// ... rest of your code

const EventListenersInReact = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [empty, setEmpty] = useState("");

  const HandleSubmit = (e) => {
    //form validation
    if (data.password.length <= 3) {
      alert("Password is too short make it more than 5 ");
    } else {
      console.log(data);
    }
    e.preventDefault();
  };

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    console.log("button clicked");
  };

  const handleButtons = (e) => {
    setEmpty(e.target.value);
  };
  return (
    <div>
      <h1>OnSubmit event</h1>
      <h4
        style={{ color: "red", forntFamily: "Arial", backgroundColor: "blue" }}
      >
        form
      </h4>
      <h4>form</h4>
      <form onSubmit={HandleSubmit} className="form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter ur name"
          onChange={HandleChange}
        />{" "}
        <br /> <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="enter ur Email"
          onChange={HandleChange}
        />{" "}
        <br /> <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="enter ur password"
          onChange={HandleChange}
        />{" "}
        <br /> <br />
        <button type="submit" className="btn btn-primary">
          {" "}
          Submit
        </button>
      </form>
      <h1>onClick Event</h1>
      {/* <button  onClick={()=>{console.log("button CLicked")}}>click</button> */}
      <button onClick={handleButton} className="btn btn-danger">
        click
      </button>
      <h1>OnChange event </h1>
      Name:{empty}
      <input name="empty" onChange={handleButtons} />
    </div>
  );
};

export default EventListenersInReact;
