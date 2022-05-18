import React  from "react";
import "./NewExpense.css";
import ExpenseForm  from "./ExpenseForm";
const NewExpense = (props)=>{
    function saveExpenseDataHandler(expenseData){
        const expensData = {
            ...expenseData,
            id: Math.random().toString()
        }
        // console.log(expensData)
        props.onNewExpenseData(expensData)

    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>);
}

export default NewExpense