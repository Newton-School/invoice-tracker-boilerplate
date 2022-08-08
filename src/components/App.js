import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import InvoiceList from "./InvoiceList";

const starterInvoices = [];

const App = () => {
  const [invoices, addInvoices] = useState(starterInvoices);
  const [date, setDate] = useState("2022-08-01");
  const [amount, setAmount] = useState(0);
  const addInvoiceHandler = (data) => {
    
  };

  useEffect(() => {
   
  }, []);

  return (
    <div id="main">
      <div className="container-1 card">
        <h1 className="header">Add Invoice</h1>
        <Form  />
      </div>
      <div className="container-2">
        <h1 className="header">Invoice List</h1>
        <InvoiceList  />
        <h1>
          Total Amount: $<span id="amount">{amount}</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
