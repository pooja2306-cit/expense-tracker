import React from "react";

function Filter({ setCategory }) {
  return (
    <div>
      <select
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="All">All</option>

        <option value="Rent">Rent</option>

        <option value="Electricity">
          Electricity
        </option>

        <option value="Grocery">
          Grocery
        </option>

        <option value="Internet">
          Internet
        </option>

        <option value="Transport">
          Transport
        </option>
        <option value="Travel">
          Travel
        </option>
        <option value="Food">
          Food
        </option>


        <option value="Water Bill">
          Water Bill
        </option>

        <option value="Entertainment">
          Entertainment
        </option>

        <option value="Others">
          Others
        </option>
      </select>
    </div>
  );
}

export default Filter;