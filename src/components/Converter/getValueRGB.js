const convert2RGB = (value) => {
  const [r, g, b] = value.substr(1).match(/.{2}/g)

  return `rgb(${Number.parseInt(r, 16)}, ${Number.parseInt(g, 16)}, ${Number.parseInt(b, 16)})`
}

const getValueRGB = (value) => {
  return value.length === 7 ? convert2RGB(value) : null
}

export default getValueRGB
