const width = window.innerWidth
const height = window.innerHeight

const stage = new Konva.Stage({
  container: "container",
  width,
  height,
})

const layer = new Konva.Layer()

stage.add(layer)

const text1 = new Konva.Text({
  x: 180,
  y: 50,
  text: "Default text with no offset. Its origin is in top left corner.",
  align: "center",
  width: 200
})

layer.add(text1)

const text2 = new Konva.Text({
  text: "Text with the origin in its center",
  width: 200,
  align: "center",
  y: 100,
  x: 270,
})

layer.add(text2)
text2.offsetX(text2.width() / 2)

layer.draw()

document.querySelector("#flip").addEventListener("click", () => {
  layer
    .find("Text")
    .toArray()
    .forEach((text) => {
      text.to({
        scaleX: -text.scaleX(),
        duration: 0
      })
    })
})
