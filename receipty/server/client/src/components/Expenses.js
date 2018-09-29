import React from 'react';
import { Link } from 'react-router-dom';
import ExpensesList from './expenses/ExpensesList';

const Expenses = () => {
  return (
    <div>
      <ExpensesList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Expenses;
