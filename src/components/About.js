import React, { useState, useContext } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import { MediaQuery } from '../MediaQuery'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faCog } from '@fortawesome/free-solid-svg-icons'


const About = () => {

  // GLOBAL MEDIA QUERY FOR REMOVING TILT FEATURE ON MOBILE DEVICES
  const { mediaQuery, setMediaQuery } = useContext(MediaQuery)

  const cog = <FontAwesomeIcon icon={faCog} size="3x" />
  const ql = <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
  const qr = <FontAwesomeIcon icon={faQuoteRight} size="1x" />

  const [about, setAbout] = useState('me')
  const [buttonHTML, setButtonHTML] = useState('ABOUT THIS WEBSITE')

  // Absolute file path option for images, GitHub pages needs this
  const imagePath = process.env.NODE_ENV === 'development' ? './img/' : './src/img/'


  // SHOW DIFFERENT INNER HTML ON BUTTON, DEPENDING IF ABOUT ME OR ABOUT THIS WEBSITE IS SELECTED
  const handleAbout = () => {
    scrollToTop()

    if (about === 'me') {
      setButtonHTML('ABOUT ME')
      setAbout('website')
    } else if (about === 'website') {
      setButtonHTML('ABOUT THIS WEBSITE')
      setAbout('me')
    }
  }

  // SCROLL TO TOP WHEN USER SELECTED ABOUT ME OR ABOUT THIS WEBSITE, USEFUL ON MOBILE DEVICES

  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  return (
    <div className="about page" >

      <div id="about-me">

        <div className={about === 'me' ? 'about-left' : 'about-left-wide'}>

          {about === 'me' && <div id="about-typed" >
            <Zoom left duration={1500} appear spy={about}>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <p>{ql} I am a creative developer and team player with great communication. I have been exposed to a wide variety of modern technologies and believe to have an understanding of full stack development and consider myself to be very adaptable. I’m looking for a role where I can expand my knowledge and work on modern technologies and languages. {qr}</p>
              </Tilt>
            </Zoom>
          </div>}

          {about === 'website' && <div className="about-website-container">

            <div className="col website-info-idea">
              <Fade delay={250}>
                <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                  <h3 id="website-info-title" >My inspiration</h3>
                  <p id="website-info">
                    As I was browsing developer portfolios from around the world, some made me think &apos;this person wants
                    to
                    be remembered&apos;. A personal website should showcase your skills and be crafted with precision, just
                    like
                    any other project. This website is a physical copy of my creativity, with borrowed inspiration from
                    great developers.
              </p>
                </Tilt>
              </Fade>
            </div>

            <div className="col website-info-technical">
              <Fade delay={500}>
                <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                  <h3 id="website-info-title">The technical stuff</h3>
                  <p id="website-info">
                    This website is fully <a href="http://en.wikipedia.org/wiki/Responsive_web_design"
                      rel="noreferrer" target="_blank">responsive</a>, and built from scratch with <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" rel="noreferrer" target="_blank">React</a> and the <a href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" rel="noreferrer" target="_blank">Bootstrap
                      framework</a>. Other additions are; Google Fonts, <a href="https://fontawesome.com/" rel="noreferrer" target="_blank">Font Awesome</a>, React Reveal, React Typed and <a href="https://www.npmjs.com/package/react-particles-js" rel="noreferrer" target="_blank">Particles.js</a>.
              </p>
                </Tilt>

                <div id="cogs">
                  <div id="cog-l">{cog}</div>
                  <div id="cogs-s">
                    <div id="cog-s">{cog}</div>
                    <div id="cog-s">{cog}</div>
                  </div>
                </div>
              </Fade>
            </div>

          </div>}

          <Fade appear spy={about} delay={1500}>
            <button className="btn btn-lg btn-about" onClick={handleAbout}>
              <p className="animated">{buttonHTML}</p>
            </button>
          </Fade>

        </div>

        {about === 'me' && <div id="about-right">

          <Flip top duration={1000} delay={750}>
            <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
              <img id="photo" src={`${imagePath}kasjan.png`} />
            </Tilt>
          </Flip>

        </div>}

      </div>

    </div >
  )

}

export default About