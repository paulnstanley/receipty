//this file will form the actual expenses page
//required node modules files for functionality
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpensesToAdd extends Component {
  render() {
    if (!this.props.expensestoAdd) {
      return (
        <div>No expenses added!</div>
      )
    } else {
      return (
        <ul>
        { this.props.expensestoAdd.map((expense) => {
          return (
            <li key={expense._id}>{expense.merchant}</li>
          )
        })}
        </ul>
      )
    }
  }
};

export default ExpensesToAdd;
