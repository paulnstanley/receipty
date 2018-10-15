import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ExpenseForm from './ExpenseForm';
import submitExpense from '../../actions';

const userExpenses =[];

class ExpenseNew extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div>
        <ExpenseForm submitExpense={()=> {
          console.log("hello")
        }} />
      </div>
    );
  }
}

export default reduxForm({ form: 'simple' })(ExpenseNew);

// function mapStateToProps(state) {
//   return { formValues: state.form.expenseForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(ExpenseFormReview));
