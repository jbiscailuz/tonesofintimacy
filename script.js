// superhi

const w = window.innerWidth
const h = window.innerHeight
const dpi = window.devicePixelRatio

const cursor = document.querySelector("div.cursor")
let isDown = false

document.querySelectorAll('canvas').forEach(canvas => {
  const context = canvas.getContext('2d')

  canvas.width = w * dpi
  canvas.height = h * dpi
  canvas.style.width = w + "px"
  canvas.style.height = h + "px"

  context.scale(dpi, dpi)

  context.fillStyle = (canvas.classList.contains("in") ? 'black' : "white")
  context.rect(0, 0, 10000, 10000)
  context.fill()

  context.strokeStyle = (canvas.classList.contains("in") ? 'white' : "black")
  context.lineWidth = 80
  context.lineCap = "round"
  context.lineJoin = "round"

  context.shadowBlur = 10
  context.shadowColor = (canvas.classList.contains("in") ? 'white' : "black")


  document.addEventListener('mousedown', function (event) {
    isDown = true
    context.moveTo(event.pageX, event.pageY);
    context.beginPath()

    cursor.classList.add("is-down")
  })

  document.addEventListener('mouseup', function () {
    isDown = false
    cursor.classList.remove("is-down")
  })

  document.addEventListener('mousemove', function (event) {
    if (isDown) {
      context.lineTo(event.pageX, event.pageY)
      context.stroke()
    }

    cursor.style.left = event.pageX + "px"
    cursor.style.top = event.pageY + "px"
  })
})