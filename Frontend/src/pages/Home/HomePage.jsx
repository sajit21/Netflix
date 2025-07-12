import React from 'react'
import Home from './Home';
import Auth from './Auth';
import { useAuthStore } from '../../store/useAuth';
const HomePage = () => {
  const {user}=useAuthStore();
  return (
    // <div className='hero-bg w-full h-screen ' >HomePage</div>
  <div>{user ? <Home />: <Auth />} </div>
  
  
  )


}

export default HomePage