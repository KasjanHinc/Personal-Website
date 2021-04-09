import React, { useState, useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { MediaQuery } from '../MediaQuery'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import apiKeys from '../js/apikeys'



const Contact = () => {
  const { mediaQuery, setMediaQuery } = useContext(MediaQuery)
  const plane = <FontAwesomeIcon icon={faPaperPlane} size="2x" />
  const check = <FontAwesomeIcon icon={faCheckSquare} size="3x" />
  const [formComplete, setFormComplete] = useState(false)

  const resetForm = () => {
    document.getElementById('form').reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_x15rpps', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(() => {
        setFormComplete(true)

        setTimeout(() => {
          setFormComplete(false)
          resetForm()
          scrollToTop()
        }, 8000)

      },
        error => {
          console.log(error)
        })
  }

  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  return <div className="contact page" >

    <div id="form-container">

      {formComplete && <div className="form-complete">
        <Fade delay={300}>
          <h2>Thank you for your message, I will be in contact soon.</h2>
          <div>{check}</div>
        </Fade>
      </div>}

      {!formComplete && <form id="form" onSubmit={handleSubmit}>

        <Fade delay={400}>
          <a href="mailto:kasjan.hinc@gmail.com" className="btn btn-outline-light btn-lg btn-contact"><p className="animated">kasjan.hinc@gmail.com</p></a>
        </Fade>

        <div className="row form-main" >


          <div className="col form-left">

            <Fade left>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your name (*):" className="form-control" id="name" required />
                </div>
              </Tilt>
            </Fade>

            <Fade left delay={250}>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email (*):" className="form-control" id="email" required />
                </div>
              </Tilt>
            </Fade>

            <Fade left delay={500}>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <div className="form-group">
                  <input type="number" name="phone" placeholder="Phone:" className="form-control" id="phone" />
                </div>
              </Tilt>
            </Fade>

            <Fade left delay={750}>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <div className="form-group">
                  <input type="text" name="company" placeholder="Company:" className="form-control" id="company" />
                </div>
              </Tilt>
            </Fade>

            <Fade delay={1000}>
              <p id="contact-small">* required field</p>
            </Fade>

          </div>



          <div className="col form-right">

            <Fade right delay={1500}>
              <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
                <div className="form-group">
                  <textarea className="form-control" name="message" placeholder="If you have enquiries regarding employment, my CV, or something else, I'm waiting for your message." id="message" rows="7" cols="50" minLength="10" required></textarea>
                </div>
              </Tilt>
            </Fade>

            <Fade up>
              <button type="submit" name="submit" className="btn btn-outline-light btn-lg btn-submit" id="btn-submit"><p className="animated" >{plane} SEND</p></button>
            </Fade>

          </div>


        </div>

      </form>}


    </div>


  </div >



}

export default Contact