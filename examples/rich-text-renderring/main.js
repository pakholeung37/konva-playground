const quill = new Quill("#editor-container", {
  modules: {
    toolbar: [
      [{header: [1, 2, false]}],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  },
  placeholder: "Compose an epic...",
  theme: "snow",
})

const width = window.innerWidth
const height = window.innerHeight

const stage = new Konva.Stage({
  width,
  height,
  container: "container",
})

const layer = new Konva.Layer()
stage.add(layer)

const shape = new Konva.Image({
  x: 10,
  y: 10,
  draggable: true,
  stroke: "red",
  scaleX: 1 / window.devicePixelRatio,
  scaleY: 1 / window.devicePixelRatio,
})

layer.add(shape)

layer.draw()

function renderText() {
  html2canvas(document.querySelector(".ql-editor"), {
    backgroundColor: "#fff",
  }).then(canvas => {
    shape.image(canvas)
    layer.batchDraw()
  })
}

let timeout = null

function requestTextUpdate() {
  if(timeout) return
  timeout = setTimeout(() => {
    timeout = null
    renderText()
  }, 500)
}

quill.on("text-change", requestTextUpdate)

renderText()
