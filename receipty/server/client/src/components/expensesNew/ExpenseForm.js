import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFieldsStyle from './formFieldsStyle';
import formFields from './formFields';
import NavBar from '../navbar/NavBar';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Amount: "",
      Date: "",
      Categories: "",
      Comments: "",
    };
  }

  datePickerOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  categoriesOnChange = event => {
    this.setState({
      [event.target]: event.value
    });
  }

  renderFields() {
    return (
      <div>
          <Field 
          key="Name" 
          component={formFieldsStyle} 
          type="text" 
          label="Name" 
          name="Name"
          />
          <Field 
          key="Amount" 
          component={formFieldsStyle} 
          type="number" 
          label="Amount" 
          name="Amount" 
          />
          <input 
          type="date" 
          label="Date" 
          key="Date"
          name="Date"
          component={formFieldsStyle} 
          onChange={event => this.datePickerOnChange(event)} 
          />
          {/* <Dropdown 
          name="Categories"
          key="Categories"
          label="Categories" 
          className="expense-categories"
          options={options} 
          component={formFieldsStyle} 
          onChange={event => this.categoriesOnChange(event)} 
          value={defaultOption} 
          placeholder="Select an Option" 
          /> */}
          <Field 
          key="Comments" 
          component={formFieldsStyle} 
          type="text" 
          label="Comments" 
          name="Comments" />
          <input 
          type="file" 
          onChange={
              ( e ) => {      
              e.preventDefault();
              const { fields } = this.props;
              // convert files to an array
              const files = [ ...e.target.files ];
              fields.yourField.handleChange(files);
            }
          }
          />
      </div>
    )
  }
//the above is mapping out the fields we decided in formFields.js
  render() {
    return (
      <div>
        <NavBar />  
        <div id ="ExpenseFormTitleContainer">
        <h3>Expense Form</h3>
        </div>
        <form onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}>
          {this.renderFields()}
          <br />
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

export default reduxForm({
  form: 'expenseForm',
  destroyOnUnmount: false
})(ExpenseForm);