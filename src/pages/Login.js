import React, { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { register as signUp } from "../http/userService";
import { useForm } from "react-hook-form";

export function Login() {
  const {
    handleSubmit,
    register,
    errors,
    watch,
    formState,
    setError,
    setValue,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const history = useHistory();

  const [classContainerSide, setClassContainerSide] = useState(true);

  const { setIsAuthenticated, setCurrentUser } = useAuth();

  const handleLogin = formData => {
    return signUp(formData)
      .then(response => {
        setIsAuthenticated(true);
        setCurrentUser(response.data);
        history.push("/home");
      })
      .catch(error => {
        setValue("password", "");
        setError("password", "credentials", "The credentials are invalid");
      });
  };

  return (
    <React.Fragment>
      <h2 className="profileTitle">COME TO HANG OUT WITH US</h2>
      <div
        className={`container ${classContainerSide === true &&
          "right-panel-active"}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(handleLogin)} action="#">
            <h1>Create Account</h1>

            <span>or use your email for registration</span>

            <input
              ref={register({
                required: "The email is mandatory",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "The email is not valid"
                }
              })}
              type="email"
              name="email"
              placeholder="Email paentro"
            />
            <input
              ref={register({
                required: "The password is mandatory",
                minLength: {
                  value: 6,
                  message:
                    "You should enter a password with at least 6 characters"
                }




                
              })}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input type="password" placeholder="Repeat your password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/">Forgot your password?</Link>
            <button type="button">Sign In</button>
          </form>
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
    </React.Fragment>
  );
}
