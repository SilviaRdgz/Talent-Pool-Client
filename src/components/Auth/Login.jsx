import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from '../../services/AuthService.js';

class Login extends Component {
  state = { 
    email: "", 
    password: "", 
    errorMessage: "" 
  };

  service = new AuthService();

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    this.service
      .login(email, password)
      .then((response) => {
        
        this.setState({ email: "", password: "" });
        this.props.setUser(response);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
  
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
        {this.state.errorMessage && <span>{this.state.errorMessage}</span>}
          <form className="box" onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label htmlFor="" className="label">Email</label>
              <div className="control has-icons-left">
                <input 
                type="email" 
                name='email'
                placeholder="e.g. bobsmith@gmail.com" 
                className="input" 
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
                required/>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">Password</label>
              <div className="control has-icons-left">
                <input 
                type="password" 
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                placeholder="*******" 
                className="input" 
                required />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="checkbox">
                <input type="checkbox"/>
                Remember me
              </label>
            </div>
            
            <div className="field">
            <input type="submit" value="Login" className="button is-success"/>
            </div>
            <h2>
          Don't have account?
          <Link to={"/signup"} style={{color:'blue'}}> Signup</Link>
        </h2>
          </form>
        </div>
      </div>
    </div>
  </div>

    )
      
  }
}

export default Login;




