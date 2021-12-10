import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
// props adalah data/properti yang dikirimkan dari parent component ini
const ExpenseItem = (props) => {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  const clickHandler = () => {
    console.log('cliked!!');
  };

  return (
    // menempelkan isian component dari Card.js
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
