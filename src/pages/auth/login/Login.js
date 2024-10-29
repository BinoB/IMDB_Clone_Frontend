import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
	<div className='container'>
    <div className="card">
      <div className="form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
        <span className='login-span'>
        <Link to='/'>Home</Link>
          <p>&nbsp; Don't have an account? &nbsp;</p><Link to='/register'>Register</Link>
        </span>
    
      </div>
    </div>
  </div>
  )
}

export default Login