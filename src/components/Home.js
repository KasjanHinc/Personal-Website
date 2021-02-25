import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Typed from 'react-typed'


const Home = () => {


  return <div className="landing page" >

    <div id="landing-container">


      <Fade delay={200}>
        <p id="intro-welcome">
          <Typed
            strings={['Hello,', 'नमस्ते,', 'Cześć,', 'Bonjour,', 'Olá,', '<span dir=\'rtl\'>مرحبا</span>']}
            typeSpeed={120}
            backSpeed={100}
            loop >
          </Typed>
           my name is
        </p>
      </Fade>

      <Fade up delay={700}>
        <h1 id="intro" >Kasjan Hinc</h1>
      </Fade>

      <Fade up delay={1200}>
        <div id="intro-lower">

          <p id="intro-lower-title" >Junior Software Developer <span>&#x276F;</span></p>

          <div className="intro-skills">
            <b>
              <div className="intro-inner-skills">
                Frontend<br />
                Backend<br />
                React<br />
                JavaScript<br />
                Bootstrap<br />
                CSS<br />
                HTML<br />
                noSQL<br />
                Python<br />
                SQL<br />
                API
              </div>
            </b>
          </div>

        </div>
      </Fade>

      <Fade up delay={1400}>
        <p id="intro-lower-location" >Based in<strong> London</strong></p>
      </Fade>

      <Fade delay={2000}>
        <Link to="/about" className="btn btn-outline-light btn-lg"><p className="animated" >ABOUT</p></Link>
      </Fade>

    </div>

    <Fade>
      <p id="copyright" >Copyright &#169; 2021 Kasjan Hinc</p>
    </Fade>

  </div >



}

export default Home