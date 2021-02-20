import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'



const About = () => {

  const ql = <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
  const qr = <FontAwesomeIcon icon={faQuoteRight} size="1x" />
  const [about, setAbout] = useState('me')
  const [buttonHTML, setButtonHTML] = useState('ABOUT THIS WEBSITE')

  const handleAbout = () => {
    scrollToTop()

    if (about === 'me') {
      setButtonHTML('ABOUT ME')
      setAbout('website')
    } else if (about === 'website') {
      setButtonHTML('ABOUT WEBSITE')
      setAbout('me')
    }
  }

  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  return <div id="about" >

    <div id="about-me">

      <div className={about === 'me' ? 'about-left' : 'about-left-wide'}>

        <Zoom duration={1500} left>
          {about === 'me' && <div id="about-typed" >
            {ql} I am a creative developer and team player with great communication. I have been exposed to a wide variety of modern technologies and believe to have an understanding of full stack development and consider myself to be very adaptable. I’m looking for a role where I can expand my knowledge and work on modern technologies and languages. {qr}
          </div>}
        </Zoom>

        {about === 'website' && <div className="about-website-container">

          <Fade delay={250}>
            <div className="col website-info-idea">
              <h3 id="website-info-title" >My inspiration</h3>
              <p id="website-info">
                As I was browsing developer portfolios from around the world, some made me think &apos;this person wants
                to
                be remembered. A personal website should showcase your skills and be crafted with precision, just
                like
                any other project. This website is a physical copy of my creativity, with borrowed inspiration from
                great developers.
              </p>
            </div>
          </Fade>

          <Fade delay={500}>
            <div className="col website-info-technical">
              <h3 id="website-info-title">The technical stuff</h3>
              <p id="website-info">
                This website is fully <a href="http://en.wikipedia.org/wiki/Responsive_web_design"
                  rel="noreferrer" target="_blank">responsive</a>, and built from scratch with <a
                    href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" rel="noreferrer" target="_blank">React</a> and the <a
                      href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" rel="noreferrer" target="_blank">Boostrap
                      framework</a>. Other additions are; Google Fonts, <a href="https://fontawesome.com/"
                  rel="noreferrer" target="_blank">Font Awesome</a>, React Reveal, React Typed and <a
                    href="https://www.npmjs.com/package/react-particles-js" rel="noreferrer" target="_blank">Particles.js</a>.
              </p>
            </div>
          </Fade>


        </div>}

        <Fade appear spy={about}>
          <button className="btn btn-outline-light btn-lg btn-about" onClick={handleAbout}>
            <p className="animated">{buttonHTML}</p>
          </button>
        </Fade>


      </div>

      {about === 'me' && <div id="about-right">

        <Fade delay={500}>
          <img id="kasjan" src="./src/img/kasjan.png" />
        </Fade>

      </div>}



    </div>



  </div >



}

export default About