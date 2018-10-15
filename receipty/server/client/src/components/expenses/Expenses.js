import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import ExpensesToAdd from './ExpensesToAdd';
import { Button } from "react-bootstrap";
import NavBar from '../navbar/NavBar.js';
import { withRouter } from 'react-router-dom';
import { fetchExpenses } from '../../actions';
import { addExpenseToQueue } from '../../actions';
import '../app/app.css'

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
    
    let newReportButton = <Button 
      className="fixed-action-btn"
      bsStyle="success" 
      bsSize="large" 
      type="submit"
      onClick={this.navigateToNewExpense} >New Expense
    </Button>;
    
    if (this.props.expensesQueue.length > 0) {
      addExpensesToReportButton = <Button
        className="fixed-action-btn"
        id="add-to-report"
        bsSize="large"
        type="submit">Add Expenses to New Report
      </Button>
    }
    
    if (!this.props.expenses) {
      return (
        <div>Loading</div>
      )
    } else { 
      return (
        <div>
          <NavBar />
          {newReportButton}
          {addExpensesToReportButton}
          <ExpensesToAdd expensestoAdd={ this.props.expensesQueue } />
          <div className="expensesMain">
          <ul className="allExpenses">
            { this.props.expenses.map((expense) => {
              return (
                <li className="indivExpense" key={expense._id}><span className="merchantSpan">{expense.merchant}</span>
                <button className="expenseButton" onClick={() => {
                  this.props.addExpenseToQueue(expense);
                }}>add to report</button> <br /> 
                <span className = "lefty">{expense.category}</span> 
                <span className = "righty">${expense.amount}.00</span> 
                </li>
              )
            })}
          </ul>
          </div>
        </div>   
      )
    }
  }
}

 //this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
function mapStateToProps({ expenses, expensesQueue }) {
  return { expenses, expensesQueue };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ addExpenseToQueue, fetchExpenses }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Expenses))
