import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Login(props) {
  const {config} = props;
  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [email,setEmail] = React.useState("");
  const navigate = useNavigate();
  

  const handleSubmit = () => {
    
  
    if (config == "login")
    {
      fetch("http://localhost:3000/",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.error)
        {
          alert(data.error);
        }
        else
        {
          localStorage.setItem("jwt",data.token);
          localStorage.setItem("user",JSON.stringify(data.user));
          //alert("Login Successful");
          navigate("/chat");
        }
      })
    }
    else if (config == "signup")
    {
      fetch("http://localhost:3000/signup",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email
        })
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.error)
        {
          alert(data.error);
        }
        else
        {
          alert("Signup Successful");
          navigate("/");
        }
      })
    }
  }


  if (config == "login")
  {
    
      return (
        <div className="login-container">
          <h1>Login</h1>
          <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
          <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button className="login-btn" onClick={handleSubmit}>Login</button>
          <Link to="/signup"><h5>Don't have an account?</h5></Link>
        </div>
      );
  }
  else if (config == "signup")
  {
    return (
      <div className="login-container">
        <h1>Signup</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button className="login-btn" onClick={handleSubmit}>SignUp</button>
        <Link to="/"><h5>Already have an account?</h5></Link>
      </div>
    );
  }
}