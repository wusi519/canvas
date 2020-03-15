const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

// function drawLine(x1, y1, x2, y2) {
//   ctx.beginPath()
//   ctx.moveTo(e.clientX, e.clientY)
//   ctx.lineTo(e.e.clientX, e.client)
//   ctx.stroke()
// }
ctx.fillStyle = "red"
let painting = false

canvas.onmousedown = () => {
  painting = true
}
canvas.onmousemove = e => {
  if (painting === true) {
    ctx.beginPath()
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2, true)
    ctx.fill()
  }
}

canvas.onmouseup = () => {
  painting = false
}
