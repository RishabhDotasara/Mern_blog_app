import React, { useState } from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ImSpinner4 } from "react-icons/im";

export default function MainContainer() {
  const [loading,setLoading] = useState(false);
  return (
    <div className='main-container'>
      {!loading && (
      <Routes>
            <Route index element={<Login config="login" loading={setLoading}/>} />
            <Route path="/signup" element={<Login config="signup" loading={setLoading}/>}/>
            <Route path="/chat" element={<Home loading={setLoading}/>}/>
      </Routes>)}

      {loading && (
        
          <ImSpinner4 className='loading'/>
       
      )}
        
      
    </div>
  )
}
