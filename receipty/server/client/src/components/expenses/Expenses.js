//this file will form the actual expenses page

//required node modules files for functionality
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//component imports
import ExpensesList from './ExpensesList';
import ExpenseListTable from './ExpenseListTable';
import NavBar from '../navbar/NavBar.js';
import { Button } from "react-bootstrap";
import '../app/app.css';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.navigateToNewExpense = this.navigateToNewExpense.bind(this);
  }

  navigateToNewExpense() {
    this.props.history.push('/expenses/new');
  }

  render() {
    return (
      <div>
        <NavBar />
        <ExpenseList />
        <ExpenseListTable />
        <Button 
          className="fixed-action-btn"
          bsStyle="Success" 
          bsSize="small" 
          type="submit"
          onClick={this.navigateToNewExpense}
          >New Expense
        </Button>
        <Button
          className="fixed-action-btn"
          id="add-to-report"
          bsStyle="Success"
          bsSize="large"
          type="submit">Add to Report
        </Button>
      </div>
    );
  }
};


export default withRouter(Expenses);
