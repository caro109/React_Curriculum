import React from "react"
import { Link } from "react-router-dom";

export const Navheader = () =>{
  return(
   <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/aboutas"><li>About as</li></Link>
          <Link to="/contactus"><li>Contact Us</li></Link>
        </ul>
  </nav>
  )
}
