import React,{Component} from "react";
import style from "./style.module.css"
import {withRouter } from 'react-router-dom'
//firebase
import firebaseConfig from '../../components/Firebase/index'
import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

class Register extends Component{

  constructor(props){
    super(props)
    this.state = {
      fullName: "",
      email:  "",
      phoneNum:  "",
    }

  }

  handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    e.preventDefault()
   db.collection('Users').doc(this.state.phoneNum).set({
    name: this.state.fullName,
    phonenumber: this.state.phoneNum,
    email: this.state.email
  })
  const token = `todo${this.state.phoneNum}todo`
  localStorage.setItem("token",token)
  history.push({pathname: "/dashboard", state: {detail: this.state }})
  this.setState({fullName: "" , phoneNum: "",email: ""})
  
  }

  render(){
  
    return (
      <div className={style.Registermaindiv}>
      <form className={style.formdiv}>
        <div className={style.containerregister}>
          <div className={style.headingcontainer}>
            <h1 className={style.headingregister}>register</h1>
          </div>
  
          <div className={style.forminput}>
            <input className={style.inputregister} name="fullName" type="text" placeholder="Full Name" onChange={this.handleChange}/>
          </div>
  
          <div className={style.forminput}>
            <input className={style.inputregister} name="email" type="email" placeholder="Email" onChange={this.handleChange}/>
          </div>
  
          <div className={style.forminput} >
            <input className={style.inputregister} name="phoneNum" type="number" placeholder="Phone Number"onChange={this.handleChange}/>
          </div>
          <div className={style.formbuttondiv}>
            {
            this.state.phoneNum.length === 10 && this.state.fullName !== "" && this.state.email !== "" ? (
            <button className={style.registerbutton} onClick={this.handleSubmit}>
              Register
            </button>
            ) : (
            <button disabled={true} className={style.registerbutton} style={{opacity:"0.5"}}>
              Register
            </button>)
            }
            
          </div>
        </div>
      </form>
      </div>
    );
  }
  
};

export default withRouter(Register)
