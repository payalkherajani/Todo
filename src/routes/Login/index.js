import React, { Component } from "react";
import { Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      pass: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <div className="Login-main-div">
      <form className="form-div">
        <div className="container-login">
          <div className="heading-container">
            <h1 className="heading-login">login</h1>
          </div>

          <div className="form-input">
            <input
            className="input-login"
              placeholder="Phone Number"
              type="number"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
            className="input-login"
            placeholder="Password"
             type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-button-div">
            <Link >
              <button
              className="login-button"
                onClick={() => {
                  if (
                    this.state.phoneNum.length === 10 &&
                    this.state.pass.length >= 6
                  ) {
                    let token = `todo${this.state.phoneNum}todo${this.state.pass}`;
                    localStorage.setItem("token", token);
                    this.setState({ phoneNum: "" });
                    this.setState({ pass: "" });
                  } else {
                    alert(
                      "Please enter 10-digit mobile number and password of minimum length 6"
                    );
                    this.setState({ phoneNum: "" });
                    this.setState({ pass: "" });
                  }
                }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default Login 
