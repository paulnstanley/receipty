import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../../actions';
import NavBar from '../NavBar';

class ReportsList extends Component {
  componentDidMount() {
    this.props.fetchReports();
  };


  renderReports() {
    return this.props.reports.reverse().map(report => {
      return (
        <div className="card darken-1" key={report._id}>
          <div className="card-content">
            <span className="card-title">{report.title}</span>
            <p>
              {report.body}
            </p>
            <p className="right">
              Sent On: {new Date(report.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {report.yes}</a>
            <a>No: {report.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.renderReports()}
      </div>
    );
  }

}

function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(ReportsList);
