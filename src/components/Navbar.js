import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
  const github = <FontAwesomeIcon icon={faGithubSquare} size="2x" />


  useEffect(() => {

    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide')
    })

  })



  return <nav className="navbar navbar-dark nav-background fixed-top">

    <Fade>
      <Link to="/" ><img id="logo" src='./src/img/logo.png' /></Link>


      <a id="social-linkedin" href="https://www.linkedin.com/in/kasjan-hinc/" rel="noreferrer" target="_blank">{linkedin}</a>

      <a id="social-github" href="https://github.com/KasjanHinc" rel="noreferrer" target="_blank">{github}</a>


      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text-right" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">


          <li className="nav-item slide">
            <Link to="/" className="nav-link">HOME</Link>
          </li>

          <li className="nav-item slide">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </li>

          <li className="nav-item slide">
            <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
          </li>

          <li className="nav-item slide">
            <Link to="/skills" className="nav-link">SKILLS</Link>
          </li>

          <li className="nav-item slide">
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </li>


        </ul>
      </div>

    </Fade>
  </nav >

}


export default withRouter(Navbar)