const width = window.innerWidth
const height = window.innerHeight

const stage = new Konva.Stage({
  container: "container",
  width,
  height,
})

const layer = new Konva.Layer()

stage.add(layer)

let isPaint = false
let mode = "brush"
let lastLine

stage.on("mousedown touchstart", e => {
  isPaint = true
  const pos = stage.getPointerPosition()
  lastLine = new Konva.Line({
    stroke: "#df4b26",
    strokeWidth: 5,
    globalCompositeOperation:
      mode == "brush" ? "source-over" : "destination-out",
    point: [pos.x, pos.y],
  })
  layer.add(lastLine)
})

stage.on("mouseup touchend", () => {
  isPaint = false
})

stage.on("mousemove touchmove", () => {
  if (!isPaint) {
    return
  }

  const pos = stage.getPointerPosition()
  const newPoints = lastLine.points().concat([pos.x, pos.y])
  lastLine.points(newPoints)
  layer.batchDraw()
})

const select = document.getElementById("tool")
select.addEventListener("change", () => {
  mode = select.value
})
