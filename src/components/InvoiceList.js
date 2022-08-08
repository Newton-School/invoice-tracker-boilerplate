import React from "react";
import "../styles/App.css";

const InvoiceList = (props) => {
  const dateHandler = function (e) {
  };

  return (
    <div className="">
      <div className="date-input">
        <input
          type="date"
          defaultValue="2022-08-01"
          onChange={dateHandler}
          id='change'
        ></input>
      </div>
      {props.invoices.length === 0 ? (
        <p id="info">No Results Found</p>
      ) : (
        
      )}
    </div>
  );
};

export default InvoiceList;
