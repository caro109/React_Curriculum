import React from "react"
import { Link } from "react-router-dom";

export const Navheader = () =>{
  return(
   <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/aboutas"><li>About as</li></Link>
          <Link to="/contactus"><li>Contact Us</li></Link>
          <Link to="/contclick"><li>UseState</li></Link>
          <Link to="/contsum"><li>RightClick</li></Link>
        </ul>
  </nav>
  )
}
