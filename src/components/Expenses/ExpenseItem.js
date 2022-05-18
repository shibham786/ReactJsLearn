import React from 'react';
import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from "../UI/Card"
function ExpenseItem(props) {
  // const [title,setTitle] = useState(props.title) //it return first is value of element and second is function thorugh which u can update value
//  function clickHandler(){
//    setTitle("Updated")
//    console.log("Clicked");
//  }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'>$ {props.price}</div>
        {/* <button onClick={clickHandler}> Lets clicked</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;

  /* <h2>{props.date.toISOString()}</h2> */