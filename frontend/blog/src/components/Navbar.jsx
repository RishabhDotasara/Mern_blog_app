import React, { useEffect, useState } from 'react'
import { IoIosSearch, IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";


export default function Navbar(props) {
    const [active,setActive] = useState(false);
    const [umactive,setUmActive] = useState(false);

    if (window.scrollY > 100) {
        setActive(true);
    }

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="logo">Blogs.</div>
      <div className="searchbox">
        <input type="text" placeholder='Search for articles, authors'/>
        <button className='src-btn'><IoIosSearch/></button>
      </div>
      <ul className="links">
        <li className="link"><CiCirclePlus/></li>
        <li className="link user" onClick={()=>{setUmActive(!umactive)}}>
            <FaUserCircle/>
            {umactive && (
              <div className="container-user">
                  <ul className='user-actions'>
                <li>Profile <ImProfile/></li>
                <li>Logout <IoIosLogOut/></li>
              </ul>
              </div>
            )}
            
        </li>
      </ul>
    </div>
  )
}
