import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function MainContainer() {
  return (
    <div className='main-container'>
        <Routes>
            <Route index element={<Login config="login"/>}/>
            <Route path="/signup" element={<Login config="signup"/>}/>
            <Route path="/chat" element={<Home/>}/>
        </Routes>
      
    </div>
  )
}
