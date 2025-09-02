import React, { useState, useEffect } from 'react'
import Form from './Form'
import History from './history'
import BalanceContainer from './BalanceContainer'  // Fixed import
import { v4 as uid } from 'uuid'

function ExpenseContainer() {
  const EXPENSE = [
    {
      id: uid(),
      title: "food",
      amount: 20
    },
    {
      id: uid(),
      title: "book",
      amount: 50
    }
  ]

  const [expense, setexpense] = useState([EXPENSE])

  async function addexpense(title, amount) {
    try {
      const response = await fetch("https://expansetracker-2.onrender.com/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, amount })
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error("Error creating expense:", error);
    }
  }

  async function getExpenses() {
    const response = await fetch("https://expansetracker-2.onrender.com/get")
    const data = await response.json();
    setexpense(data.expense);
  }

  useEffect(() => {
    getExpenses();
  }, [])

  async function deleteExpense(id) {
    await fetch(`https://expansetracker-2.onrender.com/delete/${id}`, {
      method: "DELETE",
    });
    getExpenses()
  }

  return (
    <div className='expense-container'>
      <BalanceContainer expense={expense} /> {/* Fixed usage */}
      <Form addExpense={addexpense} />
      <History expense={expense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default ExpenseContainer
