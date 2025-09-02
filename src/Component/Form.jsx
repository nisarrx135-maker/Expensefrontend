
import React,{ useState } from 'react'

function Form(probs) {
        const[title,settitle]=useState("")
        const[amount,setamount]=useState("")
        function handletitlechange(e){
            settitle(e.target.value)
        }
        function handleamountchange(e){
            setamount(e.target.value)
        }

        function handlesumbit(e){
          e.preventDefault();
          probs.addExpense(title,amount);
        }
  return (
    <div className="expense-form">
     <h1>Add Expense</h1>
     <form onSubmit={handlesumbit}>
        <div className="form-group">
         <label className="form-label">Title</label>
         <input
           className="form-input"
         type="text"
         value={title}
         onChange={handletitlechange}
         />
         <label className="form-label">AMOUNT</label>
         <input
           className="form-input"
         type="number"
         value={amount}
         onChange={handleamountchange}
         />
          </div>
          <button type="submit">Add Amount</button>
     </form>
     </div>

  )
}
    
export default Form