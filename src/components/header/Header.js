import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";
import './Header.css';

const Header = () => {
	const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };
  return (
	<div className='header'>
		<div className="heading">
			<h1 className='h-font'>
				<span className='welcome-text'>Welcome to&nbsp;</span>
				<span className="brand-name">{name}</span>
				<span className='welcome-text'>&nbsp;Dashboard</span>
			</h1>
			<button className="logout" onClick={logout}>
				Logout
			</button>
		</div>
		{/* <hr className="divider"/> */}
	</div>
  )
}

export default Header;
