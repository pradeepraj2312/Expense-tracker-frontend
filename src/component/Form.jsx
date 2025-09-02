import React, { useState } from 'react'
import History from './History';
function Form(props) {
    const[title,settitle]= useState("")
    const[amount,setamount]= useState(0)
    function handleTitleChange(i){
        settitle(i.target.value);
    }
    function handleAmountChange(i){
        setamount(i.target.value);
    }
    function handleSubmit(i){
        i.preventDefault();
        props.AddExpense(title,amount)
        setamount(0)
        settitle("")
    }
  return (
    <div className="expense-form">
        <h1>Add Expense</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='form-label'>Title</label>
                <input type="text" value={title} onChange={handleTitleChange} className='form-input' />
                <label className='form-label'>Amount</label>
                <input type="number" value={amount} onChange={handleAmountChange} className='form-input' />
            </div>
            <button type='submit'>Add Amount</button>
        </form>
      
    </div>
  )
}

export default Form