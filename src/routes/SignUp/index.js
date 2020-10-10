import React from "react";

const Register = () => {

  return (
    <div className="Register-main-div">
    <form className="form-div">
      <div className="container-register">
        <div className="heading-container">
          <h1 className="heading-register">register</h1>
        </div>

        <div className="form-input">
          <input className="input-register" type="text" placeholder="Full Name"/>
        </div>

        <div className="form-input">
          <input className="input-register"  type="email" placeholder="Email"/>
        </div>

        <div className="form-input" >
          <input className="input-register" type="number" placeholder="Phone Number"/>
        </div>
        <div className="form-button-div">
          <button className="register-button">
            Register
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Register;
