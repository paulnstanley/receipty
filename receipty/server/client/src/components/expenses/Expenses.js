//this file will form the actual expenses page
//required node modules files for functionality
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import ExpensesToAdd from './ExpensesToAdd';
import { Button } from "react-bootstrap";
import NavBar from '../navbar/NavBar.js';
import { withRouter } from 'react-router-dom';
import { fetchExpenses } from '../../actions';
import { addExpenseToQueue } from '../../actions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.navigateToNewExpense = this.navigateToNewExpense.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  };

  navigateToNewExpense() {
    this.props.history.push('/expenses/new');
  }

  render () {
    let addExpensesToReportButton;
        
    if (this.props.expensesQueue.length > 0) {
      {addExpensesToReportButton = <Button
      className="fixed-action-btn"
      id="add-to-report"
      bsSize="large"
      type="submit">Add Expenses to New Report
    </Button>}
    }
    
    if (!this.props.expenses) {
      return (
        <div>Loading</div>
      )
    } else { 
      return (
        <div>
          <NavBar />
          <Button 
            className="fixed-action-btn"
            type="submit"
            onClick={this.navigateToNewExpense}>New Expense
          </Button>
          {addExpensesToReportButton}
          <ExpensesToAdd expensestoAdd={ this.props.expensesQueue } />
          <ul>
            { this.props.expenses.map((expense) => {
              return (
                <li key={expense._id}>{expense.merchant} 
                <button onClick={() => {
                  this.props.addExpenseToQueue(expense);
                }}>add to report</button> 
                </li>
              )
            })}
          </ul>
        </div>   
      )
    }
  }
};

 //this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
 function mapStateToProps({ expenses, expensesQueue }) {
  return { expenses, expensesQueue };
}
 function mapDispatchToProps(dispatch){
  return bindActionCreators({ addExpenseToQueue, fetchExpenses }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Expenses)) 