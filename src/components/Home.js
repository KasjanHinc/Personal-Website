import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import 'react-typed/dist/animatedCursor.css'
import Typed from 'react-typed'
import { MediaQuery } from '../MediaQuery'
import Tilt from 'react-tilt'





const Home = () => {

  const { mediaQuery, setMediaQuery } = useContext(MediaQuery)



  return <div className="landing page" >

    <div id="landing-container">

      <Tilt options={{ max: mediaQuery ? 0 : 35 }}>

        <Fade delay={200}>
          <p id="intro-welcome">
            <Typed
              strings={['Hello,', 'Cześć,', 'नमस्ते,', 'Bonjour,', 'Olá,', '<span dir=\'rtl\'>مرحبا</span>']}
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

      </Tilt>

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