import React from 'react'
import HomePage from "./pages/HomePage"
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div className='max-w-screen-2xl  w-full  '>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/signup" element={<SignUpPage />} />
        <Route  path="/login" element={<LoginPage />}/>
      </Routes>
      
       </div>
  )
} 

export default App