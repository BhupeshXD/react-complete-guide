import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 21th 2023</div>
      <div className=
      "expense-item-description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item_price">₹932.23</div>
    </div>
  );
}

export default ExpenseItem;
