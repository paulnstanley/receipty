import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './login.css';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import {bindActionCreators} from 'redux';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirectToNewPage: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    }, () => console.log(this.state));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchUser(this.state).then(this.setState({ redirectToNewPage: true })
  )
  }

  render() {
    if (this.state.redirectToNewPage) {
      return (
      <Redirect to="/expenses"/>
      )
    } else {
    return (
        <div className="Login col-lg-1 col-centered">
            <div className="logo">
                ReCeipty 
            </div>
            <span>
            <div className="form-block col-md-9">
                <form onSubmit={this.handleSubmit}>
                <FormGroup className="email" controlId="username" bsSize="large">
                    <FormControl
                    className="email-input"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup className="password" controlId="password" bsSize="large">
                    <FormControl
                    className="password-input"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    />
                </FormGroup>
                    <Button
                        className={"login-submit float-right"}
                        bsStyle={this.validateForm() ? "Success" : "Danger"}
                        bsSize="large"
                        type="submit"
                        >Login
                    </Button>

                </form>
            </div>
            </span>
        </div>
    );
  }
  }
}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(null, mapDispatchToProps)(Login);
