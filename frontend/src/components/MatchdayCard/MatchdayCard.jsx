import styles from './MatchdayCard.module.css'

function MatchdayCard({ matchday }) {
  const { number, competition, totalMatches, completedMatches, closesIn } = matchday
  const progress = Math.round((completedMatches / totalMatches) * 100)

  return (
    <section className={styles.card}>
      <span className={styles.label}>Current Matchday</span>
      <div className={styles.headerRow}>
        <span className={styles.number}>Matchday {number}</span>
        <span className={styles.competition}>{competition}</span>
      </div>

      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <span className={styles.footnote}>
        {completedMatches}/{totalMatches} matches played &middot; closes in {closesIn}
      </span>
    </section>
  )
}

export default MatchdayCard
