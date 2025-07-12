import React from 'react'
import { useAuthStore } from '../../store/useAuth'

const Home = () => {

  const {logout}=useAuthStore();
  return (
    <>
    {/* <div className='text-green-500'> home page</div>
    <button onClick={logout} className='text-red-800'>logout</button> */}

     <div className='bg-image w-full '></div>
    <div className='max-w-6xl'></div>
    </>
  )
}

export default Home