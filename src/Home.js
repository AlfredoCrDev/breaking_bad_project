import React from 'react'
import { Link } from 'react-router-dom';

import './styles/style.scss';

const Home = () => {
  return (
    <div className='container-home'>
      <Link to='/breaking-bad'>
      <button className='home__button'>ENTRAR</button>
      </Link>
    </div>
    
  )
}

export default Home