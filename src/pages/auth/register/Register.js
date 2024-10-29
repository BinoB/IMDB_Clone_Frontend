import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import Loader from "../../../components/loader/Loader";
const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",

};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
    const userData = {
      name,
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      console.log(data)
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Registration failed, please try again");
      
    }
  };

  return (
    <div className="container">
       {isLoading && <Loader />}
      <div className="card">
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"   
                placeholder="Enter Name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"   
                placeholder="Enter Confirm Password"
                value={password2}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <span className="login-span">
            <Link to="/">Home</Link>
            <p>&nbsp; Already have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
