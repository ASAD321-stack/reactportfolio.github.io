import React from 'react'
import{Link} from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed ">
      <a className="navbar-brand mx-5 logo" href="#">ASAD</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
        <ul className="navbar-nav ">
          <li className="nav-item active mx-2">
          <Link to="/home" className="nav-link "> HOME</Link>
          </li>
          
          <li className="nav-item ma">
          <Link to="/contact" className="nav-link "> CONTACT</Link>
          </li>


        </ul>

      </div>
    </nav>
  );
}

export default Nav