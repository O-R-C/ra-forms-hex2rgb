import propTypes from 'prop-types'
import styles from './ResultRGB.module.css'

const ResultRGB = ({ valueRGB }) => {
  return <div className={styles.result}>{valueRGB}</div>
}

ResultRGB.propTypes = {
  valueRGB: propTypes.string,
}

export default ResultRGB
