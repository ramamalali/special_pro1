import React from "react";
import "../login/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [inputVal, setinputVal] = useState([]);
  const [password, setpassword] = useState(false);
  const handlechange = (e) => {
    const value = e.target.value;
    setinputVal(value);
    const filled = value.trim().length > 0;
    setpassword(filled);
  };

  return (
    <div className="rm_login pb-3">
      <div className="rm_login_space">
        <div className="rm_numbers">
          <p className="rm_number1">1</p>
          <div className={password ? "rm_liner2" : "rm_liner"}></div>
          <p className={password ? "rm_number1" : "rm_number2"}>2</p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <label for="email" class="rm_login_text">
            Please Enter Your Info
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

          <div>
            <div class="mt-3">
              <input
                id="password"
                name="password"
                value={inputVal}
                onChange={handlechange}
                type="password"
                autocomplete="current-password"
                required
                className="rm_login_input"
              />
            </div>
          </div>

          <div class="mt-3 rm-btns">
            <button type="submit" className="rm_login_submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
