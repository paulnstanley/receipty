import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  { value: 'travel', label: 'Travel', className: 'travel' },
  { value: 'food', label: 'Food', className: 'food' },
  { value: 'supplies', label: 'Supplies', className: 'supplies'}, 
  { value: 'utilities', label: 'Utilities', className: 'utilities'}, 
  { value: 'entertainment', label: 'Entertainment', className: 'entertainment'}, 
  { value: 'other', label: 'Other', className: 'other'}
];

const defaultOption = options[0];

=======
import formFieldsStyle from './formFieldsStyle';
import formFields from './formFields';
import NavBar from '../navbar/NavBar'ß
>>>>>>> b1da6e974ddf64e80b168dedc00ab3ba7b21ec9a
class ExpenseForm extends Component {
  constructor(props) {
    super(props);
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

          type="text" 
          label="Name" 
          name="Name"
          />
          <Field 
          key="Amount" 

          type="number" 
          label="Amount" 
          name="Amount" 
          />
          <input 
          type="date" 
          label="Date" 
          key="Date"
          name="Date"

          onChange={event => this.datePickerOnChange(event)} 
          />
          <Dropdown 
          name="Categories"
          key="Categories"
          label="Categories" 
          className="expense-categories"
          options={options} 

          onChange={event => this.categoriesOnChange(event)} 
          value={defaultOption} 
          placeholder="Select an Option" 
          />
          <Field 
          key="Comments" 

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
        <form onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}>
          {this.renderFields()}
          <br />
          <Link to="/expenses" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            onClick={() => submitExpense(formValues, history)}
          className="green btn-flat right white-text"
          >
            Send Expense
            <i className="material-icons right">Send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'expenseForm',
  destroyOnUnmount: false
})(ExpenseForm);

// function mapStateToProps(state) {
//   return { formValues: state.form.expenseForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(ExpenseFormReview));




// // ExpenseForm shows a form for a user to add input
// import _ from 'lodash';
// import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
// import { Link } from 'react-router-dom';
// import formFieldsStyle from './formFieldsStyle';
// import formFields from './formFields';
// import NavBar from '../navbar/NavBar'
// class ExpenseForm extends Component {
//   renderFields() {
//     return _.map(formFields, ({ label, name }) => {
//       return (
//         <Field
//           key={name}
//           component={formFieldsStyle}
//           type="text"
//           label={label}
//           name={name}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />
//         <h4 className="FormTitleContainer">Expense Form</h4>
//         <form onSubmit={this.props.handleSubmit(this.props.onExpenseSubmit)}>
//           {this.renderFields()}
//           <Link to="/expenses" className="red btn-flat white-text">
//             Cancel
//           </Link>
//           <button type="submit" className="teal btn-flat right white-text">
//             Next
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// function validate(values) {
//   const errors = {};


//   _.each(formFields, ({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

// export default reduxForm({
//   validate,
//   form: 'expenseForm',
//   destroyOnUnmount: false
// })(ExpenseForm);