import React, { useState } from "react";

import "./App.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import ExpenseChart from "./components/ExpenseChart";

function App() {

  const [expenses, setExpenses] =
    useState([]);

  const [category, setCategory] =
    useState("All");

  const [income, setIncome] =
    useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  // Add Expense
  const addExpense = (expense) => {

    setExpenses([
      ...expenses,
      expense,
    ]);
  };

  // Delete Expense
  const deleteExpense = (id) => {

    setExpenses(
      expenses.filter(
        (expense) =>
          expense.id !== id
      )
    );
  };

  // Filter Expenses
  const filteredExpenses =
    category === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category ===
            category
        );

  // Total Expense
  const totalAmount =
    filteredExpenses.reduce(
      (total, expense) =>
        total +
        Number(expense.amount),
      0
    );

  // Savings
  const savings =
    Number(income) - totalAmount;

  // Budget Percentage
  const expensePercentage =
    Number(income) > 0
      ? (totalAmount /
          Number(income)) *
        100
      : 0;

  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      {/* Dark Mode Button */}
      <button
        className="dark-btn"
        onClick={() =>
          setDarkMode(
            !darkMode
          )
        }
      >
        {darkMode
          ? "☀️ Light Mode"
          : "🌙 Dark Mode"}
      </button>

      <h1>
        Household Expense Tracker
      </h1>

      {/* Income Input */}
      <div className="income-box">

        <input
          type="number"
          placeholder="Enter Monthly Income"
          value={income}
          onChange={(e) =>
            setIncome(
              e.target.value
            )
          }
        />

      </div>

      {/* Analytics */}
      <div className="analytics">

        <h2>
          Total Expenses: ₹
          {totalAmount}
        </h2>

        <h2>
          Savings: ₹
          {savings}
        </h2>

      </div>

      {/* Budget Warning */}

      <div className="warning-box">

        {expensePercentage >=
          80 &&
          expensePercentage <
            100 && (

            <h3>
              ⚠️ Warning:
              You have used{" "}
              {expensePercentage.toFixed(
                0
              )}
              % of your income
            </h3>

          )}

        {expensePercentage >=
          100 && (

            <h3>
              ❌ Over Budget!
              Expenses exceeded
              income
            </h3>

          )}

      </div>

      {/* Expense Form */}
      <ExpenseForm
        addExpense={addExpense}
      />

      {/* Filter */}
      <Filter
        setCategory={setCategory}
      />

      {/* Pie Chart */}
      <ExpenseChart
        expenses={expenses}
      />

      {/* Expense List */}
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={
          deleteExpense
        }
      />

    </div>
  );
}

export default App;