import React from 'react';
import { Link } from 'react-router-dom';
import ReportsList from './reports/ReportsList';

const Reports = () => {
  return (
    <div>
      <ReportsList />
      <div className="fixed-action-btn">
        <Link to="/reports/new" className="btn-small">
          <i>New Report</i>
        </Link>
      </div>
    </div>
  );
};

export default Reports;