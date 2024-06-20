/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LogIn from './pages/Login/Login'
import PLayer from './pages/Player/PLayer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginHomepage from './pages/LogIn Home Page/LoginHomepage'

const App = () => {

  const navigate = useNavigate()


  useEffect(()=> {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log("Log In")
        navigate('/')
      }else{
        console.log("Logged out")
        navigate('/login')
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/loginhomepage' element={<LoginHomepage />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/Player/:id' element={<PLayer />}/>
      </Routes>
      
    </div>
  )
}

export default App