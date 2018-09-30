import React from 'react';
import { Link } from 'react-router-dom';
import ReportsList from './reports/ReportsList';

const Reports = () => {
  return (
    <div>
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