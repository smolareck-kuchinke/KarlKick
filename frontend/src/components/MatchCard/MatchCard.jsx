import styles from './MatchCard.module.css'

function MatchCard({ match }) {
  const { competition, status, isLive, kickoff, homeTeam, homeAbbr, awayTeam, awayAbbr } = match

  return (
    <article className={styles.card}>
      <div className={styles.tagRow}>
        <span className={styles.competitionTag}>{competition}</span>
        <span className={isLive ? styles.statusTagLive : styles.statusTag}>{status}</span>
      </div>

      <div className={styles.teamsRow}>
        <div className={styles.team}>
          <span className={styles.badge}>{homeAbbr}</span>
          <span className={styles.teamName}>{homeTeam}</span>
        </div>

        <div className={styles.kickoff}>
          <span className={styles.vs}>vs</span>
          <span className={styles.time}>{kickoff}</span>
        </div>

        <div className={styles.team}>
          <span className={styles.badge}>{awayAbbr}</span>
          <span className={styles.teamName}>{awayTeam}</span>
        </div>
      </div>
    </article>
  )
}

export default MatchCard
