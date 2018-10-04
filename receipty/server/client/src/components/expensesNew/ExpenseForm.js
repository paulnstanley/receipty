import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import _ from 'lodash';

import NavBar from '../navbar/NavBar'
class ExpenseForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={formFields}
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
        <h4 className="FormTitleContainer">Expense Form</h4>
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


// const options = [
//   { value: 'travel', label: 'Travel', className: 'travel' },
//   { value: 'food', label: 'Food', className: 'food' },
//   { value: 'supplies', label: 'Supplies', className: 'supplies'}, 
//   { value: 'utilities', label: 'Utilities', className: 'utilities'}, 
//   { value: 'entertainment', label: 'Entertainment', className: 'entertainment'}, 
//   { value: 'other', label: 'Other', className: 'other'}
// ];

// const defaultOption = options[0];

// const ExpenseForm = props => {
  
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Merchant Name</label>
//         <div>
//           <Field
//             name="Name"
//             component="input"
//             type="text"
//             placeholder="Merchant Name"
//           />
//         </div>
//       </div>
//       <div>
//         <label>Amount</label>
//         <div>
//           <Field
//             name="Amount"
//             component="input"
//             type="text"
//             placeholder="Amount"
//           />
//         </div>
//       </div>
//       <div>
//         <label>Date</label>
//         <div>
//         <Field
//             name="Date"
//             component="input"
//             type="text"
//             placeholder="Date"
//           />
//         </div>
//       </div>
//       <div>
//         <label>Categories</label>
//         <div>
//         <Field
//             name="Categories"
//             component="input"
//             type="text"
//             placeholder="Categories"
//           />
//         </div>
//       </div>
//       <div>
//         <label>Comments</label>
//         <div>
//           <Field name="Comments" component="textarea" />
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }

 export default reduxForm({
   form: 'simple' // a unique identifier for this form
})(ExpenseForm)