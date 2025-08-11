"use strict"

const imgs = document.getElementsByTagName('img')

for (const img of imgs) {
  img.style.width = '450px'
  img.style.margin = '12px 0'
}

const container = document.querySelector('main')
const overlay = document.getElementById('overlay')
const placeholderImg = overlay.getElementsByTagName('img')[0]

overlay.style.cssText = `
display: none;
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;
filter: blur(5px);
background-color: #00000083;
`

container.addEventListener('click', ev => {
  const el = ev.target

  if (/^img$/i.test(el.tagName)) {
    placeholderImg.src = el.src
    overlay.style.display = 'block'
  }

})

