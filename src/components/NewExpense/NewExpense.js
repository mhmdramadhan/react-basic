import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // fungsi yang akan dipanggil di child
  // untuk menambahkan id
  const saveExpenseDataHandler = (dataExpenseYangDikirim) => {
    const expenseData = {
      ...dataExpenseYangDikirim,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
