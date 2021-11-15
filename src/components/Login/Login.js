import React from "react";
import "./Login.css";
import useFirebase from "./../../Hook/useFirebase";

const Login = () => {
  const { handleGoogleLogin } = useFirebase();
  
  return (

    <div>
     
      <div className="login-box w-25 p-5 m-auto">
        <div className="box border border d-flex justify-content-center align-items-center">
          <button onClick={handleGoogleLogin} className="btn w-75  btn-primary">
            Login with Google 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
