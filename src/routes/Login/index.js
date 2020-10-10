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
      <form>
        <div>
          <div>
            <h1>login</h1>
          </div>

          <div>
            <input
              placeholder="Phone Number"
              type="number"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            placeholder="Password"
             type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Link >
              <button
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
    );
  }
}

export default Login 
