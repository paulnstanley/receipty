// component that will render the actual list of expenses
// will run in expnses.js

//node-modules reuqired for react and redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

//imports from actions to get real data
import { fetchExpenses } from '../../actions';

// component that will render the actual list of expenses
class ExpensesList extends Component {
  componentDidMount() {
    this.props.fetchExpenses();
  };


  renderExpenses() {
    return this.props.expenses.reverse().map(expense => {
      return (
        <div className="card darken-1" key={expense._id}>
          <div className="card-content">
            <span className="card-title">{expense.title}</span>
            <p>
              Hello World "Hello World"fsdgjsldfgjsldfkjlsdkghskjdfghslkdfjghklsdfjghlskdfjghsldkfjghlsdkjfghldkfjghsldfjghsldkfjghsdklfghslkdfjghlskdjglskg
              {expense.body}
            </p>
            <p className="right">
              Sent On: {new Date(expense.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {expense.yes}</a>
            <a>No: {expense.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderExpenses()}
      </div>
    );
  }

}

function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesList);
