import React from 'react';
import { Link } from 'react-router-dom';
import ReportsList from './reports/ReportsList';
import NavBar from './NavBar';

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