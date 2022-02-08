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
    const newdata = { ...data }
    newdata[e.target.name] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const submitData = (e) => {
    const url = "https://reqres.in/api/login"
    e.preventDefault()
    if (data.password === "") {
      console.log("Missing Password")
    } else {
      axios
        .post(url, {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response)
          console.log("yo")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <>
      <div className="Main_body">
        <div className="Login_Form">
          <h2>Welcome Back</h2>
          <p> Please Enter Your Login Details </p>
          <input
            type="text"
            placeholder="Enter Address*"
            className="input_address"
            name="email"
            onChange={(e) => changeEvent(e)}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Enter Password*"
            className="input_password"
            name="password"
            onChange={(e) => changeEvent(e)}
            value={data.password}
          />
          <button
            className="login_button"
            onClick={(e) => {
              submitData(e)
            }}
          >
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
