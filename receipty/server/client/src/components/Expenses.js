import React from 'react';
import { Link } from 'react-router-dom';
import ExpensesList from './expenses/ExpensesList';
import NavBar from './NavBar.js';

const Expenses = () => {
  return (
    <div>
      <NavBar />
      <ExpensesList />
      <div className="fixed-action-btn">
        <Link to="/expenses/new" className="teal btn-flat right white-text">
          New Expense
        </Link>
      </div>
    </div>
  );
};

export default Expenses;
