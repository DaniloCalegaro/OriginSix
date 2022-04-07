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
