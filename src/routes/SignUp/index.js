import React,{Component} from "react";
import style from "./style.module.css"

class Register extends Component{

  constructor(props){
    super(props)
    
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
            <input className={style.inputregister} type="text" placeholder="Full Name"/>
          </div>
  
          <div className={style.forminput}>
            <input className={style.inputregister}  type="email" placeholder="Email"/>
          </div>
  
          <div className={style.forminput} >
            <input className={style.inputregister} type="number" placeholder="Phone Number"/>
          </div>
          <div className={style.formbuttondiv}>
            <button className={style.registerbutton}>
              Register
            </button>
          </div>
        </div>
      </form>
      </div>
    );
  }
  
};

export default Register;
