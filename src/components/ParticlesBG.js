import React from 'react'
import { withRouter } from 'react-router-dom'
import Particles from 'react-particles-js'


const ParticlesBG = () => {


  return (

    <Particles
      params={{
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 1500
            }
          },
          'line_linked': {
            'enable': false,
            'opacity': 0.02
          },
          'move': {
            'speed': 0.7
          },
          'size': {
            'random': true,
            'value': 5
          },
          'opacity': {
            'anim': {
              'enable': true,
              'speed': 1,
              'opacity_min': 0.05
            }
          }

        },
        'interactivity': {
          'detect_on': 'window',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'bubble'
            },
            'onclick': {
              'enable': true,
              'mode': 'repulse'
            }
          },
          'modes': {
            'bubble': {
              'distance': 250,
              'duration': 2,
              'size': 0,
              'opacity': 0
            },
            'repulse': {
              'distance': 300,
              'duration': 10
            }
          }
        },
        'retina_detect': true

      }}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh'

      }}

    />

  )

}


export default withRouter(ParticlesBG)