import React from "react";
import "./../signup/signup.css";
import { useState } from "react";
const Signup = () => {
  const [inputVall, setinputVall] = useState([]);
  const [passwordd, setpasswordd] = useState(false);
  const handlechangee = (e) => {
    const valuee = e.target.value;
    setinputVall(valuee);
    const filledd = valuee.trim().length > 0;
    setpasswordd(filledd);
  };
  return (
    <div>
      <div className="rm_login">
        <div className="rm_login_space2">
          <div className="rm_numbers">
            <p className="rm_number1">1</p>
            <div className={passwordd ? "rm_liner2" : "rm_liner"}></div>
            <p className={passwordd ? "rm_number1" : "rm_number2"}>2</p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="text" className="rm_login_text">
                Name
              </label>
              <div className="mt-3">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autocomplete="text"
                  required
                  className=" rm_login_input"
                />
              </div>
            </div>

            <div>
              <label for="tel" className="rm_login_text">
                Number
              </label>
              <div className="mt-3">
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  autocomplete="tel"
                  required
                  className=" rm_login_input"
                />
              </div>
              <label for="email" className="rm_login_text">
                Email
              </label>
              <div className="mt-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className=" rm_login_input"
                />
              </div>
              <label for="password" className="rm_login_text">
                Password
              </label>
              <div className="mt-3">
                <input
                  id="password"
                  name="password"
                  value={inputVall}
                  onChange={handlechangee}
                  type="password"
                  autocomplete="email"
                  required
                  className=" rm_login_input"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="rm_login_submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
