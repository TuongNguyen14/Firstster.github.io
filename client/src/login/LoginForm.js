import React, { useState } from "react";
import * as icons from "react-icons/fa";
import * as security from '../security';

function LoginForm({ FormFlip }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [keeplogin, setkeeplogin] = useState(false);
  const Login = async () => {
    security.Login(details, keeplogin);
  }
  const inputHandeler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const loginHandeler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <>
      <div className="front">
        <div className="content-bottom">
          <form onSubmit={loginHandeler}>
            <div className="field-group">
              <span className="fa fa-user" aria-hidden="true">
                <icons.FaUser />
              </span>
              <div className="wthree-field">
                <input type="text" name="username" onInput={e => inputHandeler(e)} value={details.username} placeholder="username" required />
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
              <button type="submit" className="btn"> Login </button>
            </div>
            <ul className="list-login">
              <li className="switch-agileits">
                <label className="switch"><input id="checkbox" type="checkbox" onChange={e => { setkeeplogin(!keeplogin) }} /><span className="slider round"></span>Keep logged in</label>
              </li>
              <li>
              </li>
              <li className="clearfix"></li>
            </ul>
            <ul className="list-login-bottom">
              <li>
                <i id="Register" onClick={FormFlip}> Create Account </i>
              </li>
              <li>
                <i className="text-right"> Forgot password? </i>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
