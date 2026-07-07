import styles from './SectionHeader.module.css'

function SectionHeader({ title, caption }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.title}>{title}</h2>
      {caption && <span className={styles.caption}>{caption}</span>}
    </div>
  )
}

export default SectionHeader
