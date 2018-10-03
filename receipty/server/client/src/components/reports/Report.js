import React, {Component} from 'react';

class Report extends Component {
    render(){
        return (
            <div className="report-container">
                <div>
                    <span className="report-field">Category: {this.props.report.category}</span>
                    <span className="report-field">${this.props.report.price}</span>
                </div>
                    <div className="report-field"> {this.props.report.name}</div>
            </div>
        );
    }
}

export default Report;