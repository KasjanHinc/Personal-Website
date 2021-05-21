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

        <a id="social-fiverr" href="https://www.fiverr.com/kasjan?up_rollout=true" rel="noreferrer" target="_blank">
          <svg viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fiverr-text" fill="">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z">
              </path>
            </g>
            <g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z">
            </path>
            </g>
          </svg>
        </a>

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