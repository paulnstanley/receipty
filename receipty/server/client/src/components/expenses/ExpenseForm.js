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
    return (
      <div>
      <Field key="Merchant" component={formFieldsStyle} type="text" label="Merchant Name" name="Name"/>
      <Field key="Amount" component={formFieldsStyle} type="number" label="Amount" name="Amount" />
<<<<<<< HEAD
      <label>Date</label><input type="date" label="Date" label="Date" />
      <label>Categories</label>
=======
      <label>Date</label><input type="date" label="Date" />
      <label>Categories</label><Dropdown label="Categories" className="expense-categories" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Selection an Option" />
>>>>>>> 4344e5e2147fa6b06d73f7a5feba96be213250dd
      <Field key="Comments" component={formFieldsStyle} type="text" label="Comments" name="Comments" />
      <label>Upload Receipt Picture</label><p><input type="file" onChange={
    ( e ) => {      
      e.preventDefault();
      const { fields } = this.props;
      // convert files to an array
      const files = [ ...e.target.files ];
      fields.yourField.handleChange(files);
    }
  }/></p>
      </div>
    )
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
//I added this picture upload picture but not sure how it will interact with the backend. Here is the link I used to help me get there https://github.com/erikras/redux-form/issues/71//
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