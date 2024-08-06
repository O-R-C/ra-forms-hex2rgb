import { useState } from 'react'
import ResultRGB from '../ResultRGB/ResultRGB'
import FormHEX from '../FormHEX/FormHEX'
import checkValue from './checkValue'
import getValueRGB from './getValueRGB'
import styles from './Converter.module.css'

const Converter = () => {
  const [value, setValue] = useState('#')
  const [valueRGB, setValueRGB] = useState(null)

  const onInputChange = ({ target: { value } }) => {
    if (!checkValue(value)) return

    setValue(value)
    setValueRGB(getValueRGB(value))
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
