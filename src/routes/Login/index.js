import React, { Component } from "react";
import style from "./style.module.css"
import {loginUser} from '../../services/firebaseServices/auth'
import firebase from "firebase";
import {Link, withRouter } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      pass: "",
      formError: {
        phoneNum: "",
        pass: ""
      },
      showVerficationbar: false,
      verficationNum: ""
      
    };
  }

  componentDidMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptcha, {
      'size': 'normal',
      'callback': function (response) {
      
      },
   });
   window.recaptchaVerifier.render().then(function (widgetId) {
     window.recaptchaWidgetId = widgetId;
   });
 
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

  tokengen = (e) => {
    e.preventDefault()
    loginUser(this.state.phoneNum,this.state.pass)
    this.setState({showVerficationbar: true})
  }
 

 verificationhandleChange = (e) => {
  this.setState({verficationNum: e.target.value})
}

verficationsubmit = (e) => {
  e.preventDefault()
const confirmationResult = window.confirmationResult
let code = this.state.verficationNum
let token = `todo${this.state.phoneNum}todo`;
this.setState({ phoneNum: "" });
this.setState({ pass: "" });
const { history } = this.props;

confirmationResult.confirm(code).then(function (result) {
        localStorage.setItem("token", token);
        if(history) history.push('/dashboard');
       
      }).catch(function (error) {
           alert("Error In LogIn")
           console.log(error)
         
           });
}

  render() {
  const {formError} = this.state

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

          <div ref={(ref)=>this.recaptcha=ref} style={{padding: "1rem",display: "flex",justifyContent: "center"}}></div>

          <div className={style.formbuttondiv}>
           {this.state.phoneNum.length === 10 && this.state.pass.length >= 6 ? (
            <button
            id="sign-in-button"
            className={style.loginbutton}
              onClick={this.tokengen} 
            >
              Login
            </button>
           ) : (
             <button id="sign-in-button" disabled={true} className={style.loginbuttondisabled}>Login</button>
           )}
             <span> Already have a account <Link to="/register">Register</Link> ?</span>
          </div>
          
            {this.state.showVerficationbar === true  && (
              <div> 
                <input type="number" onChange={this.verificationhandleChange}/>
                <button onClick={this.verficationsubmit}>Submit</button>
              </div>
            )  (<div></div>)}
        
        </div>
      </form>
      </div>
    );

  }
}

export default withRouter(Login)
