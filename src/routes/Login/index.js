import React, { Component } from "react";
import style from "./style.module.css"
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      pass: "",
      formError: {
        phoneNum: "",
        pass: ""
      }
      
    };
  }
 
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let errors = this.state.formError
    
    switch (name) {
      case 'phoneNum':
        errors.phoneNum = value.length < 10 ? ('Phone Number Should be 10-digit long') : ('')
        break;
      case 'pass':
        errors.pass = value.length < 6 ? ('Password Should be of Minimum length 6') : ('')
        break;
      default: 
      break;
    }


    this.setState({ errors, [name]: value });
  };

  tokengen = () => {
    const { history } = this.props;
    let token = `todo${this.state.phoneNum}todo${this.state.pass}`;
    localStorage.setItem("token", token);
    this.setState({ phoneNum: "" });
    this.setState({ pass: "" });
     history.push('/dashboard')
  }
  

  render() {

  const {formError} = this.state
  const { history } = this.props;
 

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
            {formError.phoneNum.length > 0 && <span className={style.errorfield}>{formError.phoneNum}</span>}
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
             {formError.pass.length > 0 && <span className={style.errorfield}>{formError.pass}</span>}
          </div>
          <div className={style.formbuttondiv}>
           {this.state.phoneNum.length === 10 && this.state.pass.length >= 6 ? (
            <button
            className={style.loginbutton}
              onClick={this.tokengen} 
            >
              Login
            </button>
           ) : (
             <button disabled={true} className={style.loginbuttondisabled}>Login</button>
           )}
             
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default withRouter(Login); 
