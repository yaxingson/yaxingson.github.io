"use strict"

/** @type HTMLCanvasElement */
const canvas = document.getElementById('bg')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.cssText = `
position: absolute;
left: 0;
top: 0;
z-index: -1;
`
const ctx = canvas.getContext('2d')

function lineTo(start, end) {
  ctx.beginPath()

  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)

  ctx.stroke()
}

function getEndPoint(l) {
  const {start, length, theta } = l
  return {
    x: start.x + length * Math.cos(theta),
    y: start.y + length * Math.sin(theta)
  }
}

function line(l) {
  const end = getEndPoint(l)
  lineTo(l.start, end)
}

ctx.beginPath()

ctx.strokeStyle = '#808080'

const pendingTasks = []

function random(min, max) {
  return Math.random() * (max-min) + min
}

function growBranch(startBranch) {
  const endPoint = getEndPoint(startBranch)

  line(startBranch)


  if (Math.random() < 0.5) {
    const leftBranch = {
      start: endPoint,
      length: random(0, 30),
      theta: startBranch.theta - Math.random() * 0.5
    }
    pendingTasks.push(()=>growBranch(leftBranch))
  } 
  
  if (Math.random() < 0.5) {
    const rightBranch = {
      start: endPoint,
      length: random(0, 30),
      theta: startBranch.theta + Math.random() * 0.5
    }
    pendingTasks.push(()=>growBranch(rightBranch))
  }
}

growBranch({
  start: { x:random(0, window.innerWidth), y:0 },
  length: 30,
  theta: Math.PI/5
})

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(task => task())
}

function startFrame() {
  requestAnimationFrame(()=>{
    frame()
    startFrame()
  })
}

startFrame()
