import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { Link, useHistory } from "react-router-dom";

import { login, getUser } from "../http/userService";

import { useForm } from "react-hook-form";

export function FormLogin() {
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

  const { setIsAuthenticated, setCurrentUser } = useAuth();

  const handleSignIn = formData => {
    console.log(formData);
    getUser(formData).then(response => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)} noValidate>
      <h1>Sign in</h1>

      <span>or use your account</span>
      <input
        ref={register({
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
          minLength: {
            value: 6,
            message: "You should enter a password with at least 6 characters"
          }
        })}
        type="password"
        name="password"
        placeholder="Password"
      />

      <Link to="/">Forgot your password?</Link>
      <button type="submit">Sign In</button>
    </form>
  );
}
