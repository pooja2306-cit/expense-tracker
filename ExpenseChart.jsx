import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS =  [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA00FF",
  "#FF4444",
  "#00B8D9",
  "#2ECC71",
  "#FF69B4",
  "#8E44AD",
];

function ExpenseChart({ expenses }) {
  const categories = [
    "Rent",
    "Electricity",
    "Grocery",
    "Internet",
    "Transport",
    "Water Bill",
    "Entertainment",
    "Others",
    "Food","Travel"
  ];

  const categoryData = categories.map(
    (category) => ({
      name: category,
      value: expenses
        .filter(
          (e) => e.category === category
        )
        .reduce(
          (total, e) =>
            total + Number(e.amount),
          0
        ),
    })
  );

  return (
    <div>
      <h2>Expense Analytics</h2>

      <PieChart width={350} height={300}>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {categoryData.map(
            (entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            )
          )}
        </Pie>

        <Tooltip />

        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;