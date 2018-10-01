//this file will create what will be the Reports page. 
//required node modules
import React from 'react';
import { Link } from 'react-router-dom';

//required components to create the Reports components.
import ReportsList from './reports/ReportsList';
import NavBar from './NavBar';

// component that will be rendered as main part of Report 
const Reports = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <NavBar /> */}
=======
      <NavBar />
>>>>>>> 7c15e8b605ad224801a942c52628650b650348ca
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