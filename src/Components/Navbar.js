import React from 'react'
 import logo from './images/logo.jpg'
// import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser} from '@fortawesome/free-solid-svg-icons'
// import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt='logo' className='logo'></img><h1 className='firstn'> Praveen</h1>
        <h1 className='secondn'>Midathapally</h1>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link home "   href="/">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </span>
            <span className="text">Home</span>
            </a>
          </li>
           
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
              </span>
              <span className="text">Aboutt</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link  " href="/login">Login</a>
          </li>
           
        </ul>
         
      </div>
    </div>
  </nav>
  )
}

export default Navbar