import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import Loader from "../../../components/loader/Loader";
const initialState = {
  email: "",
  password: "",
  
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data)
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // toast.error("Login failed, please try again");
      
    }
  };

  return (
    <div className="container">
       {isLoading && <Loader />}
      <div className="card">
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={login}>
           
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"   
                placeholder="Enter email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"   
                placeholder="Enter password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
           
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <span className="login-span">
            <Link to="/">Home</Link>
            <p>&nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
