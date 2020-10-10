import React from "react";

const Register = () => {

  return (
    <form>
      <div>
        <div>
          <h1>register</h1>
        </div>

        <div>
          <input  type="text" placeholder="Full Name"/>
        </div>

        <div>
          <input  type="email" placeholder="Email"/>
        </div>

        <div >
          <input type="number" placeholder="Phone Number"/>
        </div>
        <div>
          <button>
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
