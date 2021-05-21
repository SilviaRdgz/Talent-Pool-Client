
import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { Link } from "react-router-dom";


class SignUp extends Component {

  state = { email: "", password: "", errorMessage: "" };

  service = new AuthService();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.service
      .signup(email, password)
      .then((response) => {
        this.setState({ email: "", password: "" });
        this.props.setUser(response);
      })
      .catch((error) => {
        if (error.response.data) {
          const { message } = error.response.data;
          this.setState({ ...this.state, errorMessage: message });
        }
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      
      <div >
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
                <input type="submit" value="Sign up" className="button is-success"/>
                </div>
                <h2>
                Already have account?
                <Link to={"/login"}> Login</Link>
            </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUp;


