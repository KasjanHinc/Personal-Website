
// TYPING HERO ANIMATION
$("#typed").typed({
  strings: ["Hello,", "नमस्ते,", "Cześć,", "Bonjour,", "Olá,", "<span dir='rtl'>مرحبا</span>"],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
  contentType: 'html', // or text
  // defaults to false for infinite loop
  loopCount: false,
  resetCallback: function () { newTyped() }
})


// TYPING ABOUT INFO

var typed = new Typed('#abouttyped', {
  strings: ['<i class="fas fa-quote-left fa-2x"></i>  I am a Junior Software Developer.<br> For me learning new technologies and a passion for front end development is what made me go into this industry. Orderliness and creativity are some of my traits. For my future I want to be recognised highly for my skills in the industry. <i class="fas fa-quote-right"></i>'],
  smartBackspace: true,
  typeSpeed: 50,
  startDelay: 2500
})


// LOADER ON START

$(window).on('load', function () {
  $('.loader-wrapper').slideUp()
})


// VIEW WEBSITE INFO
function seeMore() {
  const text = document.querySelector('.website-info-idea')
  const text2 = document.querySelector('.website-info-technical')
  text.classList.toggle('website-info-idea-reveal')
  text2.classList.toggle('website-info-technical-reveal')
}


// SCROLL ANIMATIONS
ScrollReveal().reveal('.desc', { duration: 1000 })
ScrollReveal().reveal('#kasjan', { duration: 1000, delay: 200 })
ScrollReveal().reveal('.about-info', { duration: 3000 })
ScrollReveal().reveal('.port1', { duration: 1000, rotate: { x: 20, z: 20 }, delay: 200 })
ScrollReveal().reveal('.port2', { duration: 1000, rotate: { x: 20, z: 20 }, delay: 400 })
ScrollReveal().reveal('.port3', { duration: 1000, rotate: { x: 20, z: 20 }, delay: 600 })
ScrollReveal().reveal('.skill-icon-middle', { duration: 1000, scale: 2, delay: 200 })
ScrollReveal().reveal('.skill-icon', { duration: 1000, scale: 2, delay: 500 })

ScrollReveal().reveal('#btn-contact', { duration: 1000, scale: 1.5, delay: 200 })
ScrollReveal().reveal('.form-left', { origin: 'left', distance: '300px', duration: 1000, scale: 1.5, delay: 400 })
ScrollReveal().reveal('.form-right', { origin: 'right', distance: '300px', duration: 1000, scale: 1.5, delay: 600 })



ScrollReveal().reveal('#socials-linkedin', { duration: 1000, scale: 1.5, delay: 200 })
ScrollReveal().reveal('#socials-instagram', { duration: 1000, scale: 1.5, delay: 400 })
ScrollReveal().reveal('#socials-github', { duration: 1000, scale: 1.5, delay: 600 })





// SMOOTH SCROLL
function smoothScroll(target, duration) {
  var target = document.querySelector(target)
  var targetPosition = target.getBoundingClientRect().top
  var startPosition = window.pageYOffset
  var distance = targetPosition - startPosition
  var startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    var timeElapsed = currentTime - startTime
    var run = ease(timeElapsed, startPosition, targetPosition, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t * t + b
    t -= 2
    return c / 2 * (t * t * t + 2) + b
  }

  requestAnimationFrame(animation)
}

var brand = document.querySelector('.nav-brand')
brand.addEventListener('click', function () {
  smoothScroll('#home', 1000)
})

var home = document.querySelector('.nav-home')
home.addEventListener('click', function () {
  smoothScroll('#home', 1000)
})

var about = document.querySelector('.nav-about')
about.addEventListener('click', function () {
  smoothScroll('#about', 1000)
})

var portfolio = document.querySelector('.nav-portfolio')
portfolio.addEventListener('click', function () {
  smoothScroll('#portfolio', 1000)
})

var skills = document.querySelector('.nav-skills')
skills.addEventListener('click', function () {
  smoothScroll('.skills-scroll', 1000)
})

var contact = document.querySelector('.nav-contact')
contact.addEventListener('click', function () {
  smoothScroll('.contact-scroll', 1000)
})

var herobutton = document.querySelector('.hero-button')
herobutton.addEventListener('click', function () {
  smoothScroll('#about', 1000)
})

var scrollhome = document.querySelector('#scrollhome')
scrollhome.addEventListener('click', function () {
  smoothScroll('#home', 1000)
})



// HIDE NAVBAR ON CLICK (MOBILE)
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide')
})
