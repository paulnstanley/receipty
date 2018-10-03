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
    //the botton return says map out this.props.expenses but in reverse order so that the most recent is on top//
    return this.props.expenses.reverse().map(expense => {
      return (
        <div className="card darken-1" key={expense._id}>
          <div className="card-content">
            <span className="card-title">{expense.title}</span>
            {/* <p>
              Hello World "Hello World"fsdgjsldfgjsldfkjlsdkghskjdfghslkdfjghklsdfjghlskdfjghsldkfjghlsdkjfghldkfjghsldfjghsldkfjghsdklfghslkdfjghlskdjglskg
              {expense.body}
            </p> */}
            <p className="right">
              Sent On: {new Date(expense.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {/* renders the big function we made above  */}
        {this.renderExpenses()}
      </div>
    );
  }

}
//this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesList);
