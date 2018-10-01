// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ExpenseForm from './ExpenseForm';
import ExpenseFormReview from './ExpenseFormReview';
<<<<<<< HEAD

=======
>>>>>>> 4344e5e2147fa6b06d73f7a5feba96be213250dd

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