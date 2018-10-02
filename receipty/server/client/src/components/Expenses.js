//this file will form the actual expenses page

//required node modules files for functionality
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//component imports
import ExpensesList from './expenses/ExpensesList';
import NavBar from './NavBar.js';
import { Button } from "react-bootstrap";
import './app.css';

class Expenses extends Component {

  navigateToNewExpense() {
    this.props.history.push('/expenses/new');
  }

  render() {
    return (
      <div>
        <NavBar />
        <ExpensesList />

        <Button 
          className="fixed-action-btn"
          bsStyle="Success" 
          bsSize="large" 
          type="submit"
          onClick={this.navigateToNewExpense}
          >
          New Expense
        </Button>
      </div>
    );
  }
};


export default withRouter(Expenses);
