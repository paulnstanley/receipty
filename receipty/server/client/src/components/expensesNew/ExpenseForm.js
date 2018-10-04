import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import Dropdown from 'react-dropdown';

const options = [
  { value: 'travel', label: 'Travel', className: 'travel' },
  { value: 'food', label: 'Food', className: 'food' },
  { value: 'supplies', label: 'Supplies', className: 'supplies'}, 
  { value: 'utilities', label: 'Utilities', className: 'utilities'}, 
  { value: 'entertainment', label: 'Entertainment', className: 'entertainment'}, 
  { value: 'other', label: 'Other', className: 'other'}
];

const defaultOption = options[0];

const ExpenseForm = props => {
  
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Merchant Name</label>
        <div>
          <Field
            name="Name"
            component="input"
            type="text"
            placeholder="Merchant Name"
          />
        </div>
      </div>
      <div>
        <label>Amount</label>
        <div>
          <Field
            name="Amount"
            component="input"
            type="text"
            placeholder="Amount"
          />
        </div>
      </div>
      <div>
        <label>Date</label>
        <div>
        <input 
          type="date" 
          label="Date" 
          component="input"
          key="Date"
          name="Date"
          />
        </div>
      </div>
      <div>
        <label>Categories</label>
        <div>
          <Dropdown 
          name="Categories"
          key="Categories"
          label="Categories" 
          component="select"
          className="expense-categories"
          options={options} 
          value={defaultOption} 
          placeholder="Select an Option" 
          />
        </div>
      </div>
      <div>
        <label>Comments</label>
        <div>
          <Field name="Comments" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(ExpenseForm)