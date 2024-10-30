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
import MovieCard from '../showMovie/MovieCard'
import Movie from '../showMovie/Movie'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <MovieCard/> */}
      <Movie/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home