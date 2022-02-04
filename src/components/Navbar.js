import React from "react";
// import {Link} from "react-router-dom"
// import PropTypes from 'prop-types' 


function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>

            <div>
              <input className="form-check-input bg-light radio-btn-dark mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" onClick = {props.LightMode} aria-label="..."/>
            </div>
            <div>
              <input className="form-check-input bg-primary mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" onClick = {props.BlueMode} aria-label="..." />
            </div>
            <div>
              <input className="form-check-input bg-success mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" onClick = {props.GreenMode} aria-label="..." />
            </div>
            <div>
              <input className="form-check-input bg-danger mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" onClick = {props.RedMode} aria-label="..." />
            </div>
            <div>
              <input className="form-check-input bg-warning mx-2" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" onClick = {props.YellowMode} aria-label="..." />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
