import React, { useState } from "react";
import { FormRegister } from "../components/FormRegister";
import { FormLogin } from "../components/FormLogin";

export function Login() {
  const [classContainerSide, setClassContainerSide] = useState(true);

  return (
    <main id="login-page">
      <h2 className="profileTitle">COME TO HANG OUT WITH US</h2>
      <div
        className={`container ${classContainerSide === true &&
          "right-panel-active"}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <FormRegister />
        </div>

        <div className="form-container sign-in-container">
          <FormLogin />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setClassContainerSide(!classContainerSide)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setClassContainerSide(!classContainerSide)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
