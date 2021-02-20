import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
  const github = <FontAwesomeIcon icon={faGithubSquare} size="2x" />

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function closeNav() {
    scrollToTop()
    $('.navbar-collapse').collapse('hide')
  }

  return <nav className="navbar navbar-expand-md navbar-dark nav-background fixed-top">

    <Fade>
      <Link to="/" ><img id="logo" src='./src/img/logo.png' /></Link>
    </Fade>

    <Fade>
      <a id="social-linkedin" href="https://www.linkedin.com/in/kasjan-hinc/" rel="noreferrer" target="_blank">{linkedin}</a>
    </Fade>

    <Fade>
      <a id="social-github" href="https://github.com/KasjanHinc" rel="noreferrer" target="_blank">{github}</a>
    </Fade>


    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-right" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">


        <li className="nav-item">
          <Link to="/" onClick={closeNav} className="nav-link">HOME</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" onClick={closeNav} className="nav-link">ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link to="/portfolio" onClick={closeNav} className="nav-link">PORTFOLIO</Link>
        </li>

        <li className="nav-item">
          <Link to="/skills" onClick={closeNav} className="nav-link">SKILLS</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" onClick={closeNav} className="nav-link">CONTACT</Link>
        </li>


      </ul>
    </div>

  </nav >

}


export default withRouter(Navbar)