import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Login from './Login';
import NavBar from './NavBar';
import ExpensesNew from './expenses/ExpensesNew';
import ReportsNew from './reports/ReportsNew';
import Expenses from './Expenses';
import Reports from './Reports';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/expenses" component={Expenses} />
                        <Route exact path="/expenses/new" component={ExpensesNew} />
                        <Route exact path="/reports" component={Reports} />
                        <Route exact path="/reports/new" component={ReportsNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect (null, actions)(App);