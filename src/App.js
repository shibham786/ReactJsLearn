import React,{useState} from 'react';
import "./App.css";
import NewExpense from './components/ExpenseForm/NewExpense';
import Expenses from "../src/components/Expenses/Expenses";

const dummy_expense = [
  {id:'e1', title: "Car insurance", price: 230, date: new Date(2022, 4, 14) },
  {id:'e2', title: "Home insurance", price: 2450, date: new  Date(2022, 5, 14) },
];
function App() {
  const [expenses,setExpenses] = useState(dummy_expense)
  function NewExpenseDataHandler(expenseData){
    console.log("In App.js")
    console.log(expenses);
    setExpenses((PrevExpenses) =>{

      return [expenseData, ...PrevExpenses]

    })


}
  return (
    <div>
      <NewExpense onNewExpenseData={NewExpenseDataHandler}/>
     <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
