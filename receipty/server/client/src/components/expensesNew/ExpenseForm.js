// ExpenseForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFieldsStyle from './formFieldsStyle';
import formFields from './formFields';
import NavBar from '../navbar/NavBar'
class ExpenseForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={formFieldsStyle}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <h4 id="ExpenseFormTitleContainer">Expense Form</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}>
          {this.renderFields()}
          <Link to="/expenses" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
          </button>
        </form>
      </div>
    );
  }
}

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