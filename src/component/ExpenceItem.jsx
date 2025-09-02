import React from 'react'

function ExpenceItem(props) {
    const{_id,title,amount} = props.Expense
    const type= (amount<0)? "expense" : "income" ;
    function handleDelet(){
        props.DeleteExpense(_id)
    }
  return (
    <div className={`expense-item ${type}`}>
        <div className='expense-title'>{title}</div>
        <div className='expense-amount'>{amount}</div>
        <div className='delete-button-overlay'><button  onClick={handleDelet}>remove</button></div>
    </div>
  )
}

export default ExpenceItem