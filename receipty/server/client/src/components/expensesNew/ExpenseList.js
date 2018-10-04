import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchExpenses();
  }

  renderExpenses() {
    return this.props.expenses.reverse().map(expense => {
      return (
        <div className="card darken-1" key={expense.name}>
          <div className="card-content">
            <span className="card-title">{expense.amount}</span>
            <p>
              {expense.body}
            </p>
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
        {this.renderExpenses()}
      </div>
    );
  }
}

function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpenseList);
