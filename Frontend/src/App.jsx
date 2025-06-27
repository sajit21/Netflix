import React from 'react'
import HomePage from "./pages/Home/HomePage"
import SignUpPage from './pages/SignUpPage'
import Auth from './pages/Home/Auth'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from "react-router-dom"
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/useAuth'
import { useEffect } from 'react'
const App = () => {

  const {user,isCheckingAuth,authCheck}=useAuthStore();

  useEffect(()=>{
    authCheck()
  },[])
  return (
    <div className='max-w-screen-2xl  w-full  '>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/signup" element={<SignUpPage />} />
        <Route  path="/login" element={<LoginPage />}/>
        <Route  path="/Auth" element={<Auth />}/>
        <Route  path="/Home" element={<Home   />}/>


      </Routes>
      <Toaster/>
      <Footer/>
      
       </div>
  )
} 

export default App