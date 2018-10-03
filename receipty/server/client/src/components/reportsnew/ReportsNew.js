import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReportForm from './ReportForm';
import ReportFormReview from './ReportFormReview';

class ReportNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ReportFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ReportForm
        onReportSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'reportForm'
})(ReportNew);