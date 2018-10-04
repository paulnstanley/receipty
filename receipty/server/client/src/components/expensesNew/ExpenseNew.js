import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ExpenseForm from './ExpenseForm';

class ExpenseNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ExpenseForm
          onCancel={() => this.setState({ showFormReview: false })} />
      );
    }

    return (
      <ExpenseForm
        onExpenseSubmit={() => this.setState({ showFormReview: true })} />
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

function mapStateToProps(state) {
  return { formValues}
}

export default reduxForm({ form: 'expenseForm' })(ExpenseNew);

// function mapStateToProps(state) {
//   return { formValues: state.form.expenseForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(ExpenseFormReview));
