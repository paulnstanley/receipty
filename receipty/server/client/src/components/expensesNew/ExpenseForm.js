import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFields from './formFields';

const ExpenseForm = props => {
  console.log(props.handleSubmit);
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
        <Field
            name="Date"
            component="input"
            type="text"
            placeholder="Date"
          />
        </div>
      </div>
      <div>
        <label>Categories</label>
        <div>
        <Field
            name="Categories"
            component="input"
            type="text"
            placeholder="Categories"
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
  form: 'simple'
})(ExpenseForm)