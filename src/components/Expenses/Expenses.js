import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  // default value untuk filter 2020
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // membuat fungsi filter
  const filteredExpenses = props.items.filter((alias) => {
    return alias.date.getFullYear().toString() === filteredYear;
  });

  // cek if else
  // let expensesContent = <p>No expenses found.</p>;
  // if (props.items.length > 0) {
  //   expensesContent = props.items.map((alias) => (
  //     <ExpenseItem
  //       key={alias.id}
  //       title={alias.title}
  //       amount={alias.amount}
  //       date={alias.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* foreach data mengunakan map | key untuk menentukan data uniq per component */}
        {/* tidak mengunakan filter */}

        {/* {props.items.map((alias) => (
         <ExpenseItem
              key={alias.id}
              title={alias.title}
              amount={alias.amount}
              date={alias.date}
            />
        ))}; */}

        {/* mengunakan fungsi filter */}
        {/* untuk if bisa mengunakan ternary if atau seperti dibawah */}

        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((alias) => (
            <ExpenseItem
              key={alias.id}
              title={alias.title}
              amount={alias.amount}
              date={alias.date}
            />
          ))} */}

        {/* mengunakan pemanggilan diluar return */}

        {/* {expensesContent} */}

        {/* mengunakan komponen */}
        <ExpensesList items={filteredExpenses} />

        {/* mengirim title amount date props/properti ke child komponent */}
      </Card>
    </div>
  );
};

export default Expenses;
