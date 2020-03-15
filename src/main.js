const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.lineWidth = 10

let painting = false
let last
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}
ctx.fillStyle = "red"
ctx.lineCap = "round"
let isTouchDevice = "ontouchstart" in document.documentElement
if (isTouchDevice) {
  canvas.ontouchstart = e => {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    last = [x, y]
  }
  canvas.ontouchmove = e => {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    drawLine(last[0], last[1], x, y)
    last = [x, y]
  }
} else {
  canvas.onmousedown = e => {
    painting = true
    last = [e.clientX, e.clientY]
  }
  canvas.onmousemove = e => {
    if (painting === true) {
      drawLine(last[0], last[1], e.clientX, e.clientY)
      last = [e.clientX, e.clientY]
    }
  }

  canvas.onmouseup = () => {
    painting = false
  }
}
