/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Login = () => {
  return (
    <>
      <div className="Main_body">
        <div className="Login_Form">
          <h2>Welcome Back</h2>
          <p>Please Enter Your Login Credentials</p>
          <input
            type="text"
            placeholder="Enter Address*"
            className="input_address"
          />
          <input
            type="password"
            placeholder="Enter Password*"
            className="input_password"
          />
          <button className="login_button">Login</button>
        </div>
        <div className="checkbox_items">
          <input type="checkbox" className="checkBox" />
          <span className="checkbox-text">Remember Password</span>
          <a href="" className="forgot-pass">
            Forgot Password
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
