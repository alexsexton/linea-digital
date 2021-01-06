/* globals */
'use strict'

const body = document.body
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
const scrollTop = 'scroll-top'
const scrollBottom = 'scroll-bottom'
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    // bottom
    body.classList.remove(scrollUp)
    body.classList.add(scrollTop)
    return
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollTop)
    body.classList.remove(scrollUp)
    body.classList.add(scrollDown)
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollTop)
    body.classList.remove(scrollDown)
    body.classList.add(scrollUp)
  }
  lastScroll = currentScroll

  // bottom
  if ((window.innerHeight + currentScroll) >= document.body.offsetHeight) {
    body.classList.add(scrollBottom)
  } else {
    body.classList.remove(scrollBottom)
  }
})
