import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //menyimpan dan merubah data
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // alternatif
  // bedanya kalo ini bisa langsung merubah semua data tidak satu satu
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // fungsi untuk mengabil value,l event merupakan property yang ada pada input title
  const titleChangeHandler = (event) => {
    // merubah/menampilkan data terbaru
    setEnteredTitle(event.target.value);
    // merubah/menampilkan data terbaru pakai cara alternatif
    // ...userInput untuk menampilkan semua data, karna
    // jika menggunkan cara alternatif semua data pada object harus dipanggil seperti amount dan date
    // jika tidak data pada setUserInput akan diupdate sesuai object yang didefinisikan
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // cara alternative prevState meyimpan data terbaru dari setiap update yng dilakukan
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // ketika form disubmit
  const submitHandler = (event) => {
    // untuk mencegah reload saat submit form
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // properti fungsi yng dikirim dari parent
    props.onSaveExpenseData(expenseData);

    // menghapus/clear value menjadi empty string
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
