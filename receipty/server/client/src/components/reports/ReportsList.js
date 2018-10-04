import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchReports } from "../actions";

class ReportList extends Component {    
    renderReport() {
        console.log("render",this.props.reports[0]);
            return this.props.reports.map(report => {
                return <tr>
                <br />
                <br />
                <th width="40%">
                    {report.name}
                </th>
                <th width="20%">
                    ${report.amount}
                </th>
                <th width="40%">
                    {report.organization}
                </th>
                </tr>
            })
        }
    

    render() {
        return (
            <table className="table table-striped table-bordered table-sm" cellSpacing="0" width="80%">
                {this.renderReport()}
            </table>
        );
    }
}

function mapStateToProps(state) {
    console.log("my state", state);
    return { reports: state.reports};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchReports: fetchReports }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
