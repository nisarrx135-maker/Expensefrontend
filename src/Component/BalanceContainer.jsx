import React from 'react'
import Currentitem from './Currentitem';

function BalanceContainer(probs) {

    let income=0;
    let expenses=0;

    probs.expense.forEach((item)=>{
        if( item.amount>0){
            income+=parseInt(item.amount);;
        }else{
            expenses+=parseInt(item.amount);
        }
    });
    console.log(income,expenses)
      return (
    <div  className="balance-container">
        <Currentitem title="income"amount={income} type="income"/>
        <Currentitem title="expense"amount={expenses} type="expense"/>
        <Currentitem title="balance"amount={income+expenses} type="balance"/>
    </div>
  )
}

export default BalanceContainer