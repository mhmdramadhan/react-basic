import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
// props adalah data/properti yang dikirimkan dari parent component ini
const ExpenseItem = (props) => {
  // fungsi untuk membaca jika ada perubahan pada data
  //expenseTitle properti awal
  //setExpenseTitle properti yang akan digunakan untuk perubahan
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  // event listener update
  const clickHandler = () => {
    setExpenseTitle('Updated!');
  };

  return (
    // menempelkan isian component dari Card.js
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
