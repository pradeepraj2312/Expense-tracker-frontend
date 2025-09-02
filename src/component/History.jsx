import React from 'react'
import ExpenceItem from './ExpenceItem'

function History(props) {
  const items = Array.isArray(props.s) ? props.s : []

  return (
    <div className='history'>
      <h1>History</h1>
      {items.map(item => (
        <ExpenceItem 
          key={item._id} 
          Expense={item} 
          DeleteExpense={props.DeleteExpense} 
        />
      ))}
    </div>
  )
}

export default History
