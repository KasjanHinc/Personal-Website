import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const Navbar = () => {


  return <nav className="navbar navbar-expand-md navbar-dark nav-background fixed-top">

    <Fade>
      <Link to="/" ><img id="logo" src='./img/logo.png' /></Link>
    </Fade>


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-right" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">


        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
        </li>

        <li className="nav-item">
          <Link to="/skills" className="nav-link">SKILLS</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>


      </ul>
    </div>

  </nav >

}


export default withRouter(Navbar)