// ExpenseForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFieldsStyle from './formFieldsStyle';
import formFields from './formFields';
//the two variables below are to help me incorporate the dropdown and calender features//
const options = [
  { value: 'travel', label: 'Travel', className: 'travel' },
  { value: 'food', label: 'Food', className: 'food' },
  { value: 'supplies', label: 'Supplies', className: 'supplies'}, 
  { value: 'utilities', label: 'Utilities', className: 'utilities'}, 
  { value: 'entertainment', label: 'Entertainment', className: 'entertainment'}, 
  { value: 'other', label: 'Other', className: 'other'}
];

const defaultOption = options[0];

class ExpenseForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
       <div>
        <Field
          key={name}
          component={formFieldsStyle}
          type="text"
          label={label}
          name={name}
        />
        </div>
      );
    });
  }
//the above is mapping out the fields we decided in formFields.js
  render() {
    return (
      <div>
        <div id ="ExpenseFormTitleContainer">
        <h3>Expense Form</h3>
        </div>
        <form onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}>
          {this.renderFields()}
          <Link to="/expenses" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Done
          </button>
        </form>
      </div>
    );
  }
}
//this is the html outside of the form//

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'expenseForm',
  destroyOnUnmount: false
})(ExpenseForm);