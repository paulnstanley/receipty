import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


const ExpenseFormReview = ({ onCancel, formValues, submitExpense, history, handleSubmit }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  submitExpense = event => {
    alert(this.props.expenses);
    // this.setState({
    //   [event.target]: event.target.value
    // });
  }

  return (
    <div className="FormReview">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button type="button"
        onClick={() => submitExpense(formValues, history)}
        className="green btn-flat right white-text"
      >
        Submit Expense
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.expenseForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ExpenseFormReview));
