import React, { Component } from 'react';
import "./ExpenseListTable.css";
import axios from "axios";
import { connect } from 'react-redux';
import { fetchExpenses } from '../../actions';
import ExpenseForm from "./ExpenseForm";
import userExpenses from "./ExpenseResults";

class ExpenseList extends Component { 
  componentDidMount() {
    this.props.fetchExpenses();
  }

   renderExpenses(list) {
     console.log(userExpenses);

   return (
    <tr key>
      <td></td>
      <td></td>
    </tr>
   );
}
   render() {
     return(
       <table className="table">
       <thead>
         <tr>
           <th>Name:</th>
         </tr>
       </thead>
       <tbody>
         {this.renderExpenses()}
       </tbody>
       </table>
     );
   }
}

function mapStateToProps({ expenses }){
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpenseList)