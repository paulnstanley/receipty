// react required compenents
import React, { Component } from 'react';

// redux required components
import { reduxForm } from 'redux-form';

//gui for expenses new
import ExpenseForm from './ExpenseForm';
import ExpenseFormReview from './ExpenseFormReview';

class ExpenseNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ExpenseFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ExpenseForm
        onExpenseSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'expenseForm'
})(ExpenseNew);