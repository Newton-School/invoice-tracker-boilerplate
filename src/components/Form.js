import React, { useRef } from "react";
import "../styles/App.css";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className="input"></input>
      </div>
      <div className="input-field">
        <label htmlFor="price">Number</label>
        <input type="number" id="price" className="input"></input>
      </div>
      <div className="input-field">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className="date"
          defaultValue="2022-08-01"
        ></input>
      </div>
      <button type="submit" className="button" id="submit">
        Add Invoice
      </button>
    </form>
  );
};

export default Form;
