import React from "react";
import './ExpenseFilter.css'


function ExpenseFilter(props){

    function onChangeHanler(event){
        props.onSelectData(event.target.value)
        // console.log(event.target.value,props.selected)
    }

    return <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter By Year</label>
            <select value={props.selected} onChange={onChangeHanler}>
                <option value='2022'>2022</option>
                <option  value='2021'>2021</option>
                <option  value='2020'>2020</option>
                <option  value='2019'>2019</option>
                <option  value='2018'>2018</option>

            </select>
        </div>
    </div>

}

export default ExpenseFilter