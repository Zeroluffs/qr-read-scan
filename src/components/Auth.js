import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: username,
      password: password,
    };
    api
      .post("/users/login", userInfo)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/table");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error Logging in please try again");
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              id="username"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">Forgot password?</p>
        </div>
      </form>
    </div>
  );
}
