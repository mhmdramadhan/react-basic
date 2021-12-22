import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // fungsi yang akan dipanggil di child
  // untuk menambahkan id
  const saveExpenseDataHandler = (dataExpenseYangDikirim) => {
    const expenseData = {
      ...dataExpenseYangDikirim,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    // update to true when is editing
    setIsEditing(true);
  };

  // fungsi yang akasn dikirim ke expense form
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* jika isEditing false */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* jika true */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
