import React, { Component } from "react";
import style from "./style.module.css"
import {loginUser} from '../../services/firebaseServices/auth'
import firebase from "firebase";
import {Link, withRouter } from 'react-router-dom'
import firebaseConfig from '../../components/Firebase/index'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      formError: {
        phoneNum: "",
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
      default: 
      break;
    }


    this.setState({ errors, [name]: value });
  };

  tokengen = (e) => {
    e.preventDefault()
    //Condition if user exists then send otp otherwise tell user to register with number
    loginUser(this.state.phoneNum)
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
const { history } = this.props;
var singleUser = db.collection("Users").doc(this.state.phoneNum)

confirmationResult.confirm(code).then(function (result) {
 
    
  singleUser.get().then(function(doc) {

    if (doc.exists) {
      localStorage.setItem("token", token);
      history.push({pathname: '/dashboard',state: {detail: doc.data() }}); 
 
  } else {
      alert("No Account with this Number")
  }

  }).catch(function(error) {
    console.log("Error getting document:", error);
  })
   
      }).catch(function (error) {
           alert("Error In LogIn")
           console.log(error)
           });

this.setState({phoneNum: "",verficationNum: "",showVerficationbar: false})
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

          <div ref={(ref)=>this.recaptcha=ref} style={{padding: "1rem",display: "flex",justifyContent: "center"}}></div>

          <div className={style.formbuttondiv}>
           {this.state.phoneNum.length === 10 ? (
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
            ) }
        
        </div>
      </form>
      </div>
    );

  }
}

export default withRouter(Login)
