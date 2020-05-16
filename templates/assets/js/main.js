/* globals */
'use strict'

const navItems = document.querySelectorAll('.main-nav a')

for (let item = 0; item < navItems.length; item++) {
  const itemHash = navItems[item].hash

  console.log(itemHash)
  // item.addEventListener('click', function (e) {
  //   itemHash.scrollIntoView({ behavior: 'smooth' }).scrollBy({ top: -100 })
  // })
}

// function nav () {
//   const servicesNav = document.querySelector('.nav-services a')
//   const servicesElm = document.querySelector('#services')
//   servicesNav.addEventListener('click', function (event) {
//     event.preventDefault()
//     servicesElm.scrollIntoView({ behavior: 'smooth' }).scrollBy({ top: -100 })
//   })
// }
//
// nav()
