import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ExpenseForm from './ExpenseForm';
import showResults from './ExpenseResults';

class ExpenseNew extends Component {
  state = { showFormValues: false };

  renderContent() {
    if (this.state.showFormValues) {
      return (
        <ExpenseForm
          onCancel={() => this.setState({ showFormValues: false })} />
      );
    }

    return (
      <ExpenseForm
        onExpenseSubmit={() => this.setState({ showFormValues: true })} />
    );
  }

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={showResults} />
      </div>
    );
  }
}



export default reduxForm({ form: 'simple' })(ExpenseNew);

// function mapStateToProps(state) {
//   return { formValues: state.form.expenseForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(ExpenseFormReview));
