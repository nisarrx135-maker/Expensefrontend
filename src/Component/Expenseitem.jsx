import React from 'react'
import ExpenseContainer from './ExpenseContainer'

function Expenseitem(probs) {
    const {title , amount , _id}=probs.expense
    const type= amount < 0?"expense":"income"

    function handledelete(){
      probs.deleteExpense(_id)

    }
  return (
    <div className={`expense-item ${type}`}>
        <div className="expense-title">{title}</div>
        <div  className="expense-amount">${amount}</div>
        <div className="delete-button-overlay">
          <button onClick={handledelete}>DELETE</button>
        </div>

    </div>
  )
}

export default Expenseitem