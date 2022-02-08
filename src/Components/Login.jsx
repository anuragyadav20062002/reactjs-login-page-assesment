/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-native-reassign */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { useState } from "react"
import axios from "axios"
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const changeEvent = (e) => {
    setData({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const submitData = (e) => {
    console.log(e.target.value)
  }

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
            name="email"
            onChange={changeEvent}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Enter Password*"
            className="input_password"
            name="password"
            onChange={changeEvent}
            value={data.password}
          />
          <button className="login_button" onClick={submitData}>
            Login
          </button>
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
