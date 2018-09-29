import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <div className="avatar"> 
            <img src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" alt="Avatar" width="100px" height="100px" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="email" controlId="email" bsSize="large">
            <FormControl
              className="email-input"
              placeholder="Email address"
              type="email"
              value={this.state.email}
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
            className="login-submit"
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            >Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
