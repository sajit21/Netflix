import React from 'react'
import Home from './Home';
import Auth from './Auth';
const HomePage = () => {
  const user=false;
  return (
    // <div className='hero-bg w-full h-screen ' >HomePage</div>
  <div>{user ? <Home />: <Auth />} </div>
  
  
  )


}

export default HomePage