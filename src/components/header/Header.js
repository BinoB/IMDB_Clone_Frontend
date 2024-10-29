import React from 'react';
import './Header.css';

const Header = () => {
  return (
	<div className='header'>
		<div className="heading">
			<h1 className='h-font'>
				<span className='welcome-text'>Welcome to&nbsp;</span>
				<span className="brand-name">IMDB</span>
				<span className='welcome-text'>&nbsp;Dashboard</span>
			</h1>
			<button className="logout">
				Logout
			</button>
		</div>
		{/* <hr className="divider"/> */}
	</div>
  )
}

export default Header;
