import React,{useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [enterTitle,setTitle] = useState('')
    const [enterAmount,setAmount] = useState('')
    const [enterDate,setDate] = useState('')

    // another approach
    // const [userInput,SetUserInput] = useState({
    //     enterTitle :'',
    //     enterAmount:'',
    //     enterDate:''

    // })
    function TitlechangeHandler(event){
        // console.log(event.target.value)
        setTitle(event.target.value);
    // another approach
    //    SetUserInput({
    //        ...userInput,
    //        enterTitle:event.target.value
    //    })

    }
    function  AmountChangeHandler(event){
      setAmount(event.target.value)
    // another approach
    //     SetUserInput({
    //        ...userInput,
    //        enterAmount:event.target.value
    //    })

    }
    function DateChangeHandler(event){
        setDate(event.target.value)
        // SetUserInput({
        //     ...userInput,
        //     enterDate:event.target.value
        // })
    }
    function onSubmitHandler(event){
        event.preventDefault()
        const expenseData = {
            title:enterTitle,
            price:enterAmount,
            date:new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData)
        // console.log(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={TitlechangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
