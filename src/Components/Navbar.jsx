/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <a>
            <span className="Heading">ATools</span>
            <span className="dot">.</span>
          </a>
          <form className="d-flex">
            <button className="button1" type="submit">
              Start Free Trial
            </button>
            <button className="button2" type="submit">
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
