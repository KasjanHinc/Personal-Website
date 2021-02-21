import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import apiKeys from '../js/apikeys'



const Contact = () => {

  const plane = <FontAwesomeIcon icon={faPaperPlane} size="2x" />
  const check = <FontAwesomeIcon icon={faCheckSquare} size="2x" />
  const [submitStatus, setSubmitStatus] = useState(false)

  const resetForm = () => {
    document.getElementById('form').reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_x15rpps', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(() => {
        setSubmitStatus(true)

        setTimeout(() => {
          resetForm()
          setSubmitStatus(false)
        }, 4000)

      },
        error => {
          console.log(error)
        })
  }


  return <div id="contact" >

    <div id="form-container">

      <form id="form" onSubmit={handleSubmit}>

        <Fade delay={400}>
          <a href="mailto:kasjan.hinc@gmail.com" className="btn btn-outline-light btn-lg btn-contact"><p className="animated">kasjan.hinc@gmail.com</p></a>
        </Fade>

        <div className="row form-main" >

          <Fade left>
            <div className="col form-left">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your name (*):" className="form-control" id="name" required />
              </div>
              <div className="form-group">

                <input type="email" name="email" placeholder="Email (*):" className="form-control" id="email" required />
              </div>
              <div className="form-group">

                <input type="number" name="phone" placeholder="Phone:" className="form-control" id="phone" />
              </div>
              <div className="form-group">

                <input type="text" name="company" placeholder="Company:" className="form-control" id="company" />
              </div>

              <p id="contact-small">* required field
              </p>

            </div>
          </Fade>


          <div className="col form-right">

            <Fade right>
              <div className="form-group">

                <textarea className="form-control" name="message" placeholder="If you have enquiries regarding employment, my CV, or something else, I'm waiting for your message." id="message" rows="7" cols="50" minLength="10" required></textarea>
              </div>
            </Fade>

            <Fade up>
              <button type="submit" name="submit" className="btn btn-outline-light btn-lg btn-submit" id="btn-submit"><p className={submitStatus ? 'sent' : 'animated'} > {submitStatus ? <Fragment>{check} SENT</Fragment> : <Fragment>{plane} SEND</Fragment>}</p></button>
            </Fade>

          </div>


        </div>

      </form>


    </div>


  </div >



}

export default Contact