
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
  strings: ['<i class="fas fa-quote-left"></i> I am an upcoming Web Software Developer. For me learning new technologies and integrating them into UI systems is what made me go into this industry. Orderliness and creativity are some of my traits. For my future I want to be recognised highly for my skills in the industry. <i class="fas fa-quote-right"></i>'],
  smartBackspace: true,
  typeSpeed: 40,
  startDelay: 1800
})

// LOADER ON START

$(window).on('load', function () {
  $('.loader-wrapper').fadeOut('slow')
})



// VIEW WEBSITE INFO
function seeMore() {
  const text = document.querySelector('.website-info-idea')
  const text2 = document.querySelector('.website-info-technical')
  text.classList.toggle('website-info-idea-reveal')
  text2.classList.toggle('website-info-technical-reveal')
}


// SCROLL ANIMATIONS
ScrollReveal().reveal('.desc', { duration: 1700 })
ScrollReveal().reveal('#kasjan', { duration: 2000, delay: 200 })
ScrollReveal().reveal('.about-info', { duration: 2000, delay: 500 })
ScrollReveal().reveal('.portfolio-item', { duration: 1500, rotate: { x: 20, z: 20 }, delay: 500 })
ScrollReveal().reveal('.skill-icon-first', { duration: 1500, scale: 2, delay: 500 })
ScrollReveal().reveal('.skill-icon', { duration: 1500, scale: 2, delay: 700 })
ScrollReveal().reveal('form', { duration: 2000, scale: 1.5, delay: 500 })


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
  smoothScroll('#skills', 1000)
})

var contact = document.querySelector('.nav-contact')
contact.addEventListener('click', function () {
  smoothScroll('#contact', 1000)
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
