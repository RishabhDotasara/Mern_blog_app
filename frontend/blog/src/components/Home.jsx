import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css";
import Navbar from './Navbar';
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate();
    const [active,setActive] = useState(false);
    const [blogs,setBlogs] = useState([{
        title:"This is a title, a very big title, very very big",
        author: "Rishabh",
        date: "2021-09-01",
        img:"https://img.freepik.com/free-photo/top-view-workspace-with-laptop-cup-tea_23-2148430815.jpg?w=1380&t=st=1714543858~exp=1714544458~hmac=b2406089139d5f62e95d7c939202c17904a4bb088177efe33432d557fd846b6c"
    },
    {
        title:"This is a title, a very big title, very very big",
        author: "Rishabh",
        date: "2021-09-01",
        img:"https://img.freepik.com/free-photo/top-view-workspace-with-laptop-cup-tea_23-2148430815.jpg?w=1380&t=st=1714543858~exp=1714544458~hmac=b2406089139d5f62e95d7c939202c17904a4bb088177efe33432d557fd846b6c"
    },
    {
        title:"This is a title, a very big title, very very big",
        author: "Rishabh",
        date: "2021-09-01",
        img:"https://img.freepik.com/free-photo/top-view-workspace-with-laptop-cup-tea_23-2148430815.jpg?w=1380&t=st=1714543858~exp=1714544458~hmac=b2406089139d5f62e95d7c939202c17904a4bb088177efe33432d557fd846b6c"
    },
    {
        title:"This is a title, a very big title, very very big",
        author: "Rishabh",
        date: "2021-09-01",
        img:"https://img.freepik.com/free-photo/top-view-workspace-with-laptop-cup-tea_23-2148430815.jpg?w=1380&t=st=1714543858~exp=1714544458~hmac=b2406089139d5f62e95d7c939202c17904a4bb088177efe33432d557fd846b6c"
    },
    {
        title:"This is a title, a very big title, very very big",
        author: "Rishabh",
        date: "2021-09-01",
        img:"https://img.freepik.com/free-photo/top-view-workspace-with-laptop-cup-tea_23-2148430815.jpg?w=1380&t=st=1714543858~exp=1714544458~hmac=b2406089139d5f62e95d7c939202c17904a4bb088177efe33432d557fd846b6c"
    },
    


])

    useEffect(()=>{
        //check if the user is logged in
        const ip = "localhost" 
        fetch("http://"+ip+":3000/chat",{
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

    const goToTop = ()=>{
        window.scrollTo(0,0);
    }
    if (window.scrollY > 10 ) {
        setActive(true);
    }

  return (
    <div className='home-container'>
        <Navbar/>
        
        {blogs.map(blog=>{
            return(
                <div className="blog-card">
                    <img src={blog.img} alt="Image" className='thumbnail'/>
                    <div className="info">

                        <h2>{blog.title}</h2>
                        <div className="desc">
                            <p>About the article:</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur unde accusamus. Quod, tempora perspiciatis eaque consequatur reiciendis similique rem?
                         </div>
                         <div className="author-info">

                            <div style={{color:"lightgreen"}}>Author : <span>{blog.author}</span></div>
                            <div style={{color:"lightgreen"}}>Penned on : <span>{blog.date}</span></div>
                         </div>
                    </div>
                    
                    
                </div>
            )
        })}

        <div className="go-top-btn" onClick={goToTop} style={{display:active ? "block" : "none"}}>
                <FaArrowUp/>
        </div>
    </div>
  )
}
