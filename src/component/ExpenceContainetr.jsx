import React, { useEffect, useState } from 'react'
import Form from './Form'
import History from './History'

import BalanceContainer from './BalanceContainer'

function ExpenceContainetr() {
  // Initial state as array (never undefined)
  // const xpence = [
  //   { id: uid(), title: 'food', amount: 300 },
  //   { id: uid(), title: 'party', amount: 300 }
  // ]

  const [Expense, setExpense] = useState([])
  async function getExpence() {
    try {
      const data = await fetch('https://expense-tracker-backend-sehb.onrender.com/expence/get');
      const expense = await data.json();
      setExpense(expense)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getExpence();
  }, [])
  // console.log(Expense)
  // Add new expense
  async function AddExpense(title, amount) {
    const response = await fetch('https://expense-tracker-backend-sehb.onrender.com/expence/data', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, amount })
    });
    const data = await response.json();
    setExpense(prev => [...prev, { id: data.id, title, amount }]); // or use data.id if returned
    console.log(data)
  }
async function DeleteExpense(id) {
  try {
    const response = await fetch(`https://expense-tracker-backend-sehb.onrender.com/expence/delete/${id}`, {
      method: 'DELETE', // You forgot to specify the method
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    getExpence(); // Refresh the expense list
    console.log(result.message);
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
}

  useEffect(() => {
    console.log('Updated expence:', Expense)
  }, [Expense])

  return (
    <div className="expense-container">
      <BalanceContainer Expense={Expense} />
      <Form AddExpense={AddExpense} />
      <History s={Expense} DeleteExpense={DeleteExpense} />
    </div>

  )
}

export default ExpenceContainetr
