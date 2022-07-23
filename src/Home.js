import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import bg from './img/bg.jpg';

const Home = () => {
  return (
    <div>Home
      <img src={bg} />
      <Link to='/breaking-bad'>
      <Button variant="contained">Contained</Button>
      </Link>
    </div>
    
  )
}

export default Home