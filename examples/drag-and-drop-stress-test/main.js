const width = window.innerWidth
const height = window.innerHeight
 
const colors = ["red", "orange", "yellow", "green", "blue", "cyan", "purple"]
let colorIndex = 0

const stage = new Konva.Stage({
  container: "container",
  width,
  height,
})
const dragLayer = new Konva.Layer();

function addCircle(layer) {
  const color = colors[colorIndex++ % colors.length]

  const randX = Math.random() * stage.width()
  const randY = Math.random() * stage.height()
  const circle = new Konva.Circle({
    x: randX,
    y: randY,
    radius: 6,
    fill: color,
  })
  layer.add(circle)
}

const layers = []

for(let i = 0; i < 10; i++) {
  const layer = new Konva.Layer()
  layers.push(layer)

  for(let j = 0; j < 1000; j++) {
    addCircle(layer)
  }

  stage.add(layer)

}

stage.add(dragLayer)

stage.on("mousedown", (e) => {
  if(e.target instanceof Konva.Circle) {
    const circle = e.target
    const layer = circle.getLayer()
    circle.moveTo(dragLayer)
    layer.draw()
    circle.startDrag()
  }
})
