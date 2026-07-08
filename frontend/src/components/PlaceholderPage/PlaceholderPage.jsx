import styles from './PlaceholderPage.module.css'

// Generic "coming soon" body for pages that don't have real content yet.
function PlaceholderPage({ title, description }) {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default PlaceholderPage
