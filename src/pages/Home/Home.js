/* import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <nav className="container --flex-between">
        <ul className="home-link">
          <li>
          <Link to='/register'>Register</Link>
          </li>
          <li>
          <button className="--btn --bth-primary">
            <Link to='/login'>Login</Link>
          </button>
          </li>
          <li>
          <button className="--btn --bth-primary">
            <Link to='/dashboard'>Dashboard</Link>
          </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home */

import React from 'react'
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Home