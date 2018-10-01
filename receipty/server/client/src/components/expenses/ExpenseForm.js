import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFieldsStyle from './formFieldsStyle';
import formFields from './formFields';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import renderDatePicker from './renderDatePicker';


//the two variables below are incorporated the dropdown features//
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
  datePickerOnChange(event) {
    return (event.target.value);
  }

  categoriesOnChange(event) {
    return(event.value);
  }

  renderFields() {
    return (
      <div>
      <Field key="Merchant Name" component={formFieldsStyle} type="text" label="Merchant Name" name="Merchant Name"/>
      <Field key="Amount" component={formFieldsStyle} type="number" label="Amount" name="Amount" />
      <label>Date</label><input type="date" label="Date" onChange={event => this.datePickerOnChange(event)} />
      <label>Categories</label><Dropdown label="Categories" className="expense-categories" options={options} onChange={event => this.categoriesOnChange(event)} value={defaultOption} placeholder="Selection an Option" />
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
console.log(this.props);
export default reduxForm({
  validate,
  form: 'expenseForm',
  destroyOnUnmount: false
})(ExpenseForm);