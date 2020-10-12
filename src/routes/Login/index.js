import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"

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
      <div className={style.Loginmaindiv}>
      <form className={style.formdiv}>
        <div className={style.containerlogin}>
          <div className={style.headingcontainer}>
            <h1 className={style.headinglogin}>login</h1>
          </div>

          <div className={style.forminput}>
            <input
            className={style.inputlogin}
              placeholder="Phone Number"
              type="number"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleChange}
            />
          </div>
          <div className={style.forminput}>
            <input
            className={style.inputlogin}
            placeholder="Password"
             type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </div>
          <div className={style.formbuttondiv}>
            <Link >
              <button
              className={style.loginbutton}
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
