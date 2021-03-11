import React, { useState } from "react";
import * as icons from "react-icons/fa";

function Register({ FormFlip }) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: "",
    fullname: "",
  });

  const inputHandeler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const registerHandeler = (e) => {
    e.preventDefault();
    //register(details);
  };
  return (
    <>
      <div className="back">
        <div className="content-bottom">
          <form onSubmit={registerHandeler}>
            <div className="field-group">
              <span className="fa fa-lock" aria-hidden="true">
                <icons.FaEnvelope />
              </span>
              <div className="wthree-field">
                <input type="text" id="email" name="email" onInput={e => inputHandeler(e)} placeholder="Email" required />
              </div>
            </div>
            <div className="field-group">
              <span className="fa fa-lock" aria-hidden="true">
                <icons.FaUserCircle />
              </span>
              <div className="wthree-field">
                <input
                  type="text" id="fullname" name="fullname" onInput={e => inputHandeler(e)} placeholder="Fullname" required />
              </div>
            </div>
            <div className="field-group">
              <span className="fa fa-user" aria-hidden="true">
                <icons.FaUser />
              </span>
              <div className="wthree-field">
                <input
                  type="text" name="username" onInput={e => inputHandeler(e)} placeholder="username" required />
              </div>
            </div>
            <div className="field-group">
              <span className="fa fa-lock" aria-hidden="true">
                <icons.FaLock />
              </span>
              <div className="wthree-field">
                <input type="password" name="password" onInput={e => inputHandeler(e)} placeholder="password" required />
              </div>
            </div>
            <div className="wthree-field">
              <button type="submit" className="btn"> Register </button>
            </div>
            <br />
            <ul className="list-login-bottom">
              <li>
                <i id="Login" onClick={FormFlip}>Have an account?</i>
              </li>
              <li>
                <i className="text-right">Forgot password?</i>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
