// required react components
import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import { connect } from 'react-redux';
//team created files that are not pages, helper files
import * as actions from '../actions';
import "./app.css"
//base of login page
import Login from './Login';
//base of expenses page, will list all expenses
import Expenses from './Expenses';
//base page of adding new expense to expenses main page
import ExpenseNew from './expenses/ExpenseNew';
//base of Reports page, will list all reports
import Reports from './Reports';
/* this will also include NavBar */
//base page of add listed expense to form a new report
import ReportsNew from './reports/ReportsNew';

//the major app component that forms the UX/UI
class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                    <div>
                        {/* the routes that form our webpages */}
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/expenses" component={Expenses} />
                        <Route exact path="/expenses/new" component={ExpenseNew} />
                        <Route exact path="/reports" component={Reports} />
                        {/* <Route exact path="/reports/new" component={ReportNew} /> */}

                    </div>
            </div>
        );
    }
}
//Zulmy- I had to comment out ReportsNew since it causes 11 errors in page since component hasn't been made. 
export default connect (null, actions)(App);

