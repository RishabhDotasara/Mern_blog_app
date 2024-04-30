import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        //check if the user is logged in
        fetch("http://localhost:3000/chat",{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then((res)=>{
            if (res.status == 200)
            {
                //alert("You're on the home page.")
            }
            else if (res.status == 403)
            {
                //alert("Not allowed here.");
                navigate("/")
            }
        })
        
    },[])
  return (
    <div>
      <h1>This is the home page.</h1>
    </div>
  )
}
