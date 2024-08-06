import propTypes from 'prop-types'
import styles from './FormHEX.module.css'

const FormHEX = ({ value, onInputChange }) => {
  return (
    <div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type='text'
          value={value}
          onChange={onInputChange}
          autoFocus
        />
      </form>
    </div>
  )
}

FormHEX.propTypes = {
  value: propTypes.string,
  onInputChange: propTypes.func,
}

export default FormHEX
