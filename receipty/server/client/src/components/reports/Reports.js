import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import NavBar from '../navbar/NavBar.js';
import { withRouter } from 'react-router-dom';
import { fetchReports } from '../../actions';

class Reports extends Component {  
  constructor(props) {
    super(props);
  }
     
  componentDidMount() {
    this.props.fetchReports();
  };
    
  render () {
    if (!this.props.reports) {
      return (
        <div>Loading</div>
      )
    } else { 
      return (
        <div>
          <NavBar />
          <ul>
            { this.props.reports.map((report) => {
              return (
                <li key={report._id}>Report Name: {report.name} </li>
              )
            })}
          </ul>
        </div>   
      )
    }
  }
}

 //this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
function mapStateToProps({ reports }) {
  return { reports };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchReports }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reports))