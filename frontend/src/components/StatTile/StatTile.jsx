import styles from './StatTile.module.css'

function StatTile({ label, value }) {
  return (
    <div className={styles.tile}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

export default StatTile
