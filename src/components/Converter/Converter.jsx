import { useState } from 'react'
import ResultRGB from '../ResultRGB/ResultRGB'
import FormHEX from '../FormHEX/FormHEX'
import styles from './Converter.module.css'

const Converter = () => {
  const [value, setValue] = useState('#')

  const onInputChange = ({ target: { value } }) => {
    if (value[0] !== '#') return
    if (value.length > 7) return
    if (value.substr(1).match(/[^0-9a-f]/gi)) return

    setValue(value)
  }

  return (
    <div className={styles.container}>
      <FormHEX
        value={value}
        onInputChange={onInputChange}
      />
      <ResultRGB />
    </div>
  )
}

export default Converter
