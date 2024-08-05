import PropTypes from 'prop-types'
import Star from '../Star/Star'
import styles from './Stars.module.css'

const Stars = ({ count = 0 }) => {
  if (typeof count !== 'number') return null
  if (count < 1) return null
  if (count > 5) return null

  const stars = Array.from({ length: count }, (_, i) => <Star key={i} />)

  return <ul className={styles.stars}>{stars}</ul>
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stars
