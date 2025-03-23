import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/home'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center '>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>

        
      </Routes>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>


      
    </div>
  )
}

export default App
