import styles from './WelcomeBanner.module.css'

function WelcomeBanner({ name, subtitle }) {
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>Welcome, {name}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </section>
  )
}

export default WelcomeBanner
