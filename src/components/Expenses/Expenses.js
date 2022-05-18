import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteryear, setFilteryear] = useState("2022");

  function ChangeSelectHandler(selected_year) {
    setFilteryear(selected_year);
  }

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteryear;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteryear} onSelectData={ChangeSelectHandler} />
       <ExpenseChart  expenses={filterExpense} />
       <ExpenseList items={filterExpense} />

      {/* <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      /> */}
    </Card>
  );
}

export default Expenses;
