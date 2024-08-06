import { useState } from 'react'
import ResultRGB from '../ResultRGB/ResultRGB'
import FormHEX from '../FormHEX/FormHEX'
import styles from './Converter.module.css'

const Converter = () => {
  const [value, setValue] = useState('#')
  const [valueRGB, setValueRGB] = useState(null)

  const onInputChange = ({ target: { value } }) => {
    if (value[0] !== '#') return
    if (value.length > 7) return
    if (value.substr(1).match(/[^0-9a-f]/gi)) return

    setValue(value)

    if (value.length === 7) {
      const [r, g, b] = value.substr(1).match(/.{2}/g)

      setValueRGB(`rgb(${Number.parseInt(r, 16)}, ${Number.parseInt(g, 16)}, ${Number.parseInt(b, 16)})`)
    }
  }

  return (
    <div className={styles.container}>
      <FormHEX
        value={value}
        onInputChange={onInputChange}
      />
      <ResultRGB valueRGB={valueRGB} />
    </div>
  )
}

export default Converter
