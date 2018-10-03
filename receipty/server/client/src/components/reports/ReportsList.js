//this page forms the actual list of reports will be a component of reports.js
//required node modules for react
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './reportslist.css';
import 'react-dropdown/style.css'
import Report from './Report'

class ReportList extends Component {
  render() {
    return (
      <div className="report-list-container">
        <div>
          {
            this.props.reports.map(report => 
              <Report report={report} key={report._id}/>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({reportMetadata}) {
  return {
    reports: reportMetadata.reports || []
  };
}

export default connect(mapStateToProps)(ReportList);
