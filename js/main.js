const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
//console.log(link)

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

//--------------
const header = document.querySelector('.header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
