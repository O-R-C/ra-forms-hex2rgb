import paintBackground from './paintBackground'

const convert2RGB = (value) => {
  const [r, g, b] = value.substr(1).match(/.{2}/g)

  return `rgb(${Number.parseInt(r, 16)}, ${Number.parseInt(g, 16)}, ${Number.parseInt(b, 16)})`
}

const getValueRGB = (value) => {
  if (value.length !== 7) {
    paintBackground()
    return null
  }

  paintBackground(value)
  return convert2RGB(value)
}

export default getValueRGB
