//this file will create what will be the Reports page. 
//required node modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//required components to create the Reports components.
import NavBar from '../navbar/NavBar';

// component that will be rendered as main part of Report 
class Reports extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="fixed-action-btn">
          <Link to="/reports/new" className="teal btn-flat right white-text">
            New Report
          </Link>
          <div className="report-container">
            {/* <span>{this.props}</span>
            <span>{this.props}</span>
            <span>{this.props}</span>
            <span>{this.props}</span> */}
          </div>
        </div>
      </div>
    );
  };
}

export default Reports;