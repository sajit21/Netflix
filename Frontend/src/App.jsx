import React from 'react'
import HomePage from "./pages/Home/HomePage"
import SignUpPage from './pages/SignUpPage'
import Auth from './pages/Home/Auth'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'
import {Routes,Route, Navigate} from "react-router-dom"
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/useAuth'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
const App = () => {

  const {user,isCheckingAuth,authCheck}=useAuthStore();

  useEffect(()=>{
    authCheck()
  },[authCheck])

  if(isCheckingAuth){
    return (
      <div className='h-screen'>
        <div className='flex justify-center item-center bg-black h-full '>
          <Loader className="animate-spin text-red-600 size-10"/>
        </div>
      </div>
    )
  }
         
  return (
    <div className='max-w-screen-2xl  w-full  '>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/signup" element={!user ?<SignUpPage />: <Navigate to={"/"}/>} />
        <Route  path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"}/>} />
        <Route  path="/Auth" element={<Auth />}/>
        <Route  path="/Home" element={<Home   />}/>

      </Routes>
      <Toaster/>
      <Footer/>
      
       </div>
  )
} 

export default App