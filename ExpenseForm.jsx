import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] =
    useState("Rent");

  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
      date,
    };

    addExpense(newExpense);

    // Clear Inputs
    setTitle("");
    setAmount("");
    setCategory("Rent");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Expense Title */}
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        required
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>Rent</option>

        <option>Electricity</option>

        <option>Grocery</option>

        <option>Food</option>

        <option>Travel</option>

        <option>Internet</option>

        <option>Transport</option>

        <option>Water Bill</option>

        <option>Entertainment</option>

        <option>Others</option>
      </select>

      {/* Date */}
      
       
      

      {/* Submit Button */}
      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;