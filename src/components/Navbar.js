import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import $ from 'jquery'

import useDarkMode from 'use-dark-mode'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  const moon = <FontAwesomeIcon icon={faMoon} size="2x" />
  const sun = <FontAwesomeIcon icon={faSun} size="2x" />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />
  const github = <FontAwesomeIcon icon={faGithubSquare} size="2x" />

  const [togglerPulse, setTogglerPulse] = useState(true)

  const darkMode = useDarkMode(true)

  useEffect(() => {

    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide')
    })

    scrollToTop()

  })

  useEffect(() => {

    $(document)
      .mousemove(function (e) {
        $('.cursor')
          .eq(0)
          .css({
            left: e.clientX,
            top: e.clientY
          })
        setTimeout(function () {
          $('.cursor')
            .eq(1)
            .css({
              left: e.clientX,
              top: e.clientY
            })
        }, 100)
      })

  })

  function stopPulse() {
    setTogglerPulse(false)
  }
  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  return (

    <nav className="navbar navbar-dark nav-background fixed-top">

      <div className="cursor"></div>
      <div className="cursor"></div>

      <Fade>

        <button className="dark-mode-toggler" onClick={darkMode.toggle}>{darkMode.value ? moon : sun}</button>

        <a id="social-linkedin" href="https://www.linkedin.com/in/kasjan-hinc/" rel="noreferrer" target="_blank">{linkedin}</a>

        <a id="social-github" href="https://github.com/KasjanHinc" rel="noreferrer" target="_blank">{github}</a>

        <button onClick={stopPulse} className={togglerPulse ? 'navbar-toggler ml-auto' : 'navbar-toggler ml-auto navbar-toggler-stop'} type="button" data-toggle="collapse" data-target="#navbarResponsive">
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

  )

}


export default withRouter(Navbar)