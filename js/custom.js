
// Typing animation
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


// View about website
function seeMore() {
  const text = document.querySelector('#website-info-idea')
  const text2 = document.querySelector('#website-info-technical')
  if (text.style.display && text2.style.display === 'block') {
    text.style.display = 'none'
    text2.style.display = 'none'
  } else {
    text.style.display = 'block'
    text2.style.display = 'block'
  }
}


// SCROLL ANIMATIONS
ScrollReveal().reveal('#kasjan', { duration: 2000 })
ScrollReveal().reveal('.about-info', { duration: 2000 })
ScrollReveal().reveal('.portfolio-item', { duration: 1500, rotate: { x: 20, z: 20 } })
ScrollReveal().reveal('.skill-icon', { duration: 2000, scale: 2 })
ScrollReveal().reveal('form', { duration: 2000, scale: 2 })