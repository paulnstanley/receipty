//this file will create what will be the Reports page. 
//required node modules
import React from 'react';
import { Link } from 'react-router-dom';

//required components to create the Reports components.
import ReportsList from './ReportsList';
import NavBar from '../navbar/NavBar';

// component that will be rendered as main part of Report 
const Reports = () => {
  return (
    <div>
      <NavBar />
      <ReportsList />
      <div className="fixed-action-btn">
        <Link to="/reports/new" className="teal btn-flat right white-text">
          New Report
        </Link>
      </div>
    </div>
  );
};

export default Reports;